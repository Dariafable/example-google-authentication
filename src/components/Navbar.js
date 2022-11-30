import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <Link to='/'>
        <h1 className='text-center text-2xl font-bold'>Firebase Google Auth & Context</h1>
      </Link>
      {user?.displayName ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <Link to='/signing'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;
