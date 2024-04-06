import React from "react";

const JobCardSkeleton = () => {
   return (
     <div className="py-3 bg-white rounded-md">
       <div className="px-4 border-b pb-3">
         <div className="flex gap-3 items-center">
           <span className="bg-gray-300 inline-block text-white px-[2rem] py-[2rem] font-bold text-xl animate-pulse">
             {/* Firma adının ilk harfi */}
           </span>

           <div className="flex flex-col gap-2 items-start">
             <h5
               className="text-[1.2rem] animate-pulse bg-gray-300 inline-block px-[3rem] rounded"
               style={{ height: "1.2rem" }}
             ></h5>
             <span
               className="text-gray-400 text-md animate-pulse  bg-gray-300 inline-block px-[5rem] rounded"
               style={{ height: "0.9rem" }}
             ></span>
           </div>
         </div>
       </div>
       <div className="body px-4 pt-3">
         <div className="grid md:grid-cols-2 gap-5">
           <div className="flex flex-col gap-3  items-start">
             <span
               className="animate-pulse text-gray-400 text-md  bg-gray-300 inline-block px-[3rem] rounded"
               style={{ height: "1rem" }}
             ></span>
             <span
               className="animate-pulse text-gray-400 text-md  bg-gray-300 inline-block px-[5rem] rounded"
               style={{ height: "1rem" }}
             ></span>
             <div className="flex gap-2 mt-4 items-start">
               <span
                 className="animate-pulse text-gray-400 text-md  bg-gray-300 inline-block px-[3rem] rounded"
                 style={{ height: "2rem" }}
               ></span>
               <span
                 className="animate-pulse text-gray-400 text-md   bg-gray-300 inline-block px-[3rem] rounded"
                 style={{ height: "2rem" }}
               ></span>
               {/* Sil butonu */}
             </div>
           </div>
           <div className="flex flex-col md:items-end items-start gap-3 justify-center">
             <span
               className="animate-pulse text-gray-400 text-md   bg-gray-300 inline-block px-[5rem] rounded"
               style={{ height: "1rem" }}
             ></span>
             <span
               className="bg-gray-300 text-gray-700 py-2 px-[3rem] rounded-md animate-pulse"
               style={{ height: "2rem" }}
             ></span>
           </div>
         </div>
       </div>
     </div>
   );
};




const JobsSkeleton = () => {
    return (
      <div className="grid md:grid-cols-2 gap-5">
        <JobCardSkeleton></JobCardSkeleton>
        <JobCardSkeleton></JobCardSkeleton>
        <JobCardSkeleton></JobCardSkeleton>
        <JobCardSkeleton></JobCardSkeleton>
        <JobCardSkeleton></JobCardSkeleton>
      </div>
    );
}

export  { JobCardSkeleton, JobsSkeleton };