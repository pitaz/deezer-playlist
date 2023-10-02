import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { searchArtists } from "../../store/actions/artistsActions";
import { RootState } from "../../store";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<any>();
  const { loading } = useSelector(
    (state: RootState) => state.artists
  );
  useEffect(() => {
    if (query.length > 3) {
      dispatch(searchArtists(query));
    }
  }, [dispatch, query]);
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="logo">Deezer</div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
