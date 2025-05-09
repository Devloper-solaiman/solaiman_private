import React from "react";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

import { TBlog } from "@/types";

// Create a DOMPurify instance for sanitizing HTML
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

interface BlogCardProps {
  blog: TBlog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="border border-default-200 bg-default-50 rounded-lg p-6 max-w-4xl mx-auto">
      {/* Author information */}
      <div className="flex gap-3 items-center">
        <Avatar size="md" src={blog.author.image} />
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold">{blog.author.name}</h3>
          <p className="text-sm text-default-500">
            Posted on: {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Blog image */}
      <div className="my-3">
        <Image
          alt="Blog image"
          className="w-full h-auto rounded-lg z-[99999]"
          height={500}
          src={blog.imageUrl}
          style={{ objectFit: "cover" }}
          width={500}
        />
      </div>

      {/* Full HTML Content */}
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="blog-content my-4"
      />
    </div>
  );
};
