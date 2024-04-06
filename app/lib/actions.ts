import { ILoginType } from "../login/page";
import { IRegisterType } from '../register/page';
import $axios from "../utils/axios";

export  function beRegister(data: IRegisterType) {
  return $axios.post('/auth/register',data)
}

export async function beLogin(data: ILoginType) {
   return $axios.post("/auth/login", data);
}


