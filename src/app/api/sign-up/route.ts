import dbconnect from "@/lib/dbConnect";
import userModel from "@/model/user";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    await dbconnect()
    try {
        const { userName, mobileNumber, password } = await request.json()
        const hasedpassword = await bcrypt.hash(password, 10)

        const existingVerifiedUserByUserName = await userModel.findOne({
            userName,
            isVerified: true
        })
        // checking that user is exist with this username or not
        if (existingVerifiedUserByUserName) {
            return Response.json({
                success: false,
                message: 'User already exist with user name'
            }, { status: 400 })

        }

        const existUserByNumber = await userModel.findOne({
            mobileNumber
        })

        if (existUserByNumber) {
            if (existUserByNumber.isVerified) {
                return Response.json({
                    success: false,
                    message: 'User already exists with this Number'
                }, { status: 400 })
            }
            else {
                existUserByNumber.password = hasedpassword
                await existUserByNumber.save()
            } 
        }
        else {
            const newUser = new userModel({
                userName,
                mobileNumber,
                password: hasedpassword

            })
            await newUser.save()
        }



    }
    catch (error) {
        console.log(error)
        return Response.json({
            success: false,
            message: "Error in regestering User"
        }, { status: 500 })
    }
}