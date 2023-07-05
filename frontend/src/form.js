
// import React, { useEffect, useState } from 'react';
// import { TextField, Button } from '@mui/material';

// import { Link, useNavigate } from 'react-router-dom';
// import { useReactToPrint } from "react-to-print";
// import { components } from 'react-select';


// const FormExample = () => {
    
//     const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [amount, setAmount] = useState('');
//   const [data, setData] = useState([])
// const[formData, setFormData] = useState({
//    name:"",
//     address:"",
//     amount:""
// })


// const handleonchange = (e) => {
//     setFormData((prev) =>({
//         ...prev,
//         [e.target.name]: e.target.value,
//     }))
// }
// //   const handleNameChange = (event) => {
// //     // console.log("1 :",event);
// //     setName(event.target.value);

// //   };
// // // console.log("Name:", name)
// //   const handleAddressChange = (event) => {
// //     // console.log("2 :",event);
// //     setAddress(event.target.value);
// //   };
// // //   console.log("Address:", address)

// //   const handleAmountChange = (event) => {
// //     // console.log("3 :",event);
// //     setAmount(event.target.value);
// //   };
// // console.log("Amount:", amount)
//   const handleSubmit = (event) => {
//     event.preventDefault();
// const form = {
//         name: formData.name,
//       address: formData.address,
//       amount: formData.amount
//     };
//     setFormData({
//         name:"",
//         address:"",
//         amount:""
//     })

//     const first = () =>{
//         return axios 
//         .post("http://localhost:7000/submit",form)
//         .then((response) =>{
//             console.log(response);
//             return response;
//         }
//         )
//         .catch((err) =>
//         {
//             console.log(err)
//         })
//     }

//     first();
//  };





//  useEffect(()=>{
//     const getallusers = async() =>{
//         const get = axios.get("http://localhost:7000/getallusers")
//         .then((res)=>{
//              console.log(res.data.data);
//    setData(res.data.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }
//     getallusers();
// }, [handleSubmit])


// return (
//    <div>
    // <div>
    //   <form onSubmit={handleSubmit}>
      
    //     <TextField
    //       label="Name"
    //       name='name'
    //       value={formData.name}
    //       onChange={handleonchange}
    //       required
    //     />

    //     <br /><br />

    //     <TextField
    //       label="Address"
    //       name='address'
    //       value={formData.address}
    //       onChange={handleonchange}
    //       required
    //       multiline
    //     />

    //     <br /><br />

    //     <TextField
    //       label="Amount"
    //       name='amount'
    //       value={formData.amount}
    //       onChange={handleonchange}
    //       required
    //       type="text"
    //     />

    //     <br /><br />

    //     <Button variant="contained" type="submit">Save</Button>
       
    //   </form>
    // </div>
//     <br></br>
//     <div>
// <div style={{margin: "50px"}}>
//     <table >
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Address</th>
//           <th>Amount</th>
//           <th>Go For Receipt</th>
//         </tr>
//       </thead>
//       {/* <tbody>
//         {data.map((item) => (
//           <tr key={item._id}>
           
//             <td>{item.name}</td>
//             <td>{item.address}</td>
//             <td>{item.amount}</td>
//             <td>
//                 <Link to={`/poster/${item._id}`}>
                
                
//                 <Button variant="contained" >Go For Receipt</Button>
            
//                 </Link>
//             </td>
//           </tr>
//         ))}
        
//       </tbody> */}

// <tbody>
//   {data.map((item, index) => (
//     <tr key={item._id}>
//       <td>{index + 1}</td>
//       <td>{item.name}</td>
//       <td>{item.address}</td>
//       <td>{item.amount}</td>
    //   <td>
    //     <Link to={`/poster/${item._id}`}>
    //       <Button variant="contained">Go For Receipt</Button>
    //     </Link>
    //   </td>
//     </tr>
//   ))}
// </tbody>
// </table>
//   </div>
//   </div>
//   </div>



//   );
// };

// export default FormExample;



import { Button, Dropdown, Menu, Table } from "antd";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import axios from 'axios';
import toran2 from './image/toran2.jpg'
import { useReactToPrint } from "react-to-print";
import { Typography } from '@material-ui/core';

