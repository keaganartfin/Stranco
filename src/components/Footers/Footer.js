import FooterCompanyLinks from "components/HomeComponents/FooterCompanyLinks";
import FooterCopyright from "components/HomeComponents/FooterCopyright";
import FooterOtherResources from "components/HomeComponents/FooterOtherResources";
import FooterSocialLinks from "components/HomeComponents/FooterSocialLinks";
import FooterUserfulLinks from "components/HomeComponents/FooterUserfulLinks";

function Footer() {
  return (
    <footer className="relative bg-slate-300 dark:bg-[#182030] pt-8 pb-20">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-slate-300 dark:text-[#182030] fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl dark:text-slate-300 font-semibold">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg font-semibold mt-0 mb-2 text-slate-600 dark:text-slate-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <FooterSocialLinks />
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <FooterUserfulLinks />
              <FooterCompanyLinks />
              <FooterOtherResources />
            </div>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}

export default Footer;
