
import React from 'react'
import {Job} from '../types/type';
import JobItem from './JobItem';

const JobList = async ({ jobs }: { jobs: Job[] }) => {
  return (
    
      <div className="grid md:grid-cols-2 gap-5">
          {jobs && jobs.map((job,index) => {
              return <JobItem key={index} job={job}></JobItem>;
          })}
   
    </div>
  );
}

export default JobList