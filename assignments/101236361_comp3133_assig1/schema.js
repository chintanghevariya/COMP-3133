const {gql} = require('apollo-server-express');


exports.typeDefs = gql `    
    scalar Date
    type Listing {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Int!
        email: String!
        username: String!
        userId: ID
    }, 
    type Booking{
        _id: ID
        booking_id: String!
        listing_id: String!
        booking_date: Date
        booking_start: Date
        booking_end: Date
        username : String!
    },
    type User{
        username: String!
        firstName: String!
        lastName: String!
        password: String!
        email: String!
        type: String!
        _id: ID
    },
    type Query{
        getAllListing: [Listing]
        getListingByName(listing_title: String!): [Listing]
        getListingByCity(city: String!): [Listing]
        getAllBooking: [Booking]
        getBookingById(_id: String!): [Booking]
        getUser: [User]
        getListingByAdmin: [Listing]
        getListingByPostalCode(postal_code: String!): [Listing]
    },

    type Mutation {
        addListing(userId: String!
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Int!
            ) : Listing

        addBooking(
            booking_id: String!
            listing_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!): Booking

        login(username: String!
            password: String!): User!

        addUser(username: String!
            firstName: String!
            lastName: String!
            password: String!
            email: String!
            type: String!): User!
    }
`   