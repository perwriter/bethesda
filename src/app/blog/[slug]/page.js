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
      <div className="min-h-screen">
        {blogDetail && (
          <div className="max-w-[800px] mx-auto py-10">
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
            <h1 className="text-left block my-4 text-3xl font-bold">
              {blogDetail?.bloglist.heading}
            </h1>
            <p className="mb-4 text-lg  text-gray-500">
              {blogDetail?.bloglist.subdescription}
            </p>
            <Image
              alt="Office"
              src={blogDetail?.bloglist?.bannerimage?.url}
              width="400"
              height="400"
              className="w-full object-cover"
            />
            <br />
            <div
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
