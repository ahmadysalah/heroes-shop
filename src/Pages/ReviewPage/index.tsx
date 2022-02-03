import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import PlaceOrder from "./placeOrder";
import { loadStripe } from "@stripe/stripe-js";

const Review = () => {
  // const stripeKey = (async () => {
  //   const response = await axios.get(
  //     `${process.env.REACT_APP_DOMAINURL}config/stripe-key`
  //   );

  //   return loadStripe(response.data.publishableKey);
  // })();
  // console.log(stripeKey, "hiiiiiii");

  const stripeKey = loadStripe("pk_test_kvaWWuoOUKU8FfTgtn5U2LVC00If7nyUo0");
  return (
    <>
      <Elements stripe={stripeKey}>
        <PlaceOrder />
      </Elements>
    </>
  );
};

export default Review;
