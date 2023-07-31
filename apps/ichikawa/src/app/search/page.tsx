import { Metadata } from "next";
import { Header } from "ui";

const Home = () => {
  return (
    <div className="bg-primary text-white">
      <Header />
      <div className="grid grid-cols-5">
        <div className="h-screen bg-secondary "></div>
        <div className="bg-primary h-screen col-span-4"></div>
      </div>
      <footer className="bg-secondary">フッター</footer>
    </div>
  );
};

export default Home;
