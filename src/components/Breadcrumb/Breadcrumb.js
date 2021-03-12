import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./BreadcrumbStyle.scss";

/**
 * Funtion component Breadcrumb print categories.
 * @param {object} properties props router, category list
 */
const Breadcrumb = ({
  properties: { category, lengthCatgories, index, history },
}) => {

/**
 * function handleRedirectUlr change history url when clicked breadcrumb category
 * @param {array} category response filter enabled
 * @example handleRedirectUrl("bolsos")
 */
  const handleRedirectUrl = (category) => {
    history.push(`/items?search=${category.trim()}`);
  };

  return (
    <div className="flex-categories" key={category}>
      <p className="p-categories"
        onClick={() => {
          handleRedirectUrl(category);
        }}
      >
        {category}
      </p>
      {(index + 1) < lengthCatgories ? <FontAwesomeIcon icon={faChevronRight} style={{
        fontSize: 19,
        color: '#999999',
        float: 'left',
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRigth: 5,
      }} /> : <></>}
    </div>
  );
}

Breadcrumb.propTypes = {
  properties: PropTypes.object.isRequired,
};
export default Breadcrumb;