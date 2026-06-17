// import { client } from "@/sanity/lib/client";
import clientPromise from "@/lib/mongodb";
import { urlFor } from "@/sanity/lib/image";
import { servicesQuery } from "@/sanity/lib/queries";
import Card from "./ui/card";

const Service = async () => {
  const client = await clientPromise;
  const db = client.db("cloud-consulting");

const services = await db
  .collection("services")
  .find({})
  .toArray();

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 w-[75%] m-auto">
      <h2 className="text-center font-archivo text-[25px] md:text-[35px] lg:text-[45px] uppercase leading-none">
        Our Cloud Consulting <br /> Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
        {services.map((service: any) => (
          <Card 
            key={service._id}
            image={service.image}
            icon={service.icon}
            title={service.title}
            topVector="/Vector-top.svg"
            bottomVector="/Vector-bottom.svg"
          />
        ))}
      </div>
    </section>
  );
};

export default Service;