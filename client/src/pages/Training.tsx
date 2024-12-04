import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdInsights } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AnimatedNumber = ({ number }: { number: number }) => {
  const props = useSpring({
    number: number,
    from: { number: 0 },
    config: { mass: 1, tension: 50, friction: 80 }
});

  return (
    <div className="flex flex-row">
      <animated.div className="text-primary font-bold text-4xl">
        {props.number.to(n => n.toFixed(0))}
      </animated.div>
      <p className="text-primary font-bold text-3xl">{number == 100 ? "%" : "+"}</p>
    </div>
  );
}

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className='flex flex-col gap-2 items-center'>
        <img width={480} src='Abhijit_Shinde.jpg' alt='Abhijit Shinde' className='rounded-xl' />
        <p className='text-lg text-center'>Abhijit Shinde, the founder of the Import-Export Federation (IEF)</p>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img width={480} src='Abhijit_Students.JPG' alt='Students' className='rounded-xl' />
        <p className='text-lg text-center'>Students</p>
      </div>
    </Slider>
  );
};

export { ImageSlider };


export default function ConsultingPage() {

  const [trainers, setTrainers] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [students, setStudents] = useState(0);
  const [success, setSuccess] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  if (inView && trainers === 0) {
    setTrainers(12);
    setFollowers(1999);
    setStudents(200);
    setSuccess(100);
  }

  return (
    <div>
      {/* HERO */}
      <div className="relative flex flex-col items-center py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/consulting.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="mx-auto flex flex-col md:flex-row items-center relative z-20 max-w-[1280px] justify-between px-4 lg:px-0">
        {/* Left side content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-white flex flex-col gap-8">
          <h3 className="text-3xl lg:text-[42px] leading-tight font-sf-bold">Expert Training and Support for Your Export and Import Needs</h3>
          <p className="font-sf-light text-lg">
          We offer expert guidance and tailored support to help your business thrive in international markets. From export regulations to market entry strategies, our experienced team provides the knowledge and tools you need to succeed globally.
          </p>
          <button className="bg-[#0073E6] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 w-fit">
            Get Started →
          </button>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md max-w-[560px]">
          <h2 className="text-2xl font-semibold mb-4">Book Your <span className="text-primary">Training</span> </h2>
          <div className="w-full bg-primary h-[2px] mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
              <input type="text" id="fullName" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Phone Number</label>
              <input type="tel" id="phoneNumber" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address*</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-6">
              <label htmlFor="product" className="block text-gray-700 mb-2">In which product you are interested in?</label>
              <input type="text" id="product" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700 mb-2">Country</label>
              <input type="text" id="country" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <button type="submit" className="w-full bg-[#0073E6] text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </form>
        </div>
      </div>
      </div>

      {/* Our Team */}
      <div className="py-20 max-w-[1280px] mx-auto flex flex-row flex-wrap items-center justify-center px-4">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className='flex flex-col gap-1'>
            <p className='bg-primary px-2 py-1 text-sm w-fit text-white rounded-md'>Our Team</p>
            <h3 className="text-2xl lg:text-[42px] leading-tight font-sf-bold max-w-[520px]">Meet Our <span className='text-primary'>Global</span> Trade Experts</h3>
          </div>
          <p className="max-w-[640px] text-lg text-grey">Our team of seasoned professionals brings decades of combined experience in international commerce. With expertise spanning customs regulations, logistics, market analysis, and trade finance, our specialists are equipped to navigate the complexities of global trade.</p>
          <ul className="text-lg lg:text-lg flex flex-col gap-4 font-sf-medium">
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-lg" />
                <p>Years of experience in the field</p>
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-lg" />
                <p>Your needs are our priority</p>
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-lg" />
                <p>We maintain transparent communication</p>
              </li>
            </ul>
        </div>
        <div className='w-[320px] md:w-[480px] mt-4'>
            <ImageSlider />
        </div>
      </div>

      {/* Training and Support */}
      <div className="bg-secondary py-20 flex flex-col gap-16 px-4">
      <p className="font-sf-bold text-3xl lg:text-[42px] leading-tight max-w-[720px] mx-auto text-center">Expert Training and Support</p>
      <div className="flex flex-row gap-16 mx-auto w-fit flex-wrap justify-center">
        <div className="rounded-2xl bg-white p-8 w-fit shadow-lg max-w-[300px] flex flex-col gap-4">
          <div className="text-primary bg-secondary p-2 w-fit rounded-full text-2xl">
            <FaChalkboardTeacher/>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sf-bold text-xl">Export Training</p>
            <p className="text-grey">Training from India’s top export coaches available in the current market.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 w-fit shadow-lg max-w-[300px] flex flex-col gap-4">
          <div className="text-primary bg-secondary p-2 w-fit rounded-full text-2xl">
            <PiUsersThreeFill />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sf-bold text-xl">ECGC Support</p>
            <p className="text-grey">Get ECGC support for your exports for every trade you make.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 w-fit shadow-lg max-w-[300px] flex flex-col gap-4">
          <div className="text-primary bg-secondary p-2 w-fit rounded-full text-2xl">
            <MdInsights />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sf-bold text-xl">Market Insight Reports</p>
            <p className="text-grey">Receive market insight reports for your product and the best countries to export.</p>
          </div>
        </div>
      </div>
      </div>

      {/* About Us */}
      <div className="py-20 max-w-[1280px] mx-auto flex flex-row items-center flex-wrap px-4 gap-4">
        <div className="flex flex-col gap-8">
          <div className='flex flex-col gap-1'>
            <p className='bg-primary px-2 py-1 text-sm w-fit text-white rounded-md'>About Us</p>
            <h3 className="text-2xl lg:text-[42px] leading-tight font-sf-bold max-w-[520px]">Trusted By <span className='text-primary'>Worldwide</span> Importers and Exporters</h3>
          </div>
          <p className="max-w-[640px] text-grey text-lg">Our global reputation for reliability and excellence has made us the preferred partner for importers and exporters across the world. With decades of experience facilitating international trade, we've earned the trust of businesses large and small on every continent.</p>
          <div className="flex flex-row">
            <div className="flex flex-col flex-wrap gap-4 w-[120px] md:w-[320px]">
              <div className="border-l-2 px-2">
                <div ref={ref} className="">
                  <AnimatedNumber number={trainers} />
                </div>
                <p className="text-left">Trainers</p>
              </div>
              <div className="border-l-2 px-2">
                <div ref={ref} className="">
                  <AnimatedNumber number={followers} />
                </div>
                <p className="text-left">Followers</p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap gap-4 w-[120px] md:w-[320px]">
              <div className="border-l-2 px-2">
                <div ref={ref} className="">
                  <AnimatedNumber number={students} />
                </div>
                <p className="text-left">Students</p>
              </div>
              <div className="border-l-2 px-2">
                <div ref={ref} className="">
                  <AnimatedNumber number={success} />
                </div>
                <p className="text-left">Success</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='rounded-md w-[320px] md:w-[520px]' src='training.jpg'></img>
        </div>
      </div>
    </div>
  );
}
