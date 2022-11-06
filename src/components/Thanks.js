import thanksImg from '../images/icon-complete.svg'

function Thanks() {
  return (
    <div className="thanks--container">
      <div className="thanks">
        <img src={thanksImg} />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button>
          <a href="https://github.com/kuralayusha" target="_blank">
            Continue
          </a>
        </button>
      </div>
    </div>
  )
}

export default Thanks
