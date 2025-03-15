import React from "react";

import Education from "../_components/module/education";
import { Title } from "../_components/ui/title";

import { getAllEducations } from "@/service/educationService/educationService";

export default async function EducationPage() {
  const data = await getAllEducations();
  const educations = data?.data;

  return (
    <>
      <Title title1="Services" title2="Services" />
      <Education educations={educations} />
    </>
  );
}
