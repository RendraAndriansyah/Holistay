import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

import axios from "axios";
import { useCookies } from "react-cookie";

const EditProperty = () => {
  const [cookie] = useCookies();
  const router = useRouter();
  const id = router.query.param;
  const [proper, setProper] = useState("");

  const [propName, setPropName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [facilities, setFacities] = useState("");
  const [type, setType] = useState("");
  const [file, setFiles] = useState("");

  // GET VALUE PROPERTIES //
  const getPropById = async () => {
    await axios
      .get(`https://irisminty.my.id/properties/15`, {
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

    console.log([...form]);

    await axios
      .put(`https://irisminty.my.id/properties/15`, form, {
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
                  <input
                    type="text"
                    placeholder="bogor"
                    className="input input-bordered w-96 max-w-2xl "
                    defaultValue={proper?.city}
                    onChange={(e) => setCity(e.currentTarget.value)}
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
                <div className="flex flex-row justify-end py-5 gap-5">
                  <button className="border-2 border-alta-dark w-24 h-8 text-alta-dark rounded-md">
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
