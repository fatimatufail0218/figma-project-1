import clientPromise from "@/lib/mongodb";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const CaseStudyPage = async (
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;

  const client = await clientPromise;
  const db = client.db("cloud-consulting");

  const study = await db.collection("caseStudies").findOne({ slug });

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-archivo uppercase">Case study not found</h1>
      </div>
    );
  }

  const formattedDate = new Date(study.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <article className="w-[100%] md:max-w-[90%] mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="relative w-full h-[250px] md:h-[400px] rounded-[20px] mb-8 overflow-hidden">
          <img src="/banner.jfif" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col md:flex-row items-center p-10 gap-5">

          <div className="w-full md:w-[60%]">

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#E53023] text-[15px] font-medium">
                {formattedDate}
              </span>
            </div>

            <h1 className="font-archivo text-[28px] lg:text-[35px] xl:text-[45px] uppercase leading-tight mb-6">
              {study.heading}
            </h1>

            <p className="font-roboto text-[16px] lg:text-[20px] xl:text-[22px] text-gray-600 mb-8">
              {study.description}
            </p>
          </div>

          <img
            src={study.image  || "/banner.jfif"}
            alt={study.heading}
            className="h-[250px] lg:h-[400px] object-cover rounded-[20px] mb-8 md:w-[40%]"
          />

        </div>

        <div className="prose max-w-none whitespace-pre-line px-5 md:px-10">
          <div className="whitespace-pre-line px-5 md:px-10">
  {typeof study.body === "string"
    ? study.body
    : JSON.stringify(study.body)}
</div>
        </div>

      </article>

      <Footer />
    </>
  );
};

export default CaseStudyPage;