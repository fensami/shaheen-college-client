import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  // console.log(data);

  // Assuming data contains properties 'name' and 'image'
  const { name, image } = data;
  console.log(data);

  return (
    <div className="pt-32">
      <img className="w-1/2 mx-auto" src={image} alt="" />
      
      <h1 className="text-center text-4xl font-semibold my-5">{name}</h1>
    </div>
  );
};

export default Details;
