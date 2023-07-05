// import React, { useRef,useEffect,useState} from 'react';
// import ganeshji from './image/ganeshji.jpg';
// import QR from './image/QR.jpg';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, TextField, Grid, Paper, Button } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import logo from './image/logo.jpg'
// import logo1 from './image/logo1.jpg'
// import logo3 from './image/logo3.jpg'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: theme.spacing(4),
//   },
//   content: {
//     padding: theme.spacing(4),
//   },
//   image: {
//     maxWidth: '400px',
//     maxHeight: '400px',

//   },
// }));

// const Poster = (props) => {
//     const param = useParams()
//     // console.log(param);
//   const classes = useStyles();
//   const componentsPDF = useRef();
// const[data,setData] = useState({});

//  const handlePrint = () => {

//     window.print();
//   };
// useEffect(()=>{
//     const getsingleusers = async() =>{
//         const get = axios.get(`http://localhost:7000/getsingleusers/${param.id}`)
//         .then((res)=>{
//             //  console.log(res);
//    setData(res.data.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }
//     getsingleusers();
// }, [])


//   return (
//     <>
//     <div  className='wrapper' style={{display:"flex"}}>
//          <div>
//         <img src={ganeshji} alt="ganeshji"  />
//       </div>
//       <Paper className={classes.content} style={{paddingLeft: "100px",paddingRight: "100px"}} >
//         <Typography variant="h6" align="center">
//           <b style={{color:"green"}}>|| श्री गणेशाय नमः ||</b>
//         </Typography>
//         <br />
//         <Typography variant="h3" align="center">
//           <b style={{color:"#FA7D09"}}>श्री गजानन नगर गणेश उत्सव मंडळ</b>
//         </Typography>
//         <Typography variant="h6" align="center">
//           <b style={{color:"#862B0D"}}>गजानन नगर वर्धा रोड, नागपूर</b>
//         </Typography>

//         <hr />
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//   <TextField
//     label="दिनांक:"
//     variant="standard"
//     size="small"
//     fullWidth
//     value={new Date().toLocaleDateString("en-US", {
//       weekday: "short",
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     })}
//   />
// </Grid>
//  <Grid item xs={12}>
//             <TextField
//               label="श्री. / श्रीमती"
//               variant="standard"
//               size="small"
//               fullWidth
//               InputLabelProps={{ shrink: Boolean(data.name) }}

//               value={data.name}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="यांच्‍याकडून"
//               variant="standard"
//               size="small"
//               fullWidth
//               InputLabelProps={{ shrink: Boolean(data.amount) }}
//               value={data.amount}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography>रक्कम प्राप्त झाली.</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <div className={classes.inputGroup}>
//               <div className={classes.inputGroupPrepend}>
//                 <span className={classes.inputGroupText}>₹ </span>
//               </div>
//               <TextField
//                 type="text"
//                 className={classes.formControl}
//                 aria-label="Amount (to the nearest dollar)"
//                 value={data.amount}
//               />

//             </div>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="प्राप्तकर्ता"
//               variant="standard"
//               size="small"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="body1" align="center">
//             <b style={{fontStyle:"italic",fontSize:"30px",color:"red"}}>धन्यवाद!</b>
//             </Typography>
// </Grid>
// </Grid>
// </Paper>
// </div>
// <div style={{ backgroundColor: "#de0f3f" }}>
// <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid black" ,paddingLeft:"50px",paddingRight:"50px"}}>
// <img src={logo} alt="Logo"style={{ height: "150px", width: "150px" }} />
// <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//   <div style={{ textAlign: "center" }}>
//     <span style={{ color:"white", fontStyle:"italic" }}>"India's First Business Messaging Super App"</span>
//     <br/>
//               <span className="text-white ms-4 mt-2 mb-1 " style={{fontSize: "50px"}}>
//              <strong style={{ color: "orange	", fontWeight: "bold" }}>
//                 BHA
//                 </strong>
//                 <strong style={{ color: "white	", fontWeight: "bold" }}>
//               RA
//                 </strong>

