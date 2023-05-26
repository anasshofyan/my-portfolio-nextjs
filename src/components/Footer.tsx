import React from "react";

const Footer: React.FC = () => {
  const currentDate = new Date();
  return (
    <footer className="bg-ansomarfa-light py-6">
      <div className="flex items-center justify-center">
        <p className="text-base text-ansomarfa-dark">
          © 2019 - {currentDate.getFullYear()} Anas Shofyan Martunis Fateh • All
          rights reserved • ❤️ from Jakarta, ID
        </p>
      </div>
    </footer>
  );
};

export default Footer;
