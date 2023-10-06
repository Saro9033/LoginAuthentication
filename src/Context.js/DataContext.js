import { createContext } from "react";
import React, {useState,useEffect } from 'react';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export const DataContext = createContext({})

export const DataProvider = ({children}) =>{
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass]= useState('')
  const [email, setEmail]= useState('')
  const [phone, setPhone]= useState('')
  const [country, setCountry]= useState('India')
  const [address, setAddress]= useState('')

  const [showModal, setShowModal] = useState(false);

  const [showModal2, setShowModal2] = useState(false);


  const navigation = useNavigate()
  

//   const handleSubmit= async (e)=>{
    


const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = { id, name, pass, email, phone, country, address };
    if (IsValidate()) {
      try {
        await axios.post("https://login-auth-api-oz6r.onrender.com/user", obj, {
          headers: { 'content-type': 'application/json' },
        });
        toast.success('Registered Successfully!');
        hanldeBack();
      } catch (error) {
        toast.err('Failed :', error.message);
      }
    }
    setId('')
    setName('')
    setPass('')
    setEmail('')
    setPhone('')
    setCountry('')
    setAddress('')
  }
  

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (id === null || id === '') {
        isproceed = false;
        errormessage += ' Username';
    }
    if (name === null || name === '') {
        isproceed = false;
        errormessage += ' Fullname';
    }
    if (pass === null || pass === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }
    return isproceed;
}

  //Login page
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');


  useEffect(()=>{
sessionStorage.clear();
  },[]);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.get(`https://login-auth-api-oz6r.onrender.com/user/${username}`);
        const resp = res.data;
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter valid username');
        } else {
          if (resp.pass === password) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);
            navigation('/user');
            closeModal();
          } else {
            toast.error('Please Enter valid credentials');
          }
        }
      } catch (error) {
        toast.error('Login Failed due to :' + error.message);
      }
    }
    usernameupdate('')
    passwordupdate('')
  }
  

  const ProceedLoginusingAPI = (e) => {
      e.preventDefault();
      if (validate()) {
          ///implentation
          // console.log('proceed');
          let inputobj={"username": username,
          "password": password};
          fetch("https://localhost:44308/User/Authenticate",{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(inputobj)
          }).then((res) => {
              return res.json();
          }).then((resp) => {
              console.log(resp)
              if (Object.keys(resp).length === 0) {
                  toast.error('Login failed, invalid credentials');
              }else{
                   toast.success('Success');
                   sessionStorage.setItem('username',username);
                   sessionStorage.setItem('jwttoken',resp.jwtToken);
                   navigation('/user')
              }
              // if (Object.keys(resp).length === 0) {
              //     toast.error('Please Enter valid username');
              // } else {
              //     if (resp.password === password) {
              //         toast.success('Success');
              //         sessionStorage.setItem('username',username);
              //         usenavigate('/')
              //     }else{
              //         toast.error('Please Enter valid credentials');
              //     }
              // }
          }).catch((err) => {
              toast.error('Login Failed due to :' + err.message);
          });
      }
  }
  const validate = () => {
      let result = true;
      if (username === '' || username === null) {
          result = false;
          toast.warning('Please Enter Username');
      }
      if (password === '' || password === null) {
          result = false;
          toast.warning('Please Enter Password');
      }
      return result;
  }

  const openModal = () => {
    setShowModal(true);
    console.log(showModal);

  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal2 = () => {
    setShowModal2(true);
    console.log(showModal);

  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

const  handleNewUser = () =>{
    setShowModal(false)
    setShowModal2(true)
}
const  hanldeBack = () =>{
    setShowModal(true)
    setShowModal2(false)
}

useEffect(() => {
    console.log("showModal:", showModal);
    console.log("showModal2:", showModal2);
  }, [showModal, showModal2]);

    return(
        <DataContext.Provider value={{
          handleSubmit, id, setId, name, setName,pass, setPass, email, setEmail ,phone, setPhone, country, setCountry,
          address, setAddress,

          username, usernameupdate, password, passwordupdate, ProceedLogin, ProceedLoginusingAPI,

          showModal,setShowModal,openModal, closeModal, hanldeBack,
          showModal2, setShowModal2, openModal2, closeModal2, handleNewUser
          
 }}>
            {children}
        </DataContext.Provider>
    )
} 