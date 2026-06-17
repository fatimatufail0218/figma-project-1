// import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import CaseStudiesClient from "./CaseStudiesClient";
import client from "@/lib/mongodb";

const CaseStudies = async () => {
  const db = client.db("cloud-consulting");

const caseStudies = await db
  .collection("caseStudies")
  .find({})
  .toArray();
  console.log(caseStudies);

  const formattedData = caseStudies.map((item: any) => ({
    image: item.image,
    date: new Date(item.date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    heading: item.heading,
    slug: item.slug,
  }));

  return <CaseStudiesClient caseStudies={formattedData} />;
};

export default CaseStudies;