//                 <strong style={{ color: "green	", fontWeight: "bold" }}>
//                  T{" "}
//                 </strong>

//                 <strong style={{ color: "orange	", fontWeight: "bold" }}>
//                 ON
//                 </strong>
//                 <strong style={{ color: "white	", fontWeight: "bold" }}>
//               LI
//                 </strong>
//                 <strong style={{ color: "green	", fontWeight: "bold" }}>
//                  NE
//                 </strong>
//               </span>
//             <br/>
//    <span style={{ color:"white",fontStyle:"italic" }}>We've got everything you need, from Essentials to Luxuries !</span>
//   </div>
//   </div>
//   <div style={{ alignItems: "center" }}>
//     <span style={{ color:"white" }}><b><h1>Download</h1></b></span>
//  <p style={{ color:"white" ,alignItems: "center" }}><b><h5>The App Now</h5> </b></p>
//  </div>
// </div>

// </div>

// <div>
// <button onClick={handlePrint}>Print Page</button>

// </div>
// </>
// );
// };

// export default Poster;




// import React, { useRef, useEffect, useState } from 'react';
// import ganeshji from './image/ganeshji.jpg';
// import QR from './image/QR.jpg';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, TextField, Grid, Paper, Button } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import logo from './image/logo.jpg';
// import logo1 from './image/logo1.jpg';
// import logo3 from './image/logo3.jpg';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: theme.spacing(4),
//   },
//   content: {
//     padding: theme.spacing(4),
//   },
//   image: {
//     maxWidth: '400px',
//     maxHeight: '400px',
//   },
// }));

// const Poster = (props) => {
//   const param = useParams();
//   const classes = useStyles();
//   const componentsPDF = useRef();
//   const [data, setData] = useState({});

//   const handlePrint = () => {
//     window.print();
//   };

//   useEffect(() => {
//     const getsingleusers = async () => {
//       const get = axios
//         .get(`http://localhost:7000/getsingleusers/${param.id}`)
//         .then((res) => {
//           setData(res.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getsingleusers();
//   }, []);

//   return (
//     <>
//       <div className='wrapper' style={{ display: 'flex' }}>
//         <div>
//           <img src={ganeshji} alt='ganeshji' />
//         </div>
//         <Paper
//           className={classes.content}
//           style={{ paddingLeft: '100px', paddingRight: '100px' }}
//         >
//           <Typography variant='h6' align='center'>
//             <b style={{ color: 'green' }}>|| श्री गणेशाय नमः ||</b>
//           </Typography>
//           <br />
//           <Typography variant='h3' align='center'>
//             <b style={{ color: '#FA7D09' }}>श्री गजानन नगर गणेश उत्सव मंडळ</b>
//           </Typography>
//           <Typography variant='h6' align='center'>
//             <b style={{ color: '#862B0D' }}>गजानन नगर वर्धा रोड, नागपूर</b>
//           </Typography>

