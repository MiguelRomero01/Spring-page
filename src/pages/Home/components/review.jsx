import React from "react";
import review_styles from './review.module.css';
import { PiQuotesDuotone } from "react-icons/pi";

function Review({review, photo}) {
     return (
          <div className={review_styles['review-container']}>
               <img src={photo} alt="UserImage" />
               <p className={review_styles.userReview}>
                    <PiQuotesDuotone /><br/>
                    {review}
               </p>
          </div>
     );
}

export default Review;
