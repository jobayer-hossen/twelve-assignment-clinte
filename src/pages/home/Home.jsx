import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ExtraSection from '../extrasection/ExtraSection';
import PopularClass from './PopularClass';
import PopularInstructors from './PopularInstructors';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <>

            <div className="flex justify-center w-[60%]">
                <div className="relative">
                    <div className="absolute logo-two top-2 lg:w-[510px] lg:h-[510px] sm:w-[300px] sm:h-[400px] filter logo-bg opacity-55 blur-xl ">
                    </div>
                </div>
            </div>
            <section>
                <div className="container px-6 m-auto ">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4 md:col-span-8 lg:col-span-12">





                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: false,
                                }}

                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {/* 1---------------- */}
                                <SwiperSlide>
                                    <section className=" body-font ">
                                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                            <div className="text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium ">Cooking a Better
                                                    <br className="hidden lg:inline-block" />Photograph
                                                </h1>
                                                <p className="mb-8 leading-relaxed ">How is it that two photographers can stand in the same place and make two very different photographs? What accounts for the frustrating reality that, in that moment, one photographer can make something truly compelling and beautiful while the results of the other’s efforts are underwhelming? Surely it can’t be just better gear. Sometimes it’s different gear.</p>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/huge-camera-tiny-people-taking-pictures-photographer-with-camera-photos-landscapes-flat-vector-illustration-photography-occupation-concept-banner-website-design-landing-web-page_74855-23089.jpg?w=740&t=st=1686135564~exp=1686136164~hmac=be08dcf09038cec13285e5e9e80424d38931c93fed95fe57266537c33d681b6f" />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 2------------------------------------ */}
                                <SwiperSlide>
                                    <section className=" body-font">
                                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                            <div className="text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium  ">The Art of
                                                    <br className="hidden lg:inline-block" />Photography
                                                </h1>
                                                <p className="mb-8 leading-relaxed ">Discover the profound beauty and creative expression found in every frame. Dive into the world of composition, lighting, and storytelling, and unlock the artistic potential within you. Embrace the artistry of photography and capture moments that transcend time.</p>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/professional-photographer-taking-pictures-young-woman-female-model-posing-camera-against-white-backdrop-among-studio-light-vector-illustration-photo-shooting-photography-concept_74855-10141.jpg?w=740&t=st=1686135753~exp=1686136353~hmac=084106b7e11d3b0f48a23d5cbb37b5fd24d9887b98bac0e58805da9ff9b3834a" />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 3--------------------------------- */}
                                <SwiperSlide>
                                    <section className=" body-font">
                                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                            <div className="text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium ">Essential Skills
                                                    <br className="hidden lg:inline-block" />for Beginners
                                                </h1>
                                                <p className="mb-8 leading-relaxed ">Lay the foundation for your photographic journey. Learn the fundamental techniques, camera settings, composition rules, and post-processing basics to kickstart your photography skills. Build a strong skillset and gain confidence in capturing stunning images.</p>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/cartoon-photographer-taking-photo-parents-kid-studio_74855-19730.jpg?w=740&t=st=1686135822~exp=1686136422~hmac=a752ff54172e8fa9f0354ddb9c72b547c3afa923eb4533007e01bb4c1ffb615e" />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 4-------------------------- */}
                                <SwiperSlide>
                                    <section className=" body-font">
                                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                            <div className="text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium ">Exploring the
                                                    <br className="hidden lg:inline-block" />World of Photography
                                                </h1>
                                                <p className="mb-8 leading-relaxed "> Embark on a captivating journey through the realms of photography. From landscape vistas to intimate portraits, delve into various genres, techniques, and equipment. Expand your creative horizons and uncover the limitless possibilities of visual storytelling.</p>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/flat-world-photography-day-background_23-2149508760.jpg?w=740&t=st=1686136055~exp=1686136655~hmac=e6627fb2f7f7c2eec4962858a3a43816bfe64aabd723237352896b9d545c1fd1" />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 5---------------------------------- */}
                                <SwiperSlide>
                                    <section className=" body-font">
                                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                            <div className="text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium ">A Journey
                                                    <br className="hidden lg:inline-block" />
                                                    Through the Lens
                                                </h1>
                                                <p className="mb-8 leading-relaxed "> Embark on a transformative expedition through the captivating world of photography. Immerse yourself in the art of visual storytelling, exploring diverse subjects, techniques, and perspectives. Experience the power of the lens as it captures the essence of moments, emotions, and the beauty of the world around us. Join us on this inspiring journey and let your creative vision unfold through the lens.</p>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/happy-travel-photographer-taking-picture-nature-isolated-flat-illustration_74855-14071.jpg?w=740&t=st=1686136104~exp=1686136704~hmac=e6c96eed8a9c4a5e8815a9e9206bc4fa746354aba6fb306816b74c0836d0df90" />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 6--------------------------------- */}
                                <SwiperSlide>
                                    <section className=" body-font">
                                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                            <div className="text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium ">Tips and Tricks for
                                                    <br className="hidden lg:inline-block" />Stunning Photography
                                                </h1>
                                                <p className="mb-8 leading-relaxed ">Unlock the secrets to capturing breathtaking images. From composition techniques to lighting tricks, explore a wealth of insights and practical advice to elevate your photography skills. Discover how to create visually impactful and unforgettable photographs that leave a lasting impression. Let these valuable tips and tricks guide you towards achieving stunning results in your photography journey.</p>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/character-illustration-photographers-with-cameras_53876-66253.jpg?w=740&t=st=1686136152~exp=1686136752~hmac=148a65ee461ec783e28829a6247d7a2332226a24061e1754f525a700264179dd" />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide> */}
                            </Swiper>


                        </div>
                    </div>
                </div>
            </section>



            <PopularClass />
            <PopularInstructors />
            <ExtraSection />


        </>
    );
};

export default Home;