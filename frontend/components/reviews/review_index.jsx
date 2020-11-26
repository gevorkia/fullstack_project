import React from "react"
import ReviewIndexItem from "./review_index_item"

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (!this.props.reviews) return null; 

        const {reviews, reviewStars} = this.props
        // console.log(reviews)
        const reviewIndexItems = reviews.map(review => {
            return (
                <>
                    <ReviewIndexItem 
                        review={review} 
                        reviewStars={reviewStars} 
                        key={review.id}
                    />
                    {/* {review.rating}
                    {review.activityDate}
                    {review.tags}
                    {review.review} */}
                </>
            )
        })

        console.log("review index", this.props)
        return (
          <div className="review-idx-wrapper">
            {reviewIndexItems}
            
          </div>
        );
    }
}

export default ReviewIndex;