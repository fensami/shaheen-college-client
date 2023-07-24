import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {


  const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password =form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const logUser = result.user;
            console.log(logUser);
            navigate(from)
        })
        .catch(error => {
          console.log(error);
        })
    }



  return (
    <div className="md:w-3/4 w-11/12 mx-auto my-20 grid gap-5 md:grid-cols-2 grid-cols-1">
      <article className="flex items-center">
        <img className="rounded-xl" src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </article>

      <article className="border-2 rounded-md p-8 bg-[#bb9368]">

        <h1 className="text-center text-3xl font-bold ">Login Now</h1>
        <form onSubmit={handleLogin}>

         <div className="mt-8">
         <h1 className=" ml-2 font-semibold">Enter Your Email</h1>
         <input type="email" required name="email" className="border-2 px-2 py-1 mt-2 w-full font-semibold" placeholder="Enter Your Email" />
         </div>


         <div className="mt-8">
         <h1 className=" ml-2 font-semibold">Password</h1>
         <input type="Password" required name="password" className="border-2 w-full px-2 py-1 mt-2 font-semibold" placeholder="Password" />
         </div>
         <div className="mt-5">
         <Link className="font-semibold hover:underline">Forget Password </Link>
         </div>

         <p className="font-semibold mt-3">New user? <Link className="underline" to='/signin'>SignIn</Link></p>

         <button type="submit" className="btn btn-primary mt-5">Login In</button>

        </form>

        <div className="mt-5">
        <SocialLogin></SocialLogin>
        </div>

      </article>




    </div>
  );
};

export default Login;