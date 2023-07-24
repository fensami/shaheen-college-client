import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const College = () => {
  const [colleges, setColleges] =useState([])
  useEffect(()=> {
    fetch('https://shaheen-college-server.vercel.app/colleges')
    .then(res => res.json())
    .then(data => setColleges(data))
  },[])
  
  return (
   <>
     <h1 className="text-5xl font-bold text-center my-8">Colleges</h1>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
    
      {colleges.map((college, index)=> <div className="p-5 rounded-md bg-white" key={index}>
        <img className="rounded-xl w-11/12 h-1/2 mx-auto" src={college.college_image} alt="" />
       <div>
       <p className="text-3xl font-semibold mt-5 uppercase text-center">{college.college_name}</p>
        <p className="mt-3"><span className="font-semibold text-xl ">Ratings : </span> {college.college_rating}</p>
        <p className="my-1"><span className="font-semibold text-xl ">Admission Date: </span>{college.admission_date}</p>
        <p ><span className="font-semibold text-xl my-2">Research_Count</span> {college.research_count}</p>
       </div>

        <div className="text-center mt-8">
        <Link to={`/collegeDetails/${college._id}`} className="btn btn-primary ">Details</Link>
        </div>

      </div>)}
    </div>
   </>
  );
};

export default College;