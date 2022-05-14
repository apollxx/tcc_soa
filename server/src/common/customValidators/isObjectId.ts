import { Types } from "mongoose";

export const isObjectId = (value: any) => {
    const isObjectId = Types.ObjectId.isValid(value)
    if (!isObjectId) return false
    return true
}
