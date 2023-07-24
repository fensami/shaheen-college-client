import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="w-3/4 mx-auto my-5">
     <div>
     <img className="relative" src="https://freefrontend.com/assets/img/tailwind-404-page-templates/404-page-not-found.png" alt="" />
     </div>

      <Link to='/' className="bg-white absolute bottom-44 right-[580px] p-3">Go Back to home page</Link>
    </div>
  );
};

export default NotFound404;