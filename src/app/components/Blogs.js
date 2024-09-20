import Blogcard from "@/app/components/Blogcard";

export default function blogList({ data }) {
  return (
    <>
      {data && (
        <>
          <section>
            <div className="container mx-auto px-4 mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="text-center block my-8 text-3xl font-bold">
                Blogs
              </h2>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                {data?.map((blog) => {
                  return (
                    <div key={blog.index} class="rounded-lg">
                      <Blogcard
                        heading={blog.heading}
                        subDescription={blog.subdescription}
                        thumbnailImage={blog.thumbnailImage?.url}
                        ctaText={blog.ctaText}
                        slug={blog.slug}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
