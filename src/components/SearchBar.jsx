import React, { useState } from 'react';

const SearchBar = ({ updateFilters }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');

    const handleSearch = () => {
        updateFilters({name, price, type, brand});
    };

    return (
        <div className='container'>
            <h2>Search for an Item</h2>
            <div className='row'>
                <div className="col">
                    <label htmlFor="name">Name: </label>
                    <input className='form-control' onChange={e => setName(e.target.value)} type="text" id='name' value={name} />
                </div>
                <div className="col">
                    <label htmlFor="price">Price: </label>
                    <input className='form-control' onChange={e => setPrice(e.target.value)} type="number" id='price' value={price} />
                </div>
                <div className="col">
                    <label htmlFor="type">Type: </label>
                    <input className='form-control' onChange={e => setType(e.target.value)} type="text" id='type' value={type}/>
                </div>
                <div className="col">
                    <label htmlFor="brand">Brand: </label>
                    <input className='form-control' onChange={e => setBrand(e.target.value)} type="text" id='brand' value={brand}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4" />
                <button className='btn btn-primary col-4' type='button' onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}
 
export default SearchBar;