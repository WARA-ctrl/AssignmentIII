
import React, { useContext } from "react";
import { AppContext } from "..";
// import axios from "axios";
import { useState, useEffect } from "react";
const Body = () => {
  const { word, setWord } = useContext(AppContext);

  const data = [
    {
      properties: { name: "Sea G Seafood Buffet", street: "Soi Chulalongkorn" },
    },
    {
      properties: {
        name: "th",
        street: "Banthat Thong Road",
        neighbourhood: "Charoen",
      },
    },
  ];
  const [dataFilter, setDataFilter] = useState(["name"]);
  // const [shop, setShop] = useState([]);
  const [shopData, setShopData] = useState([]);
  const xAble = (shop) => {
    setShopData(shop.features);
    console.log("is shop data", shopData);
    // setDataFilter(shop.features[i].properties.name);
  };

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v2/places?categories=catering.restaurant&bias=proximity:100.523186,13.736717&limit=20&name=${word}&apiKey=f85e677b429c4c0e92ce5b005c3642b1`
    )
      .then((response) => response.json())
      .then((result) => xAble(result))
      .catch((error) => setShopData([]));
    // console.log(shop.features[0].properties.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  const searchShop = (shops) => {
    return shops.filter((item) => {
      return dataFilter.some((filter) => {
        if (item[filter]) {
          return (
            item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) >
            -1
          );
        }
      });
    });
  };
  console.log(dataFilter);
  return (
    <div className="shop">
      <ul>
        {/* {shopData && <div>{shopData.length}</div>} */}
        {!shopData || (shopData.length === 0 && <div>no data</div>)}
        {shopData &&
          shopData.length > 0 &&
          shopData.map((item, index) => {
            return (
              <li key={index} className="card">
                <h1>{item.properties.name}</h1>
                <h3>
                  {item.properties.address_line1}
                  {item.properties.address_line2}
                </h3>
                <h4>Distance : {item.properties.distance} m</h4>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Body;

