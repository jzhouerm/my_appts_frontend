import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'sidenav-text'
  },
  {
    title: 'New Client',
    path: '/newclient',
    icon: <FaIcons.FaCartPlus />,
    cName: 'sidenav-text'
  },
  {
    title: 'Active Clients',
    path: '/clients',
    icon: <IoIcons.IoIosPaper />,
    cName: 'sidenav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaIcons.FaCartPlus />,
    cName: 'sidenav-text'
  }
];

