import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./HeaderStyles.scss";

const Header = ({ parentHistory }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (parentHistory.location.search !== "") {
      const newQuery = parentHistory.location.search.split("=")[1];
      setQuery(newQuery);
    }
  }, [parentHistory]);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) return;
    parentHistory.push({
      pathname: "/items",
      search: `?search=${query.trim()}`,
    });
  };

  return (
    <header className="nav-header">
      <div className="container-general">
        <div className="row justify-content-center mt-2">
          <div className="col-11 col-lg-10">
            <div className="row justify-content-between">
              <div className="col-2 col-lg-1">
                <div className="nav-logo-container">
                  <a className="nav-logo"></a>
                </div>
              </div>
              <div className="col-10 col-lg-11">
                <div className="nav-input-container">
                  <form onSubmit={handleSubmitSearch} className="nav-form">
                    <input
                      type="text"
                      className="nav-input"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Nunca dejes de buscar"
                    />
                    <button className="nav-button" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
    parentHistory: PropTypes.object.isRequired,
}
export default Header;
