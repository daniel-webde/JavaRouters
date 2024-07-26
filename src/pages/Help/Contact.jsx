const Contact = () => {
  return (
    <div className="pt-8">
      <p>Contuct us</p>
      <form action="" className="flex flex-col">
        <label className="py-3">
          <span>Your email:</span>
          <input
            type="email"
            name="email"
            id="email"
            className="block mx-auto rounded-lg text-lg shadow-md text-center focus:outline-none py-1 w-full md:w-auto"
          />
        </label>
        <label className="py-3">
          <span>Your message:</span>
          <textarea
            type="text"
            name=""
            id=""
            className="block mx-auto rounded-lg text-lg shadow-md text-center focus:outline-none py-1 w-full md:w-auto"
          />
        </label>
        <button
          type="submit"
          className="my-3 mx-auto px-4 py-1 bg-orange-500 rounded-md font-serif font-semibold hover:shadow-lg hover:shadow-slate-600 hover:scale-110 duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