//           <hr />
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label='दिनांक:'
//                 variant='standard'
//                 size='small'
//                 fullWidth
//                 value={new Date().toLocaleDateString('en-US', {
//                   weekday: 'short',
//                   month: 'short',
//                   day: 'numeric',
//                   year: 'numeric',
//                 })}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label='श्री. / श्रीमती'
//                 variant='standard'
//                 size='small'
//                 fullWidth
//                 InputLabelProps={{ shrink: Boolean(data.name) }}
//                 value={data.name}
//                 />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     label='यांच्‍याकडून'
//                     variant='standard'
//                     size='small'
//                     fullWidth
//                     InputLabelProps={{ shrink: Boolean(data.amount) }}
//                     value={data.amount}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography>रक्कम प्राप्त झाली.</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <div className={classes.inputGroup}>
//                     <div className={classes.inputGroupPrepend}>
//                       <span className={classes.inputGroupText}>₹ </span>
//                     </div>
//                     <TextField
//                       type='text'
//                       className={classes.formControl}
//                       aria-label='Amount (to the nearest dollar)'
//                       value={data.amount}
//                     />
//                   </div>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     label='प्राप्तकर्ता'
//                     variant='standard'
//                     size='small'
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant='body1' align='center'>
//                     <b style={{ fontStyle: 'italic', fontSize: '30px', color: 'red' }}>
//                       धन्यवाद!
//                     </b>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               border: '1px solid black',
//               paddingLeft: '50px',
//               paddingRight: '50px',
//               backgroundColor: '#de0f3f',
//             }}
//           >
//             <img src={logo} alt='Logo' style={{ height: '150px', width: '150px' }} />
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <div style={{ textAlign: 'center' }}>
//                 <span style={{ color: 'white', fontStyle: 'italic' }}>
//                   "India's First Business Messaging Super App"
//                 </span>
//                 <br />
//                 <span className='text-white ms-4 mt-2 mb-1' style={{ fontSize: '50px' }}>
//                   <strong style={{ color: 'orange', fontWeight: 'bold' }}>BHA</strong>
//                   <strong style={{ color: 'white', fontWeight: 'bold' }}>RA</strong>
//                   <strong style={{ color: 'green', fontWeight: 'bold' }}>T </strong>
//                   <strong style={{ color: 'orange', fontWeight: 'bold' }}>ON</strong>
//                   <strong style={{ color: 'white', fontWeight: 'bold' }}>LI</strong>
//                   <strong style={{ color: 'green', fontWeight: 'bold' }}>NE</strong>
//                 </span>
//                 <br />
//                 <span style={{ color: 'white', fontStyle: 'italic' }}>
//                   We've got everything you need, from Essentials to Luxuries!
//                 </span>
//               </div>
//             </div>
//             <div style={{ alignItems: 'center' }}>
//               <span style={{ color: 'white' }}>
//                 <b>
//                   <h1>Download</h1>
//                 </b>
//               </span>
//               <p style={{ color: 'white', alignItems: 'center' }}>
//                 <b>
//                   <h5>The App Now</h5>{' '}
//                 </b>
//               </p>
//             </div>
//           </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div className='wrapper' style={{ display: 'flex' }}>
//           <div>
//             <img src={ganeshji} alt='ganeshji' />
//           </div>
//           <Paper
//             className={classes.content}
//             style={{ paddingLeft: '100px', paddingRight: '100px' }}
//           >
//             {/* Rest of the code for the first two divs */}
//           </Paper>
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             backgroundColor: '#de0f3f',
//           }}
//         >
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               padding: '50px',
//               border: '1px solid black',
//             }}
//           >
//             <img src={logo} alt='Logo' style={{ height: '150px', width: '150px' }} />
//             <div style={{ textAlign: 'center' }}>
//               <span style={{ color: 'white', fontStyle: 'italic' }}>
//                 "India's First Business Messaging Super App"
//               </span>
//               <br />
//               <span
//                 className='text-white ms-4 mt-2 mb-1'
//                 style={{ fontSize: '50px', display: 'flex', flexDirection: 'column' }}
//               >
//                 <strong style={{ color: 'orange', fontWeight: 'bold' }}>BHA</strong>
//                 <strong style={{ color: 'white', fontWeight: 'bold' }}>RA</strong>
//                 <strong style={{ color: 'green', fontWeight: 'bold' }}>T </strong>
//                 <strong style={{ color: 'orange', fontWeight: 'bold' }}>ON</strong>
//                 <strong style={{ color: 'white', fontWeight: 'bold' }}>LI</strong>
//                 <strong style={{ color: 'green', fontWeight: 'bold' }}>NE</strong>
//               </span>
//               <span style={{ color: 'white', fontStyle: 'italic' }}>
//                 We've got everything you need, from Essentials to Luxuries!
//               </span>
//             </div>
//             <div style={{ alignItems: 'center' }}>
//               <span style={{ color: 'white' }}>
//                 <b>
//                   <h1>Download</h1>
//                 </b>
//               </span>
//               <p style={{ color: 'white' }}>
//                 <b>
//                   <h5>The App Now</h5>{' '}
//                 </b>
//               </p>
//             </div>
//           </div>
//           <div style={{ textAlign: 'center', padding: '50px' }}>
//             <button onClick={handlePrint}>Print Page</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Poster;


