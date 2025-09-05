import connectDB from "@/lib/monogodb"
import TASKMODEL from "../../../../models/topic"
import { NextResponse } from "next/server"

export async function POST(request){
    const {title,description} = await request.json()
    await connectDB()
    await TASKMODEL.create({title,description})
    return NextResponse.json({message:'job done sir'})
}
export async function GET(request) {
    await connectDB()
    const tasks = await TASKMODEL.find()
    return NextResponse.json({tasks})
}

export async function DELETE(request){
    await connectDB()
    const {_id} = await request.json()
    await TASKMODEL.deleteOne({_id})
      return NextResponse.json(
            { message: "Task deleted successfully" },
            { status: 200 })
}