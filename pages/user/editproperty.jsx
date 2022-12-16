import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import Router, { useRouter } from "next/router";

import axios from "axios";
import { useCookies } from "react-cookie";

const EditProperty = () => {
  const [cookie] = useCookies();
  const router = useRouter();
  const id = router.query.param;
  const [proper, setProper] = useState("");

  // STATE FOR EDIT //
  const [propName, setPropName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [facilities, setFacities] = useState("");
  const [type, setType] = useState("");
  const [file, setFiles] = useState("");

  // STATE FOR POST GALLERY
  const [title, setTitle] = useState();
  const [fileGall, setFileGall] = useState();

  // GET VALUE PROPERTIES //
  const getPropById = async () => {
    await axios
      .get(`https://irisminty.my.id/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        setProper(res.data.data);
      });
  };
  // PUT EDIT PROPERTIES //
  const edit = async () => {
    const form = new FormData();
    form.append("property_name", !propName ? proper.property_name : propName);
    form.append("price_per_night", !price ? proper.price_per_night : price);
    form.append("description", !desc ? proper.description : desc);
    form.append("address", !address ? proper.address : address);
    form.append("city", !city ? proper.city : city);
    form.append("contact_number", !contact ? proper.contact_number : contact);
    form.append("facilities", !facilities ? proper.facilities : facilities);
    form.append("property_type", !type ? proper.property_type : type);
    form.append("file", !file ? proper.image_thumbnail_url : file);

    await axios
      .put(`https://irisminty.my.id/properties/${id}`, form, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // POST GALLERY
    const addGall = new FormData();
    addGall.append("title", title);
    addGall.append("property_id", id);
    addGall.append("file", fileGall);

    await axios
      .post(`https://irisminty.my.id/property_images`, addGall, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
    <Layout titlePage={"Edit Property"}>
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
                    onChange={(e) => setPropName(e.currentTarget.value)}
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
                    onChange={(e) => setPrice(e.currentTarget.value)}
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
                    onChange={(e) => setDesc(e.currentTarget.value)}
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
                    onChange={(e) => setAddress(e.currentTarget.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">City </span>

                  <select
                    className="select select-bordered w-full max-w-sm"
                    defaultValue={proper?.city}
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
                    defaultValue={proper?.contact_number}
                    onChange={(e) => setContact(e.currentTarget.value)}
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
                    className="textarea textarea-bordered w-96 max-w-2xl h-20"
                    defaultValue={proper?.facilities}
                    onChange={(e) => setFacities(e.currentTarget.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">property Type </span>
                  <select
                    className="select select-bordered w-full max-w-sm"
                    onChange={(e) => setType(e.currentTarget.value)}
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
                <hr className="mt-5 border-alta-dark border-1" />
                <p className="text-2xl font-bold"> Add more images</p>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Title Image </span>
                  <input
                    type="text"
                    placeholder="Swimming pool"
                    className="input input-bordered w-96 max-w-2xl "
                    onChange={(e) => setTitle(e.currentTarget.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-row items-center gap-20 justify-between"
                >
                  <span className="">Images </span>
                  <input
                    type="file"
                    placeholder=""
                    className="file:border-alta-dark input bg-alta-light px-3 file:bg-alta-dark file:text-white file:h-full file:left-0 caret-alta-dark text-alta-dark h-9 mx-16"
                    defaultValue={proper?.image_thumbnail_url}
                    onChange={(e) => setFileGall(e.target.files[0])}
                  />
                </label>

                <div className="flex flex-row justify-end py-5 gap-5">
                  <button
                    className="border-2 border-alta-dark w-24 h-8 text-alta-dark rounded-md"
                    onClick={() => Router.back()}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-alta-dark w-24 h-8 text-white rounded-md"
                    onClick={() => {
                      return alertDone(), edit();
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

export default EditProperty;
