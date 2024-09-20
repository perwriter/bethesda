import Image from "next/image";
import Link from "next/link";

export default function blogCard({
  heading,
  subDescription,
  thumbnailImage,
  ctaText,
  slug,
}) {
  return (
    <>
      <article className=" container mx-auto px-4 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <Image
          alt="Office"
          src={thumbnailImage}
          width="300"
          height="300"
          className="w-full object-cover"
        />
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">{heading}</h3>

          <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
            {subDescription}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
          >
            {ctaText}
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </>
  );
}
