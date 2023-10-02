import React, { useContext } from 'react'
import ShowItems from './ShowItems'
import { DataContext } from '../Context.js/DataContext'

const Home = () => {

  const { setShowModel, items, setUpdate, err, isLoad } = useContext(DataContext)

  const Submit = (e) => {
    e.preventDefault()
    setUpdate(-1)
  }

  return (
    <>
    {err && <h2 className='text-center mt-4'>Error: {err}</h2>}
    {isLoad && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className='mt-5' id='loader'></div>
</div>
}

    {!err && !isLoad && 
    <div className='container mt-5 mb-5'>
      <div className="dot-elastic"></div>
      
    
      <div className='d-flex justify-content-end'><button className='btn btn-success ' onClick={() => setShowModel(true)}>
        Add Items
      </button></div>
      <div className="table-responsive">
        <form onSubmit={Submit}>
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => {
                return <ShowItems item={item} key={item.id} />

              })}
            </tbody>
          </table>
        </form>
      </div>
    </div> }
    </>
  )
}

export default Home

