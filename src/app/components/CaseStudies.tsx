import clientPromise from "@/lib/mongodb";
import Link from "next/link";

const CaseStudies = async () => {
  const client = await clientPromise;
  const db = client.db("cloud-consulting");

  const studies = await db.collection("caseStudies").find({}).toArray();

  return (
    <section className="w-[100%] md:max-w-[90%] mx-auto px-4 md:px-6 py-12">
      <h2 className="font-archivo text-[28px] lg:text-[35px] uppercase mb-8">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((study) => (
          <Link href={`/case-study/${study.slug}`} key={study.slug}>
            <div className="rounded-[20px] overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={study.image || "/banner.jfif"}
                alt={study.heading}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-archivo text-[18px] uppercase">{study.heading}</h3>
                <p className="text-gray-600 text-[14px] mt-2 line-clamp-2">{study.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;