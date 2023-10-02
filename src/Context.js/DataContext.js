import { createContext } from "react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const DataContext = createContext({})

export const DataProvider = ({children}) =>{
    const [items, setItems] = useState([])
    const [showModel, setShowModel] = useState(false)
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPass, setNewPass] = useState('')
    const [update, setUpdate] = useState(-1)
  
    const [updateName, setUpdateName] = useState('')
    const [updateEmail, setUpdateEmail] = useState('')
    const [updatePass, setUpdatePass] = useState('')
  
  
    const URL = 'https://crud-oper-api.onrender.com/items'
    const [err, setErr] = useState(null)
    const [isLoad, setIsLoad] = useState(true)
  
  useEffect(()=>{
    const Fetching = async()=>{
      try {
        const res =await axios.get(URL)
        setItems(res.data)   
      } catch (error) {
        setErr(error.message);
      } finally{
        setIsLoad(false)
      }
    }
    Fetching()
  },[])
  
  
  const closeModel = ()=> setShowModel(false)
  
  const  handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const newItems = {id, name:newName, email:newEmail, pass:newPass}
      const res = await axios.post(URL, newItems )
      setItems([...items, res.data])
      setNewName('')
      setNewEmail('')
      setNewPass('')
      closeModel()
    } catch (error) {
      setErr(error.message);
    } 
  }
  
  const handleDelete = async (id) =>{
    try {
      await axios.delete(`${URL}/${id}`)
     const DeletedItem = items.filter(item => item.id !== id)
     setItems(DeletedItem)
    } catch (error) {
      setErr(error.message);
    } 
  }
  
  const handleUpdate = async (id) => {
    try {
      const updatePost = { id, name: updateName, email: updateEmail, pass: updatePass };
      const res = await axios.put(`${URL}/${id}`, updatePost);
  
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, ...res.data } : item))
      );
  
      setUpdate(-1); // Reset the update state to -1 to indicate no item is being edited
      setUpdateName('');
      setUpdateEmail('');
      setUpdatePass('');
    } catch (error) {
      setErr(error.message);
    }
  };
  
  
  const handleEdit = (id) =>{
    setUpdate(id)
  }
  

    return(
        <DataContext.Provider value={{

          err, isLoad, setIsLoad, setErr, //This data goto App.js 

  setShowModel, items, handleDelete, handleEdit, update, setItems, setUpdate, handleUpdate, updateName, setUpdateName, updateEmail, setUpdateEmail, updatePass, setUpdatePass,         
           
           
 closeModel, showModel, newName, setNewName, newEmail, setNewEmail, newPass, setNewPass , handleSubmit
 
 
 }}>
            {children}
        </DataContext.Provider>
    )
} 