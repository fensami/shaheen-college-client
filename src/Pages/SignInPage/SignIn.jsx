import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from);
      updateUserProfile(data.displayName, data.photoURL).then(() => {
        const saveUser = { name: data.displayName, email: data.email };
        fetch("https://shaheen-college-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
    });
  };

  return (
    <div className="md:w-3/4 mx-auto my-20 grid gap-5 md:grid-cols-2 grid-cols-1 ">
      <article className="flex items-center">
        <img className="rounded-xl"
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </article>

      <article className="border-2 rounded-md p-8 bg-[#bb9368]">
        <h1 className="text-center text-3xl font-bold">Sign In Now</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <h1 className=" font-semibold">Enter Your Name</h1>
            <input
              {...register("displayName", { required: true })}
              type="text"
              name="displayName"
              className="border-2 px-2 py-1 mt-2 font-semibold w-11/12 rounded-lg"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-5">
            <h1 className="font-semibold">Photo</h1>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              name="photoURL"
              className="border-2 px-2 py-1 mt-2 font-semibold w-11/12 rounded-lg"
              placeholder="Enter Your Photo URL"
            />
          </div>

          <div className="mt-8">
            <h1 className="font-semibold">Enter Your Email</h1>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              className="border-2 w-11/12 px-2 py-1 mt-2 font-semibold rounded-lg"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mt-8">
            <h1 className="font-semibold">Password</h1>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              className="border-2 w-11/12 px-2 py-1 mt-2 font-semibold rounded-lg"
              placeholder="Password"
            />
          </div>
          <div className="mt-5">
            <Link className="font-semibold hover:underline">
              Forgot Password
            </Link>
          </div>

          <p className="font-semibold mt-3">
            Already Have an Account <Link className="underline" to="/login">Login</Link>
          </p>

          <button type="submit" className="btn btn-primary mt-5">
            Sign In
          </button>
        </form>

        <div className="mt-5">
        <SocialLogin></SocialLogin>
        </div>
      </article>
    </div>
  );
};

export default SignIn;
