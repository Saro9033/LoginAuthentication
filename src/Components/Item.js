import React from 'react';

function Item({ img }) {
  return (
    <div className='col-lg-3 col-md-6 col-12 item'>
      <div className='item-content'>
        <img src={img.url} alt={img.id} className='img-fluid my-2' />
        <div className='item-info text-dark'>
          <p className='text-danger'>Item ID: {img.id}</p>
          <p style={{fontSize:'10px'}}>Title: {img.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
