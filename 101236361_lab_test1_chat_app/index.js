const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')

const mongoose = require('mongoose')
const PORT = 8000

const User = require('./models/User.js')
const GroupChat = require('./models/GroupChat.js')

const io = require('socket.io')(http)


app.use(cors())
app.use(require('express').json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/View/login.html')
})

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user === null) {
            throw new Error("Username is not in use"); 
        }
        if (user.password !== password) {
            throw new Error("Password is incorrect");
        }
        res.status(200).send({
            user
        })
    } catch (e) {
        res.status(400).send({
            error: e.message
        })
    }
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/View/register.html')
})

app.post('/register', async (req, res) => {
    const {username,firstname,lastname,password} = req.body
    const usernameExist = await User.findOne({ username})
    if (usernameExist) {
        res.json({ message: 'Username already is use' })
    } else {
        try{
        const newUser = new User({
            username,
            firstname,
            lastname,
            password
        })
        await newUser.save();
            res.status(200).send({ newUser })
    }
    catch(e){
        res.status(400).send(e.message);
    }
    }
})


app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/View/chat.html')
})

// socket io

io.on('connection', (socket) => {
    console.log('connection created...')

    // welcome msg
    const welcomeMessage = {
        username: 'server',
        message: 'Welcome to the chat application'
    }
    socket.emit('welcome', welcomeMessage)

    // join room
    socket.on('join', (roomName,username) => {
        socket.join(roomName)
        socket.broadcast.to(roomName).emit('joined', username)
    })

    //left room
    socket.on('userLeft', (roomName,username) => {
        socket.broadcast.to(roomName).emit('leave', username)
    })

    // send message to room
    socket.on('messageToRoom', async (data) => {
        const message = {
            username: data.username,
            message: data.message
        }
        console.log(`${data.username} send a message to ${data.room}`)
        try{
            const newMsg = GroupChat({
                from_user: data.username,
                room: data.room,
                messages:data.message
            })
            await newMsg.save()
        }   
        catch(e){
            throw new Error(e.message)
        }
        console.log(io.sockets.adapter.rooms);
        socket.broadcast.to(data.room).emit('newMessage', message)
    })

    // disconnect
    socket.on('disconnect', () => {
        console.log(`${socket.id} has been disconnected`)
    })
})


const dbURL = "mongodb+srv://chintan:ghevariya@comp3123.xcrku.mongodb.net/test"

// connect to database
mongoose
    .connect(dbURL)
    .then(() => console.log(`Database connection successful`))
    .catch((err) => console.log(`Database connection error ${err}`));

//Start HTTP server
http.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})
