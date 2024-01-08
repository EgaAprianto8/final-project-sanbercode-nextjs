"use client";

import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-white justify-center flex items-center">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="w-full h-auto px-4 py-6 lg:pt-8">
            <div className="sm:flex sm:items-center justify-center">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 SozMed. All Rights Reserved.
                </span>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
