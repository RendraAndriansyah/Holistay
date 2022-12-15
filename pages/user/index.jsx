import axios from "axios";
import Router from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";

export const config = {
  api: {
    bodyParser: false,
  },
};
const User = () => {
  const [cookie, removeCookie] = useCookies();
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState("");

  const onSubmit = () => {
    // === HANDLE PASSWORD EMPTY ===
    if (password.length == 0) {
      Swal.fire({
        icon: "error",
        text: "Password still empty!",
      });
    } else {
      editUser();
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Your profile has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    console.log(dataEdit);
  };

  let dataEdit = {
    full_name: !name ? data.full_name : name,
    email: !email ? data.email : email,
    phone: !phone ? data.phone : phone,
    gender: !gender ? data.gender : gender,
    password: password,
    file: file,
  };

  // GET DATA USER //
  const getUserById = async () => {
    await axios
      .get(`https://irisminty.my.id/users/${cookie.id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        setData(res.data.data);
      });
  };

  // EDIT USER //
  const editUser = async () => {
    await axios
      .put(`https://irisminty.my.id/users/${cookie.id}`, dataEdit, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        // Router.reload();
      });
  };

  // DELETE DATA USER //
  const delUser = async () => {
    await axios
      .delete(`https://irisminty.my.id/users/${cookie.id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const DellAcc = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#17345f",
      confirmButtonText: "Yes, delete",
      cancelButtonColor: "#F47522",
      cancelButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Your account has deleted, see you 👋🏻",
          showConfirmButton: false,
          timer: 1500,
        });
        delUser();
        removeCookie("token");
        Router.push({ pathname: `/auth/login` });
      }
    });
  }, []);

  useEffect(() => {
    getUserById();
  }, []);
  return (
    //My profile
    <Layout titlePage="My Profile">
      <div className="flex flex-row h-[88vh]">
        <div className="basis-1/3 ">
          <img
            src={data.profile_image_url}
            alt="profile"
            className="flex m-auto w-72 h-72 mt-10 rounded-full object-cover"
          />
          <h2 className="text-center border-alta-dark pt-5 text-3xl">
            {data.full_name}
          </h2>
        </div>
        <div className="basis-2/3  text-alta-dark ">
          <div className="m-10">
            <h1 className="text-5xl font-semibold ">My profile</h1>
            <hr className="mt-5 border-alta-dark border-2" />
            <div action="">
              <div className="flex flex-row pt-8  ">
                <div className="flex flex-col text-xl gap-5">
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">Name </span>
                    <input
                      type="text"
                      placeholder={data.full_name}
                      className="input  input-bordered w-96 max-w-2xl "
                      defaultValue={data.full_name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </label>
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">Email </span>
                    <input
                      type="email"
                      placeholder="rendra@gmail.com"
                      className="input input-bordered w-96 max-w-2xl "
                      defaultValue={data.email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </label>

                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">Phone </span>
                    <input
                      type="text"
                      placeholder="085134542343"
                      className="input input-bordered w-96 max-w-2xl "
                      defaultValue={data.phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between pr-40"
                  >
                    <span className="">Gender </span>
                    <div className="flex justify-start items-center">
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary mr-2"
                        value="male"
                        onChange={(e) => setGender(e.currentTarget.value)}
                      />
                      <span className="mr-5">Male</span>
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary mr-2"
                        value="female"
                        onChange={(e) => setGender(e.currentTarget.value)}
                      />
                      <span className="mr-5">Female</span>
                    </div>
                  </label>
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">New Password </span>
                    <input
                      id="inputpass"
                      type="password"
                      placeholder="enter your new password"
                      className="input input-bordered w-96 max-w-2xl"
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                  </label>
                  {/* <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">New Picture </span>
                    <input
                      type="file"
                      placeholder=""
                      className="file:border-alta-dark input bg-alta-light px-3 file:bg-alta-dark file:text-white file:h-full file:left-0 caret-alta-dark text-alta-dark h-9 mx-16"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label> */}
                  <div className="flex flex-row justify-end gap-5">
                    <button
                      className="border-2 border-alta-dark w-24 h-8 text-alta-dark rounded-md"
                      onClick={() => Router.back()}
                    >
                      Cancel
                    </button>
                    <button
                      id="submit-form"
                      className="  bg-alta-dark w-24 h-8 text-white rounded-md"
                      onClick={() => onSubmit()}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-red-500 text-xl relative bottom-6 "
              onClick={DellAcc}
            >
              Delete Account ?
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
