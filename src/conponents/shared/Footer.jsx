import React from 'react';
import { Link } from 'react-router-dom';
import { FaMailBulk ,FaPhone ,FaRoute} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className=" body-font mt-6">
                <div className="container px-5 py-8 mx-auto grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="w-64 flex-shrink-0 mx-auto text-center">
                        <div className="flex title-font font-medium items-center justify-center ">
                        <img className='w-[25%] logo' src="https://cdn-icons-png.flaticon.com/512/189/189410.png?w=740&t=st=1686113052~exp=1686113652~hmac=6f038c8492c3ccac79cad83dddf59ea74babdf84ca941ee4ab7c0e1be5e36a40" alt="" />
                        <span className="ml-3 text-2xl">LanceCraft</span>
                        </div>
                        <p className="mt-4 text-sm ">Where precision meets craftsmanship, bringing style and sophistication to elevate your lifestyle</p>
                    </div>
                    <div className="  text-center mx-auto">
                        <div className=''>
                       
                    <p className='flex font-medium items-center'><FaPhone className='mr-2' />0175500000</p>
                    <p className='flex font-medium items-center'><FaMailBulk className='mr-2' />lensCraft@info.com</p>
                    <p className='flex font-medium items-center'><FaRoute className='mr-2' />Gazipur , Dhaka , Bangladesh</p>
                        </div>
                        <div className="relative my-6">
        <input
          id="id-01"
          type="text"
          name="id-01"
          placeholder="send your question"
        //   value={state["id-01"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        //   onChange={handleChange}
        />
        <label
          htmlFor="id-01"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Send your Question
        </label>
        <button className="inline-flex mt-2 items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Send</span>
      </button>
      </div>
                        
                    </div>
                </div>
                <div className="bg-green-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 LanceCraft —
                            <Link to="https://github.com/jobayer-hossen" rel="noopener noreferrer" className="text-gray-600 ml-1 hover:text-green-500" target="_blank">@Jobayer-Hossen </Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link to='https://www.facebook.com/emon.hasan.201/' className="text-gray-500 hover:text-green-500">
                                <svg fill="currentColor" strokeLinecap="round" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link to="https://twitter.com/EMONHASAN00" className="ml-3 text-gray-500 hover:text-green-500">
                                <svg fill="currentColor" strokeLinecap="round" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link to='https://www.instagram.com/jobayer_hossen_emon/' className="ml-3 text-gray-500 hover:text-green-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link to='https://www.linkedin.com/in/jobayer-hossen-213a961b2/' className="ml-3 text-gray-500 hover:text-green-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"  className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;