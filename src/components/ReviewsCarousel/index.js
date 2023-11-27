import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    clickValue: 0,
  }

  front = () => {
    const {clickValue} = this.state

    if (clickValue <= 2) {
      this.setState(prevState => ({
        clickValue: prevState.clickValue + 1,
      }))
    }
  }

  back = () => {
    const {clickValue} = this.state

    if (clickValue >= 1) {
      this.setState(prevState => ({
        clickValue: prevState.clickValue - 1,
      }))
    }
  }

  render() {
    const {clickValue} = this.state

    const {reviewsList} = this.props

    const finalImage = reviewsList[clickValue].imgUrl
    const user = reviewsList[clickValue].username
    const company = reviewsList[clickValue].companyName
    const descr = reviewsList[clickValue].description

    return (
      <div className="app-container">
        <div className="review-container">
          <h1>Reviews</h1>
          <img src={finalImage} alt="sita" className="img-setting1" />
          <div className="nn">
            <button type="button" onClick={this.back}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left"
                className="img-size"
              />
            </button>
            <p className="j">{user}</p>
            <button type="button" onClick={this.front}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right"
                className="img-size"
              />
            </button>
          </div>
          <p className="np">{company}</p>
          <p className="np">{descr}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
