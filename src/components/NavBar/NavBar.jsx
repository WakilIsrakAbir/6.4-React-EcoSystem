import React from 'react';
import Link from './Link';

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
    return (
      <nav>
        <ul className="flex gap-10 justify-center">
          {navData.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>

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
      </nav>
    );
};

export default NavBar;