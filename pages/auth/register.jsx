import Image from "next/image";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useCookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState("");
  const [seePwd, setSeePwd] = useState(false);
  const [cookie, setCookie] = useCookies();

  // const dataRegister = {
  //   full_name: name,
  //   email: email,
  //   password: password,
  //   phone: phone,
  //   gender: gender,
  //   file: file,
  // };

  const onRegister = async () => {
    const form = new FormData();
    form.append("full_name", name);
    form.append("email", email);
    form.append("password", password);
    form.append("phone", phone);
    form.append("gender", gender);
    form.append("file", file);

    console.log([...form]);

    // await axios.post(`https://irisminty.my.id/users`,{
    //   headers: {
    //     "Content-type": "multipart/form-data",
    //   },
    //   data : {formData}
    // })
    // }
    await axios
      .post(`https://irisminty.my.id/users`, form, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  // console.log(file)
  return (
    <div className="min-h-screen w-screen bg-alta-light grid place-items-center">
      <div className="rounded-[94px] w-[90vw] h-[95vh] bg-[#17345F] p-10 flex">
        <div className="w-[50%] h-full relative p-10">
          <div className="w-full flex justify-end items-center mt-10 ms-10 relative">
            <h1 className="font-bold text-5xl text-alta-light w-[300px]">
              Create new Experience with Airbnb
            </h1>
          </div>
          <Image
            src={"/../public/koper.png"}
            width={1200}
            height={800}
            className="absolute left-46 top-24"
            alt="gambar"
          />
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="card w-[433px] bg-alta-light shadow-xl px-5 py-0">
            <div className="card-body text-base">
              <div className="form-control w-full max-w-xs">
                <label className="label text-[#17345F]">
                  <span className="label-text text-[#17345F]">Username</span>
                </label>
                <input
                  type="email"
                  placeholder="Username"
                  className="input input-bordered border-[#17345F] w-full bg-alta-light caret-[#17345F] text-[#17345F] h-9"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label text-[#17345F]">
                  <span className="label-text text-[#17345F]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your@mail.com"
                  className="input input-bordered border-[#17345F] w-full bg-alta-light caret-[#17345F] text-[#17345F] h-9"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-[#17345F]">Password</span>
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <div
                      className="absolute top-3 right-3 items-center"
                      onClick={() => setSeePwd(!seePwd)}
                    >
                      {seePwd ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                    <input
                      type={seePwd ? `text` : "password"}
                      className="input border-[#17345F] bg-alta-light w-full caret-[#17345F] h-9 text-[#17345F]"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label text-[#17345F]">
                  <span className="label-text text-[#17345F]">Phone</span>
                </label>
                <input
                  type="email"
                  placeholder="089999999999"
                  className="input input-bordered border-[#17345F] w-full bg-alta-light caret-[#17345F] text-[#17345F] h-9"
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{12}"
                />
              </div>
              <div className="h-12 flex justify-start" id="gender">
                <label
                  className="label cursor-pointer peer-checked/male:text-[#17345F]"
                  for="male"
                >
                  <input
                    id="male"
                    type="radio"
                    name="radio-1"
                    className="radio border-alta-primary checked:bg-alta-primary peer/male"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="label-text text-black-default mx-3 font-semibold">
                    Male
                  </span>
                </label>
                <label
                  className="label cursor-pointer peer-checked/female:text-[#17345F]"
                  for="female"
                >
                  <input
                    id="female"
                    type="radio"
                    name="radio-1"
                    className="radio border-alta-primary checked:bg-alta-primary peer/female"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="label-text-black-default mx-3 font-semibold">
                    Female
                  </span>
                </label>
              </div>
              <input
                type="file"
                placeholder="Choose Image File"
                className="file:border-[#17345F] w-full bg-alta-light px-3 file:bg-alta-dark file:text-white file:h-full file:left-0 caret-alta-dark text-alta-dark h-9"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <div className="flex justify-center">
                <button
                  className="bg-[#17345F] text-alta-light h-[45px] w-full mt-3 rounded-lg text-lg"
                  onClick={() => onRegister()}
                >
                  Register
                </button>
              </div>
              <p className="text-[#17345F] text-base mt-2">
                Have an account ?
                <a
                  className="font-semibold cursor-pointer"
                  onClick={() => Router.push({ pathname: `/auth/login` })}
                >
                  {" "}
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
