import Image from "next/image";

const InfoData = async (data: any) => {
  const id = data.data;
  const resp = await fetch(
    `https://api.consumet.org/anime/gogoanime/info/${id}`
  );
  const res = await resp.json();
  const genres = res.genres;
  const episodes = res.episodes;

  return (
    <div>
      <Image src={res.image} alt={res.title} height={200} width={150} />
      <h1 className="font-bold">
        Anime Name: <span className="font-light">{res.title}</span>
      </h1>
      <h1 className="font-bold">
        Other Names: <span className="font-light">{res.otherName}</span>
      </h1>
      <h1 className="font-bold">
        Is Sub/Dub: <span className="font-light">{res.subOrDub}</span>
      </h1>
      <h1 className="font-bold">
        Release: <span className="font-light">{res.releaseDate}</span>
      </h1>
      <h1 className="font-bold">
        Total Episodes: <span className="font-light">{res.totalEpisodes}</span>
      </h1>
      <h1 className="font-bold">
        Type: <span className="font-light">{res.type}</span>
      </h1>
      <h1 className="font-bold">
        Status: <span className="font-light">{res.status}</span>
      </h1>
      <h1 className="font-bold">
        Genres:{" "}
        {genres.map((gen: any) => {
          return (
            <span className="font-light" key={gen}>
              {gen}
            </span>
          );
        })}
      </h1>
      <h1 className="font-bold">
        Description: <span className="font-light">{res.description}</span>
      </h1>
      {episodes.map((ep: any) => {
        return (
          <a
            className="mx-5 px-3 border border-black hover:bg-black hover:text-white rounded"
            key={ep.id}
            href={`/play?id=${ep.id}`}
          >
            {ep.number}
          </a>
        );
      })}
    </div>
  );
};

export default InfoData;
