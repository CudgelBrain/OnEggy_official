import React, { useState } from "react";
import Headline from "../components/headline";

const contactUs = () => {
  const title = "Contact Us";
  const desc = "Let's talk about your digital services requirements.";

  const [selectedOption, setSelectedOption] = useState("sayHi");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Headline title={title} desc={desc} />
      <div className="mt-20 bg-offWhite p-14 rounded-3xl flex">
        <div className="w-11/12">
          <div className="flex items-center space-x-4 mb-8">
            <label>
              <input
                type="radio"
                value="sayHi"
                checked={selectedOption === "sayHi"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Say Hi
            </label>
            <label>
              <input
                type="radio"
                value="getQuote"
                checked={selectedOption === "getQuote"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Get a Quote
            </label>
          </div>

          <form className="w-3/5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                rows="4"
                required
              />
            </div>
            <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl w-full">
              Send Message
            </button>
          </form>
        </div>
        <div className="">
          <img
            src="../home/contactUs/illustration.png"
            alt="illustraion"
            width={494}
            height={394}
            className=""  //sahi na lagrhi photo - end tak naa jari  AND website going right, extra right
          />
        </div>
      </div>
    </div>
  );
};

export default contactUs;
