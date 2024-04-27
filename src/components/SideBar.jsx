import { Sidebar, SidebarItem, SidebarItemGroup } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  HiArrowSmRight,
  HiUser,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import toast from 'react-hot-toast';

const SideBar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    toast.success('sign Out successfully.!!');
    navigate('/');
  };
  return (
    <Sidebar className="w-full md:w-56">
      <SidebarItemGroup className="flex flex-col gap-1">
        <Link to="/dashboard?tab=profile">
          <SidebarItem as="div" label="User" labelColor="dark" icon={HiUser}>
            Profile
          </SidebarItem>
        </Link>

        <Link to="/dashboard?tab=upload">
          <SidebarItem as="div" labelColor="dark" icon={HiDocumentText}>
            Upload Video
          </SidebarItem>
        </Link>

        <Link to="/dashboard?tab=uploaded">
          <SidebarItem as="div" labelColor="dark" icon={HiDocumentText}>
            All Video
          </SidebarItem>
        </Link>

        <SidebarItem
          as="div"
          labelColor="dark"
          icon={HiArrowSmRight}
          className="cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </SidebarItem>
      </SidebarItemGroup>
    </Sidebar>
  );
};

export default SideBar;
