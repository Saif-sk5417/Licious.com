import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { getSeaFoodData } from "./Redux/action";
import { SingleCard } from "./SingleCard";
import styles from "./SingleCard.module.css";

const SeaFood = () => {
  const dispatch = useDispatch();
  const SeaFoodData = useSelector((store) => store.SeaFoodData);
  useEffect(() => {
    dispatch(getSeaFoodData());
    console.log(SeaFoodData);
  }, []);
  return (
    <div style={{ marginTop: "200px" }}>
      <div className={styles.SingleCard_Main}>
        {SeaFoodData.map((el) => (
          <ChakraProvider>
            <SingleCard
              Name={el.Name}
              image={el.Image}
              des_1={el.des_1}
              weights={el.Weight}
              Price={el.Price}
              quantity={el.quantity}
              key={el.id}
            />
          </ChakraProvider>
        ))}
      </div>
    </div>
  );
};

export { SeaFood };
