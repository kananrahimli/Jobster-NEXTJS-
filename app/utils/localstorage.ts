'use server'
import { cookies } from "next/headers";
import { User } from "../types/type";
export const setUserToLocalStorage = (user: User) => {
  cookies().set({
    name: "token",
    value: user.token
    // httpOnly: true,
    // path: "/",
  });
};

export const clearLocalStorage = () => {
  cookies().delete("token");
};

export const getUserFromLocalStorage = () => {
   const cookieStore = cookies();
    const token = cookieStore.get("token");
    return token
};
