import TrendingAnime from "./components/TrendingAnime";

const Home = async () => {
  const res = await fetch(
    "https://api.consumet.org/anime/gogoanime/top-airing"
  ).then((res) => res.json());
  const results = res.results;

  return (
    <div>
      <TrendingAnime data={results} />
    </div>
  );
};

export default Home;
