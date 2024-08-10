import { useState } from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  const [isWritten, setIsWritten] = useState(false);

  const handleMessageChange = (event) => {
    const length = event.target.value.length;
    if (length > 15) {
      setIsWritten(true);
    } else {
      setIsWritten(false);
    }
  };

  return (
    <div className="pt-8">
      <p>Contuct us</p>
      <Form method="post" className="flex flex-col">
        {/* <form action="" className="flex flex-col"> */}
        <label className="py-3">
          <span>Your email:</span>
          <input
            type="email"
            id="emailInput"
            className="bg-gray-50 border-b border-gray-300 text-gray-900 rounded-lg w-full ps-10 p-2.5 block shadow-md text-center focus:outline-none sm:max-w-[50%] mx-auto"
            placeholder="name@flowbite.com"
            required
          />
        </label>
        <label className="py-3">
          <span>Your message:</span>
          <textarea
            type="text"
            id="message"
            className="bg-gray-50 border-b border-gray-300 text-gray-900 rounded-lg w-full ps-10 p-2.5 block shadow-md text-center focus:outline-none sm:max-w-[50%] mx-auto"
            placeholder="Enter your message or question here"
            onChange={handleMessageChange}
            required
          />
        </label>
        <button
          type="submit"
          className={`my-3 mx-auto px-4 py-1 bg-orange-500 rounded-md font-serif font-semibold hover:shadow-lg hover:shadow-slate-600 hover:scale-110 duration-500 ${
            isWritten && "shadow-lg shadow-slate-600"
          }`}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Contact;
