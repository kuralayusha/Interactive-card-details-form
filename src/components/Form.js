function Form() {
  return (
    <form>
      <label>CARDHOLDER NAME</label>
      <input type="text" placeholder="e.g. Jane Appleseed" />
      <label>CARD NUMBER</label>
      <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
      <label>EXP. DATE</label>
      <>
        <input type="number" placeholder="MM" />
        <input type="number" placeholder="YY" />
      </>
      <label>CVV</label>
      <input type="number" placeholder="e.g. 123" />
      <button>Confirm</button>
    </form>
  )
}

export default Form
