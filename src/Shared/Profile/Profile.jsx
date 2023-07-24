import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="md:w-1/2 mx-auto border my-8 p-5 rounded-sm bg-[#bb9368]">
      <p className="text-center text-4xl font-semibold">Profile</p>
      <img src={user?.photoUrl} alt="" />
      <div>
        <p className="mb-3 text-xl font-semibold">Name</p>
      <input type="text" value={user?.displayName} className="p-3 rounded-xl w-full" />
      </div>
      <div className="my-5">
        <p className="mb-3 text-xl font-semibold">Email</p>
      <input type="text" value={user?.email} className="p-3 rounded-xl w-full" />
      </div>
      <div className="my-5">
        <p className="mb-3 text-xl font-semibold text-black">Address</p>
      <input type="text"  className="p-3 rounded-xl w-full" />
      </div>

      <div >
        <p className="bg-white w-1/2 mx-auto text-xl font-bold rounded-xl  p-3 text-center">Edit</p>
      </div>
      
    </div>
  );
};

export default Profile;