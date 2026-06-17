export default function Footer() {
  const quickLinks = ["Service", "Partner", "Case Study", "Contact"];

  return (
    <footer className="bg-[#0B1B3A] text-white pt-12 md:pt-16 lg:pt-24 mt-10 md:mt-20 lg:mt-56 relative">

      {/* TOP FOOTER */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-10 pb-12 md:pb-16 lg:pb-24">

        {/* 1. LOGOS COLUMN */}
        <div>
          <div className="flex flex-wrap gap-3 xl:gap-6 justify-start">
            <img src="/aws.svg" className="h-8 lg:h-9 xl:h-10" />
            <img src="/google-cloud.svg" className="h-8 lg:h-9 xl:h-10" />
            <img src="/datadog.svg" className="h-8 lg:h-9 xl:h-10" />
            <img src="/cloudflare.svg" className="h-8 lg:h-9 xl:h-10" />
            <img src="/x-logo.svg" className="h-8 lg:h-9 xl:h-10" />
            <img src="/linkedin-logo.svg" className="h-8 lg:h-9 xl:h-10" />
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">
            QUICK LINKS
          </h3>
          <ul className="lg:space-y-3">
            {quickLinks.map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer text-sm lg:text-base"
              >
                <img src="/link-right.svg" alt="" className="w-3 h-3" />
                <span>{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. CONTACT US */}
        <div>
          <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">
            CONTACT US
          </h3>
          <div className="space-y-4 lg:space-y-5 text-gray-300">
            <div className="flex items-start gap-2">
              <img src="/phone-red.svg" className="h-6 w-6 lg:h-8 lg:w-8 shrink-0" />
              <span className="text-sm lg:text-base">+44 (0) 20 3637 8933</span>
            </div>
            <div className="flex items-start gap-2">
              <img src="/email-red.svg" className="h-6 w-6 lg:h-8 lg:w-8 shrink-0" />
              <span className="text-sm lg:text-base">hello@makecloud.com</span>
            
            </div>
            <div className="flex items-start gap-2">
              <img src="/location-red.svg" className="h-6 w-6 lg:h-8 lg:w-8 shrink-0" />
              <span className="text-sm lg:text-base leading-relaxed">
                Rothamsted Enterprises, Harpenden, Hertfordshire AL5 2JQ
              </span>
            </div>
          </div>
        </div>

        {/* 4. NEWSLETTER */}
        <div>
          <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">
            NEWSLETTER
          </h3>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email here"
              className="px-4 py-2 lg:py-3 rounded-3xl text-black w-full bg-white text-sm lg:text-base"
            />
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 lg:py-3 rounded-3xl text-sm lg:text-base">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-3 lg:py-4 text-center text-xs lg:text-sm bg-white text-black">
        © 2026 MakeCloud. All rights reserved.
      </div>

    </footer>
  );
}