'use client'
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
interface IProps {
  type?: string;
  name?: string;
  keyType: string;
  //   o;nChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  useForm?: true;
  //   disabled?: boolean;
  //   required?: boolean;
  //   maxLength?: number;
  register?: UseFormRegister<any> | undefined;
  value?: string | undefined;

}

const InputGroup: React.FC<IProps> = ({
  type,
  name,
  placeholder,
  error,
  keyType,
  register,
  useForm,
  value,
  
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const parameters = new URLSearchParams(searchParams);
 

  const handleSearch = useDebouncedCallback((term: string) => {
    setInputValue(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.delete("page");
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 0);
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={type}>{name}</label>
      {!useForm ? (
        <input
          type={type}
          placeholder={placeholder}
          className="border px-4 py-[0.3rem] rounded-md"
          {...register(keyType)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="border px-4 py-1 rounded-md"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          // defaultValue={value}
          value={parameters.size < 1 ? '' : inputValue}
        />
      )}
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
};

export default InputGroup;
