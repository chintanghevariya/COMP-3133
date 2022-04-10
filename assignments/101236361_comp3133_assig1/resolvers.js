const Listing = require('./models/listing');
const User = require('./models/user');
const Booking = require('./models/booking');
const {ApolloError} = require('apollo-server-errors')
let validationEmail = function(email) {
    var result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return result.test(email)
};
exports.resolvers = { 
    Query: {
        getAllListing: async (parent, args) => {
            return await Listing.find({});
        },

        getListingByName: async (parent, args) => {
            return await Listing.find({"listing_title" : args.listing_title});
        }, 

        getListingByAdmin: async (parent, args) => {
            if (!args.userId) {
                return
            }
            const getUser = await User.findById(args.userId)
            if (!getUser) {
                return
            }
            if (getUser.type != 'admin') {
                return
            }
            return await Listing.find({})
        },

        getListingByCity: async (parent,args) => {
            return await Listing.find({"city" : args.city});
        },
        
        getListingByPostalCode: async (parent, args) => {
            return await Listing.find({"postal_code" : args.postal_code});
        },

        getAllBooking: async (parent, args) =>{
            return await Booking.find({})
        },

        getBookingById: async (parent, args) =>{
            return await Booking.find({"_id" : args._id})
        },
        getUser: async (parent, args) => {
            return await User.find({})
        }
    },
    Mutation: { 
        addListing: async (parent, args) => {
            if (!args.userId) {
                return
            }
            const getUser = await User.findById(args.userId)
            if (!getUser) {
                return
            }
            if (getUser.type != 'admin') {
                return
            }

            console.log(args)

            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: getUser.email,
                username: getUser.username,
                userId : args.userId          
            });
            return await newListing.save();
        },
        addBooking: async (parent, args) => {
            if(!args.listing_id) {
                return
            }
            

            console.log(args)

            let newBooking = new Booking({
                booking_id : args.booking_id,
                listing_id: args.listing_id,
                booking_date: new Date().toString(),
                booking_start: new Date(args.booking_start.toString()),
                booking_end: new Date(args.booking_end.toString()),
                username: args.username,
            });
            return await newBooking.save();
        },
        addUser: async (parent, args) => {
            const user = await User.findOne({ username: args.username });
            
            if (user) {
                throw new ApolloError('A username is aleready existed');
            }
            if(args.password.length < 6){
                throw new ApolloError("Password can't be less than 6 character");
            }
            if(!validationEmail(args.email)){
                throw new ApolloError("email is not valid !");
            }

            console.log(args)

            let newUser = new User({
                username: args.username,
                firstName: args.firstName,
                lastName: args.lastName,
                password: args.password,
                email: args.email,
                type: args.type,
            });
         
            return await newUser.save();
        },

        login: async (parent, text) => {
            const getUser = await User.findOne({username: text.username})
            if (!getUser) {
                throw new AuthenticationError("User not found")
            }
            if (getUser.password != text.password) {
                throw new AuthenticationError("password isn\'t correct")
            }
            return getUser
        }
    }
}
