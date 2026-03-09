import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

export const authMiddleware = async () => {
  console.log("Auth middleware reached");
};
