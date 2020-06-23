import React from "react";
import BenCard from "../BenCard/benCard.component";
import "./benefits.styles.scss";

const Benefits = () => {
  const benArray = [
    {
      benId: 1,
      mainText: "Coupon Savings",
      tagLine: "Upto 40% off on everyday essentials",
      color: "#2C2D2C",
      // color : "#f68276",
      btnText: "Shop Coupons",
    },

    {
      benId: 2,
      mainText: "Free Delivery",
      tagLine: "With Selected Items",
      color: "#2C2D2C",
      // color : "#62dc63",
      btnText: "Save Now",
    },

    {
      benId: 3,
      mainText: "Gift Vouchers",
      tagLine: "With personal care items",
      color: "#2C2D2C",
      // color : "#5bc489",
      btnText: "Shop Vouchers",
    },

    {
      benId: 4,
      mainText: "Lifetime Warrenty",
      tagLine: "On Selected Tech Products",
      color: "#2C2D2C",
      // color : "#e4a53f",
      btnText: "Learn More",
    },
  ];

  return (
    <div className="benefits">
      {benArray.map((ben) => (
        <BenCard
          key={ben.benId}
          mainText={ben.mainText}
          tagLine={ben.tagLine}
          btnText={ben.btnText}
          color={ben.color}
        />
      ))}
    </div>
  );
};

export default Benefits;
