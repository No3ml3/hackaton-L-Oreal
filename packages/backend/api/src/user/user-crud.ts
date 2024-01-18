import express  from "express"
import { getUserId } from "@/middlewares/auth-handlers"
import type { Request as ExpressRequest } from "express"
import {db} from "@app/backend-shared"
const userRouter = express.Router()
interface Request extends ExpressRequest {
userId?: number
}

userRouter.put('/:userId', getUserId, async(req:Request, res) => {
    try{
    const  userId  = req.userId as number;
    const {firstname,lastname,birthdate,gender,country} = req.body;
    
    await db.updateTable("consumer").set({firstname: firstname,lastname: lastname, birthdate: birthdate, gender: gender, country: country, })
    .where("id", "=", userId)
    .execute()
    res.json({success: true});
    console.log(userId);
    }
    catch(error){
        console.log(error)
        res.json({success: false});
    }
})
export default userRouter;