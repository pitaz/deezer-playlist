import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import ArtistCard from "../../component/ArtistCard";
import { RootState } from "../../store";
import Loader from "../../component/Loader";
import { useNavigate, useNavigation } from "react-router-dom";
import { handlenext } from "../../store/actions/artistsActions";

const Artists: React.FC = () => {
  const { searchResults, loading } = useSelector(
    (state: RootState) => state.artists
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.total / itemsPerPage);

  // Function to get the items for the current page
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.data.slice(startIndex, endIndex);
  };

  // useEffect(() => {
  //   if (searchResults.next) {
  //     dispatch(handlenext(searchResults.next));
  //   }
  // }, [searchResults.next]);

  useEffect(() => {
    // Scroll to the top of the page when changing pages
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleArtistClick = (artistId: number) => {
    navigate(`/artist/${artistId}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="artists" data-testid="artist-list">
      {searchResults?.data?.map((item: any, index: number) => (
        <ArtistCard
          key={index}
          id={item.artist.id}
          artistName={item.artist.name}
          imageSrc={item.artist.picture_medium}
          title={item.title_short}
          handleClick={() => handleArtistClick(item.artist.id)}
        />
      ))}
      {searchResults.data?.length > 10 && (
        <div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => {
              if (searchResults.next) {
                dispatch(handlenext(searchResults.next));
              }
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Artists;
