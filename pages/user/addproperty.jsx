import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import Router from "next/router";

const AddProperty = () => {
  const [cookie] = useCookies();

  const [propName, setPropName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [facilities, setFacities] = useState("");
  const [type, setType] = useState("");
  const [file, setFiles] = useState("");

  const add = async () => {
    const form = new FormData();
    form.append("property_name", propName);
    form.append("price_per_night", price);
    form.append("description", desc);
    form.append("address", address);
    form.append("city", city);
    form.append("contact_number", contact);
    form.append("facilities", facilities);
    form.append("property_type", type);
    form.append("file", file);

    await axios
      .post(`https://irisminty.my.id/properties`, form, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          "Content-type": "multipart/form-data",
        },
      })
      .then(
        (res) => console.log(res),
        Router.push({ pathname: "/user/myproperties" })
      )
      .catch((err) => console.log(err));
  };

  const alertDone = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Properties successfully added",
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
            Add New Properties
          </h2>
          <div action="">
            <div className="flex flex-row pt-8  ">
              <div className="flex flex-col text-xl gap-5">
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Properties Name </span>
                  <input
                    type="text"
                    placeholder="Villa Alterra Premium"
                    className="input  input-bordered w-96 max-w-2xl "
                    onChange={(e) => setPropName(e.target.value)}
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
                    onChange={(e) => setPrice(e.target.value)}
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
                    onChange={(e) => setDesc(e.target.value)}
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
                    className="input input-bordered w-96 max-w-2xl "
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">City </span>
                  <select
                    className="select select-bordered w-full max-w-sm"
                    // defaultValue={"jakarta"}
                    defaultValue="jakarta"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    <option value={"aceh"}>ACEH</option>
                    <option value={"bandung"}>BANDUNG</option>
                    <option value={"bali"}>BALI</option>
                    <option value={"batam"}>BATAM</option>
                    <option value={"bogor"}>BOGOR</option>
                    <option value={"jakarta"}>JAKARTA</option>
                    <option value={"lombok"}>LOMBOK</option>
                    <option value={"makassar"}>MAKASSAR</option>
                    <option value={"palembang"}>PALEMBANG</option>
                    <option value={"semarang"}>SEMARANG</option>
                    <option value={"sumba"}>SUMBA</option>
                    <option value={"surabaya"}>SURABAYA</option>
                    <option value={"yogyakarta"}>YOGYAKARTA</option>
                  </select>
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
                    onChange={(e) => setContact(e.target.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Facilities </span>
                  <textarea
                    type="text"
                    placeholder="3 Bedroom - TV Cable - Free Wifi - 2 Bathroom "
                    className="textarea textarea-bordered w-96 max-w-2xl h-28"
                    onChange={(e) => setFacities(e.target.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">property Type </span>
                  <select
                    className="select select-bordered w-full max-w-sm"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value={"House"}>House</option>
                    <option value={"Apartement"}>Apartement</option>
                    <option value={"GuestHouse"}>guesthouse</option>
                    <option value={"Hotel"}>Hotel</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Image </span>
                  <input
                    type="file"
                    placeholder=""
                    className="file:border-alta-dark input bg-alta-light px-3 file:bg-alta-dark file:text-white file:h-full file:left-0 caret-alta-dark text-alta-dark h-9 mx-16"
                    onChange={(e) => setFiles(e.target.files[0])}
                  />
                </label>
                <div className="flex flex-row justify-end py-5 gap-5">
                  <button
                    className="border-2 border-alta-dark w-24 h-8 text-alta-dark rounded-md
                  "
                    onClick={() => Router.back()}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-alta-dark w-24 h-8 text-white rounded-md"
                    onClick={() => {
                      return alertDone(), add();
                    }}
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

export default AddProperty;
