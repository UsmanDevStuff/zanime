import InfoData from "./components/InfoData";

const InfoPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const id = searchParams["id"] ?? "";
  return (
    <div>
      <InfoData data={id} />
    </div>
  );
};

export default InfoPage;