import React, { useRef, useEffect, useState } from 'react';
import ganeshji1 from './image/ganeshji1.jpg';
import QR from './image/QR.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Grid, Paper, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './image/logo.jpg'
import logo1 from './image/logo1.jpg'
import logo3 from './image/logo3.jpg'
import footer2 from './image/footer2.jpg'
import './poster.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(4),
  },
  image: {
    maxWidth: '400px',
    maxHeight: '400px',

  },
}));

const Poster = (props) => {
  const param = useParams()
  // console.log(param);
  const classes = useStyles();
  const componentsPDF = useRef();
  const [data, setData] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // const handlePrint = () => {
  //     const printWindow = window.open('', '_blank');
  //     printWindow.document.write(`

  const handlePrint = () => {
    setIsButtonDisabled(true);

    window.print();
  };
  // const printData = useReactToPrint({
  //     content : ()=> componentsPDF.current,
  // documentTitle: "Userdata",
  // OnAfterPrint:()=>alert("data saved")
  // });
  // const handlePrint = useReactToPrint({
  //     content: () => componentsPDF.current,
  //     documentTitle: "Userdata",
  //     onAfterPrint: () => alert("Data saved"),
  //   });


  useEffect(() => {
    const getsingleusers = async () => {
      const get = axios.get(`http://localhost:7000/getsingleusers/${param.id}`)
        .then((res) => {
           

          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getsingleusers();
  }, [])


  return (
    <>
     <div className='wrapper' style={{ display: "flex" }}>
        <div>
          <img src={ganeshji1} alt="ganeshji1" style={{ height: "100%", width: "150px" }} />
        </div>
        <Paper className={classes.content}  >
          <Typography variant="h6" align="center">
            <b style={{ color: "green" }}>||श्री गणेशाय नमः||</b>
          </Typography>
          
          <br />
          <Typography  variant="h3" align="center"  style={{fontSize: "h6"}}>
            <b style={{ color: "#FA7D09" }}>श्री गजानन नगर गणेश उत्सव मंडळ</b>
          </Typography>
          <Typography variant="h6" align="center">
            <b style={{ color: "#862B0D" }}>गजानन नगर वर्धा रोड, नागपूर</b>
          </Typography>

          
           <hr />
        <Grid container spacing={2}>
            {/* <Grid item xs={12}>
            <TextField
              label="पावती क्र:"
              variant="standard"
              size="small"
              fullWidth
            />
          </Grid>  */}
          <Grid item xs={12}>
              <TextField
                label="दिनांक:"
                variant="standard"
                size="small"
                fullWidth
                value={data.date}
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                label="श्री. / श्रीमती"
                variant="standard"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: Boolean(data.name) }}

                value={data.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="यांच्‍याकडून"
                variant="standard"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: Boolean(data.amount) }}
                value={data.amount}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>रक्कम प्राप्त झाली.</Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.inputGroup}>
                <div className={classes.inputGroupPrepend}>
                  <span className={classes.inputGroupText}>₹ </span>
                </div>
                <TextField
                  type="text"
                  className={classes.formControl}
                  aria-label="Amount (to the nearest dollar)"
                  value={data.amount}
                />

              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="प्राप्तकर्ता"
                variant="standard"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                <b style={{ fontStyle: "italic", fontSize: "30px", color: "red" }}>धन्यवाद!</b>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
 </div>
<div style={{display: "flex ",justifyContent: "center", minWidth:"100%"}}>
  <img src={footer2} alt="footer2" style={{width:"100%" ,alignItems:"center"}} />
</div>
 <div>
        <button onClick={handlePrint} disabled={isButtonDisabled}>Print Page</button>

      </div>
    </>
  );
};

export default Poster;