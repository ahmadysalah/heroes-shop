import { Fragment } from "react";
import {
  Step,
  Hr,
  Stepper,
  WrapperFormAndOrder,
  ContentPlaceOrder,
  ContentDetailsPlaceOrder,
  Title,
  LinkRouter,
  ContainerOrderDetails,
  PositionButton,
} from "./style";
import Typography from "../../Components/Typography";
import { ContentCart } from "./OrderDetails";
import ContentOrder from "./ContentOrder";
import { useNavigate, useParams } from "react-router";
import Container from "../../Components/Container";
import { useLocation } from "react-router-dom";
import { RootState } from "../../Store/configureStore";
import { useSelector } from "react-redux";

// Stripe Hooks

// Stripe Checkout Form
import PaymentForm from "../../Components/Stripe/checkoutForm/paymentForm";
import Button from "../../Components/Elements/Buttons";
import { CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PlaceOrder = () => {
  let navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  let { data } = useSelector((state: RootState) => state?.entities.user);
  const { order } = useSelector((state: RootState) => state?.entities.order);
  const items = useSelector(
    (state: RootState) => state?.entities?.user?.data?.cart?.items
  );
  const city = query.get("city");
  const country = query.get("country");
  const street = query.get("streetAddress");
  const code = query.get("zipCode");
  const { id } = useParams();

  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleSubmit = async () => {
    console.log(order?.clientSecret, elements.getElement(CardNumberElement))
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      order?.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      }
    );
    if (!error) {
      navigate(
        `/product/payment/${id}?city=${city}&country=${country}&zipCode=${code}&streetAddress=${street}`
      );
    };
  };


  return (
    <Container>
      <Typography variant="h6" fontWeight={700}>
        Review Order{" "}
      </Typography>
      <Stepper>
        <>
          <Step
            opacity=".5"
            onClick={() => navigate("/product/review/shipping/:id")}
          >
            1
          </Step>
          <Typography
            children="shipping and payment"
            fontWeight={700}
            onClick={() => navigate("/product/review/shipping/:id")}
            style={{
              fontSize: "15px",
              opacity: ".5",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
        </>
        <Hr />
        <>
          <Step> 2 </Step>
          <Typography
            children=" place and order"
            fontWeight={700}
            style={{
              fontSize: "15px",
            }}
          />
        </>
      </Stepper>
      <WrapperFormAndOrder Grid="65% 35%">
        <ContentPlaceOrder>
          <Typography
            children="Shipping Address"
            fontWeight={700}
            style={{
              fontSize: "15px",
            }}
          />
          <Typography
            children={`${data?.firstName}  ${data?.lastName}`}
            style={{
              fontSize: "15px",
            }}
          />
          <Typography
            children={` ${country} ${city} ${code}${street}`}
            style={{
              fontSize: "15px",
            }}
          />
          <Title>
            <Typography
              children="Order Details"
              fontWeight={700}
              variant="h6"
              style={{
                letterSpacing: "1.28px",
              }}
            />
            <LinkRouter to="/cart"> change </LinkRouter>
          </Title>
          {items?.map((item: any) => (
            <Fragment key={"fragment" + item.product._id}>
              <ContentCart
                key={item.product._id}
                imgUrl={item.product.images[0] as string}
                price={item.product.price}
                title={item.product.name}
                qty={item.qty}
              />
            </Fragment>
          ))}
          <PaymentForm id={id} city={city} country={country} code={code} street={street} order={order} />
        </ContentPlaceOrder>
        <ContainerOrderDetails>
          <ContentDetailsPlaceOrder>
            <Typography
              children="Order Details"
              fontWeight={700}
              variant="h6"
              style={{
                letterSpacing: "1.28px",
              }}
            />
            <ContentOrder />
          </ContentDetailsPlaceOrder>
          <PositionButton>
            <Button
              type="submit"
              backgroundColor={"#FCDD06"}
              padding={"1rem 3rem"}
              fontSize={"12px"}
              form={"form"}
              margin="3px 0px 0px 70px"
              onClick={handleSubmit}
            >
              place order
            </Button>
          </PositionButton>
        </ContainerOrderDetails>
      </WrapperFormAndOrder>
    </Container>
  );
};

export default PlaceOrder;
