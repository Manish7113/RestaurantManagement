import mongoose, {Schema, Document, model} from 'mongoose'

export interface OderItem extends Document{
    name : string,
    price : string,
}

const OderItemSchema : Schema <OderItem> = new Schema({
    name : {
        type : String,
        required : [true, 'Order name is required']
    },
    price : {
        type :String,
        required : [true, 'Price is required']
    } 
})

export interface SessionModel extends Document{
    tableNo : string,
    items : OderItem[],
    createdAt : Date,
    waiterData : string,
    endSession : boolean,

}


const SessionSchema : Schema <SessionModel> = new Schema({
    tableNo : {
        type : String,
        required : [true, 'table number is required']
    },
    waiterData : {
        type : String,
        required : [true, 'User Name is required']
    },
    items : [OderItemSchema],
    createdAt : {
        type : Date, 
        required : [true, 'Created At is required'],
        default : Date.now
    },
    endSession : {
        type : Boolean,
        required : [true, 'End session is required']
    }

})


const sessionModel  = (mongoose.models.SessionModel as mongoose.Model<SessionModel> || model<SessionModel>('SessionModel', SessionSchema))

export default sessionModel;




