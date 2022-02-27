const Listing = require('./models/listing');
const User = require('./models/user');
const Booking = require('./models/booking');

exports.resolvers = { 
    Query: {
        getListing: async (parent, args) => {
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
        getBooking: async (parent, args) =>{
            if (!args.userId) {
                return
            }
            const getUser = await User.findById(args.userId)
            if (!getUser) {
                return
            }
            if (getUser.type != 'customer') {
                return
            }
            return await Booking.find({})
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
                username: getUser.username             
            });
            return await newListing.save();
        },
        addBooking: async (parent, args) => {
            if (!args.userId) {
                return
            }
            const getUser = await User.findById(args.userId)
            if (!getUser) {
                return
            }

            console.log(args)

            let newBooking = new Booking({
                booking_id : args.booking_id,
                listing_id: args.listing_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username,
            });
            return await newBooking.save();
        },
        addUser: async (parent, args) => {
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
                return
            }
            if (getUser.password != text.password) {
                return
            }
            return getUser._id
        }
    }
}
