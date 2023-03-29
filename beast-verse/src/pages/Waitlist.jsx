import React, {useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import { MutatingDots } from 'react-loader-spinner';
// import { Navigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion' 

import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import axios from "axios";
import * as Yup from "yup";

const TextField = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <input
        className="px-6 w-full rounded-lg py-3 bg-slate-700 text-white shadow-lg shadow-blue-700/20 focus:outline-none focus:border-blue-200 border-x-4 border-blue-500"
        {...field} {...props} />
      <span className="text-red-500"><ErrorMessage component="div" name={field.name} className="error" /></span>
    </>
  );
};

//send formik data using axios


export default function Waitlist() {

  const sources = [
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'Youtube', label: 'Youtube' },
    { value: 'Google Recommendations', label: 'Google Recommendations' },
    { value: 'Family & Friends', label: 'Family & Friends' }
  ];

  //reference to formik so that data can be edited externally using functions
  const formikRef = useRef(null);

  //success submit checker
  const [isSuccess, setIsSuccess] = useState("");
  const [response, setResponse] = useState("");

  //loading checker
  const [isLoading, setLoading] = useState(false);

  const loadingHandle = (e)=>{
    setLoading(e);
  }

  const validate = Yup.object({
    name: Yup.string().max(100, "Must be within 60 characters or less").required("Required"),
    email: Yup.string().max(200, "Must be within 200 characters or less").required("Required"),
    discord: Yup.string().max(100, "Must be within 100 characters or less").required("Required"),
    socials: Yup.boolean().required("Required"),
    sources: Yup.string().required("*"),
    code: Yup.string()
  });

  const hashtags = "hashtags=beastverse,nftgame,P2E,Gaming";
  const tweet = "https://twitter.com/intent/tweet?" + hashtags + "&text=";
  const tweetmsg = tweet + "Hi!%20I%20just%20registered%20for%20@realbeastverse.%20My%20referral%20code%20is:%20" + response._id +"%20Head%20over%20to%20https://beastversegame.com/waitlist%20%20%20%20%20https://twitter.com/realbeastverse/status/1636992468662226945?s=20";

  return (
    <div className='font-Montserrat bg-gradient-to-br from-black via-slate-900 to-blue-900 pb-20'>

      <Navbar delay={1}/>

      {response?
      <div className='pt-40 px-40 max-[740px]:px-5'>
        <div className='container mx-auto flex flex-col items-center justify-center bg-blue-400/10 border-2 border-blue-400 rounded-xl pb-10 px-20 max-[740px]:px-5'>
          <img src={logo} className="mx-auto w-80 mt-10" alt="bvlogo" />
          <h1 className=' text-center font-bold text-blue-500 text-4xl my-10'>Successfully Registered</h1>
          <h2 className='text-center font-bold text-red-500 text-xl max-[740px]:text-lg my-2'> COPY THE REFERRAL CODE </h2>
          <h2 className='text-center font-bold text-white px-8 py-3 max-[740px]:text-2xl bg-slate-200/20 rounded-full w-fit text-4xl mb-10'>{response._id}</h2>
          <h2 className='text-center font-normal text-slate-300 text-lg my-2'> LET FRIENDS KNOW ABOUT BEAST-VERSE <br /> TELL THEM TO USE YOUR REFERRAL CODE WHEN REGISTERING & WIN EXCITING PRIZES </h2>
          
                <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href={tweetmsg} target="_blank"
                className=' flex flex-row gap-2 items-center hover:border-blue-900 mt-10 rounded-2xl shadow-xl hover:shadow-sm font-bold text-2xl bg-gradient-to-br from-slate-900 to-blue-500 hover:to-slate-900 hover:from-blue-500 text-white py-4 px-16 cursor-pointer'>
                   <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"/></svg>
                  <span> Tweet Now </span>
                </motion.a>
          
        </div>
        </div>:
        null
      }

      {/* Form */}
      <Formik
          innerRef={formikRef}
          initialValues={{
          name: "",
          email: "",
          discord: "",
          socials: false,
          sources: "",
          code: ""
        }}
        validationSchema={validate}
        onSubmit={(values)=>{
          loadingHandle(true)
          //API call
          axios.post('https://bv-backend-one.vercel.app/api/addwaitlist', values, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => {
              console.log('Form submitted successfully!', response);
              if(response.status === 200){
                setIsSuccess("OK");
                setResponse(response.data);
                loadingHandle(false);
              }
              else{
                setIsSuccess("ERR");
                loadingHandle(false);
              }
            })
            .catch(error => {
              console.error('An error occurred while submitting the form:', error);
              setIsSuccess("ERR");
              loadingHandle(false);
            });
        }}
        >
           {({ errors, touched }) => (
          <Form className={`pt-40 px-40 max-[740px]:px-1 ${isSuccess==="OK"?"hidden":"block"}`}>
            <div className='container mx-auto bg-blue-400/10 border-2 border-blue-400 rounded-xl pb-10 px-20 max-[740px]:px-5'>
              <h1 className='text-center font-bold text-blue-300 text-4xl my-10'>Join Waitlist</h1>

              {/* <!-- External Link --> */}
              <div className="mb-6 ">
                <label
                  htmlFor="item-external-link"
                  className="text-xl mb-2 block text-blue-400"
                >
                  Name
                </label>
                <TextField
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-6 ">
                <label
                  htmlFor="item-external-link"
                  className="text-xl mb-2 block text-blue-400"
                >
                  Email
                </label>
                <TextField
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-6 ">
                <label
                  htmlFor="item-external-link"
                  className="text-xl mb-2 block text-blue-400"
                >
                  Discord
                </label>
                <TextField
                  type="text"
                  name="discord"
                  placeholder="Enter Your Discord Name with tag"

                />
              </div>

              {/* Socials */}
              <div className="border-slate-100 relative mb-6 ">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <div>
                      <label className="text-xl block text-blue-400">
                        Have you followed all our socials?
                      </label>

                      <p className="text-slate-400 ">
                        <a href="https://discord.gg/JG9VAuJbD7" className='hover:text-blue-200'>Discord</a> | <a className='hover:text-blue-200' href="https://twitter.com/realbeastverse">Twitter</a> | <a className='hover:text-blue-200' href="https://www.instagram.com/realbeastverse/">Instagram</a>
                      </p>
                    </div>
                  </div>
                  <Field
                    id="socials"
                    type="checkbox"
                    name="socials"
                    className="checked:bg-blue-400 checked:focus:bg-blue-400 checked:hover:bg-blue-400 after:bg-slate-400 bg-slate-100 relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:transition-all checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                  />
                </div>

                
              </div>

              {/* <!-- How did you come to know about us? --> */}
              <div className="mb-6 ">
                <label htmlFor="item-supply" className="text-xl mb-2 block text-blue-400"> How did you come to know about us? <span className="text-red-500">{errors.sources}</span> </label>
                    <Field as="select"
                      name="sources"
                      className="px-6 w-full rounded-lg py-3 bg-slate-700 text-white shadow-lg shadow-blue-700/20 focus:outline-none focus:border-blue-200 border-x-4 border-blue-500"
                    >
                      <option disabled={true} value="" className="text-gray-400">Select Option</option>
                      {sources.map((option) => (
                        <option key={option.value} value={option.value} className="text-gray-400">
                          {option.label}
                        </option>
                      ))}
                </Field>
                </div>

                <div className="mb-6 ">
                <label
                  htmlFor="item-external-link"
                  className="text-xl mb-2 block text-blue-400"
                >
                  Referral Code
                </label>
                <TextField
                  type="text"
                  name="code"
                  placeholder="Enter Your Code"
                />
              </div>

                {/* <!-- Submit --> */}
              <div className="flex felx-row items-center justify-center  mt-10">
                <button
                  id="btn-upload"
                  type="submit"
                  className="bg-blue-400 cursor-pointer hover:bg-blue-500 rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Join Waitlist
                </button>
                {isLoading?
                <div className='flex items-center justify-center'>
                  <MutatingDots 
                    height="100"
                    width="100"
                    color="#3B81F6"
                    secondaryColor= '#5FA5F9'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>: null}
              </div>
              
              
              {/* {isSuccess==="OK"? <Navigate to="/success"/>:isSuccess==="ERR"?<Navigate to="/error"/>:null} */}
              
            </div>
          </Form>
          )}
      </Formik>
    </div>
  )
}
