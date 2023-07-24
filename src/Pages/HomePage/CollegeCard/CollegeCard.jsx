import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [colleges , setColleges] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/clgcards')
    .then(res => res.json())
    // .then(data => setCollege(data))
    .then(data => setColleges(data))
  },[])
  // const {id} =colleges
  // console.log(id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto my-12">
{
  colleges.map((college, index) => <div className="border bg-white rounded-lg p-5" key={index}>
    <img className="h-1/2"  src={college.image} alt="" />
    <p className="mt-5 text-xl font-bold">{college.name}</p>
    <p className="my-2"><span className="font-semibold">Addmition date :</span> {college.admissionDates}</p>
    <p className="font-semibold">Events: {college.events.map((event,index)=> <div key={index}></div>)}</p>
    <p  className=" my-2"><span className="font-semibold">Research_History:</span> {college.researchHistory}</p>
    <p><span className="font-semibold">Sports :</span> {college.sports}</p>
  
   <Link to={`/details/${college._id}`} className="btn mt-5 bg-amber-400 ">Details</Link>
   
  </div>)
}
     
    </div>
  );
};

export default CollegeCard;