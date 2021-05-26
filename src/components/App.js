import React from 'react';
import Header from './Header';
import Pricing from './Pricing';
import SignUpForm from './SignUpForm';
import '../sass/main.scss';

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="pricing-form-container">
               <Pricing/> 
               <SignUpForm/>
            </div>
        </div>
    )
}

export default App;
