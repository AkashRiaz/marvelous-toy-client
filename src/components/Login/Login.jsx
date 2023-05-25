import React, { useContext,useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import useTitle from "../../hooks/useTitle";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const [error,setError] = useState('')
  useTitle('login')
  const { emailLogin,googleLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()
    
    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        setError(' ')
        navigate(from, {replace:true})
      })
      .catch((error) => {
        setError(error.message)
      });
  };
  const handleGoogleLogin =()=>{
    googleLogin().then(result =>{
        const user = result.user;
        navigate(from, {replace:true})
    })
    .then(error => console.log(error.message))
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src="https://sipr.mojokertokab.go.id/images/bg-login.png" alt="" />
        </div>
        <div className="card md:w-1/2 flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-5">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div  className="text-center space-y-4 mt-4">
            <div>
              <button onClick={handleGoogleLogin} className="btn btn-info gap-2">
               <FcGoogle className="w-6 h-6"></FcGoogle>
                Login With Google
              </button>
            </div>
            <p>
              New to this website? Please{" "}
              <Link className="font-bold text-orange-600" to="/resister">
                Resister
              </Link>
            </p>
            <p className="text-warning text-xl">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
