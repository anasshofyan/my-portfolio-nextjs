import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex mt-15 items-center">
      <div className="w-6/6 sm:text-left sm:w-3/6 p-2">
        <p className="text-7xl font-bold">
          <span className="text-ansomarfa-yellow">Anas Shofyan</span> <br />
          <span className="text-ansomarfa-dark">Martunis Fateh</span>
        </p>
        <p className="text-base text-ansomarfa-dark mt-7 leading-7 mb-10">
          I have knowledge of websites and design, then I also like to do
          research before making a project that can help many users later.
          Passionate, hard work, creative, innovative, and like to learn new
          things, are traits that I think reflect as an individual that can lead
          me to bigger goals.
        </p>
        <a
          href="mailto:anasshofyandev@gmail.com?subject=I am interested in your skills"
          className="bg-ansomarfa-yellow text-ansomarfa-dark text-base px-4 py-3 rounded-md mt-6 hover:bg-ansomarfa-dark hover:text-ansomarfa-light mr-4"
        >
          Hire Me
        </a>
        <a
          href="https://drive.google.com/drive/folders/1_FRfIdnGXixj6B9F09orNxl27ASnfCL7?usp=share_link"
          target="_blank"
          className=" border-solid border-2 border-ansomarfa-yellow text-ansomarfa-yellow text-base px-4 py-2.5 rounded-md mt-6 hover:bg-ansomarfa-yellow hover:text-ansomarfa-dark"
        >
          Download CV
        </a>
      </div>
      <div className="sm:w-3/6">
        <img
          className="w-full object-cover lg:w-full lg:h-full"
          src="/images/hero.png"
          width="800"
          alt="Hero Ansomarfa"
        />
      </div>
    </section>
  );
};

export default Hero;
