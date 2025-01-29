import React from "react";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-[#141930] flex items-center justify-center px-6 ">
      <div className="w-full max-w-5xl bg-[#141930] text-[#FFDCC1] p-12 rounded-xl shadow-md">
        <h1 className="text-4xl font-semibold mb-6">BENEFITS</h1>
        <ul className="list-disc text-xl list-inside space-y-8 leading-relaxed">
          <li>
            Our club is structured to prepare students for the industry, with a
            vision to host regular workshops and conferences led by industry
            professionals.
          </li>
          <li>
            We also aim to connect students with freelancing opportunities and
            real-world projects as they participate in the club.
          </li>
          <li>
            Beyond basic development skills, we focus on deepening students'
            understanding of core computer science subjects through ongoing
            tech sessions.
          </li>
          <li>
            To further enhance their skills, we conduct industry-level code
            reviews and maintain strong industry connections through a
            dedicated developer relations team within the club.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
