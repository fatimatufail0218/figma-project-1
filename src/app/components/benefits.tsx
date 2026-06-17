import React from "react";

const benefits = [
  {
    title: "Architecture-first methodology",
    description:
      "We design systems for long-term reliability, scalability, and maintainability, reducing operational risks and future rework.",
  },
  {
    title: "Cost clarity through FinOps",
    description:
      "We apply FinOps frameworks to improve cost transparency, predict consumption, and optimize long-term cloud spending.",
  },
  {
    title: "Security and compliance from day one",
    description:
      "IAM, encryption, monitoring, and governance are implemented early to keep your cloud environment secure and audit-ready.",
  },
  {
    title: "Full lifecycle cloud consulting services",
    description:
      "We guide your transformation from cloud assessment to design, strategy, and support.",
  },
  {
    title: "Automation as a core principle",
    description:
      "Infrastructure as Code, CI/CD, and observability reduce manual effort, increase consistency, and support faster delivery cycles.",
  },
  {
    title: "Long-term operational support",
    description:
      "We remain involved after planning — supporting implementation, optimization, and continuous improvement as your cloud needs evolve.",
  },
];

const Benefits = () => {
  return (
    <section className="py-12  md:py-20 lg:py-18 bg-[#F7F9FC]">
      <div className="max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16 md:m-auto">

        {/* Heading */}
        <div className="max-w-[700px] mb-10">
          <h2 className="font-archivo text-[28px] md:text-[35px] xl:text-[45px] uppercase leading-none text-center lg:text-left">
            Why Choose MakeCloud
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">

          {benefits.map((item, index) => (
            <div key={index} className="flex gap-4">

              {/* Tick */}
              <div className="shrink-0">
                <img
                  src="/tick-logo.svg"
                  alt=""
                  className="h-[25px] w-[25px] md:w-[27px] md:h-[27px]"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-archivo text-[18px] md:text-[20px] xl:text-[22px] uppercase mb-2">
                  {item.title}
                </h3>
                <p className="font-roboto text-[13px] md:text-[15px] lg:text-[18px] text-gray-700 leading-[24px]">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Benefits;