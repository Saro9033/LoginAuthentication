import React, { useContext, useState } from 'react'
import UpdateItems from './UpdateItems'
import { DataContext } from '../Context.js/DataContext'

const ShowItems = ({ item }) => {

    const { update, handleDelete, handleEdit } = useContext(DataContext)

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)

    return (
        <>
            {update === item.id
                ?
                <UpdateItems item={item} /> :
                <tr>
                    <th scope="row">{item.id}</th>
                    <td><input style={{ border: 'none', outline: 'none' }} type="text" defaultValue={item.name} /></td>
                    <td><input style={{ border: 'none', outline: 'none' }} type="text" defaultValue={item.email} /></td>
                    <td style={{ position: 'relative' }}>
                        <input style={{ border: 'none', outline: 'none' }} defaultValue={item.pass} type={show ? 'text' : 'password'} />
                        <button style={{
                            position: 'absolute', top: '0', right: '0', bottom: '0', padding: '0 10px', background: 'transparent',
                            border: 'none', outline: 'none', cursor: 'pointer'
                        }} className='btn' onClick={handleShow}>
                            {!show ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                        </button>
                    </td>

                    <td className='d-flex'>
                        <button className='btn btn-primary mx-1' onClick={() => handleEdit(item.id)}>Edit</button>
                        <button className='btn btn-danger mx-1' onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                </tr>}
        </>
    )
}

export default ShowItems