import { useState } from 'react'

function Form(props) {
  const [error, setError] = useState()
  const [validError, setValidError] = useState()

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
  }

  function handleCardNumChange(e) {
    props.setCardNum(e.target.value)
  }

  function handleExpDateMChange(e) {
    props.setExpDateM(e.target.value)
  }

  function handleExpDateYChange(e) {
    props.setExpDateY(e.target.value)
  }

  function handleCvvChange(e) {
    props.setCvv(e.target.value)
  }

  function handleBlankError(e) {
    const target = e.target

    if (isNaN(target.value)) {
      setValidError('Please enter a valid name')
    } else {
      setValidError('')
    }

    if (!target.value) {
      setError(`cannot be blank`)
    } else {
      setError('')
    }
  }

  function handleValidError(e) {
    const target = e.target
    console.log(!isNaN(target.value))
  }

  // console.log(!isNaN('3'))

  return (
    <form>
      <label>CARDHOLDER NAME</label>
      <input
        name="CARDHOLDER NAME"
        type="text"
        placeholder="e.g. Jane Appleseed"
        onChange={(e) => {
          handleNameChange(e)
          handleBlankError(e)
          handleValidError(e)
        }}
      />
      <br />
      {error && <span>{error}</span>}
      {validError && <span>{validError}</span>}
      <br />
      <label>CARD NUMBER</label>
      <input
        placeholder="e.g. 1234 5678 9123 0000"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        onChange={(e) => {
          handleBlankError(e)
          handleCardNumChange(e)
          const { value } = e.target
          e.target.value = normalizeCardNumber(value)
        }}
      />
      <br />
      {error && <span>{error}</span>}
      <br />
      <label>EXP. DATE</label>
      <>
        <input
          type="text"
          maxLength={2}
          placeholder="MM"
          onChange={(e) => {
            handleBlankError(e)
            handleExpDateMChange(e)
          }}
        />
        <input
          type="text"
          maxLength={2}
          placeholder="YY"
          onChange={(e) => {
            handleBlankError(e)
            handleExpDateYChange(e)
          }}
        />
      </>
      <br />
      {error && <span>{error}</span>}
      <br />
      <label>CVV</label>
      <input
        maxLength={4}
        type="text"
        placeholder="e.g. 123"
        onChange={(e) => {
          handleBlankError(e)
          handleCvvChange(e)
        }}
      />
      <br />
      {error && <span>{error}</span>}
      <br />
      <button>Confirm</button>
    </form>
  )
}

export default Form
