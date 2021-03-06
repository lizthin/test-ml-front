import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ItemsServices from "../../../../services/ItemService/ItemsService";
import './ShowDetailStyles.scss'

const ShowDetail = ({ history }) => {
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
      if(history.location.data) {
        setCategories(history.location.data.categories);
      }

    const id = history.location.pathname.split("/")[
      history.location.pathname.split("/").length - 1
    ];
    ItemsServices.fetchItemById(id)
      .then(({ item }) => {
        setItem(item);
      })
      .catch((error) => console.warn);
  }, [history.location.pathname]);

  const handleRedirectUrl = (category) => {
    history.push(`/items?search=${category.trim()}`);
  };
  
  const toBuy = 'Comprar';
  const titleDescription = 'Descripción del producto';

  return (
    <>
      {item !== null && (
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
              <div className="row row justify-content-around">
                <div className="col-12">
                  <div className="card-detail">
                    <div className="row">
                      <div className="container-img-card-detail">
                        <img
                          className="img-card-detail"
                          src={item.picture}
                          alt={item.picture}
                        />
                      </div>
                      <div className="info-card-detail">
                        <div className="state-seller-detail">
                          {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} {item.sold_quantity === 1 ? 'vendido' : 'vendidos'}
                        </div>
                        <div className="title-card-detail">{item.title}</div>
                        <div className="top-10-detail">
                          <div className="amount-detail">
                            ${" "}
                            {new Intl.NumberFormat("de-DE").format(item.price.amount)}
                          </div>
                          <div className="decimal-detail">
                            {item.price.decimals === 0 ? '00' : item.price.decimals }
                          </div>
                        </div>
                        <div className="top-32-general">
                          <button className="btn-to-buy-detail">
                            {toBuy}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="info-description-detail">
                        <div className="title-card-description-detail">
                          {titleDescription}
                        </div>
                        <div className="description-detail">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDetail;
