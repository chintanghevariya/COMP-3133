const {gql} = require('apollo-server-express');


exports.typeDefs = gql `
    type Listing {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    } 
    type Booking{
        booking_id: String!
        listing_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username : String!
    }
    type User{
        username: String!
        firstName: String!
        lastName: String!
        password: String!
        email: String!
        type: String!
    }
    type Query{
        getListing: [Listing]
        getListingByName(listing_title: String!): [Listing]
        getListingByCity(city: String!): [Listing]
        getBooking: [Booking]
        getUser: [User]
        getListingByAdmin: [User]
    }

    type Mutation {
        addListing(userId: String!
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            ) : Listing

        addBooking(booking_id: String!
            listing_id: String!
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!): Booking

        login(username: String!
            password: String!): ID

        addUser(username: String!
            firstName: String!
            lastName: String!
            password: String!
            email: String!
            type: String!): User!

    }
`   