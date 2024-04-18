import { checkForUnauthorizedResponse } from "../utils/AuthError";
import $axios from "../utils/axios";
import { unstable_noStore as noStore } from "next/cache";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { clearLocalStorage } from "../utils/localstorage";
export async function getAllJobs(url: string) {
  noStore();
  try {
    const data = await $axios.get(url);
    return data.data;
  } catch (error) {
    // const {response}:any = await error
    // // const { status }: any = await error;
    // const {data,status} =await response
    // const { msg,  } = await data;
    const err = await checkForUnauthorizedResponse(error);

    //  throw new Error("Failed to fetch the latest invoices.");
    return err;
  }
}
