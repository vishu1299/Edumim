import React from "react";
import about3 from "../../assets/images/all-img/about3.png";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={about3} alt="" className=" block w-full" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">About Edumim</div>
            <h4 className="column-title ">
              We Provide The Best Online{" "}
              <span className="shape-bg">Education</span>
            </h4>
            <div className=" mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </div>
            <div className="space-y-8">
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="85%">
                  <span className="block text-black font-semibold mb-2">
                    Business Studies
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    86%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-primary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "86%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="67%">
                  <span className="block text-black font-semibold mb-2">
                    Marketing
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    67%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="95%">
                  <span className="block text-black font-semibold mb-2">
                    Design & Development
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    95%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px]  bg-tertiary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
