"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getSingleBlog } from "@/app/services/index";

export default function Blogdetail({ params }) {
  const [blogDetail, setBlogDetail] = useState(null);

  const getBlogDetail = async () => {
    const blogDetail = await getSingleBlog(params.slug);
    setBlogDetail(blogDetail);
    return;
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
        {blogDetail && (
          <div className="max-w-[800px] mx-auto py-10">
            {/* Back Link */}
            <div className="pb-4">
              <Link
                href={`/`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &larr;
                </span>
                Take me back
              </Link>
            </div>

            {/* Blog Title */}
            <h1 className="text-left my-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-800">
              {blogDetail?.bloglist.heading}
            </h1>

            {/* Subdescription */}
            <p className="mb-4 text-md sm:text-lg text-gray-500">
              {blogDetail?.bloglist.subdescription}
            </p>

            {/* Blog Image */}
            <div className="relative w-full h-64 sm:h-96 mb-6">
              <Image
                alt="Office"
                src={blogDetail?.bloglist?.bannerimage?.url}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Blog Content */}
            <div
              className="prose prose-sm sm:prose lg:prose-lg mx-auto text-gray-800"
              dangerouslySetInnerHTML={{
                __html: `${blogDetail?.bloglist?.fulldescription.html}`,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
