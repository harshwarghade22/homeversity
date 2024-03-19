import React from "react";
import users from "../Images/image.png";
import userLogo from "../Images/Group 48096603userLogo.png";

function Left() {
  return (
    <div className="left  lg:col-span-4 md:col-span-12 md:grid-rows-12  md:mb-6">
      <div className="row-span-4">
        <div>
          <img
            className="lg:w-[475px] w-full h-[333px] object-cover  rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/6ba4/81ef/1fa1409398b433169861f47fc01aee64?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBrDOWJzbjYDV0NysHs9hdfNcOF80NAzwaSGnCBhkLkqjk4uclcx6GgLtzMX90o5wIQt3Lo4FOAqI98VG1dstqqnXX1TRSj4bsX6FUl0KtegqNeivvWa2hj34xvHObIJSEJhaOJjRs4srMHWupA0BhRjlkboE-e6zFDYPTAA35SrqW910lSiaenrIm~XlZY-iYhUT4yxoGWzUtVVJmZI17Ka-ARAfukuH19NyXImgQ66km3dhWuUYX3rrUK-OSlz5NLdt~ZYpv0hAjFlTQh4j-1Puk9MSHzucXAm8g0v5txPRLHK8x6CvLOU2qZUXW9Vx3OpymeTMWLIU47Ko212Mw__"
            alt=""
          />
        </div>
      </div>

      <div className="row-span-2 grid lg:grid-cols-3  my-8">
        <div className="col-span-1 md:my-0 my-2">
          <h1 className="text-[#A9A9A9] md:text-base text-sm">
            Working profession
          </h1>
          <h1 className="font-['Gilroy-Bold'] md:text-2xl text-xl">
            Allen runner
          </h1>
        </div>
        <div className="col-span-2 flex justify-between items-center px-4">
          <img src={users} alt="" className="w-8 h-auto" />
          <h1 className="font-['Gilroy-Medium'] text-sm">Roommates</h1>
          <img src={userLogo} alt="" className="w-20 h-auto" />
        </div>
      </div>

      <div className="row-span-2 my-8 ">
        <div className="lg:grid-cols-3  flex justify-between items-center lg:gap-4">
          <div className="col-span-1">
            <h1 className="font-['Gilroy-Medium'] text-[#A9A9A9] text-lg">
              Rent pp
            </h1>
            <h1 className="font-['Gilroy-Bold'] text-xl"> 8000/mo</h1>
          </div>

          <div className="col-span-1">
            <h1 className="font-['Gilroy-Medium'] text-[#A9A9A9] text-lg">
              looking For
            </h1>
            <h1 className="font-['Gilroy-Bold'] text-xl">Male</h1>
          </div>

          <div className="col-span-1">
            <h1 className="font-['Gilroy-Medium'] text-[#A9A9A9] text-lg">
              Looking For
            </h1>
            <h1 className="font-['Gilroy-Bold'] text-xl">FlatMate</h1>
          </div>
        </div>
      </div>

      <div className="row-span-2  my-12">
        <h1 className="text-[#A9A9A9] md:text-lg text-base">Description</h1>
        <p className="md:text-base text-sm font-['Gilroy-Medium'] text-left">
          If you are interested in sharing this apartment and believe we would
          be a good fit as roommates, please don't hesitate to reach out. I am
          excited to meet someone who shares similar values and is looking for a
          comfortable and enjoyable living arrangement.
        </p>
      </div>

      <div className="row-span-2 flex flex-wrap gap-4 mt-20">
        <div className="bg-[#D9D9D9] text-sm  font-bold px-2 py-1  font-['Gilroy-Medium']">
          #NoSmoke
        </div>

        <div className="bg-[#D9D9D9] text-sm  font-bold px-2 py-1 font-['Gilroy-Medium']">
          #Content
          <span className="text-sm font-light">WithHomeWorkout</span>
        </div>

        <div className="bg-[#D9D9D9] text-sm  font-bold px-2 py-1 font-['Gilroy-Medium']">
          #Alternative
          <span className="text-sm font-light">Housekeeping</span>
        </div>

        <div className="bg-[#D9D9D9] text-sm  font-bold px-2 py-1 font-['Gilroy-Medium']">
          #NoNonVeg
        </div>

        <div className="bg-[#D9D9D9] text-sm  font-bold px-2 py-1 font-['Gilroy-Medium']">
          #NoNonVeg
        </div>
      </div>
    </div>
  );
}

export default Left;
