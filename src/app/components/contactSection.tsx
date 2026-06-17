"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#FFF] w-full py-5 md:py-16 lg:py-0">
      <div className="w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:max-h-[425px] h-full">

          {/* Left Card */}
          <div className="relative overflow-hidden lg:rounded-r-[16px] lg:rounded-l-none bg-gradient-to-r from-[#EE3124] to-[#3D57A6] text-white min-h-[400px] lg:min-h-[445px]">
            <div className="p-8 lg:p-7 lg:pl-40 xl:pl-56">

              <img
                src="/s8-mask-right.svg"
                alt=""
                className="absolute -left-1 top-1/2 -translate-y-1/2 opacity-70 lg:block"
              />
              <img
                src="/Frame.svg"
                alt=""
                className="absolute -top-1 right-0 opacity-90"
              />

              <div className="max-w-[500px] pt-4 lg:pt-8 ">
                <h2 className="font-archivo text-[28px] lg:text-[34px] xl:text-[42px] leading-[110%] uppercase ">
                  Let's Start Your Cloud Journey
                </h2>

                <p className="mt-4 text-[14px] lg:text-[15px] xl:text-[17px] leading-relaxed font-roboto">
                  Ready to transform your infrastructure? Our cloud experts are
                  here to help you navigate your digital transformation.
                </p>

                <div className="mt-6 lg:mt-8 space-y-4 lg:space-y-5">

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 lg:h-9 lg:w-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <img src="/phone-white.svg" alt="phone" className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-[14px] lg:text-[15px] xl:text-[17px] font-roboto">Call us directly</p>
                      <p className="font-semibold font-roboto text-[14px] lg:text-[15px]">+44 (0) 20 3637 8933</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 lg:h-9 lg:w-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <img src="/email-white.svg" alt="email" className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-[14px] lg:text-[15px] xl:text-[17px] font-roboto">Email us</p>
                      <p className="font-semibold font-roboto text-[14px] lg:text-[15px]">hello@makecloud.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 lg:h-9 lg:w-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <img src="/location-white.svg" alt="location" className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-[14px] lg:text-[15px] xl:text-[17px] font-roboto">Visit our office</p>
                      <p className="font-semibold font-roboto text-[14px] lg:text-[15px] leading-[130%]">
                        Rothamsted Enterprises,<br />
                        Harpenden, Hertfordshire AL5 2JQ
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative  lg:rounded-l-[16px] lg:rounded-r-none border border-[#D9D9D9] bg-[#F5F5F5] min-h-[400px] lg:min-h-[445px]">
            <div className="p-8 lg:p-8 lg:pl-12 xl:pl-20 lg:pr-12 xl:pr-20 max-w-[660px]">

              <img
                src="/s8-mask-left.svg"
                alt=""
                className="absolute -right-1 lg:-right-4 top-1/2 -translate-y-1/2 opacity-90 md:h-[500px] hidden md:block "
              />

              <h3 className="font-archivo text-[20px] lg:text-[22px] xl:text-[26px] uppercase">
                Get Your Free Consultation
              </h3>

              <form className="mt-5">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text"
                    className="h-[44px] lg:h-[48px] w-full rounded-full border border-[#D9D9D9] bg-[#F5F5F5] px-5 outline-none" />
                </div>

                <div className="mt-3 lg:mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email"
                      className="h-[44px] lg:h-[48px] w-full rounded-full border border-[#D9D9D9] bg-[#F5F5F5] px-5 outline-none" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone Number</label>
                    <input type="text"
                      className="h-[44px] lg:h-[48px] w-full rounded-full border border-[#D9D9D9] bg-[#F5F5F5] px-5 outline-none" />
                  </div>
                </div>

                <div className="mt-3 lg:mt-4">
                  <label className="mb-2 block text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea rows={3}
                    className="w-full rounded-[10px] border border-[#D9D9D9] bg-[#F5F5F5] p-4 outline-none resize-none" />
                </div>

                <button type="submit"
                  className="mt-4 h-[44px] lg:h-[46px] w-full rounded-full bg-[#3D57A6] text-white font-medium">
                  Submit
                </button>

                <div className="mt-3 flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-sm text-[#666]">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;