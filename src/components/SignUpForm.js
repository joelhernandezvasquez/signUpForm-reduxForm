import React from 'react';
import {Field,reduxForm} from 'redux-form';


const SignUpForm = () => {
    
    
    const renderInput = (formProps) =>{
      
        const className = `${formProps.meta.error && formProps.meta.touched? 'input-error': 'input-text'}`
        return(
            <div className = {`${formProps.meta.error && formProps.meta.touched? 'input-container': ''}`}  >
              <input{...formProps.input} type={formProps.type} className={className} placeholder={formProps.placeholder} autoComplete="off"/>
              {renderErrors(formProps.meta)}
            </div>
        )


    }

    const isTiping = (formProps) =>
    {
      if(formProps.meta.error && formProps.meta.touched && (document.querySelector("#content input")!=null))
      {
         if(document.querySelector("#content input").value !=="")
         {
             document.querySelector("#content").classList.remove("input-email-container");

         }
      }
    }
   
    

    const renderInputEmail = (formProps) =>{
        
        const className = `${formProps.meta.error && formProps.meta.touched? 'input-error': 'input-text'}`
    
        
        return(
            <div id="content" className = {`${formProps.meta.error && formProps.meta.touched? 'input-email-container': ''}`}  >
              <input{...formProps.input} type={formProps.type} className={className} placeholder={formProps.placeholder} autoComplete="off"/>
              {renderErrors(formProps.meta)}
              {isTiping(formProps)}

            </div>
        )

 
    }

    const renderErrors = ({error,touched}) =>{
       if(touched && error)
       {
           return(
               <p className="error-message">{error}</p>
           )
       }
    }

  
   
    return (
        <div className="signUp-form">
            <form>
            <Field name="firstName" type="text" component={renderInput} placeholder="First Name"/> 
            <Field name="lastName"  type="text" component={renderInput} placeholder="Last Name"/> 
            <Field name="email" type="email"component={renderInputEmail} placeholder="Enter Email" /> 
            <Field name="password" type="password" component={renderInput} placeholder="Password"/> 
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
     const errors = {};

     if(!formValues.firstName)
     {
         errors.firstName = "First Name cannot be empty";
     }

     if(!formValues.lastName)
     {
         errors.lastName = "Last Name cannot be empty";
     }

     if( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) === false)
     {
        errors.email = "Looks this is not an email";
     }

     if(!formValues.password)
     {
        errors.password = "Password cannot be empty";
     }

     return errors;

  }

export default reduxForm({
    form:'signUp',
    validate
}) (SignUpForm)

