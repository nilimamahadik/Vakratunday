
const express = require("express")
const app = express();
app.use(express.json())
const mongoose =require('mongoose');
var cors = require('cors');
const users = require('./src/models')
app.use(cors());

const PORT = 7000

mongoose.connect('mongodb+srv://nilima23101998:ekdantay123@cluster0.dlbby1y.mongodb.net/?retryWrites=true&w=majority' )
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get('/', (req, res) => {
    res.send("welcome")
})


app.post('/submit', async(req, res) => {
    const date = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    // console.log(req.body)
try{
const save = await users.findOne({name: req.body.name})
if(save) return res.status(400).json({
    message:'User already registered'
});
const {
   
    name,
    address,
    amount
} = req.body;

const candidate = new users({
    date,
    name,
    address,
    amount
});

const saved  = await candidate.save();

return res.status(201).json({

    data: saved,
    status:"success",
    message:"candidate saved successfully"
})``
}
catch(error){
     console.log(error.message);
    }
})


app.get('/getallusers', async(req, res) => {
    try{
const allusers = await users.find()
// console.log(allusers);
return res.status(201).json({
    data: allusers,
    status:"success",
    message:"candidate get successfully"
})
    }
    catch(err){
console.log(err.message)
    }
})

app.get('/getsingleusers/:id', async(req, res) => {
    // console.log(req.params);
    try{
const singleusers = await users.findById(req.params.id)
//  console.log(singleusers);
return res.status(201).json({
    data: singleusers,
    status:"success",
    message:"candidate get successfully"
})
    }
    catch(err){
console.log(err.message)
    }
})
    
 

app.listen(PORT , () =>{
    console.log(`server is ready ${PORT}`);
})
