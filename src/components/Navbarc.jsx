import {
  Navbar,
  TextInput,
  Button,
  NavbarToggle,
  Dropdown,
  Avatar,
} from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import toast from 'react-hot-toast';

const Navbarc = () => {
  const navigate = useNavigate();
  let token = '';
  let username = '';
  if (localStorage.getItem('token') !== null) {
    token = localStorage.getItem('token');
    const user = localStorage.getItem('userdata');
    const data = JSON.parse(user);
    username = data.username;
  }
  const path = useLocation().pathname;

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    toast.success('sign Out successfully.!!');
    navigate('/signin');
  };
  return (
    <Navbar className="border-b-2">
      <Link className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          My
        </span>
        Player
      </Link>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaSun />
        </Button>

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="user avatar"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRuNsQoNkXnEThZsZmLnpjW-XxmneN4Hr7xaGWofdlQ&s"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{username}</span>
          </Dropdown.Header>
          <Link to="/dashboard?tab=profile">
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item>Sign Out</Dropdown.Item>
        </Dropdown>

        {token ? (
          <Link to="/">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/dashboard'} as={'div'}>
          <Link to="/dashboard">Admin</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarc;
