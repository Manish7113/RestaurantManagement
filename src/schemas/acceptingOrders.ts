import {z} from 'zod'


// taking order or not 

export const acceptingOrder = z.object({
    isAccepting : z.boolean(),
    
})
