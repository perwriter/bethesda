import Link from "next/link";

export default function CTAButton({ data }) {
  return (
    <>
      {data && (
        <>
          <section className="container mx-auto px-4 bg-green-500 text-white py-8">
            <div className="mx-auto max-w-[700px] text-center">
              <h2 className="text-center block my-8 text-3xl font-bold">
                {data?.heading}
              </h2>
              <p>{data?.description}</p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-700"
              >
                {data?.ctaText}
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
