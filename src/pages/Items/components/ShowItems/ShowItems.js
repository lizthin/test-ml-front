import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemsServices from "../../../../services/ItemService/ItemsService";
import "./ShowItemsStyles.scss";
import freeShipping from "../../../../assets/img/icons/ic_shipping@2x.png.png.png";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const ShowItems = ({ history }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (history.location.search !== "") {
      const query = history.location.search.split("=")[1];

      ItemsServices.fetchAllItemsFiltered(query)
        .then(({ items, categories }) => {
          setItems(items.slice(0, 4));
          setCategories(categories.slice(0, 5));
        })
        .catch((error) => console.warn);
    }
  }, [history.location.search]);

  const handleRedirectUrlDetail = (id) => {
    history.push({
      pathname: `/items/${id.trim()}`,
      data: {
        categories: categories,
      },
    });
  };

  const handleRedirectUrl = (category) => {
    history.push(`/items?search=${category.trim()}`);
  };

  const shipping = (
    <div className="container-img-shipping">
      <img src={freeShipping} alt={freeShipping} className="img-shipping" />
    </div>
  );

  return (
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-10">
          <div className="row">
            <div className="col-12">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <Breadcrumb
                    key={category}
                    properties={{
                      category,
                      lengthCatgories: categories.length,
                      index,
                      handleRedirectUrl,
                    }}
                  />
                ))
              ) : (
                <>
                  <div className="row mt-2 pt-2"></div>
                </>
              )}
            </div>
          </div>
          {items.map((item) => (
            <div className="row justify-content-around" key={item.id}>
              <div
                className="col-12 card-items"
                onClick={() => {
                  handleRedirectUrlDetail(item.id);
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="container-img-card-item">
                      <img
                        className="img-card-item"
                        src={item.picture}
                        alt={item.picture}
                      />
                    </div>
                    <div className="currency-card-item">{item.city}</div>
                    <div className="container-detail-card-item">
                    
                      <div className="price-card-items top-32-general">
                        <div className="left-item">
                          ${" "}
                          {new Intl.NumberFormat("de-DE").format(
                            item.price.amount
                          )}
                        </div>
                        {item.free_shipping ? shipping : <></>}
                      </div>
                      <p className="title-card-items">{item.title}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ShowItems.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ShowItems;
