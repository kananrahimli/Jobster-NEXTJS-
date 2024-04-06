import $axios from "../utils/axios";
import { unstable_noStore as noStore } from "next/cache";
export async function getAllJobs(url: string) {
  noStore();
  try {
    const data = await $axios.get(url);
    return data.data;
    //     const res = await fetch(url, {
    //       method: "GET",
    //       cache:'force-cache',
    //     });

    // const data =await res.json();
  } catch (error) {
    return error;
  }
}
