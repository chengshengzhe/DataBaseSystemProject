const express = require('express');
const cors = require('cors');
const testRoutes = require('./testRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', testRoutes);

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
});