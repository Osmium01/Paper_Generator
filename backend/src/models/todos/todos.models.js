import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
content: {
    type: String,
    required: true,

},
isCompleted: {
    type: Boolean,
    default: false,
},
createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // this is the name of the model from user
},
subTodos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubTodo", // this is the name of the model from sub_todo
}] // array of subTodos
}, {timestamps: true})



export const Todo = mongoose.model("Todo", todoSchema)