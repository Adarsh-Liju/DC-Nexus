import React, { useState } from "react";
import './App.css'
function App() {
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  const handleSubmit=(event)=>{
    event.preventDefault();

    setSubmitted(true);
  }
  const [submitted,setSubmitted]=useState(false)
  const handleFirstNameInputChange=(event)=>{
    setValues({...values,firstName:event.target.value})
  }
  const handleLastNameInputChange=(event)=>{
    setValues({...values,lastName:event.target.value})
  }
  const handleEmailInputChange=(event)=>{
    setValues({...values,email:event.target.value})
  }

    return(
      <div className="background">
      <div className="form-container">
        <form className="reg-form" onSubmit={handleSubmit}>
          {submitted ? <div id="succes">Thanks for the Feedback!</div>:null}
          <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="field"
          placeholder="First Name"
          name="firstName"/>
          {submitted && !values.firstName ?<span>Please enter a first name<br/></span>:null}
          <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="field"
          placeholder="Last Name"
          name="lastName"/>
          {submitted && !values.lastName ?<span>Please enter a last name<br/></span>:null}
          <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="field"
          placeholder="Email"
          name="email"/><br/>
          {submitted && !values.email ?<span>Please enter an email address<br/></span>:null}
          <button type="submit">Submit</button><br/>
        </form>
      </div>
      </div>
  );
}

export default App;
