import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'

const Home = () => {
  const [image, setImage] = useState([])
  const [show, setShow] = useState(12)
  const [isLoad, setIsLoad] = useState(true)
  const [err, setErr] = useState(null)


  useEffect(()=>{
    const Fetching = async ()=>{
      try {
       const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
       setImage(response.data)
       
      } catch (error) {
        setErr(error.message)
      }finally{
        setIsLoad(false)
      }
    }
    Fetching()
  }, [])

  const loadMore = () => {
    setShow(show + 12); // Load 10 more items
  };



  return (

<div className='container  d-flex justify-content-center align-items-center flex-column mt-5 mb-5'>
  {isLoad && <h2 className='text-align mt-5'>Loading...</h2>}
  {err && <h2 className='text-align mt-5'>{err}</h2>}


  {!isLoad && !err &&
  <>  <ul className='list-unstyled row'>
      {image.slice(0, show).map(img => (
          <Item key={img.id} img={img} />
      ))}
    </ul>
  
<button className='btn mt-5 btn-primary' onClick={loadMore}>
  Load more..
</button> </> }

</div>  

  )
}

export default Home

