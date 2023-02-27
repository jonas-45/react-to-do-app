import { useState } from "react"

const Form = () => {
  const [state, setState] = useState({fname: "", lname: "", message: ""});

  const onChangeListener = (e) => {
    setState((state) => ({
      ...state, 
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
    <form>
      <input type="text" name="fname" value={state.fname} onChange={onChangeListener} /><br/>
      <input type="text" name="lname" value={state.lname} onChange={onChangeListener} /><br/>
      <input type="text" name="message" value={state.message} onChange={onChangeListener} /><br/>
      <button type="button">Click here</button>
    </form>

    <p>Firstname: {state.fname}, Lastname: {state.lname}, Message: {state.message}</p>

    </div>
  )
}

export default Form;