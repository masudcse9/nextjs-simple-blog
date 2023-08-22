"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MasterHeader = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-categories"
      );
      const data = await res.json();
      setMenu(data);
      //console.log(data);
    })();
  }, []);

  return (
    <div>
      <div className="navbar fixed z-50 shadow bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/category/${item.id}`}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">UI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`/category/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default MasterHeader;
