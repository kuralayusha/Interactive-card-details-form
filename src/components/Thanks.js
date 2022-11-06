import thanksImg from '../images/icon-complete.svg'

function Thanks() {
  return (
    <div>
      <img src={thanksImg} />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button>
        <a href="https://github.com/kuralayusha">Confirm</a>
      </button>
    </div>
  )
}

export default Thanks
