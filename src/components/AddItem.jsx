import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');

    const handleAdd = () => {
        addItem({name, price, type, brand});
        setName('');
        setPrice(0);
        setType('');
        setBrand('');
    };

    return (
        <div className='container'>
            <div className="row">
                <h2>Add an Item</h2>
            </div>
            <div className="row">
                <label htmlFor="name">Name: </label>
                <input required className='form-control' onChange={e => setName(e.target.value)} type="text" id='name' value={name} />
                <label htmlFor="price">Price: </label>
                <input required className='form-control' onChange={e => setPrice(e.target.value)} type="number" id='price' value={price} />
                <label htmlFor="type">Type: </label>
                <input required className='form-control' onChange={e => setType(e.target.value)} type="text" id='type' value={type}/>
                <label htmlFor="brand">Brand: </label>
                <input required className='form-control' onChange={e => setBrand(e.target.value)} type="text" id='brand' value={brand}/>
            </div>
            <div className="row mt-3">
                <button className='btn btn-primary' type='button' onClick={handleAdd}>Add Item</button>
            </div>
        </div>
    );
}
 
export default AddItem;