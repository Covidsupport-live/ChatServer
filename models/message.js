const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const message_schema = mongoose.Schema({
    content : {
        type : {},
        required : true,
    },
    send_by :{
        type:String,
        required : true
    },
    send_at:{
        type : Date,
        required : false,
        default : Date.now()
    }
})

message_schema.plugin(mongoosePaginate);

module.exports = mongoose.model("Message",message_schema)