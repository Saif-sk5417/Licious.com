import Component from "./Component";
import './Component.css'; 

const HomePart1 = () => {
  return (
    <>
    <div className="homepart-main-div">
      HomePart1
      <Component
        srcs={[
          "Image/HomePart11/Todays_Deals.png",
          "Image/HomePart11/Chicken_(2).png",
          "Image/HomePart11/fish.png",
          "Image/HomePart11/MUT.png",
        ]}
        names={["Today's Deal", "Chiken", "Fish & Seafood", "Mutton"]}
      />
      <Component
        srcs={[
          "Image/HomePart11/RC.png",
          "Image/HomePart11/Prawn_(2).png",
          "Image/HomePart11/Coldcuts_(2).png",
          "Image/HomePart11/SPD.png",
        ]}
        names={["Ready to Cook", "Prawns", "Cold Cuts", "Spreads"]}
      />
      <Component
        srcs={[
          "Image/HomePart11/Eggs_(1).png",
          "Image/HomePart11/Biryani_(2).png",
          "Image/HomePart11/PBM_6_(8).png",
          "Image/HomePart11/Masala_1200x840_web.png",
        ]}
        names={["Eggs", "Biryani & Kebab", "Plant Based Meat", "Meat Masala"]}
      />
    </div>
    <div className="div-join-button">
      <div className="joinnow-div">
        <img src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" alt="img" />
        <button className="join-now">Join Now</button>
      </div>
      <hr />
      <p>Join METOPIA to get free delivery on all orders with cart value more than Rs.99.</p>
    </div>
    <div className="disc-div"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/a5372f18-3f0a-a801-0160-cb20957f3acd/original/static-bank-units-nov-web.jpg?format=webp" alt="img" /></div>
    </>
  );
};

export { HomePart1 };
