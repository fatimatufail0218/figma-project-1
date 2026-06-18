import clientPromise from "@/lib/mongodb";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const CaseStudyPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

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
        <h1 className="font-bold text-[45px] text-center p-10 font-archivo tracking-tight m-auto">
          {study.heading}
        </h1>
        <div className="flex w-[90%] m-auto gap-5 ">
          <div className="w-[60%] text-left">
            <p className="font-semibold text-gray-600">{study.description}</p>
            <br />
            <p className="whitespace-pre-line leading-none">{study.body}</p>
          </div>
          <div className="w-[40%]">
            <img src="/s7-img1.jpg" alt="" />
          </div>
        </div>
        
      </article>

      <Footer />
    </>
  );
};

export default CaseStudyPage;