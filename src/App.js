import React, { useState } from "react";
import './App.css'
function App() {
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  const handleSubmit=(event)=>{
    alert("Thanks for the feedback!!")
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
      <div className="form-container" >
        <form className="reg-form" onSubmit={handleSubmit}>
          <label>First Name</label><br/>
          <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="field"
          placeholder="First Name"
          name="firstName"/><br/>
          {submitted && !values.firstName ?<span>Please enter a first name<br/></span>:null}
          <label>Last Name</label><br/>
          <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="field"
          placeholder="Last Name"
          name="lastName"/><br/>
          {submitted && !values.lastName ?<span>Please enter a last name<br/></span>:null}
          <label>Email Address</label><br/>
          <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="field"
          placeholder="Email"
          name="email"/><br/>
          {submitted && !values.email ?<span>Please enter an email address<br/><br/></span>:null}
          <button type="submit" id="submit">Submit</button><br/>
        </form>
      </div>
      </div>
  );
}

export default App;
