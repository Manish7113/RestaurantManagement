import {z} from 'zod'

export const newSession = z.object({
    tableNo : z.string(),
    endSession : z.boolean(),
    createdAt : z.date(),
    items : z.array(
        z.object({
            itemName: z.string(),
            quantity: z.number().int().positive(), 
            price: z.string() 
          })
    )
    
})