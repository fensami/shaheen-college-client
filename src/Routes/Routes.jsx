import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import SignIn from "../Pages/SignInPage/SignIn";
import Login from "../Pages/LoginPage/Login";
import Details from "../Pages/HomePage/Details/Details";
import Admission from "../Shared/Admission/Admission";
import College from "../Shared/College/College";
import CollegeDetails from '../Shared/CollegeDetails/CollegeDetails'
import AdmissionInput from "../Shared/Admission/AdmissionInput";
import MyCollege from "../Shared/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Shared/Profile/Profile";
import NotFound404 from "../Shared/NotFound404/NotFound404";
// import Profile from "../Shared/Profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: 'signIn', element: <SignIn></SignIn> },
      { path: 'login', element: <Login></Login> },

      {
        path: 'details/:detailsId',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/clgcards/${params.detailsId}`)
      },

      { path: 'admission', element: <Admission></Admission> },
      { path: 'college', element: <College></College> },
      {
        path: 'collegeDetails/:collegeDetailsId', element:<PrivateRoute> <CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.collegeDetailsId}`)
      },
      {
        path: 'admission/:admissionId', element: <PrivateRoute><AdmissionInput></AdmissionInput></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/admission/${params.admissionId}`)
      },
      {
        path: 'mycollege', element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
      },
      { path: 'profile', element: <Profile></Profile> },
      {
        path: '*',
        element: <NotFound404></NotFound404>
      }
    ]
  }
 
]);

export default router;