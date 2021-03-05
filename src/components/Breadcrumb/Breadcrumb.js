import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./BreadcrumbStyle.scss";

const Breadcrumb = ({
  properties: { category, lengthCatgories, index, handleRedirectUrl },
}) => (
  <div className="flex-categories" key={category}>
    <p className="p-categories"
      onClick={() => {
        handleRedirectUrl(category);
      }}
    >
      {category}
    </p>
    {index + 1 < lengthCatgories ? <FontAwesomeIcon icon={faChevronRight} style={{
                            fontSize: 19,
                            color: '#999999',
                            float: 'left',
                            alignSelf: 'center',
                            paddingLeft: 5,
                            paddingRigth: 5,
                        }}/> : <></>}
  </div>
);
Breadcrumb.propTypes = {
  properties: PropTypes.object.isRequired,
};
export default Breadcrumb;
