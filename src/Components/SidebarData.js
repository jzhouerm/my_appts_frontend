import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaIcons.FaRegChartBar/>,
    cName: 'sidenav-text'
  },
  {
    title: 'New Client',
    path: '/newclient',
    icon: <FaIcons.FaUserPlus />,
    cName: 'sidenav-text'
  },
  {
    title: 'Active Clients',
    path: '/clients',
    icon: <FaIcons.FaUserPlus/>,
    cName: 'sidenav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaIcons.FaClipboardList />,
    cName: 'sidenav-text'
  }
];

