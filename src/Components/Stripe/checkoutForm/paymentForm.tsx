import React, { useState } from "react";

import { Input, InputContainer, StripeElement } from "./style";
import Typography from "../../Typography";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";

const PaymentForm: React.FC<any> = ({ id, city, country, code, street, order }) => {
  const [name, setName] = useState<string>("");

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
        {/* <PositionButton>
          <Button
            type="submit"
            backgroundColor={"#FCDD06"}
            padding={"1rem 3rem"}
            fontSize={"12px"}
            form={"form"}
            margin="3px 0px 0px 70px"
          >
            place order
          </Button>
        </PositionButton> */}
      </form>
    </React.Fragment>
  );
};

export default PaymentForm;
