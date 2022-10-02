import React, {useState, useRef, useEffect} from 'react';
import '../../CSS/NavBar/NavBar.css'
import {getSocialMediaIcons, getNavLinks} from '../../Data/NavBar/NavBarIcons'
import { FaBars } from 'react-icons/fa';


const NavBar = (iconsData, menuIconsData) =>{
    const [showLinksMobile, setShowLinksMobile] = useState(false);
    const [socialMediaIcons, setSocialMediaIcons] = useState(getSocialMediaIcons());
    const [navLinks, setNavLinks] = useState(getNavLinks());
    const menuContainer = useRef(null);
    const navLinksContainer = useRef(null);


 

    useEffect( () => {
        const navUlHeight = navLinksContainer.current.getBoundingClientRect().height;
        if(showLinksMobile){
            menuContainer.current.style.height =  `${navUlHeight + 30}px`; 
            //navLinksContainer.current.style.visibility = "visible";
        }else{
            menuContainer.current.style.height = '0px';
           
            //navLinksContainer.current.style.visibility = "hidden";
            
        }
    },[showLinksMobile])
    return (

        

        // Retrieve Data
        // Map through icons menu and display text
        // Map through icons Data and display Icons
        // use effect will host useeffect for menu items
        // use State to rerender

        <div className ="nav-bar-container">
            <div className='logo-div'>
                <p><span className='coding-span'>Coding</span> <span className='addict-span'>Addict</span></p>
            </div>

            <div className='nav-links-div hide-element'>
            {navLinks.map((navLink)=>{
                return <a key={navLink.id} href={navLink.url}>{navLink.text}</a>
            })
            }
            </div>


            <div className='icons-div hide-element'>
            {socialMediaIcons.map((socialMediaIcon)=>{
                return <a key ={socialMediaIcon.key} href={socialMediaIcon.url}>{socialMediaIcon.icon}</a>
            })
            }
            </div>

            <div className='toggle-div' onClick={()=>setShowLinksMobile(!showLinksMobile)}>
                <FaBars className='fbar'/>
 
            </div>
                <div className="mobile-nav-men-div" ref={menuContainer}>
                <ul className='mobile-nav-menu' ref={navLinksContainer}>

                    {navLinks.map((navLink)=>{
                    return <a key={navLink.id} href={navLink.url}><li>{navLink.text}</li></a>
                    })
                    }
                </ul>

                </div>

        </div>
    )
}


export default NavBar;

