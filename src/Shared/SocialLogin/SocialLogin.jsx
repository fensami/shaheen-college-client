import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(saveUser)
      })
      .then(res => res.json())
      .then(() => {
        navigate(from , {replace: true})
        
      })

    })
    
    
  }
  return (
    <div onClick={handleGoogleSignIn}>
      <hr className='pb-8' />
      <FcGoogle className='w-1/2 mx-auto mb-8' style={{fontSize: '3rem'}} ></FcGoogle>
    </div>
  );
};

export default SocialLogin;