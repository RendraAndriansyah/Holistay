import React, { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {
  const [cookie, removeCookie] = useCookies();
  const [data, setData] = useState("");
  const getUserById = async () => {
    await axios
      .get(`https://irisminty.my.id/users/${cookie.id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  };

  useEffect(() => {
    getUserById();
  }, []);

  const onLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#17345f",
      confirmButtonText: "Yes, sure",
      cancelButtonColor: "#F47522",
      cancelButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "logout success, see you 👋🏻",
          showConfirmButton: false,
          timer: 1500,
        });
        removeCookie("token");
        removeCookie("name");

        Router.push({ pathname: `/auth/login` });
      }
    });
  };

  return (
    <div className="navbar h-20 w-full bg-alta-dark px-20 py-4">
      <div className="flex-1">
        <a
          className="hover:scale-110"
          onClick={() => Router.push({ pathname: `/` })}
        >
          <Image
            src={"./../public/logo-ALTA-v2@2x.png"}
            width={90}
            height={40}
            alt={"logo"}
          />
        </a>
      </div>
      <div className="flex-none gap-2">
        <p className="text-lg font-semibold text-alta-light">
          {data.full_name}
        </p>

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar border border-alta-light"
          >
            <div className="w-10 rounded-full">
              {/* <img src="https://placeimg.com/80/80/people" /> */}
              <img src={data.profile_image_url} />
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
