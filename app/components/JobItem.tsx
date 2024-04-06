import Link from "next/link";
import React from "react";
import {Job} from '../types/type';
import moment from "moment";
const JobItem = async ({job}:{job:Job}) => {
  return (
    <div className="py-3 bg-white rounded-md ">
      <div className="px-4 border-b pb-3 ">
        <div className="flex gap-3">
          <span className="bg-blue-500 inline-block text-white px-[2rem] py-[1rem] font-bold text-xl">
            {job.company[0]?.toUpperCase()}
          </span>

          <div className="flex flex-col">
            <h5 className="text-[1.2rem]">{job.position}</h5>
            <span className="text-slate-400 text-md">{job.company}</span>
          </div>
        </div>
      </div>
      <div className="body px-4 pt-3">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3 ">
            <span>{job.jobLocation}</span>
            <span>{job.jobType}</span>
            <div className="flex gap-2">
              <Link
                href="/addJob"
                className="text-green-500 bg-green-200 px-10 py-1 rounded-md"
              >
                Edit
              </Link>
              <button className="text-red-500 bg-red-200  px-10 py-1 rounded-md">
                Delete
              </button>
            </div>
          </div>
          <div className="flex flex-col md:items-end items-start gap-3 justify-center">
            <span>{moment(job.createdAt).format("MMM Do YY")}</span>
            <span className="bg-yellow-200 text-yellow-900 py-2 px-5 rounded-md ">
              {job.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
