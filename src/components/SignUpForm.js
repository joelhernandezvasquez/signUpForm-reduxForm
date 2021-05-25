import React from 'react';
import {Field,reduxForm} from 'redux-form';


const SignUpForm = () => {
    
    
    const renderInput = (formProps) =>{
        console.log(formProps);
        return(
            <div>
              <input{...formProps.input} className="input-text" placeholder={formProps.placeholder} autoComplete="off"/>
            </div>
        )
    }
    return (
        <div className="signUp-form">
            <form>
            <Field name="firstName" component={renderInput} placeholder="First Name"/> 
            <Field name="LastName" component={renderInput} placeholder="Last Name"/> 
            <Field name="emailAddress" component={renderInput} placeholder="Email Address"/> 
            <Field name="Password" component={renderInput} placeholder="Password"/> 
             <button> CLAIM YOUR FREE TRIAL</button>
             <div className="term-container">
               <p>By clicking the button, you are agreeing to our 
                   <span> Terms and Services</span>
                   </p>
             </div>
            
            </form>
            
        </div>
    )
}

const validate = (formValues) =>{
   
  }

export default reduxForm({
    form:'signUp',
    validate
}) (SignUpForm)

