import React from 'react';
import logo from '../../assets/marvelous-1.png'
import {Link} from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'; 
import { FaTwitterSquare } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className='bg-[#171717]'>
        <div className="footer p-10 text-white">
        <div>
          <img src={logo} alt="" />
          <p className='md:ml-8'>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Social Link</span> 
          <Link target='_blank' to='https://www.facebook.com/profile.php?id=100007887480875' className="link ml-7"><FaFacebookSquare className='w-7 h-7' /></Link> 
          <Link target='_blank' to='https://www.instagram.com/' className="link ml-7"><FaInstagram className='w-7 h-7'/></Link> 
          <Link target='_blank' to='https://www.linkedin.com/' className="link ml-7"><FaLinkedin className='w-7 h-7'/></Link> 
          <Link target='_blank' to='https://www.twitter.com/' className="link ml-7"><FaTwitterSquare className='w-7 h-7'/></Link>
        </div> 
        <div>
          <span className="footer-title -mr-4">Common Pages</span> 
          <a className="link link-hover ml-4 font-bold" href='#header'>Header</a> 
          <Link to='/' className="link link-hover ml-4 font-bold">Home</Link> 
          <Link to='/blogs' className="link link-hover ml-4 font-bold">Blogs</Link> 
          <Link to='/allToys' className="link link-hover ml-4 font-bold">All Toys</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover font-bold">Terms of use</a> 
          <a className="link link-hover font-bold">Privacy policy</a> 
          <a className="link link-hover font-bold">Cookie policy</a>
        </div>
        </div>
        <div className='border-t-[1px] border-white py-4'>
          <p className='text-center text-white font-semibold'><small><i>Copyright © 2023 Marvelous-Toy.com</i></small></p>
        </div>
      </footer>
    );
};

export default Footer;