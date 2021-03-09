import React from 'react'

export default function Rating({ rating }) {

    
    const calcRating = (rating) => {
        rating = rating > 5 ? 5 : rating;
        var totalStars = 5;
        var incompleteStar = rating % 1 >= 0.5 ? 1:0;
        var completeStars = rating - rating % 1;
        var emptyStars = totalStars - completeStars - incompleteStar;

        return {
            completeStars : completeStars,
            incompleteStar : incompleteStar,
            emptyStars : emptyStars
        }
    };

    const RatingObj = calcRating(rating);

    return (
        <span>
            {[...Array(RatingObj.completeStars)].map(e => <span className="material-icons">star</span>)}
            {[...Array(RatingObj.incompleteStar)].map(e => <span className="material-icons">star_half</span>)}
            {[...Array(RatingObj.emptyStars)].map(e => <span className="material-icons">star_border</span>)}
        </span>
    )
}
