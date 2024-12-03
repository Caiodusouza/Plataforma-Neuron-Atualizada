import React from "react";
import "./PricePlan.css";

const PricePlan = ({ title, price, period, features, isFree, color }) => {
  return (
    <div className="price-plan" style={{ borderColor: color }}>
      <h2 className="plan-title" style={{ backgroundColor: color }}>
        {title}
      </h2>
      <p className="plan-price" style={{ color: color }}>
        {isFree ? "Gratuito" : `R$${price} ${period}`}
      </p>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index} className={`feature ${feature.included ? "included" : "not-included"}`}>
            {feature.included ? "✅" : "❌"} {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricePlan;
