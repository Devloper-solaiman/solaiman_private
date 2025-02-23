"use client";

import React, { useState } from "react";

import { TEducation } from "@/types";
import Image from "next/image";

interface TEducationProps {
  educations: TEducation[];
}

export default function Education({ educations }: TEducationProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {educations.map((edu) => (
        <EducationCard key={edu._id} education={edu} />
      ))}
    </div>
  );
}

interface EducationCardProps {
  education: TEducation;
}

const EducationCard = ({ education }: EducationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 150; // Adjust this value for how much text you want to show initially

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-default-50 border border-default-200 rounded-lg p-6">
      <Image
        alt="education image"
        height={300}
        width={300}
        src={education.institution}
        className="rounded-md"
      />
      <h3 className="text-2xl font-bold text-warning mb-2">
        {education.degree}
      </h3>
      <p className="text-default-600 mb-4">
        {isExpanded
          ? education.description
          : `${education.description.substring(0, maxDescriptionLength)}...`}
        <button className="text-warning text-xs ml-2" onClick={toggleExpand}>
          {isExpanded ? "See Less" : "See More"}
        </button>
      </p>

    </div>
  );
};
