import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from 'flowbite-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const DashProfile = () => {
  const navigate = useNavigate();
  const User = localStorage.getItem('userdata');
  const userData = JSON.parse(User);
  const username = userData.username;
  const [showModal, setShowModal] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    toast.success('sign Out successfully.!!');
    navigate('/signin');
  };
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" accept="image/*" hidden></input>
        <div className="relative  w-32 h-32 self-center cursor-pointer shadow-md rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRuNsQoNkXnEThZsZmLnpjW-XxmneN4Hr7xaGWofdlQ&s"
            alt="User Profile"
            className={`rounded-full object-cover w-full h-full border-8 border-[lightgray]`}
          />
        </div>
        <h1 className="text-2xl p-2 bg-blue-100 rounded text-center ">
          {username}
        </h1>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <Button
          className="w-full"
          gradientDuoTone="purpleToBlue"
          outline
          onClick={() => setShowModal(true)}
        >
          Sign Out
        </Button>

        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          popup
          size="md"
        >
          <ModalHeader />
          <ModalBody>
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                Are you sure ! You want to Logout from your account ?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={handleSignOut}>
                  Yes I'm sure
                </Button>
                <Button color="gray" onClick={() => setShowModal(false)}>
                  Cancle
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default DashProfile;
