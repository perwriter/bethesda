import Image from "next/image";

export default function Services({ data }) {
  return (
    <>
      {data && (
        <>
          <h2 className="  text-center block my-8 text-3xl font-bold">
            Our Alma
          </h2>
          <div className=" container mx-auto px-4 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            {data?.map((service) => {
              return (
                <div
                  key={data?.index}
                  className="rounded-lg bg-gray-100 text-center p-6"
                >
                  <Image
                    alt="Office"
                    src={service?.icon?.url}
                    width="50"
                    height="50"
                    className="mx-auto"
                  />
                  <div className="rounded-lg font-bold pt-3">
                    {service?.heading}
                  </div>
                  <p className="text-gray-600">{service?.description}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
