import React, { useState } from "react";

import { Input, InputContainer, StripeElement } from "./style";
import Typography from "../../Typography";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const [name, setName] = useState<string>("");
  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      // client secret
      // res.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      }
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h6" fontWeight={700} gutterBottom={true}>
        Payment Details
      </Typography>

      <form>
        <InputContainer>
          <div style={{ width: "50%" }}>
            <Typography variant="body1">Name</Typography>
            <Input
              type="string"
              placeholder="Amy Mayer"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div style={{ width: "50%" }}>
            <Typography variant="body1">Card Number</Typography>
            <StripeElement>
              <CardNumberElement />
            </StripeElement>
          </div>
        </InputContainer>

        <InputContainer>
          <div style={{ width: "50%" }}>
            <Typography variant="body1">Expiration Date</Typography>
            <StripeElement>
              <CardExpiryElement />
            </StripeElement>
          </div>

          <div style={{ width: "50%" }}>
            <Typography variant="body1">CVC</Typography>
            <StripeElement>
              <CardCvcElement />
            </StripeElement>
          </div>
        </InputContainer>
      </form>
    </React.Fragment>
  );
};

export default PaymentForm;
