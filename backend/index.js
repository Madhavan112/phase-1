const  express = require('express')
const app = express()
const cors = require('cors')
const PORT= 3000
// Middleware
app.use(cors())
app.use(express.json())

app.post('/signup',(req,res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>{
    console.log("Server started succesfully")
})