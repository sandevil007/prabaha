'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import BlankFemaleAvatar from './../images/blank-female-avatar.png';
import BlankMaleAvatar from './../images/blank-male-avatar.png';

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't Take Our Word For It</h2>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-800 bg-yellow-400 rounded-full mb-4">The Ultimate Guide to Our Services</div>
          </div>

          {/* Testimonials Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center p-20 bg-gray-800 min-h-[500px]" data-aos="fade-up">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <Image className="rounded-full" src={BlankFemaleAvatar} width={100} height={100} alt="Soma" />
                    <svg className="absolute mr-[90px] w-6 h-5 fill-current text-yellow-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="mr-20 ml-20 text-lg text-gray-400 text-center grow">I have boarded my pup for 3 days with Prabaha. Sayantan listened to all details carefully and took care of him. He sent regular updates and videos. If you are looking for a good place for boarding or training, I would recommend Prabaha.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full text-center">
                    <cite className="text-gray-200 not-italic">Soma</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center p-20 bg-gray-800 min-h-[500px]">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <Image className="rounded-full" src={BlankMaleAvatar} width={100} height={100} alt="Aniruddha" />
                    <svg className="absolute mr-[90px] w-6 h-5 fill-current text-yellow-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="mr-20 ml-20 text-lg text-gray-400 text-center grow">Enrolling Bruno at Prabaha was a transformative experience. Under Sayantan's expert guidance, I learned invaluable insights into connecting with our furry friend and deciphering his unique psychology. Sayantan's expertise in canine behavior was evident as he shared effective communication techniques. Bruno has not only become more responsive, but our bond has deepened. Prabaha is not just a dog training center; it's where our canine companions become family. Highly recommended for anyone seeking to better understand and connect with their four-legged friends.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full text-center">
                    <cite className="text-gray-200 not-italic">Aniruddha</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center p-20 bg-gray-800 min-h-[500px]">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <Image className="rounded-full" src={BlankMaleAvatar} width={100} height={100} alt="Uday" />
                    <svg className="absolute mr-[90px] w-6 h-5 fill-current text-yellow-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="mr-20 ml-20 text-lg text-gray-400 text-center grow">Awesome place for dog training! The trainers really know their stuff and my dog loves going here. They teach cool tricks and also work on obedience. Totally worth the money and time. 5/5, would recommend!</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full text-center">
                    <cite className="text-gray-200 not-italic">Uday</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center p-20 bg-gray-800 min-h-[500px]">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <Image className="rounded-full" src={BlankMaleAvatar} width={100} height={100} alt="Iman" />
                    <svg className="absolute mr-[90px] w-6 h-5 fill-current text-yellow-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="mr-20 ml-20 text-lg text-gray-400 text-center grow">I highly recommend Prabaha for anyone who wants to train their dog in a positive and effective way. Sayantan is very professional, knowledgeable, and friendly. He helped me and my dog learn new skills and overcome some behavioral issues. My dog is now more obedient, confident, and happy. Thank you Prabaha!</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full text-center">
                    <cite className="text-gray-200 not-italic">Iman</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center p-20 bg-gray-800 min-h-[500px]">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <Image className="rounded-full" src={BlankFemaleAvatar} width={100} height={100} alt="Monika" />
                    <svg className="absolute mr-[90px] w-6 h-5 fill-current text-yellow-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="mr-20 ml-20 text-lg text-gray-400 text-center grow">Prabaha rocks! Sayantan is awesome, he gets dogs and their owners. He showed me how to talk to my dog and how to reward him. My dog has a blast at Prabaha, he always has fun and learns new stuff. Prabaha changed our lives for the better.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full text-center">
                    <cite className="text-gray-200 not-italic">Monika</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center p-20 bg-gray-800 min-h-[500px]">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <Image className="rounded-full" src={BlankFemaleAvatar} width={100} height={100} alt="Aditi" />
                    <svg className="absolute mr-[90px] w-6 h-5 fill-current text-yellow-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="mr-20 ml-20 text-lg text-gray-400 text-center grow">Prabaha was awesome for me and my doggo. He taught us how to get along better and play cool games. My doggo is now a good boy, a friendly boy, and a happy boy.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full text-center">
                    <cite className="text-gray-200 not-italic">Aditi</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
