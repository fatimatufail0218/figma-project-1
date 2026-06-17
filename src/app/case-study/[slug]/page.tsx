import clientPromise from "@/lib/mongodb";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const CaseStudyPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

   console.log("URL se slug:", slug);

  const client = await clientPromise;
  const db = client.db("cloud-consulting");

  const study = await db.collection("caseStudies").findOne({ slug });

   console.log("Study mila:", study);

  if (!study) {
    return <div>Case study not found</div>;
  }

  const formattedDate = new Date(study.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <article>
        <h1>{study.heading}</h1>
        <p>{study.description}</p>
        <p>{study.body}</p>
      </article>

      <Footer />
    </>
  );
};

export default CaseStudyPage;