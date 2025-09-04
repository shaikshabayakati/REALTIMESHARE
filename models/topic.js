import mongoose,{Schema} from "mongoose";

const taskSchema = new Schema(
    {
        title:String,
        description:String
    },{
        timestamps:true
    }
)

const TASKMODEL = mongoose.models.Topic || mongoose.model("Topic",taskSchema)

export default TASKMODEL