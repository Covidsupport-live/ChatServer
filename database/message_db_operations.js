const mongoose = require("mongoose");
const MesssageModel = require("../models/message");

const saveMessage = async ({ sendBy, content}) => {
  const ms = new MesssageModel({
    content: content,
    send_by: sendBy,
  });

  const doc = await ms.save();
  if(doc._id){
      return doc._id;
  }
  throw new Error("Message Save DB Failed");
};

const getListOfMessages = async ({ page, limit}) =>{
  // TODO implement pagination
    // const result = await MesssageModel.paginate({page:0,limit:limit});
    const result = await MesssageModel.find().exec();
    return result;
}


module.exports = {
    saveMessage,
    getListOfMessages,
}