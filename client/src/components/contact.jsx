import React  from 'react';
import  '../eightst_styles.css';
import NavBar from './navbar.jsx';


const ContactStuff = (props) => {


 
  return (
   <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
		<NavBar />  
    <p>Email: Bob at bgulian@gmail.com</p>
   </div>
     
  	
  	
  	)
}

export default ContactStuff;