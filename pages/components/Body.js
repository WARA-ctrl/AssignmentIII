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
  const useAble = (shop) => {
    setShopData(shop.features);
    // setDataFilter(shop.features[i].properties.name);
  };

  useEffect(() => {
    fetch(
      "https://api.geoapify.com/v2/places?categories=catering.restaurant&bias=proximity:100.523186,13.736717&limit=20&apiKey=f85e677b429c4c0e92ce5b005c3642b1"
    )
      .then((response) => response.json())
      .then((result) => useAble(result))
      .catch((error) => console.log("error", error));
    console.log(shopData);
    // console.log(shop.features[0].properties.name);
  }, []);

  // const searchShop = (shops) => {
  //   return shops.filter((item) => {
  //     return dataFilter.some((filter) => {
  //       if (item[filter]) {
  //         return (
  //           item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) >
  //           -1
  //         );
  //       }
  //     });
  //   });
  // };

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
      {word}
      <ul>
        {searchShop(shopData).map((item, index) => {
          return (
            <li key={index} className="card">
              <h1>{item.properties.name}</h1>
              <h3>
                {item.properties.address_line1}
                {item.properties.address_line2}
              </h3>
              <h4>Distance : {item.properties.distance} km</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