function CustomTable({ data }) {
  const [columnItems, setColumnItems] = useState([]);
  const [columnsToShow, setColumnsToShow] = useState([]);

  const columns = [
    {
      title: "Receipt No.",
      dataIndex: "receipt no.",
      key: "receipt no."
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      responsive: ["md"]
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount"
      },
    //   {
    //     title: "Receipt",
    //     dataIndex: "receipt",
    //     key: "receipt",
        
    //   },
    {
        title: "Receipt",
        dataIndex: "receipt",
        key: "receipt",
        render: (text, record) => (
           
          <Link to={`/poster/${record._id}`}>
            <Button variant="contained">View Receipt</Button>
          </Link>
        ),
      },
    
  ];

  useEffect(() => {
    setColumnItems(menuItems);
    setColumnsToShow(columns);
  }, []);

  const colVisibilityClickHandler = (col) => {
    const ifColFound = columnsToShow.find((item) => item.key === col.key);
    if (ifColFound) {
      const filteredColumnsToShow = columnsToShow.filter(
        (item) => item.key !== col.key
      );
      setColumnsToShow(filteredColumnsToShow);
    } else {
      const foundIndex = columns.findIndex((item) => item.key === col.key);
      const foundCol = columns.find((item) => item.key === col.key);
      let updatedColumnsToShow = [...columnsToShow];
      updatedColumnsToShow.splice(foundIndex, 0, foundCol);
      setColumnsToShow(updatedColumnsToShow);
    }
  };

  const menuItems = columns.map((item) => {
    return {
      key: item.key,
      label: <span>{item.title}</span>
    };
  });

//   const addKeys = (arr) => arr.map((i) => ({ ...i, key: i.id }));
  const addKeys = (arr) => arr.map((i, index) => ({ ...i, key: i.id, serialNumber: index + 1 }));

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <Dropdown
          overlay={
            <Menu onClick={colVisibilityClickHandler} items={columnItems} />
          }
          placement="bottomLeft"
        >
          <Button>Column Visibility</Button>
        </Dropdown>
      </div>
      <div>
        {/* <Table
          scroll={{ x: true }}
          columns={columnsToShow}
          dataSource={data ? addKeys(data) : []}
        /> */}

{/* <Table
        scroll={{ x: true }}
        columns={columnsToShow}
        dataSource={data ? addKeys(data) : []}
        // Render the serial number in a separate column
        expandedRowRender={(record) => <span>Serial Number: {record.serialNumber}</span>}
      />
      {console.log(data)}
 <Link to={`/poster`}>
          <Button variant="contained">Go For Receipt</Button>
        </Link> */}
         <div>
        <Table
          scroll={{ x: true }}
          columns={columnsToShow}
          dataSource={data ? addKeys(data) : []}
          expandedRowRender={(record) => (
            <span>Serial Number: {record.serialNumber}</span>
          )}
        />
        {/* ...existing code... */}
      </div>


      </div>
    </div>
  );
}

