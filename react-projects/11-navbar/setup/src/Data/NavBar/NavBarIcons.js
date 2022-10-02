import React from 'react';
import {FaFacebook, FaLinkedin, FaBehance, FaTwitter} from 'react-icons/fa';


const navLinks= [
{
    id:1,
    text: 'Home',
    url: '/Home',

},
{
    id:2,
    text: 'About',
    url: '/About',

},
{
    id:3,
    text: 'Projects',
    url: '/Projects',

},
{
    id:4,
    text: 'Contact',
    url: '/Contact',

},
{
    id:5,
    text: 'Profile',
    url: '/Profile',

},


]


const socialMediaIcons = [
    {
        id:6,
        url: 'https://www.facebook.com/',
        icon: <FaFacebook />,
    },
    {
        id:7,
        url: 'https://twitter.com/',
        icon: <FaTwitter />,
    },
    {
        id:8,
        url: 'https://www.linkedin.com/',
        icon: <FaLinkedin />,
    },
    {
        id:9,
        url: 'https://www.behance.net/',
        icon: <FaBehance />,
    },
    
    
    ]
    export const getSocialMediaIcons = () =>{
      return socialMediaIcons;
    }
    
    export const getNavLinks = () =>{
      return navLinks;
    }