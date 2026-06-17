// import { client } from "@/sanity/lib/client";
import client from "@/lib/mongodb";
import { urlFor } from "@/sanity/lib/image";
import { caseStudyBySlugQuery } from "@/sanity/lib/queries";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const CaseStudyPage = async (
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;

  console.log("SLUG:", slug);

  const db = client.db("cloud-consulting");

const study = await db
  .collection("caseStudies")
  .findOne({ slug });
  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-archivo uppercase">Case study not found</h1>
      </div>
    );
  }

  const formattedDate = study?.date ? new Date(study.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }): "";

  return (
    <>
    <Navbar />
    <article className="w-[100%] md:max-w-[90%] mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Image */}
      <div className="relative w-full h-[250px] md:h-[400px] rounded-[20px] mb-8 overflow-hidden">
  
  <img
    src="/banner.jfif"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
    <h1 className="text-[#ffd7ea] text-2xl md:text-[60px] lg:text-[100px] lx:text-[150px] font-bold">
        Make Cloud
    </h1>
  </div>

</div>


    <div className="flex flex-col md:flex-row items-center p-10 gap-5">
        <div className="w-60% md:w-[60%]">
      {/* Date */}
      <div className="flex items-center gap-2 mb-4">
        <img src="/calender.svg" className="w-[14px] h-[14px] lg:w-[20px] lg:h-[20px]" />
        <span className="text-[#E53023] text-[15px] font-medium">{formattedDate}</span>
      </div>

      {/* Heading */}
      <h1 className="font-archivo text-[28px] lg:text-[35px] xl:text-[45px] uppercase leading-tight mb-6">
        {study.heading}
      </h1>

      {/* Short description */}
      {study.description && (
        <p className="font-roboto text-[16px] lg:text-[20px] xl:text-[22px] text-gray-600 mb-8 leading-relaxed bg-amber-50">
          {study.description}
        </p>
      )}

      {/* Body content */}
      
      </div>
    {/* Image */}
      <img
        src={study.image}
        alt={study.heading}
        className=" h-[250px] lg:h-[400px] object-cover rounded-[20px] mb-8 md:w-[40%]"
      />

    
    </div>
    <h2 className="font-roboto text-[30px] xl:text-[40px] font-bold m-auto px-5 md:px-10 pb-5 ">What we Offer...</h2>
    <div className="prose prose-lg max-w-none font-roboto text-[17px] md:text-[20px] px-5 md:px-10 m-auto whitespace-pre-line">
        {study.body} 
      </div>
      

    </article>

    <Footer />
    </>
  );
};

export default CaseStudyPage;