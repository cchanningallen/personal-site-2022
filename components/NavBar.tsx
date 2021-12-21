import NextLink from "next/link";
import LinkedInIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import Avatar from "./Avatar";

const LINKEDIN_URL = "https://www.linkedin.com/in/cchanningallen";
const GITHUB_URL = "https://github.com/cchanningallen";

const NavBar = () => {
  return (
    <div className="w-full border-b border-gray-300 flex justify-between items-center px-4">
      <NextLink href="/">
        <a className="font-semibold text-gray-400 p-2 flex items-center group transition-all cursor-pointer">
          <Avatar className="mr-2 opacity-50 group-hover:opacity-100 group-hover:border-indigo-500 transition-all" />
          <span className="group-hover:text-indigo-500 transition-all">
            Channing Allen
          </span>
        </a>
      </NextLink>
      <div className="flex items-center h-full p-2">
        {/* <NextLink href="/about">
          <a className="h-10 flex items-center py-2 px-4 text-sm font-bold text-gray-600 rounded cursor-pointer transition-all hover:text-indigo-500 hover:bg-gray-100 ">
            About
          </a>
        </NextLink> */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="h-10 w-10 flex items-center justify-center p-2 text-sm font-bold text-gray-600 rounded cursor-pointer transition-all hover:text-indigo-500 hover:bg-gray-100 "
        >
          <LinkedInIcon className="w-4 h-4" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          className="h-10 w-10 flex items-center justify-center p-2 text-sm font-bold text-gray-600 rounded cursor-pointer transition-all hover:text-indigo-500 hover:bg-gray-100 "
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
