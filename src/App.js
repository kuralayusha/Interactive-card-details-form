import RightPage from './components/RightPage'
import frontCard from './images/bg-card-front.png'
import backCard from './images/bg-card-back.png'
// import backGround from './images/bg-main-mobile.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <img src={backGround} /> */}
        <div className="front--card">
          <img src={frontCard} />
          <div className="front--card--info">
            <h1>0000 0000 0000 0000</h1>
            <h2>Your Name</h2>
          </div>
        </div>
        <div className="back--card">
          <img src={backCard} />
          <div className="front--card--info">
            <h3>000</h3>
          </div>
        </div>
      </div>
      <RightPage />
    </div>
  )
}

export default App
