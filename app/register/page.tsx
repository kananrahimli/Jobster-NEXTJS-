"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { beRegister } from "../lib/actions";
import { registerSchema } from "../utils/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "react-toastify";
import InputGroup from "../components/InputGroup";
export type IRegisterType = z.infer<typeof registerSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const signUp: SubmitHandler<IRegisterType> = (data) => {
    const validations = registerSchema.safeParse(data);
    if (validations.success) {
      beRegister(data)
        .then((res) => {
          toast.success("Created user");
        })
        .catch((err) => {
          toast.error(err.response.data.msg);
        });
    } else {
      return;
    }
  };

  return (
    <form className="m-auto w-[500px]" onSubmit={handleSubmit(signUp)}>
      <div className="flex flex-col space-y-5 rounded-xl bg-white px-8 py-6">
        <div className="logo flex justify-center">
          <Image src={logo} alt="logo" className="" />
        </div>
        <h4 className="text-center text-2xl">Register</h4>
        <div className="inputs flex flex-col space-y-5">
          <InputGroup
            name="Name"
            type="text"
            placeholder="Enter your name..."
            error={errors.name ? errors.name.message : ""}
            register={register}
            keyType="name"
          ></InputGroup>
          <InputGroup
            name="Email"
            type="email"
            placeholder="Enter your email..."
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
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-500 cursor-pointer">
              Login
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Page;
