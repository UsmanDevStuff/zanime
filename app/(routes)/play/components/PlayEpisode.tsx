const PlayEpisode = async (data: any) => {
  const id = data.data;
  const resp = await fetch(
    `https://api.consumet.org/anime/gogoanime/watch/${id}`
  );
  const res = await resp.json();
  const sources = res.sources;

  return (
    <div>
      {sources.map((source: any) => {
        return (
          <a key={source.url} href={source.url}>
            {source.quality}
          </a>
        );
      })}
    </div>
  );
};

export default PlayEpisode;
