const Home = () => {
  return (
    <div className="px-2 py-4 font-edu pt-16 sm:pt-20">
      <p className="font-bold">Welcome to JavaRouters</p>
      <p>Find Your Dream Job in Tech!</p>
      <p className="py-2">
        At JavaRouters, we connect talented professionals with top employers in
        the tech industry. Whether you're a seasoned developer, a data analyst,
        or just starting your journey in technology, we've got the perfect
        opportunities for you. Explore a wide range of job listings, from junior
        to senior positions, across multiple locations worldwide.
      </p>
      <p className="py-2 text-lg font-bold">Why choose us!?</p>
      <ul className="list-disc list-inside pl-5">
        <li>
          Curated Job Listings: We feature only the best tech jobs, ensuring you
          find opportunities that align with your skills and career goals.
        </li>
        <li>
          Global Opportunities: With listings from all over the world, you can
          find your next job whether you're looking locally or considering
          relocation.
        </li>
        <li>
          Detailed Job Descriptions: Our job postings include comprehensive
          details like responsibilities, requirements, and benefits to help you
          make informed decisions.
        </li>
        <li>
          User-Friendly Experience: Our platform is designed to make your job
          search simple and efficient. Filter jobs by location, title, salary,
          and more to quickly find the perfect match.
        </li>
      </ul>

      <p className="py-2 text-lg font-bold">How it works</p>
      <ol className="list-decimal list-inside pl-5">
        <li>
          Search Jobs: Use our advanced search filters to find the job that best
          fits your skills and interests.
        </li>
        <li>
          Apply Online: Easily apply for jobs directly through our platform by
          submitting your resume and cover letter.
        </li>
        <li>
          Get Hired: Connect with top employers and start your next career
          chapter!
        </li>
      </ol>
      <p className="py-2 text-lg font-bold">Join the JavaRouters Community</p>
      <p>
        Sign up for our newsletter to receive the latest job postings, career
        tips, and industry news directly to your inbox. Stay ahead in your
        career with JavaRouters.
      </p>
    </div>
  );
};

export default Home;
