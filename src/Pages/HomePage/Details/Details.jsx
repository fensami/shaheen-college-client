import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();

  const { name, image, admissionDates ,sports,researchHistory} = data;
  console.log(data);

  return (
    <div className="pt-32 mb-8 ">
      <img className="w-1/2 mx-auto" src={image} alt="" />
      
      <h1 className="text-center text-4xl font-semibold my-5">{name}</h1>

    <div className="text-center">
    <p className="my-2"><span className="font-semibold">Addmition date :</span> {admissionDates}</p>



<p  className=" my-3"><span className="font-semibold">Research_History:</span> {researchHistory}</p>
<p><span className="font-semibold">Sports :</span> {sports}</p>
    </div>
    </div>
  );
};

export default Details;
