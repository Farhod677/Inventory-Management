import React from 'react';
import Item from './Item';
import { v4 as uuidv4 } from "uuid";


const ItemList = ({ items, deleteItem }) => {
    return (
        <div className='container'>
            <div className="row">
                <h2>Items</h2>
            </div>
            <div className="row">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Brand</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        { items.map(item => (
                            <Item deleteItem={deleteItem} key={uuidv4()} id={uuidv4()} item={item} />
                        ))}  
                    </tbody>
                </table>
            </div>
              
        </div>
    );
}
 
export default ItemList;