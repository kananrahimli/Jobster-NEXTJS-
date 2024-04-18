"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { beLogin } from "../lib/actions";
import { loginSchema } from "../utils/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "react-toastify";
import InputGroup from "../components/InputGroup";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { setUserToLocalStorage } from "../utils/localstorage";

export type ILoginType = z.infer<typeof loginSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginType>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const signIn: SubmitHandler<ILoginType> = (data) => {
    const validations = loginSchema.safeParse(data);
    if (validations.success) {
      beLogin(data)
        .then((res) => {
          toast.success("You are now logged in");
          setUserToLocalStorage(res.data.user);
          // Cookies.set('token', res.data.user.token);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })

        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.msg);
        });
    } else {
      return;
    }
  };

  return (
    <form className="m-auto w-[500px]" onSubmit={handleSubmit(signIn)}>
      <div className="flex flex-col space-y-5 rounded-xl bg-white px-8 py-6">
        <div className="logo flex justify-center">
          <Image src={logo} alt="logo" className=" " />
        </div>
        <h4 className="text-center text-2xl">Login</h4>
        <div className="inputs flex flex-col space-y-5">
          <InputGroup
            name="Email"
            type="email"
            placeholder="Emaili daxil edin"
            error={errors.email ? errors.email.message : ""}
            register={register}
            keyType="email"
          ></InputGroup>
          <InputGroup
            name="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password ? errors.password.message : ""}
            register={register}
            keyType="password"
          ></InputGroup>
          <button className="bg-blue-500 py-1 rounded-md text-white">
            Submit
          </button>
        </div>
        <div>
          <span>
            Don't have an account?{" "}
            <Link href={"/register"} className="text-blue-500 cursor-pointer">
              Register
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};
export default Page;
