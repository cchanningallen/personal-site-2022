import NavBar from "./NavBar";
import Avatar from "./Avatar";

const AboutPage = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <NavBar />
      <div className="pt-20 flex-1 max-w-xl m-auto w-full">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            <span className="mr-2">👋</span>
            <span>{"Hi! I'm Channing"}</span>
          </h1>
          <Avatar size="md" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
