import React from "react";

const Tools: React.FC = () => {
  return (
    <section>
      <div className="flex mt-24 items-center justify-center">
        <p className="text-ansomarfa-dark text-3xl font-semibold">
          Tools & Skills
        </p>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-9">
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_ai.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_xd.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_figma.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_bootstrap.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_tailwind.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_vue.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_nuxt.png"
          alt="Img tools"
        />
        <img
          className="filter-grayscale hover:filter-none object-cover h-full w-full"
          src="/images/tools/tool_flutter.png"
          alt="Img Tools"
        />
      </div>
    </section>
  );
};

export default Tools;
