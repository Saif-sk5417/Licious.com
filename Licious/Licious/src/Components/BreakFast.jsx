import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { SingleCard } from "./SingleCard";

import styles from "./Component.module.css";

const BreakFast = ({ title }) => {
  const Data = [
    {
      id: 1,
      quantity: 1,
      Name: "Chunky Sriracha Chicken Spread",
      des_1: "Nakhre that make fish fly - cut, cleaned for your pan",
      Weight: "Pieces 1",
      Price: 249,
      Bone: "Without Bone",
      Sub_category: "Freshwater",
      Pieces: "No. of Pieces 4-6",
      des_2: "Freshly Cooked Chicken in creamy ,spicy Sriracha Base",
      Image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f063b742-471a-d99b-8698-ad3832c2b346/original/Sriracha-chicken-spreadsTIle-image.jpg?format=webp",
    },
    {
      id: 2,
      quantity: 1,
      Name: "Chunky Shawarma Chicken Spread",
      des_1: "Also called Karimeen, Karimeenu, Patai",
      Weight: "Pieces 1",
      Price: 599,
      Bone: "Whole&Cleaned",
      Sub_category: "With Head",
      Pieces: "No. of Pieces 2-3",
      Image:
        "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4q4jya5rtvg/1/prod_image/1578400920.4229--2020-01-0718:12:00--458?format=webp",
    },
    {
      id: 3,
      quantity: 1,
      Name: "Chunky Herby Tomato Chicken Spread",
      des_1: "Mild-tasting, white-fleshed low in fat Tilapia cut into fillets.",
      Weight: "Pieces 1",
      Price: 275,
      Bone: "Freshwater Fish",
      Sub_category: "Large Sized",
      Pieces: "No. of Pieces 3-5",
      Image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp",
    },
  ];
  return (
    <div>
      <p className={styles.BestSeller_h1}>{title}</p>
      <div className={styles.BestSeller_Main}>
        {Data.map((el) => {
          return (
            <ChakraProvider>
              <SingleCard
                key={el.id}
                Name={el.Name}
                image={el.Image}
                des_1={el.des_1}
                weights={el.Weight}
                Price={el.Price}
                quantity={el.quantity}
              />
            </ChakraProvider>
          );
        })}
      </div>
    </div>
  );
};

export default BreakFast;
