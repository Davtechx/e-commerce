import React, { useEffect, useState } from "react";
import PerfumeItem from "./PerfumeItem";
import Loader from "../Layout/Loader";

import classes from "./Perfumes.module.css";

const Perfumes = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    let transformedData = [];
    //  const response = await fetch(
    //    "https://react-demo-7bdfc-default-rtdb.firebaseio.com/perfumes.json"
    //  );
    //  const data = await response.json()

    const data = {
      p1: {
        description:
          "Versace Eros for Bossly Fragrance that keeps you scented nice for the rest of the day",
        image:
          "https://res.cloudinary.com/developeraspire/image/upload/v1629291835/laura-chouette-gbT2KAq1V5c-unsplash_nqrsem.jpg",
        name: "Versace Eros",
        price: 300.55,
      },
      p2: {
        description:
          "di Giola is made for anyone looking for a minimal budget but an wanting to small nice, get the amazing French perfume made from the most pretty flowers in France",
        image:
          "https://res.cloudinary.com/developeraspire/image/upload/v1629459054/karly-jones-4i9ef6xU738-unsplash_hrlhsf.jpg",
        name: "di Giola",
        price: 100.45,
      },
      p3: {
        description:
          "Chanel is the number French cologne produced using the best flower petals in France, mixed with the best hands, all for you to smell nice for the rest of the day",
        image:
          "https://res.cloudinary.com/developeraspire/image/upload/v1629291797/fernando-andrade-potCPE_Cw8A-unsplash_a8fsst.jpg",
        name: "N'5 Chanel",
        price: 150,
      },
      p4: {
        description:
          "SI isa beautiful perfume made with the most pretty and amazing rose petal in all of Italy, made by expert for goodluck and favours, you can never smell wrong with SI. Get SI today",
        image:
          "https://res.cloudinary.com/developeraspire/image/upload/v1629459259/heidi-walley-m6sh2vS0Yjk-unsplash_cdwves.jpg",
        name: "SI",
        price: 165.23,
      },
      p5: {
        description:
          "CK gives Fragrance and smell like no other, bringing the perfection of your being and announcing your presence with your amazing scent",
        image:
          "https://res.cloudinary.com/developeraspire/image/upload/v1629291794/sagar-sawant-civayXc2m9c-unsplash_blxwup.jpg",
        name: "CK be",
        price: 76.88,
      },
      p6: {
        description:
          "Coco Chanel is from the popular brand 'Chanel',built with the best rose flower petals from the most beautiful garden in France, mixed with caution and you in mind, aimed at giving you long lasting fragrance all day long, that bossy scent you deserve.",
        image:
          "https://res.cloudinary.com/developeraspire/image/upload/v1629880685/laura-chouette-4sKdeIMiFEI-unsplash_imabpt.jpg",
        name: "Coco Chanel",
        price: 128.86,
      },
    };

    for (let key in data) {
      const productList = {
        id: key,
        name: data[key].name,
        price: data[key].price,
        description: data[key].description,
        image: data[key].image,
      };
      transformedData.push(productList);
    }
    setLoading(false);
    setProduct(transformedData);
  };

  const PRODUCTS = product.map((item) => (
    <PerfumeItem
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <div className={classes.display}>
      {PRODUCTS}
      {loading && <Loader />}
    </div>
  );
};

export default Perfumes;
