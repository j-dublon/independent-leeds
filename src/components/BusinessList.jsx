import React from "react";
import BusinessCard from "./BusinessCard";

const BusinessList = ({ businesses }) => {

  return (
    <section>
      {businesses.map((business) => {
        return <BusinessCard key={business.id} {...business} />;
      })}
    </section>
  );
};

export default BusinessList;
