import "dotenv/config";

import mongoose from "mongoose";
const { Schema, model } = mongoose;
const mongo_url = process.env.MONGO_URL;
mongoose
  .connect(mongo_url)
  .then(() => console.log("Mongo is now connected"))
  .catch((err) => console.log("Error occured during connecting ", err));

interface IUser {
  username: string;
  password: string;
}

const UserSchemas = new Schema<IUser>({
  username: { type: String, require: true },
  password: { type: String, require: true },
});

export const UserModel = model<IUser>("user", UserSchemas);
