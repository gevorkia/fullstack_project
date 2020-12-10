import React from "react"
import ReviewIndexItem from "./review_index_item"

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (!this.props.reviews) return null; 

        const {reviews, trail} = this.props

        const reviewIndexItems = reviews.map(review => {
            return (
                <ReviewIndexItem 
                    trail={trail}
                    review={review} 
                    key={`review-item-${review.id}`}
                />
            )
        })

        return (
          <div className="review-idx-wrapper">
            {reviewIndexItems}
          </div>
        );
    }
}

export default ReviewIndex;