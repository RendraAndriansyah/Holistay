import React, { useState, useEffect } from "react";
import { HiOutlineSelector } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import Layout from "../../components/Layout";
import { getMaxListeners } from "process";
import { useCookies } from "react-cookie";
import Modal from "../../components/Modal";
import Router from "next/router";
import ModalE from "../../components/ModalE";

const Historytrip = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [cookie] = useCookies();
  const [idP, setId] = useState();
  const getList = () => {
    axios
      .get("https://irisminty.my.id/bookings", {
        headers: { authorization: `bearer ${cookie.token}` },
      })
      .then((res) => {
        setLoading(true);
        setList(res.data.data);
        setId(res.data.data.property_id);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  const nextPage = (id) => {
    Router.push({ pathname: `/property`, query: { param: id } });
  };

  return (
    <Layout titlePage={"History Trip"}>
      <div className="m-auto w-[60vw]">
        <div className="flex my-4">
          <h1 className="flex flex-1 text-5xl text-alta-dark font-bold">
            TRIP
          </h1>
        </div>
        <div className="border-b-2"></div>
        {list.map((item) => {
          return (
            <div className="hover:bg-slate-200" key={item.id}>
              <div className="grid">
                <h1
                  className="text-alta-dark text-2xl font-bold my-2"
                  onClick={() => {
                    nextPage(item.property_id);
                  }}
                >
                  {item.property_name}
                </h1>
                <div className="">
                  <div className=" dropdown dropdown-bottom  rounded-box text-alta-dark">
                    <label
                      tabIndex={0}
                      className=" bg-slate-200 text-alta-dark m-1 btn hover:text-white hover:bg-alta-dark "
                    >
                      {item.checkin_date}{" "}
                      <HiOutlineSelector size={20} className="mx-1" />
                    </label>
                  </div>
                  <div className="dropdown dropdown-bottom  rounded-box text-alta-dark">
                    <label
                      tabIndex={0}
                      className="btn bg-slate-200 text-alta-dark m-1 hover:text-white hover:bg-alta-dark"
                    >
                      {item.checkout_date}{" "}
                      <HiOutlineSelector size={20} className="mx-1" />
                    </label>
                  </div>
                  <h1 className="text-alta-dark text-xl my-2">
                    ${item.price_per_night} /Night
                  </h1>
                </div>
              </div>
              <div className="flex">
                <h1 className="text-alta-dark text-3xl font-bold  flex-1">
                  Total Price : ${item.gross_amount}
                </h1>
                <div className="flex-end">
                  <label htmlFor="my-modal-3" className="btn bg-alta-dark ml-2">
                    EDIT
                  </label>
                  <label htmlFor="my-modal-4" className="btn bg-alta-dark ml-2">
                    GIVE FEEDBACK
                  </label>
                </div>
              </div>
              <div className="border-b-2 my-3"></div>
            </div>
          );
        })}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <Modal />
          </label>
        </label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <label htmlFor="my-modal-3" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <ModalE />
          </label>
        </label>
      </div>
    </Layout>
  );
};

export default Historytrip;
