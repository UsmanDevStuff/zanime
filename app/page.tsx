import Image from "next/image";

export default function Landing() {
  return (
    <main className="">
      <div className="flex flex-row justify-center items-center h-[100vh]">
        <input
          type="text"
          name="search"
          placeholder="Search Anime......."
          className="border border-black p-1 rounded-sm"
        />
        <button className="ml-3 border border-black p-1 rounded-sm">
          Search
        </button>
      </div>
    </main>
  );
}
