import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdat] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdat({ ...formdata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post(
        `http://localhost:4000/users/signup`,
        formdata
      );
      if (resp.data.status == true) {
        toast.success(resp.data.message);
        setLoading(false);
        navigate('/');
      } else {
        toast.error(resp.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5">
        {/* Left Side Div */}
        <div className="flex-1">
          <Link  className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              My
            </span>
            Player
          </Link>
          <p className="text-md mt-5">Welcome to our page, Sign Up here</p>
        </div>

        {/* Right side Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
            <div className="">
              <Label value="Your Username"></Label>
              <TextInput
                type="text"
                onChange={handleChange}
                placeholder="User Name"
                id="username"
                name="username"
              ></TextInput>
            </div>

            <div className="">
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                onChange={handleChange}
                placeholder="Password"
                id="password"
                name="password"
              ></TextInput>
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              {loading ? 'Loading...' : 'sign up'}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to="/" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
