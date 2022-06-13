import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ReportIcon from '@mui/icons-material/Report';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import profileLogo from "../images/Ellipse_2.png";

export const sidebardata= [

    {
        title: "Hello! Abeysekara N.V.K",
        imageURL: {profileLogo},
        link: "/profile",
    },

    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/Home",
    },

    {
        title: "Appointment",
        icon: <ListAltIcon />,
        link: "/Appointment",
    },

    {
        title: "ServiceManagement",
        icon: <EmojiPeopleIcon />,
        link: "/ServiceManagement",
    },

    {
        title: "AdminManagement",
        icon: <FamilyRestroomIcon />,
        link: "/AdminManagement",
    },

    {
        title: "ResidentManagement",
        icon: <FamilyRestroomIcon />,
        link: "/ResidentManagement",
    },

    {
        title: "SecurityManagement",
        icon: <HomeIcon />,
        link: "/SecurityManagement",
    },

    {
        title: "ComplaintManagement",
        icon: <ReportIcon />,
        link: "/ComplaintManagement",
    },

    {
        title: "Bill Management",
        icon: <AttachMoneyIcon />,
        link: "/Bill Management",
    },

    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/Settings",
    },

    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/Logout",
    },
];


