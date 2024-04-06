'use client'
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
interface IProps{
    type: string;
    label: string;
    options: Array<{val:string,name:string}>
}
const SelectGroup:React.FC<IProps>  = ({type,label,options}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.delete("page");
      params.set(type, term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="flex flex-col gap-2 h-full ">
      <label htmlFor="status">{label}</label>
      <select
        name={type}
        id="status"
        className="border rounded-md h-full p-[0.3rem]"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get(type)?.toString()}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.val}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectGroup;
