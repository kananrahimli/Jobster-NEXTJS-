"use server";
import { cookies } from "next/headers";
import { User } from "../types/type";
export const setUserToLocalStorage = (user: User | null) => {
  cookies().set({
    name: "token",
    value: user ? user.token : "",
    // httpOnly: true,
    // path: "/",
  });
};

export const clearLocalStorage = () => {
  const cookieStore = cookies();
  cookieStore.delete("token");
  console.log("Token cookie deleted");
};

export const getUserFromLocalStorage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return token;
};
