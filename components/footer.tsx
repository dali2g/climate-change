import Link from "next/link";
import footerLinks from "@/constants";


const Footer = () => {
  return (
    <footer className="flex flex-col mt-28 border-t-2  pt-10 text-center">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-36 px-6 pt-20;">
        <div className="flex flex-col  justify-start items-start gap-6">
          <p className="text-base text-foreground mt-5">
            Climate Change. 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold text-white">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link key={link} href={item.route} className="text-foreground">{link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex gap-5  justify-between items-center flex-wrap mt-10 sm:px-36 px-6 pt-20 pb-10">
        <div className=" flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/"
            className="text-foreground">Privacy & Policy 
    
          </Link>
          <Link href="/"
            className="text-foregrounds">Terms & Condition 
    
          </Link>
     
        </div>
      </div>
    </footer>
  );
};

export default Footer;