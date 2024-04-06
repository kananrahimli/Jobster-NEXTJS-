export  interface Job {
    id: number,
    company: string,
    position: string,
    createdAt: string,
    jobLocation: string,
    jobType: string,
    status: string,
    updatedAt: string,
}
export  interface JobResponse {
  jobs:Job[]
  totalJobs: number;
  numOfPages:number
}

export  interface User {
  email:string;
  lastName: string;
  location: string;
  name: string;
  token:string
}


