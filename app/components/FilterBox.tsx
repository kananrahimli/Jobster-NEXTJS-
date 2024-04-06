import React, { ReactNode } from "react";

interface FilterBoxProps {
  children: ReactNode;
}

const FilterBox: React.FC<FilterBoxProps> = ({ children }) => {
  return (
    <div className="p-8 shadow-md rounded-md bg-white  flex flex-col gap-5">
      {children}
    </div>
  );
};

export default FilterBox;
