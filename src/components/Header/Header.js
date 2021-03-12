import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./HeaderStyles.scss";

/**
 * Funtion component Header, contain input searchs 
 * @param {object} parentHistory props function component parent, router props
 * @public
 */
const Header = ({ parentHistory }) => {

/**
 * Hook use state query, establishes inictial state input querty, set new state
 * @param {string} query input search 
 * @example setQuery('someting')
 */
  const [query, setQuery] = useState("");

/**
 * Hook use effect, activate use state query hook, change query when is rewrite in url
 * is activate to change location search url
 */
  useEffect(() => {
    if (parentHistory.location.search !== "") {
      const newQuery = parentHistory.location.search.split("=")[1];
      setQuery(newQuery);
    }
  }, [parentHistory.location.search]);

/**
 * Funtion handleSubmitSearch change location search does submit click button, make 
 * @param {Event} e array properties Event
 * @example handleSubmitSearch(e) 
 */
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
  /** No user action on button is allowed */
  parentHistory: PropTypes.object.isRequired,
};

export default Header;