import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import PlaceOrder from "./placeOrder";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Review = () => {
  const stripeKey = (async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_DOMAINURL}config/stripe-key`
    );

    return loadStripe(response.data.publishableKey);
  })();

  return (
    <>
      <Elements stripe={stripeKey}>
        <PlaceOrder />
      </Elements>
    </>
  );
};

export default Review;
