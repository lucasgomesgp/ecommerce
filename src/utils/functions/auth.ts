import { getServerSession } from "next-auth";
import { authOptions } from "../constants/authOptions";

export function auth() {
  return getServerSession(authOptions);
}
