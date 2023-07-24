import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [admissionColleges, setAdmissionColleges] = useState([])
  useEffect(()=> {
    fetch('http://localhost:5000/admission')
    .then(res => res.json())
    .then(data => setAdmissionColleges(data))
  },[])
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-8">Select The College</h1>


        <>
      <div className="grid md:grid-cols-5 w-11/12 mx-auto gap-5 my-8">
        {admissionColleges.map((admissionCollege, index) => <Link to={`/admission/${admissionCollege._id}`} className="border p-4 bg-white" key={index}>
          <p>College: {index + 1}</p>
          <p >{admissionCollege.college_name}</p>
        </Link>)}
      </div>
        </>
    </div>
  );
};

export default Admission;