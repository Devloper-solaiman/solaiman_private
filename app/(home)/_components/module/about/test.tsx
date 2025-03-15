"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedButton from "../../ui/button";
import AchievementsSection from "./achivement";
import { TAbout, TBlog, TProject, TSkill } from "@/types";

interface TAboutProps {
    about: TAbout;
    projects: TProject[];
    skills: TSkill[];
    blogs: TBlog[];
}

export default function About({ about, projects, skills, blogs }: TAboutProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ডাটা লোড হলে লোডিং ফ্ল্যাগ বন্ধ করুন
        if (about && projects && skills && blogs) {
            setLoading(false);
        }
    }, [about, projects, skills, blogs]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <section className="bg-default-50 p-2 md:p-8 flex flex-col lg:flex-row justify-start items-start lg:space-x-8 space-y-8 lg:space-y-0">
            {/* Image Section */}
            <div className="w-full lg:w-1/3">
                <Image
                    alt={about.me.name}
                    className="w-full h-full lg:h-[350px] rounded-lg shadow-lg object-cover"
                    height={500}
                    src={about.image || "https://example.com/my-image.jpg"}
                    width={500}
                />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 text-center md:text-left space-y-2">
                <h2 className="text-xl md:text-3xl font-bold">{about.title}</h2>
                <p className="text-sm text-default-500 mb-4">
                    Address: {about.address + "," + about.country}
                </p>
                <p className="text-default-600 mb-10 px-3 text-justify text-sm">
                    {about.description}
                </p>

                {/* Experience, Projects, Companies Worked */}
                <AchievementsSection blogs={blogs} projects={projects} skills={skills} />

                {/* Download CV Button */}
                <AnimatedButton
                    bgColor="bg-transparent"
                    borderColor="border-warning-500 my-5"
                    href="https://drive.google.com/file/d/1x6DLawdKCuVhNGW4qnHnD3m6OYkd2fDH/view?usp=drive_link"
                    target="_blank"
                    text="View Resume"
                    textColor="text-[#F5A524]"
                />
            </div>
        </section>
    );
}
