import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import './App.css';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {update()}, []);

  const update = () => {
    fetch('http://localhost:3000/items/')
      .then(res => res.json())
      .then(data => setData(data));
  }
  
  const updateFilters = searchParams => {
    setFilters(searchParams);
  };

  const deleteItem = id => {
    const items = data;
    const requestOptions = {
      method: 'DELETE'
    };
    fetch(`http://localhost:3000/items/${id}`, requestOptions)
      .then(res => {
        if (res.ok) {
          const newItems = items.filter(item => item.id !== id);
          setData(newItems);
        }
      });
  }; 

  const addItem = item => {
    let items = data;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(item)
    };

    fetch('http://localhost:3000/items', requestOptions)
      .then(res => res.json())
      .then(data => {
        items.push(data);
        setData(items);
      });
      update();
  };

  const filterData = data => {
    const filteredData = [];

    if (!filters.name) return data;
    
    for (const item of data) {
      if (filters.name !== '' && item.name !== filters.name) continue;
      if (filters.price !== 0 && item.price !== filters.price) continue;
      if (filters.type !== '' && item.type !== filters.type) continue;
      if (filters.brand !== '' && item.brand !== filters.brand) continue;
      filteredData.push(item);
    }

    return filteredData;
  }

  return (
    <div className="container">
      <div className='row mt-3'>
        <ItemList deleteItem={deleteItem} items={filterData(data)}/>
      </div>
      <div className='row mt-3'>
        <SearchBar updateFilters={updateFilters}/>
      </div>
      <div className='row mt-3'>
        <AddItem addItem={addItem}/>
      </div>
    </div>
  );
}

export default App;

