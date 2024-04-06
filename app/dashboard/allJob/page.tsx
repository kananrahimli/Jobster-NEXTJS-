
import FilterBox from "@/app/components/FilterBox";
import InputGroup from "@/app/components/InputGroup";
import JobList from "@/app/components/JobList";
import SelectGroup from "@/app/components/SelectGroup";
import { getAllJobs } from "@/app/lib/data";
import React, { Suspense } from "react";
import { JobResponse } from "../../types/type";
import { Job } from "../../types/type";
import { JobsSkeleton } from "@/app/components/Skeleton";
import { cookies } from "next/headers";
import Pagination from "@/app/components/Pagination";
import Button from "@/app/components/Button";
// let jobs
const page = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    status?: string;
    type?: string;
    sort?: string;
    page?:string
  };
}) => {
  const { search, status, type, sort,page} = searchParams || {}
  const jobResponse: JobResponse = await getAllJobs(
    `/jobs?status=${status ? status : "all"}&jobType=${
      type ? type : "all"
    }&sort=${sort ? sort : "latest"}&page=${page}&&search=${
      search ? search : ""
    }`
  );

  const jobs: Job[] = jobResponse?.jobs;
  const totalPages: number = jobResponse?.numOfPages;
    
  return (
    <div className="container md:px-0 max-md:px-3  px-5 py-5 flex flex-col gap-5 ">
      <FilterBox>
        <h1 className="font-semibold text-2xl">Axtar</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <InputGroup
            name="Search"
            type="text"
            keyType="search"
            register={undefined}
            useForm={true}
            value={search ? search : ""}
          ></InputGroup>
          <SelectGroup
            type="status"
            label="Status"
            options={[
              { val: "all", name: "All" },
              { val: "pending", name: "Pending" },
              { val: "reject", name: "Reject" },
              { val: "interview", name: "Interview" },
            ]}
          ></SelectGroup>
          <SelectGroup
            type="type"
            label="Type"
            options={[
              { val: "all", name: "All" },
              { val: "full-time", name: "Full-time" },
              { val: "part-time", name: "Part-time" },
              { val: "remote", name: "Remote" },
              { val: "internship", name: "Internship" },
            ]}
          ></SelectGroup>
          <SelectGroup
            type="sort"
            label="Sort"
            options={[
              { val: "latest", name: "Latest" },
              { val: "oldest", name: "Oldest" },
              { val: "a-z", name: "A-z" },
              { val: "z-a", name: "Z-a" },
            ]}
          ></SelectGroup>
          <Button></Button>
        </div>
      </FilterBox>
      <h4 className="font-semibold text-2xl">
        {jobResponse.totalJobs} job founded
      </h4>
      <Suspense key={jobs} fallback={<JobsSkeleton></JobsSkeleton>}>
        <JobList jobs={jobs}></JobList>
      </Suspense>
      <Pagination totalPages={totalPages}></Pagination>
    </div>
  );
};

export default page;
