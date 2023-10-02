import React, { useContext, useEffect } from 'react';
import { DataContext } from '../Context.js/DataContext';

const UpdateItems = ({item}) => {

const { updateName, setUpdateName, updateEmail, setUpdateEmail, updatePass, setUpdatePass, handleUpdate,
} = useContext(DataContext)

    useEffect(() => {
                setUpdateName(item.name);
        setUpdateEmail(item.email);
        setUpdatePass(item.pass);
    }, [setUpdateName, setUpdateEmail, setUpdatePass, item.email, item.name, item.pass]);

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>
                <input
                    className='form-control'
                    name='name'
                    onChange={(e) => setUpdateName(e.target.value)}
                    value={updateName}
                    type="text"/>
            </td>
            <td>
                <input
                    className='form-control'
                    name='email'
                    onChange={(e) => setUpdateEmail(e.target.value)}
                    value={updateEmail}
                    type="text" />
            </td>
            <td>
                <input
                    className='form-control'
                    name='pass'
                    onChange={(e) => setUpdatePass(e.target.value)}
                    value={updatePass}
                    type="text"/>
            </td>
            <td>
                <button
                    className='btn btn-primary mx-1'
                    onClick={() => handleUpdate(item.id)}
                    type='button'>
                    Update
                </button>
            </td>
        </tr>
    );
};

export default UpdateItems;
