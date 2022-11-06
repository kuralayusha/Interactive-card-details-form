import { useState } from 'react'

import RightPage from './components/RightPage'
import frontCard from './images/bg-card-front.png'
import backCard from './images/bg-card-back.png'
import Form from './components/Form'
import Thanks from './components/Thanks'
// import backGround from './images/bg-main-mobile.png'

function App() {
  const [cardNum, setCardNum] = useState('0000 0000 0000 0000')
  const [name, setName] = useState('JANE APPLESEED')
  const [expDateM, setExpDateM] = useState('00')
  const [expDateY, setExpDateY] = useState('00')
  const [cvv, setCvv] = useState('000')
  const [confirm, setConfirm] = useState(false)

  return (
    <div className="App">
      <div className="container">
        <div className="front--card">
          <img className="front" src={frontCard} />
          <div className="front--card--info">
            <div>
              <p className="circle white"></p>
              <p className="circle blank"></p>
            </div>
            <h1>{cardNum}</h1>
            <div className="bottom">
              <h3>{name}</h3>
              <h3>
                {expDateM}/{expDateY}
              </h3>
            </div>
          </div>
        </div>
        <div className="back--card">
          <img className="back" src={backCard} />
          <div className="back--card--info">
            <h3>{cvv}</h3>
          </div>
        </div>
      </div>
      {confirm ? (
        <Thanks />
      ) : (
        <Form
          setCardNum={setCardNum}
          setName={setName}
          setExpDateM={setExpDateM}
          setExpDateY={setExpDateY}
          setCvv={setCvv}
          setConfirm={setConfirm}
        />
      )}
    </div>
  )
}

export default App
