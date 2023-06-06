import React from 'react'
import '../App.css'
import axios from 'axios'
import './login.css'
import {API_URL} from '../Api/URL'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function Update() {

    const [yourName,setYourName] = useState('');
    const [address,setAddress] = useState('');
    const [birthday,setBirthday] = useState('');
    const [mail,setMail] = useState('');
    const [id,setId] = useState('')
    const navigate = useNavigate(); 

    const updateUser = async ()=>{
      await axios.put(API_URL+id, {
        yourName,
        address,
        birthday,
        mail,
      })
      navigate('/read')
    }
  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setYourName(localStorage.getItem('yourName'))
    setAddress(localStorage.getItem('address'))
    setBirthday(localStorage.getItem('birthday'))
    setMail(localStorage.getItem('mail'))
  },[])
  return (
    <div><section className="register-block">
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
                {/* {yourName  === '' && <span className="text-danger" >
                    *Name is required.
                </span>} */}
                </div>

                <div className="form-group">
                <label >Address</label>          
                <input onChange={event=> setAddress
                (event.target.value)} type="text" 
                placeholder='Enter your address' 
                className="form-control" name={address} id=""  />
                {/* {address  === '' && <span className="text-danger" >
                    *Address is required.
                </span>} */}
                </div>

                <div className="form-group">
                <label>Date of Birth</label>          
                <input max="2023-05-31"
                onChange={event=> setBirthday
                (event.target.value)} type="date" 
                placeholder='Enter Date' 
                className="form-control" name={setBirthday} id=""  />
                {/* {birthday  === '' && <span className="text-danger" >
                    *Date of Birth is required.
                </span>} */}
                </div>

                <div className="form-group">
                <label>Email</label>          
                <input onChange={event=> setMail
                (event.target.value)} type='email' 
                placeholder='Enter your mail ID' 
                className="form-control" name={mail} id=""  />
                {/* {mail  === '' && <span className="text-danger" >
                    *Email is required.
                </span>} */}
                </div>

                <div className="form-group">
                <button className="btn btn-login float-right" onClick={updateUser}> Update</button>  
                
                </div>
            </form>
            </div>
            </div>

</div>
</section>
</div>
  )
}

export default Update