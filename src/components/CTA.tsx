import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="flex mt-60 items-center bg-ansomarfa-yellow py-16 px-16 rounded-2xl">
      <div>
        <p className="text-2xl text-ansomarfa-dark font-semibold">
          Interested working with me?
        </p>
        <p className="text-base text-ansomarfa-dark mt-3">
          Let’s work together and i’il help you all my best
        </p>
      </div>
      <div className="ml-auto">
        <a
          href="mailto:anasxcode.dev@gmail.com?subject=I am interested in your skills"
          className="bg-ansomarfa-dark text-ansomarfa-light text-base px-4 py-2 rounded-md mt-6 hover:bg-ansomarfa-yellow hover:text-ansomarfa-dark"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default CTA;
