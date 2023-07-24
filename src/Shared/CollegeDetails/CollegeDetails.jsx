import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>
     <div className="p-5 rounded-md bg-white" >
        <img className="rounded-xl w-1/2 mx-auto" src={data.college_image} alt="" />
        {/* console.log(college); */}
       <div className="text-center">
       <p className="text-3xl font-semibold mt-5 uppercase text-center">{data.college_name}</p>
        <p className="mt-3"><span className="font-semibold text-xl ">Ratings : </span> {data.college_rating}</p>
        <p className="my-1"><span className="font-semibold text-xl ">Admission Date: </span>{data.admission_date}</p>
        <p ><span className="font-semibold text-xl my-2">Research_Count</span> {data.research_count}</p>
        <p ><span className="font-semibold text-xl my-2">Events : </span> {data.events}</p>
        <p ><span className="font-semibold text-xl my-2">Sports_Facilities :</span> {data.sports_facilities}</p>


       </div>

        

      </div>
    </div>
  );
};

export default CollegeDetails;