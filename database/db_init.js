const mongoose = require('mongoose');
const {MONGODB_PASSWORD,MONGODB_DATABASE} = require("../config");

class Database {
  
_connect() {
     mongoose.connect(`mongodb+srv://admin:${MONGODB_PASSWORD}@cluster0.rsxzj.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`,{
      useUnifiedTopology: true,
      useNewUrlParser: true
     })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()