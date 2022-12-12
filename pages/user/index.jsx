import React from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { useCallback } from "react";

const User = () => {
  const DellAcc = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
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
        // dispatch(clearUser());
        // removeCookie("userToken");
        // navigate("/");
      }
    });
  }, []);
  return (
    //My profile
    <>
      <div className="flex flex-row h-screen">
        <div className="basis-1/3 bg-sky-300 ">
          <Image
            src={"/sample.jpg"}
            width={250}
            height={250}
            alt="profile"
            className="flex m-auto w-72 h-72 mt-10 rounded-full"
          />
          <h2 className="text-center pt-5 text-3xl">M Rendra Andriansyah</h2>
        </div>
        <div className="basis-2/3 bg-red-200  ">
          <div className="m-10">
            <h1 className="text-5xl font-semibold ">My profile</h1>
            <hr className="mt-5 border-black border-2" />
            <form action="">
              <div className="flex flex-row pt-8 bg-yellow-200 ">
                <div className="flex flex-col text-xl gap-5">
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">Name </span>
                    <input
                      type="text"
                      placeholder="Rendra"
                      className="input  input-bordered w-96 max-w-2xl "
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
                    />
                  </label>
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">Password </span>
                    <input
                      type="password"
                      placeholder="********"
                      className="input input-bordered w-96 max-w-2xl "
                    />
                  </label>
                  <label
                    htmlFor=""
                    className="flex flex-row items-center gap-20 justify-between"
                  >
                    <span className="">New Password </span>
                    <input
                      type="password"
                      placeholder="enter your new password"
                      className="input input-bordered w-96 max-w-2xl "
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
                      />
                      <span className="mr-5">Male</span>
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary mr-2"
                      />
                      <span className="mr-5">Female</span>
                    </div>
                  </label>
                  <div className="flex flex-row justify-end pt-5 gap-5">
                    <button className="border-2 border-alta-dark w-24 h-8 text-alta-dark rounded-md">
                      Cancel
                    </button>
                    <button className="bg-alta-dark w-24 h-8 text-white rounded-md">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <button
              className="text-red-500 text-xl relative bottom-6 "
              onClick={DellAcc}
            >
              Delete Account ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
