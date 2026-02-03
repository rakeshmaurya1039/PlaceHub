const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")
const reviewController = require("../controllers/review.js");

// REVIEW 
router.post('/',isLoggedIn, validateReview,  wrapAsync(reviewController.createReview));

// delete review routes
router.delete('/:reviewId', isLoggedIn, isReviewAuthor,  wrapAsync(reviewController.destroyReview));

module.exports = router;