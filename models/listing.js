const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title : String,
    description : String,
    image: {
        url : {
          type : String,
          required : true,
        } ,
        filename : {
          type : String,
    },
    
  },
    price : Number,
    location : String,
    country : String,
    reviews  : [
      {
        type : Schema.Types.ObjectId,
        ref : "Review",
      },
    ],
    owner : {
      type : Schema.Types.ObjectId,
      ref : "User",
    },

    category : {
      type : [String],
      enum: [
    "Rooms",
    "Cities",
    "Mountain",
    "Castles",
    "Pools",
    "Camping",
    "Farms",
    "Arctic",
    "Beach",
    "Hotel",
    "Romantic",
    "Lakefront",
    "Luxury"
  ],
      required : true,
    },
      
});

listingSchema.post("findOneAndDelete", async(listing) =>{
  if(listing){
     await Review.deleteMany({_id : {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;