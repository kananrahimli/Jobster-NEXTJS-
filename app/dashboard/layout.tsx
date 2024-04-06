'use client'
import Image from "next/image";
import logo from "../assets/logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
   const [showSidebar, setShowSidebar] = useState(true);
  const pathname = usePathname();
  const links = [
    { name: "Statistic", href: "/dashboard/statistic", icon: "" ,overview:'/dashboard'},
    { name: "All jobs", href: "/dashboard/allJob", icon: "" },
    { name: "Add job", href: "/dashboard/addJob", icon: "" },
    { name: "Profile", href: "/dashboard/profile", icon: "" },
  ];
  return (
    <div>
      <div
        className={`backdrop ${
          showSidebar ? "show" : "hidden"
        } md:hidden fixed w-full h-full opacity-55 bg-black`}
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      ></div>
      <div className="flex">
        {/* SIDEBAR */}
        <div
          className={`sidebar ${
            showSidebar ? "md:w-[300px] w-[90vw]" : "w-[0px] p-0 "
          } transition-all max-md:absolute max-md:left-[50%]
          max-md:top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%]
        bg-white py-2 flex items-center justify-start md:h-[100vh] h-[90vh]
          flex-col 
          
         `}
        >
          <Link href="/">
            <Image src={logo} alt=""></Image>
          </Link>
          <div className={`w-full ${showSidebar ? "" : "hidden"}`}>
            <ul className="mt-5 flex flex-col w-full ">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={`text-center py-3 hover:bg-slate-200 transition-all w-full  ${
                      pathname == link.href ? "bg-slate-200" : ""
                    }
                    
                  `}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`absolute right-[20px] top-[20px] ${
              showSidebar ? "show" : "hidden"
            } md:hidden`}
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            <IoMdClose size={"1.5rem"}></IoMdClose>
          </div>
        </div>

        {/* Header */}
        <div
          className={` self-start transition-all ${
            showSidebar ? "md:w-[calc(100vw_-_300px)] w-full" : "w-full"
          }   md:border-l`}
        >
          <div className={`dashboard-header bg-white p-8 border-l`}>
            <div
              className="cursor-pointer "
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            >
              <FaBarsStaggered></FaBarsStaggered>
            </div>
          </div>
          <div className="max-h-[90vh] overflow-y-auto">

          {children}
          </div>
        </div>
      </div>
    </div>
  );
}
