"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Button = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const clearFilter = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("search");
    params.delete("type");
    params.delete("sort");
    params.delete("status");
    params.set("page",'1');
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <button
      className="bg-red-200 text-red-600 self-end p-[0.3rem] rounded-md"
      onClick={clearFilter}
    >
      Clear filter
    </button>
  );
};

export default Button;
