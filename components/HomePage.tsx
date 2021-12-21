import NavBar from "./NavBar";
import Avatar from "./Avatar";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1 flex-col items-center pt-20">
        <Avatar size="lg" className="mb-8" />
        <h1 className="text-2xl font-semibold mb-2">
          <span className="mr-2">👋</span>
          <span>{"Hi! I'm Channing"}</span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
