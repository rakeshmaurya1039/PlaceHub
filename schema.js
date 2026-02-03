const joi = require("joi");
const { model } = require("mongoose");

// module.exports.listingSchema = joi.object({
//     listing : joi.object({
//         title: joi.string().required(),
        
//         description : joi.string().required(),
//         image : joi.object({
//       url: joi.string().allow("", null),
//       filename: joi.string().allow("", null)
//     }),
//         price : joi.number().required(),
//         location : joi.string().required(),
//         country : joi.string().required()
//     }).required(),

    
//     category: joi.array()
//       .items(
//         joi.string().valid(
//           "Rooms",
//           "Cities",
//           "Mountain",
//           "Castles",
//           "Pools",
//           "Camping",
//           "Farms",
//           "Arctic",
//           "Beach",
//           "Hotel",
//           "Romantic",
//           "Lakefront",
//           "Luxury"
//         )
//       )
//       .min(1)
//       .required()
// });

module.exports.listingSchema = joi.object({
  listing: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),

    image: joi.object({
      url: joi.string().allow("", null),
      filename: joi.string().allow("", null)
    }),

    price: joi.number().required(),
    location: joi.string().required(),
    country: joi.string().required(),

    // ✅ CATEGORY MUST BE HERE
    category: joi.array()
      .items(
        joi.string().valid(
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
        )
      )
      .min(1)
      .required()
  }).required()
});


module.exports.reviewSchema  = joi.object({
    review : joi.object({
        rating : joi.number().required().min(1).max(5),
        comment : joi.string().required(),
    }).required(),
});