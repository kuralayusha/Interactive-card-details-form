import { useState } from 'react'

import RightPage from './components/RightPage'
import frontCard from './images/bg-card-front.png'
import backCard from './images/bg-card-back.png'
import Form from './components/Form'
import Thanks from './components/Thanks'
// import backGround from './images/bg-main-mobile.png'

function App() {
  const [cardNum, setCardNum] = useState('0010 0000 0000 0000')
  const [name, setName] = useState('Yusha Kuralay')
  const [expDateM, setExpDateM] = useState('01')
  const [expDateY, setExpDateY] = useState('06')
  const [cvv, setCvv] = useState('001')

  return (
    <div className="App">
      <div className="container">
        {/* <img src={backGround} /> */}
        <div className="front--card">
          <img src={frontCard} />
          <div className="front--card--info">
            <h1>{cardNum}</h1>
            <h3>{name}</h3>
            <h3>
              {expDateM}/{expDateY}
            </h3>
          </div>
        </div>
        <div className="back--card">
          <img src={backCard} />
          <div className="front--card--info">
            <h3>{cvv}</h3>
          </div>
        </div>
      </div>
      <Form
        setCardNum={setCardNum}
        setName={setName}
        setExpDateM={setExpDateM}
        setExpDateY={setExpDateY}
        setCvv={setCvv}
      />

      <Thanks />
    </div>
  )
}

export default App
