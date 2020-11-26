import React from "react";

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("review_index_item", this.props)
        const {review, reviewStars} = this.props;
        return (
            <>
                <div className="review-idx-item-wrapper"></div>
                <div className="review-idx-item-header">
                <div className="r-user-photo">
                    {/* <img src={user.profilePicture} alt={`${user.firstName} ${user.lastName}`}></img> */}
                </div>
                <div className="r-user-name-wrapper">
                    <div className="r-user-name">Lili Gevorkian</div>
                </div>
                <div className="r-star-date-wrapper">
                    <span className="r-stars">{reviewStars}</span>
                    <span className="r-activity-date">November 25, 2020</span>
                </div>
                <div className="r-tag-wrapper">
                    <span className="r-tag">hiking</span>
                </div>
                </div>
                <div className="r-review-txt-wrapper">
                <p className="r-review-txt">"placeholder review text"</p>
                </div>
            </>
        )
    }
    
}

export default ReviewIndexItem