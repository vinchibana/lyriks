import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazam";

const ArtistDetails = () => {
  const { id: artistId } = useParams();

  const {
    data: artistData,
    isFetching: isFetchingArtistDetail,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetail) return <Loader title="正在载入艺人详情..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
      />
    </div>
  );
};

export default ArtistDetails;
