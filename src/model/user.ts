import mongoose, {Schema, Document, model} from 'mongoose'

// export interface OderItem extends Document{
//     name : string,
//     price : string,
// }

// const OderItemSchema : Schema <OderItem> = new Schema({
//     name : {
//         type : String,
//         required : [true, 'Order name is required']
//     },
//     price : {
//         type :String,
//         required : [true, 'Price is required']
//     } 
// })

export interface user extends Document{
    userName : string,
    mobileNumber : string,
    password : string,
    isVerified : boolean,

}


const SessionSchema : Schema <user> = new Schema({
    userName : {
        type : String,
        required : [true, 'User Name is required']
    },
    mobileNumber : {
        type : String,
        required : [true, 'Phone Number is required']
    },
    password : {
        type : String,
        required : [true, 'Password is required']
    },
    isVerified :{
        type : Boolean,
        default : false

    }
   

})


const userModel  = (mongoose.models.user as mongoose.Model<user> || model<user>('user', SessionSchema))

export default userModel;




