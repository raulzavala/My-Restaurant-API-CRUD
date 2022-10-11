const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

var restaurants = [{id:0,name:"Woodshill"},{id:1,name:"Great Wall"}];

const app = express();
app.use(express.json());

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc));

app.get('/restaurants',(req,res)=>{
    res.send(restaurants);
})

app.post('/restaurant',(req,res)=>{
    restaurants.push({id:req.body.id,name:req.body.name});
    res.send(`${JSON.stringify(req.body.name)} created`);

})

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`Console running on port ${PORT}`);
})
