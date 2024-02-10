import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-main-container">
      <div className="home-text-container">
        <h1 className="home-heading">Clothes That Get You Noticed</h1>
        <p className="home-para">
          Fashion is part of the daily air and it does not quite help that is
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        alt="clothes that get you noticed"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="home-img"
      />
    </div>
  </div>
)

export default Home
