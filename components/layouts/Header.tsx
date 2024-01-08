'use client';

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { BsChatSquareTextFill } from "react-icons/bs";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";

const Header = () => {
  const [nav, setNav] = useState(false)
  const [color,setColor] = useState('transparent')
  const [textColor,setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  const router = useRouter();

  const logOut = async () => {
    document.cookie =
      "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    try {
      await axios.get("https://paace-f178cafcae7b.nevacloud.io/api/logout");
    } catch (error) {
      console.log(error);
    }
    router.push("/login");
  };


  return (
    <div className="bg-[#2e2e2e] fixed left-0 top-0 w-full z-[999] ease-in duration-300">
      <div className="w-full m-auto flex justify-between items-center text-white my-[6px]">
        <Link href="/">
          <div className="w-full flex justify-center items-center ">
            <div className="relative sm:w-[110px] sm:h-[110px] flex flex-col items-center justify-center">
              <div className="sm:flex hidden">
                <BsChatSquareTextFill
                  size={50}
                  className="sm:ml-4 sm:p-4 mr-2 ml-1 p-2 w-[400px] h-[400px] sm:w-auto sm:h-auto"
                />
              </div>
              <div className="flex sm:hidden">
                <BsChatSquareTextFill
                  size={5}
                  className="sm:ml-4 sm:p-4 mr-2 ml-1 p-2 h- sm:w-auto sm:h-auto"
                />
              </div>
            </div>
          </div>
        </Link>
        <div className="flex justify-center font-bold text-xl items-center p-4 hover:text-[#e6a14f] hover:border-b-2 hover:border-[#e6a14f] transform hover:scale-110 hover:mt-2 hover:font-bold ">
          <Link href="/">Home</Link>
        </div>

        <ul className="hidden sm:flex font-semibold mr-4">
          <li>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Link href={"/profile"}>
                  <Dropdown.Item>My Profile</Dropdown.Item>
                </Link>
                <Dropdown.Item>Notification</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          </li>
        </ul>

        {/*Hamburger Button*/}
        <div className="block sm:hidden z-10 p-2" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={28} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={28} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/*Mobile Header*/}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-[100vh] bg-[#2e2e2e] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-[100vh] bg-[#2e2e2e] text-center ease-in duration-300"
          }
        >
          <ul className='gap-4'>
            <li >
              <div className="flex items-center justify-center">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded
                    />
                  }
                >
                  <Link href={"/profile"}>
                    <Dropdown.Item>My Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Item>Notification</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            </li>
            <li className='p-4 text-4xl font-bold hover:text-[#e6a14f] hover:border-b-2 hover:border-[#e6a14f] transform hover:scale-110 hover:mt-2 hover:font-bold'>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header