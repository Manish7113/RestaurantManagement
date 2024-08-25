import {z} from 'zod'


// login 
export const UserNameValidation = z.string().min(3,'User Name Should More Than 3 Characters')

export const signUpSchema = z.object({
    userName : UserNameValidation,
    password : z.string().min(6, {message : 'Password Length Should Be More Than 6 Characters'})
})
