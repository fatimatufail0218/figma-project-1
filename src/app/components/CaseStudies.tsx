import clientPromise from "@/lib/mongodb";
import CaseStudiesClient from "./CaseStudiesClient";

const CaseStudies = async () => {
  const client = await clientPromise;
  const db = client.db("cloud-consulting");

  const studies = await db.collection("caseStudies").find({}).toArray();

  const formattedData = studies.map((item: any) => ({
    image: item.image || "/banner.jfif",
    date: item.date
      ? new Date(item.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "",
    heading: item.heading,
    slug: item.slug,
  }));

  return <CaseStudiesClient caseStudies={formattedData} />;
};

export default CaseStudies;