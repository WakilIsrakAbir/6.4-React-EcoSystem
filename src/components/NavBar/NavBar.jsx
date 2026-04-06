import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navData.map((route) => (
      <Link key={route.id} route={route}></Link>
    ));

    return (
      <nav className="flex justify-between mx-10 my-10">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
          <ul
            className={`md:hidden absolute duration-1000 rounded-md bg-purple-300 ${open ? "top-11 left-20" : "-top-40"}`}
          >
            {links}
          </ul>
          <h3 className="ml-4">My Navbar</h3>
        </span>
        <ul className="md:flex hidden gap-10 justify-center">{links}</ul>

        {/* <ul className="flex gap-10 justify-center">
          {navData.map((route) => (
            <li className="">
              <a href={route.path}> {route.name} </a>
            </li>
          ))}
        </ul> */}

        {/* <ul className="flex gap-10 justify-center">
          <li className=''><a href="./home">Home</a></li>
          <li className=''><a href="./about">About</a></li>
          <li className=''><a href="./Blog">Blog</a></li>
        </ul> */}

        <button>Sign In</button>
      </nav>
    );
};

export default NavBar;