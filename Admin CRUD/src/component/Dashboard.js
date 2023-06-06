import React from 'react'
import '../App.css'
import axios from 'axios'
import './login.css'
import {API_URL} from '../Api/URL'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function Dashboard() {
        
      
    const [yourName,setYourName] = useState('');
    const [address,setAddress] = useState('');
    const [birthday,setBirthday] = useState('');
    const [mail,setMail] = useState('');
    const navigate = useNavigate();

    // const validateForm = () => {
    //     if (yourName === '' ||  address === '' || birthday === '' || mail === null) {
    //       return false;
    //     }
    //     return true;
    //   };
  
      const postData = async (e) => {
        
           await axios.post(API_URL, {
            yourName,
            address,
            birthday,
            mail,
          });
          navigate('/read');
          e.preventDefault();
        
      };
     
    return (
        <div>
        <section className="register-block">
            <div className="container">
                    <div className="row ">
                        <div className="col register-sec">
                        <h2 className="text-center">Registration Dashboard</h2>
                        <form className="register-form" action="" >
                        <div className="form-group">
                        <label>Name</label>          
                        <input
                        onChange={event=> setYourName
                        (event.target.value)} type="text" 
                        placeholder='Enter your name' 
                        className="form-control" name={yourName} id=""  />
                        {yourName  === '' && <span className="text-danger" >
                            *Name is required.
                        </span>}
                        </div>

                        <div className="form-group">
                        <label >Address</label>          
                        <input onChange={event=> setAddress
                        (event.target.value)} type="text" 
                        placeholder='Enter your address' 
                        className="form-control" name={address} id=""  />
                        {address  === '' && <span className="text-danger" >
                            *Address is required.
                        </span>}
                        </div>

                        <div className="form-group">
                        <label>Date of Birth</label>          
                        <input max="2023-05-31"
                        onChange={event=> setBirthday
                        (event.target.value)} type="date" 
                        placeholder='Enter Date' 
                        className="form-control" name={setBirthday} id=""  />
                        {birthday  === '' && <span className="text-danger" >
                            *Date of Birth is required.
                        </span>}
                        </div>

                        <div className="form-group">
                        <label>Email</label>          
                        <input onChange={event=> setMail
                        (event.target.value)} type='email' 
                        placeholder='Enter your mail ID' 
                        className="form-control" name={mail} id=""  />
                        {mail  === '' && <span className="text-danger" >
                            *Email is required.
                        </span>}
                        </div>

                        <div className="form-group">
                        <button className="btn btn-login float-right" onClick={postData}> Submit</button>  
                        
                        </div>
                    </form>
                    </div>
                    </div>

        </div>
        </section>
   
    </div>
  )
}

export default Dashboard
