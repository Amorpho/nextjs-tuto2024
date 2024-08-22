import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">Next.js Tutorial</h1>
      <Link href={"/client"} className="btn btn-accent">
        Get stater
      </Link>
    </div>
  );
};

export default Home;
