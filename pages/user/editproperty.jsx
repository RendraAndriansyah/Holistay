import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";

import axios from "axios";

const EditProperty = () => {
  const [proper, setProper] = useState("");

  const getPropById = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/ACHMADQIZWINI4_1/GP3_Kelompok3/1.0.0/properties/1`
      )
      .then((res) => {
        setProper(res.data.data);
      });
  };

  console.log(proper);
  useEffect(() => {
    getPropById();
  }, []);

  const alertDone = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Properties was edited",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <Layout titlePage={"Add Property"}>
      <div className="flex flex-row h-full">
        <div className="basis 1/5  w-80 "></div>
        <div className=" w-full pt-10">
          <h2 className="text-3xl font-semibold text-alta-dark">
            Edit Properties
          </h2>
          <div action="">
            <div className="flex flex-row pt-8 ">
              <div className="flex flex-col text-xl gap-5">
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Properties Name </span>
                  <input
                    type="text"
                    className="input  input-bordered w-96 max-w-5xl "
                    defaultValue={proper?.property_name}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Price </span>
                  <input
                    type="text"
                    placeholder="790000"
                    className="input input-bordered w-96 max-w-2xl "
                    defaultValue={proper?.price_per_night}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Description </span>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-96 max-w-2xl "
                    defaultValue={proper?.description}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Address </span>
                  <input
                    type="text"
                    placeholder="Jl. Raya Puncak No. 48"
                    className="input input-bordered w-96 max-w-2xl"
                    defaultValue={proper?.address}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">City </span>
                  <input
                    type="text"
                    placeholder="bogor"
                    className="input input-bordered w-96 max-w-2xl "
                    defaultValue={proper?.city}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Contact </span>
                  <input
                    type="text"
                    placeholder="087512344321"
                    className="input input-bordered w-96 max-w-2xl "
                    defaultValue={proper?.contact_number}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Facilities </span>
                  <input
                    type="text"
                    placeholder="3 Bedroom - TV Cable - Free Wifi - 2 Bathroom "
                    className="input input-bordered w-96 max-w-2xl "
                    defaultValue={proper?.facilities}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">property Type </span>
                  <select className="select select-bordered w-full max-w-sm">
                    <option>House</option>
                    <option>Apartement</option>
                    <option>guesthouse</option>
                    <option>Hotel</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between pr-40"
                >
                  <span className="">Images </span>
                </label>
                <div className="flex flex-row justify-end py-5 gap-5">
                  <button className="border-2 border-alta-dark w-24 h-8 text-alta-dark rounded-md">
                    Cancel
                  </button>
                  <button
                    className="bg-alta-dark w-24 h-8 text-white rounded-md"
                    onClick={() => alertDone()}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProperty;
