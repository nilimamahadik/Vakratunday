// import logo from './logo.svg';
// import './App.css';
// import {Multiselect} from 'multiselect-react-dropdown';
// import React , { useState } from 'react';


// function App() {

  // const data =[
  //   {Country: "india" , id:"1"},
  //   {Country: "south africa", id: "2"},
  //   {Country : "zim", id:"3"},
  //   {Country: "russia", id:"4"}
  // ]

  // const [options] = useState(data)
//   return (
//     <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
//     <div>
//       <h1>Multiselect</h1>
//       <Multiselect options={options} displayValue='Country'/>
//     </div>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { useState, useEffect } from 'react';

function App() {
  // const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // useEffect(() => {
  //   // Fetch data from API and update options state
  //   fetch('your_api_endpoint')
  //     .then(response => response.json())
  //     .then(data => {
  //       setOptions(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching options:', error);
  //     });
  // }, []);

  const data =[
    {Country: "india" , id:"1"},
    {Country: "south africa", id: "2"},
    {Country : "zim", id:"3"},
    {Country: "russia", id:"4"}
  ]

  const [options] = useState(data)
  
  const handleMultiselectChange = (selectedList, selectedItem) => {
    console.log(selectedList);
    setSelectedOptions(selectedList);
  };

  const handleSubmit = () => {
    // Prepare the data to send to the backend
    const payload = {
      selectedOptions: selectedOptions.map(option => option.id),
    };
console.log(payload);
    // Send the data to the backend
    fetch('your_backend_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log('Response from backend:', data);
      })
      .catch(error => {
        console.error('Error sending data to backend:', error);
      });
  };

  return (
    <div style={{ width: '90%', justifyContent: 'center', display: 'flex' }}>
      <div>
        <h1>Multiselect</h1>
        <Multiselect
          options={options}
          selectedValues={selectedOptions}
          displayValue='Country'
          onSelect={handleMultiselectChange}
          onRemove={handleMultiselectChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
