import PlayEpisode from "./components/PlayEpisode";

const InfoPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const id = searchParams["id"] ?? "";
  return (
    <div>
      <PlayEpisode data={id} />
    </div>
  );
};

export default InfoPage;
