import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCollege = () => {

  const {user} = useContext(AuthContext)
  const [colleges , setColleges] = useState([]);
 
  const url = `https://shaheen-college-server.vercel.app/allAdmissionCollege?candidateEmail=${user?.email}`

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data=> setColleges(data))
  },[])

 
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">My selected College</h1>
      <div className="w-11/12 mx-auto my-8 grid gap-5 md:grid-cols-3 grid-cols-1">
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
          </div>
        </div>
      </div>)
      }
      </div>
     
    </div>
  );
};

export default MyCollege;