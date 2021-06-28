import React from 'react';

const Item = ({ item, deleteItem }) => {
    return (
        <tr>
            <th scope='row'>{item.id}</th>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.type}</td>
            <td>{item.brand}</td>
            <td><button onClick={() => deleteItem(item.id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
}
 
export default Item;
