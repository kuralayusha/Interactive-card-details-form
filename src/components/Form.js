import { useState } from 'react'

function Form(props) {
  const [errorName, setErrorName] = useState()

  const [errorCNum, setErrorCNum] = useState()

  const [errorDates, setErrorDates] = useState()

  const [errorCvv, setErrorCvv] = useState()

  const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, '')
        .match(/.{1,4}/g)
        ?.join(' ')
        .substr(0, 19) || ''
    )
  }

  function handleNameChange(e) {
    props.setName(e.target.value)

    const target = e.target

    if (!target.value) {
      setErrorName(`Can't be blank`)
    } else {
      setErrorName('')
    }

    if (e.target.value === '') {
      props.setName('e.g. Jane Appleseed')
    }
  }

  function handleCardNumChange(e) {
    props.setCardNum(e.target.value)

    const target = e.target

    if (!target.value) {
      setErrorCNum(`Can't be blank`)
    } else {
      setErrorCNum('')
    }

    if (e.target.value === '') {
      props.setCardNum('●●●● ●●●● ●●●● ●●●●')
    }
  }

  function handleExpDateMChange(e) {
    props.setExpDateM(e.target.value)

    if (e.target.value === '') {
      props.setExpDateM('MM')
    }
  }

  function handleExpDateYChange(e) {
    props.setExpDateY(e.target.value)

    if (e.target.value === '') {
      props.setExpDateY('YY')
    }
  }

  function handleCvvChange(e) {
    props.setCvv(e.target.value)

    const target = e.target

    if (!target.value) {
      setErrorCvv(`Can't be blank`)
    } else {
      setErrorCvv('')
    }

    if (e.target.value === '') {
      props.setCvv('●●●')
    }
  }

  function handleDatesError(e) {
    const target = e.target

    if (!target.value) {
      setErrorDates(`Can't be blank`)
    } else {
      setErrorDates('')
    }
  }

  function handleConfirm() {
    const errArr = [errorName, errorCNum, errorDates, errorCvv]
    errArr.forEach((err) => {
      if (err === `Can't be blank`) {
        props.setConfirm(false)
        console.log('error')
      }

      if (err === '') {
        props.setConfirm(true)
        console.log('success')
      }
    })
  }

  // function handleBlankErrorCNum(e) {
  //   const target = e.target

  //   // if (Number.isNaN(target.value)) {
  //   //   setValidErrorCNum('Wrong format, numbers only')
  //   // } else {
  //   //   setValidErrorCNum('')
  //   // }

  //   if (!target.value) {
  //     setErrorCNum(`Can't be blank`)
  //   } else {
  //     setErrorCNum('')
  //   }
  // }

  return (
    <form className="form">
      <label className="cardholder--name">CARDHOLDER NAME</label>
      <input
        name="CARDHOLDER NAME"
        type="text"
        placeholder="e.g. Jane Appleseed"
        onChange={(e) => {
          handleNameChange(e)
          // handleBlankErrorName(e)
        }}
      />
      {errorName && <span>{errorName}</span>}
      <br />
      <label>CARD NUMBER</label>
      <input
        placeholder="e.g. 1234 5678 9123 0000"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        onChange={(e) => {
          // handleBlankErrorCNum(e)
          handleCardNumChange(e)
          const { value } = e.target
          e.target.value = normalizeCardNumber(value)
        }}
      />
      {errorCNum && <span>{errorCNum}</span>}
      <div className="dates--cvv">
        <div className="dates">
          <label>EXP. DATE (MM/YY)</label>
          <div className="dates--input">
            <input
              type="text"
              maxLength={2}
              placeholder="MM"
              onChange={(e) => {
                handleExpDateMChange(e)
                handleDatesError(e)
              }}
            />
            <input
              type="text"
              maxLength={2}
              placeholder="YY"
              onChange={(e) => {
                handleExpDateYChange(e)
                handleDatesError(e)
              }}
            />
          </div>
          {errorDates && <span>{errorDates}</span>}
        </div>
        <div className="cvv">
          <label>CVV</label>
          <input
            maxLength={4}
            type="text"
            placeholder="e.g. 123"
            onChange={(e) => {
              handleCvvChange(e)
            }}
          />
          {errorCvv && <span>{errorCvv}</span>}
        </div>
      </div>
      <button type="button" onClick={handleConfirm}>
        Confirm
      </button>
    </form>
  )
}

export default Form
