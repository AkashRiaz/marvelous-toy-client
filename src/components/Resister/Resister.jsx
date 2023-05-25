import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import useTitle from '../../hooks/useTitle';

const Resister = () => {
  useTitle('resister')
    const {createUser,error} = useContext(AuthContext)
    const handleResister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password, name, photo)
    }
    return (
        <div className="hero min-h-screen my-20">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src="https://www.pngkey.com/png/full/367-3670570_login-bg.png" alt="" />
          </div>
          <div className="card md:w-1/2 flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleResister}>
              <div className="form-control">
              <h1 className="text-3xl text-center font-bold mb-4">Sign Up Now !</h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Resister" />
              </div>
              </form>
              <p>New to this website? Please <Link className='font-bold text-orange-600 mb-5' to='/login'>Login</Link></p>
              <p className='text-warning'>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Resister;