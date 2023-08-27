import Image from "next/image";
import Link from "next/link";

const TrendingAnime = (data: any) => {
  const results = data.data;
  return (
    <div className="container grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {results.map((result: any) => (
        <a key={result.id} href={`/info?id=${result.id}`}>
          <div className="flex flex-col items-center">
            <Image
              src={result.image}
              alt={result.id}
              height={200}
              width={150}
              className="rounded w-auto h-auto object-fill"
            />
            <h2 className="text-center mt-4">{result.title}</h2>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TrendingAnime;
