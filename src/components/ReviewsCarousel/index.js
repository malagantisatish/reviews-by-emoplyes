// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsListIndex: 0}

  leftBtnClicked = () => {
    const {reviewsListIndex} = this.state

    if (reviewsListIndex > 1) {
      const newIndex = reviewsListIndex - 1
      this.setState({reviewsListIndex: newIndex})
    }
  }

  rightBtnClicked = () => {
    const {reviewsListIndex} = this.state
    const {reviewsList} = this.props

    if (reviewsListIndex < reviewsList.length - 1) {
      const newIndex = reviewsListIndex + 1
      this.setState({reviewsListIndex: newIndex})
    }
  }

  render() {
    const {reviewsListIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewsListIndex
    ]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            data-testid="leftArrow"
            type="button"
            className="arrow-btn"
            onClick={this.leftBtnClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="profile-container">
            <img src={imgUrl} alt={username} className="profile-image-size" />

            <p className="profile-name">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            onClick={this.rightBtnClicked}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
