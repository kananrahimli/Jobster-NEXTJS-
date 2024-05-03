import { checkForUnauthorizedResponse } from "../utils/AuthError";
import $axios from "../utils/axios";
import { unstable_noStore as noStore } from "next/cache";

import { clearLocalStorage } from "../utils/localstorage";
export async function getAllJobs(url: string) {
  noStore();
  try {
    const data = await $axios.get(url);
    return data.data;
  } catch (error) {
  
    const err = await checkForUnauthorizedResponse(error);

    //  throw new Error("Failed to fetch the latest invoices.");
    return err;
  }
}
