const express = require('express')
const app = express()
const connectDB = require('./config/db')
const config = require('config')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const MONGODB_URI = config.get('mongoURI')
const User = require('./models/user'); 
const path = require('path')

const store = new MongoDBStore({
  uri: MONGODB_URI, 
  collection: 'sessions'
})

app.use(session({
  secret: 'my secret', 
  resave: false, 
  saveUninitialized: false, 
  store: store
}))

app.use(async(req, res, next) =>{
  if(!req.session.user){return next()}
  try {
    let user = await User.findById(req.session.user._id)
    req.user = user
      next()      
    } catch (error) {
      console.log(error)
    }
})

connectDB()

app.use(express.json({extended: false}))
app.use('/api/products', require('./routes/api/products'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/shop', require('./routes/api/shop'))
app.use('/api/order', require('./routes/api/order'))


// serve static assets in production 
if(process.env.NODE_ENV === 'production'){
  // set static folder 
  app.use(express.static('client/build'))

  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`app is runninig at port ${PORT}`))
