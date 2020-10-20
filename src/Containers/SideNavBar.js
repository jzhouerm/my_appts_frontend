import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { FaBeer } from 'react-icons/fa' //alternative
import { Link } from 'react-router-dom';
import { SidebarData } from '../Components/SidebarData';
import '../CSS/SideNavBar.css';
import { IconContext } from 'react-icons';

function SideNavBar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidenavbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <span className='sidenav-business-name'>{props.userObj.business_name}</span>
          
        </div>

        <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
          <ul className='sidenav-menu-items' onClick={showSidebar}>
            <li className='sidenavbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />

              </Link>

            </li>
        <span className='sidenav-business-name'>{props.userObj.business_name}</span>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='sidenavbar-item'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNavBar;