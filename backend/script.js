import mongoose, { mongo } from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://mongoDB:27017/vacation-db").then(console.log("CONNECTED"));

