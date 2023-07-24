// import { useContext } from "react";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

// import { AuthContext } from "../../Providers/AuthProvider";
// import useAxiousSecure from "../../Hooks/UseAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

const MyCollege = () => {

  const {user} = useContext(AuthContext)
  const [colleges , setColleges] = useState([]);
 
  const url = `http://localhost:5000/allAdmissionCollege?candidateEmail=${user?.email}`

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data=> setColleges(data))
  },[])


  // const { user } = useContext(AuthContext)
  // const [axiosSecure] = useAxiousSecure();
  // const { data: colleges = [] } = useQuery(['allAdmissionCollege'], async () => {
  //   const res = await axiosSecure.get('/allAdmissionCollege')
  //   return res.data;
  // })
  // const [collges , setColleges] = useState([])

  // useEffect(() => {
    // fetch('http://localhost:5000/allAdmissionCollege')
    // .then(res => res.json())
    // .then(data => setColleges(data))
  // },[])

  // const colleges = collges.filter(college => college.candidateEmail === user.email)


  // const collegesStatus = colleges.filter(college => college.candidateEmail === user.candidateEmail)
  // console.log(collegesStatus);

 
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">My selected College</h1>
      <div className="w-11/12 mx-auto my-8">
      {
        colleges.map((collge , index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={collge.photoUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center font-semibold">
          <h2 className="card-title">{collge.collegeName}</h2>
          <p>{collge.subject}</p>
          <p>{collge.candidateEmail}</p>
          <p>Phone Number: {collge.candidatePhoneNumber}</p>
          <p>Address : {collge.address}</p>
          <p>BirthDay Date: {collge.dateOfBirth}</p>
          <p>Applied</p>
          <div className="card-actions">
            {/* <button className="btn btn-primary">Update</button> */}
          </div>
        </div>
      </div>)
      }
      </div>
      {/* {
        collegesStatus.map((collegesStatu, index) => <div key={index}>
          <h1>{collegesStatu.candidateEmail}</h1>
          <h1>hello</h1>
        </div>)
      } */}
    </div>
  );
};

export default MyCollege;