const FormExample = () => {
    const [data, setData] = useState([])
  const[formData, setFormData] = useState({
     name:"",
      address:"",
      amount:""
  })
  
  
  const handleonchange = (e) => {
      setFormData((prev) =>({
          ...prev,
          [e.target.name]: e.target.value,
      }))
    }

       const handleSubmit = (event) => {
        // console.log(event);
    event.preventDefault();
const form = {
        name: formData.name,
      address: formData.address,
      amount: formData.amount
    };
    setFormData({
        name:"",
        address:"",
        amount:""
    })
       
    const first = () =>{
        return axios 
        .post("http://localhost:7000/submit",form)
        .then((response) =>{
            // console.log(response);
            return response;
        }
        )
        .catch((err) =>
        {
            console.log(err)
        })
    }

    first();
}
 useEffect(()=>{
    const getallusers = async() =>{
        const get = axios.get("http://localhost:7000/getallusers")
        .then((res)=>{
            //  console.log(res.data.data);
             setData(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getallusers();
}, [handleSubmit])

const addSerialNumbers = (arr) => {
    return arr.map((item, index) => {
      return {
        ...item,
        serialNumber: index + 1
      };
    });
  };

 
  return (

    
    <div className="card column-design" >

<div className="card-body" style={{ backgroundImage: 'url()' }}>
    <div className="front" style={{ backgroundColor: '#FA7D09'}}>
      {/* <Typography variant="h6" align="center" > 
          <b>|| श्री गणेशाय नमः ||</b>
        </Typography>
        <br/>
       
        <Typography variant="h3" align="center">
          <b>श्री गजानन नगर गणेश उत्सव मंडळ</b>
        </Typography>
        <Typography variant="h6" align="center" >
          गजानन नगर वर्धा रोड, नागपूर
        </Typography> */}
<Typography variant="h6" align="center">
          <b>|| श्री गणेशाय नमः ||</b>
        </Typography>
        <br />
        <Typography variant="h2" align="center">
          <b>श्री गजानन नगर गणेश उत्सव मंडळ</b>
        </Typography>
        <Typography variant="h5" align="center">
          गजानन नगर वर्धा रोड, नागपूर
        </Typography>


        <hr />
        </div>
         <div>
        {/* <img src={toran2} alt="toran2"  style={{ height: '100px', width: '260px', alignItems: "center"}}  /> */}
        {/* <img src={toran2} alt="toran2"  style={{ height: '100px', width: '260px' }}  />
        <img src={toran2} alt="toran2"  style={{ height: '100px', width: '260px' }}  />
        <img src={toran2} alt="toran2"  style={{ height: '100px', width: '260px' }}  />
        <img src={toran2} alt="toran2"  style={{ height: '100px', width: '260px' }}  /> */}
       </div> 
        <br/><br/>
      <div style={{display: "flex", justifyContent: "center",alignItems: "center"}}>
      {/* <form onSubmit={handleSubmit} >

        
<div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="name"><b>Name:</b></label> &nbsp;&nbsp;
  <TextField
    label="नाव"
    name="नाव"
    value={formData.name}
    onChange={handleonchange}
    required
   
  />
</div>


        <br /><br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="Address"><b>Address:</b></label> &nbsp;&nbsp;

        <TextField
          label="पत्ता"
          name='पत्ता'
          value={formData.address}
          onChange={handleonchange}
          required
          multiline
        />
</div>
        <br /><br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="Amount"><b>Amount:</b></label> &nbsp;&nbsp;
        <TextField
          label="रक्कम"
          name='रक्कम'
          value={formData.amount}
          onChange={handleonchange}
          required
          type="text"
        />
</div>
        <br /><br />

        <button variant="contained" type="submit">Save</button> 
      </form> */}

<form onSubmit={handleSubmit} style={{ border: '2px solid black', padding: '40px' ,borderColor:"Green"}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="नाव"><b>नाव:</b></label> &nbsp;&nbsp;
    <TextField
      label="name"
      name="name"
      value={formData.name}
      onChange={handleonchange}
      required
    />
  </div>

  <br /><br />
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="पत्ता"><b>पत्ता:</b></label> &nbsp;&nbsp;
    <TextField
    type="text"
      label="address"
      name='address'
      value={formData.address}
      onChange={handleonchange}
      required
      multiline
    />
  </div>
  <br /><br />
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="रक्कम"><b>रक्कम:</b></label> &nbsp;&nbsp;
    <TextField
      label="amount"
      name='amount'
      value={formData.amount}
      onChange={handleonchange}
      required
      type="text"
    />
  </div>
  <br /><br />

  <button variant="contained" type="submit">Save</button>
</form>



    </div>
    <br></br>

        <div>
        <h2><u>Lists of Peoples</u></h2>
        <CustomTable data={data} />
        {/* {console.log(data._id)} */}
        <td>
        {/* <Link to={`/poster`}>
          <Button variant="contained">Go For Receipt</Button>
        </Link> */}
      </td>
        <br></br>
    {/* <div> */}
{/* <div style={{margin: "50px"}}>
    <table style={{width: "100%" ,  border: "1px solid #dddddd"}}>
      <thead style={{width: "100%", border: "1px solid #dddddd"}}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Amount</th>
          <th>Go For Receipt</th>
        </tr>
      </thead> */}
      {/* <tbody>
        {data.map((item) => (
          <tr key={item._id}>
           
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.amount}</td>
            <td>
                <Link to={`/poster/${item._id}`}>
                
                
                <Button variant="contained" >Go For Receipt</Button>
            
                </Link>
            </td>
          </tr>
        ))}
        
      </tbody> */}

{/* <tbody style={{width: "100%"}}>
  {data.map((item, index) => (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.amount}</td>
      <td>
        <Link to={`/poster/${item._id}`}>
          <Button variant="contained">Go For Receipt</Button>
        </Link>
      </td>
    </tr>
  ))}
</tbody>
</table> */}
  </div>
  </div>
        </div>
    //   </div>
    // </div>
  );

}
export default FormExample;



