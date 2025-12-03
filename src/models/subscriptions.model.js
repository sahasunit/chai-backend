import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //user that is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, //user that is a subscriber who is subscribing
        ref: "User"
    }
})


export const Subscription = mongoose.model("Subscription", subscriptionSchema);