import React from 'react'
import Layout from '../../component/Layout';
import Footer from '../../component/Footer';
//import {Jumbotron} from 'react-bootstrap';



const Error = (props) => {
  return(
    <div>
      <Layout></Layout>

   <div class="card" style={{margin:'0rem',background:'#ff1a1a', color: "whitesmoke", height:'100px'}} className="text-center">
  <h1>SomeThing went Wrong </h1>
  </div>
   
  <div class="card" style={{margin:'0rem',background:'transparent', color: "#4d4d33", height:'500px'}} className="text-center">
  <h1>Please Login Again </h1>
  <p>Sucks up!!</p>
  <p>Try Login Again</p>
  <p>Verify Your Password !!</p>
  <p>Email Already Exist</p>
  </div>


  <Footer/>  
    </div>
   )

 }

export default Error;