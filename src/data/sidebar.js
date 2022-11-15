import React from "react";
import { BsCamera, BsChat, BsBell, BsTruck } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { TbLayoutDashboard } from 'react-icons/tb'
import { HiOutlineUserGroup } from 'react-icons/hi'


export const links = [
    {
        id: 1,
        url: '',
        text: 'dashboard',
        icon: <TbLayoutDashboard />
    },
    {
        id: 2,
        url: 'plant-care',
        text: 'plant care',
        icon: <BsCamera />
    },
    {
        id: 3,
        url: 'live-chat',
        text: 'live chat',
        icon: <BsChat />
    },
    {
        id: 4,
        url: 'logistics',
        text: 'logistics',
        icon: <BsTruck />
    },
    {
        id: 5,
        url: 'forum',
        text: 'forum',
        icon: <HiOutlineUserGroup />
    },
    {
        id: 6,
        url: 'notifications',
        text: 'notifications',
        icon: <BsBell />
    },
    {
        id: 7,
        url: 'settings',
        text: 'settings',
        icon: <CiSettings />
    },
]