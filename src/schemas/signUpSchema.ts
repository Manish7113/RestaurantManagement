import {z} from 'zod'

 
// new users
export const signInschema = z.object({
    userName : z.string().min(3,'User Name Should More Than 3 Characters'),
    password : z.string().min(6, {message : 'Password Length Should Be More Than 6 Characters'}),
    mobileNumber : z.string().min(10, {message:'Enter Valid Number'}).max(11,{message: 'Enter Valid Number'}) 
})