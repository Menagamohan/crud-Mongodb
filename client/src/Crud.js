// Crud.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Crud() {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState('');

  // Fetch data
  useEffect(() => {
    Axios.get('http://localhost:3001/read')
      .then((response) => {
        setFoodList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Add food
  const addFoodData = () => {
    Axios.post('http://localhost:3001/insert', {
      foodName: foodName,
      description: description
    })
    .then((response) => {
      console.log(response.data);
      // Optionally refresh food list or handle UI update
      setFoodList([...foodList, { foodName, description }]);
    })
    .catch((error) => {
      console.error("Error adding food item:", error);
    });
  };

  // Update food
  const updateFoodData = (id) => {
    Axios.put('http://localhost:3001/update', { id, newFoodName })
      .then((response) => {
        console.log(response.data);
        // Optionally update the UI to reflect changes
        setFoodList(foodList.map(item => item._id === id ? { ...item, foodName: newFoodName } : item));
      })
      .catch((error) => {
        console.error("Error updating food item:", error);
      });
  };

  // Delete food
  const deleteData = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        // Optionally remove item from list
        setFoodList(foodList.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting food item:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <div>
      <h3>CRUD Operations</h3>
      <input
        type="text"
        placeholder="Food name"
        required
        onChange={(event) => { setFoodName(event.target.value); }}
      />
      <br /><br />
      <input
        type="text"
        placeholder="Description"
        required
        onChange={(event) => { setDescription(event.target.value); }}
      />
      <br /><br />
      <button onClick={addFoodData}>Submit</button>
      <br /><br />
      
      <table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {foodList.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.foodName}</td>
                <td>{val.description}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Update food name"
                    onChange={(event) => { setNewFoodName(event.target.value); }}
                  />
                  <button onClick={() => updateFoodData(val._id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteData(val._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
