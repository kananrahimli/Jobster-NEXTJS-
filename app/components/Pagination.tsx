"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Pagination = ({ totalPages }: { totalPages: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Mevcut sayfa numarasını alma
  const currentPage = parseInt(searchParams.get("page") || "1");

  // Geri ve ileri butonlarına tıklama işlevleri
  const handlePrevPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    handleChangePage(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    handleChangePage(nextPage);
  };

  // Sayfa değiştirme işlevi
  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    replace(`${pathname}?${params.toString()}`);
  };

  // Sayfa numaralarını oluşturma
  const pageNumbers = Array.from(Array(totalPages).keys()).map(
    (num) => num + 1
  );

  return (
    <div className="pagination flex gap-3 items-center self-end mt-5">
      <span className="cursor-pointer" onClick={handlePrevPage}>
        Prev
      </span>
      <div className="flex">
        {pageNumbers.map((pageNumber) => (
          <span
            key={pageNumber}
            className="bg-white px-4 py-1 rounded-sm transition-all text-xl hover:bg-blue-500 hover:text-white cursor-pointer"
            onClick={() => handleChangePage(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
      <span className="cursor-pointer" onClick={handleNextPage}>
        Next
      </span>
    </div>
  );
};

export default Pagination;



