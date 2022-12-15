import React, { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookie, removeCookie] = useCookies();

  // const [auth, setAuth] = useState(cookie.token);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(cookie.image);
    setName(cookie.name);
  });

  const onLogout = () => {
    Router.push({ pathname: `/auth/login` });
    removeCookie("name");
    removeCookie("token");
  };

  return (
    <div className="navbar h-20 w-full bg-alta-dark px-20 py-4">
      <div className="flex-1">
        <a
          className="hover:scale-110"
          onClick={() => Router.push({ pathname: `/` })}
        >
          <Image
            src={"/../public/logo-ALTA-v2@2x.png"}
            width={90}
            height={40}
            alt={"logo"}
          />
        </a>
      </div>
      <div className="flex-none gap-2">
        <p className="text-lg font-semibold text-alta-light">{name}</p>

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar border border-alta-light"
          >
            <div className="w-10 rounded-full">
              {/* <img src="https://placeimg.com/80/80/people" /> */}
              <img src={image} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-alta-light rounded-box w-40"
          >
            <li>
              <a
                className="text-alta-dark"
                onClick={() => Router.push({ pathname: `/user` })}
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                className="text-alta-dark"
                onClick={() => Router.push({ pathname: `/user/myproperties` })}
              >
                My Properties
              </a>
            </li>
            <li>
              <a
                className="text-alta-dark"
                onClick={() => Router.push({ pathname: `/user/historytrip` })}
              >
                History Trip
              </a>
            </li>
            <li>
              <a className="text-alta-dark" onClick={() => onLogout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
