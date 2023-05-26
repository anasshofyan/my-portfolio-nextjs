import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mt-60 pb-40">
      <div className="text-center">
        <span className="text-ansomarfa-dark text-2xl font-medium block">
          Stay Connected
        </span>
        <span className="text-ansomarfa-dark text-lg font-normal block mt-4">
          Jakarta, ID
        </span>
        <a
          href="mailto:anasshofyanmf@gmail.com?subject=I am interested in your skills"
          className="text-ansomarfa-dark text-3xl font-bold block mt-4"
        >
          anasshofyanmf@gmail.com
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 gap-4 ">
          <a
            href="https://dribbble.com/anasshofyan"
            target="_blank"
            className="filter-grayscale hover:filter-none"
          >
            <img
              className="object-cover "
              src="/images/icon/ic_dribbble.png"
              alt="IC Medsos"
            />
          </a>
          <a
            href="https://github.com/anasshofyan"
            target="_blank"
            className="filter-grayscale hover:filter-none"
          >
            <img
              className="object-cover "
              src="/images/icon/ic_github.png"
              alt="IC Medsos"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anasshofyan"
            target="_blank"
            className="filter-grayscale hover:filter-none"
          >
            <img
              className="object-cover "
              src="/images/icon/ic_linkedin.png"
              alt="IC Medsos"
            />
          </a>
          <a
            href="https://www.instagram.com/anasshofyan"
            target="_blank"
            className="filter-grayscale hover:filter-none"
          >
            <img
              className="object-cover "
              src="/images/icon/ic_instagram.png"
              alt="IC Medsos"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
