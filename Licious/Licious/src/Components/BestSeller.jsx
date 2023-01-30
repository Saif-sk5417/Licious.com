import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { SingleCard } from "./SingleCard";

import styles from "./Component.module.css";

const BestSeller = ({ title }) => {
  const Data = [
    {
      id: 1,
      quantity: 1,
      Name: "Tilapia (Jalebi) Medium - Fillet",
      des_1: "Nakhre that make fish fly - cut, cleaned for your pan",
      Weight: "250gms",
      Price: 249,
      Bone: "Without Bone",
      Sub_category: "Freshwater",
      Pieces: "No. of Pieces 4-6",
      des_2:
        "We make fish fly so it's delivered fresh to your doorstep. Delicately flavoured & flaky, the Tilapia Medium - Fillet is a versatile cut that can be grilled, baked or fried.\nCut & cleaned by experts, all our fish & seafood are cleaned in RO purified water. Their delicate texture complements the mild-flavour beautifully, making it an absolute treat to eat not to forget the sweet aftertaste it offers.\nAll our meats are temperature-controlled between 0-4 degree celsius for maximum freshness and passed through 150+ quality checks.\nOrder Tilapia Medium - Fillet online and get doorstep delivery.",
      Image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1018e1b8-5dfe-8fd0-3c07-c40866569818/original/p0_tile_images-35.jpg",
    },
    {
      id: 2,
      quantity: 1,
      Name: "Pearl Spot (Karimeen/Pattai) Medium Whole, Cleaned With Head",
      des_1: "Also called Karimeen, Karimeenu, Patai",
      Weight: "400gms",
      Price: 599,
      Bone: "Whole&Cleaned",
      Sub_category: "With Head",
      Pieces: "No. of Pieces 2-3",
      Image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cd38ee9-44d9-3413-5954-a3c2436b1f65/original/p2_tile_images_6th_folder-39.jpg",
    },
    {
      id: 3,
      quantity: 1,
      Name: "Tilapia (Jalebi) Large - Fillet",
      des_1: "Mild-tasting, white-fleshed low in fat Tilapia cut into fillets.",
      Weight: "250gms",
      Price: 275,
      Bone: "Freshwater Fish",
      Sub_category: "Large Sized",
      Pieces: "No. of Pieces 3-5",
      Image:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/21669233-a4f0-bfe0-506f-d9fa2f68bbfd/original/WhatsApp_Image_2022-02-07_at_3.50.52_PM.jpeg",
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

export default BestSeller;
