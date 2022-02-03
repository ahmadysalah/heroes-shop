import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import AlertMessage from "../../../Components/Elements/Alert/index";
import { RootState } from "../../../Store/configureStore";
import { Hint, InfoContainer, SuccessMessage, Title } from "./style";

const Index = () => {
  const query = new URLSearchParams(useLocation().search);
  const street = query.get("streetAddress");
  const code = query.get("zipCode");

  const items = useSelector(
    (state: RootState) => state?.entities?.user?.data?.cart?.items
  );
  console.log(items, "hiiiiiiiiiiiii");

  let orders = useSelector((state: RootState) => state.entities.order);
  let shippingAddress = useSelector(
    (state: RootState) => state.entities.order.order?.shippingAddress
  );

  return (
    <SuccessMessage>
      <AlertMessage
        type="card"
        style={{
          padding: "30px",
          marginBottom: "20px",
        }}
      >
        <Title>Payment Success !</Title>

        <InfoContainer>
          <h2>Order number</h2>
          {orders?.order?.orderItems?.map((item, i) => (
            <p key={i}>{item.product}</p>
          ))}
        </InfoContainer>
        <InfoContainer>
          <h2>Shipping Address</h2>
          <p>
            {shippingAddress?.city} {shippingAddress?.country} {street} {code}
          </p>
        </InfoContainer>
        <InfoContainer>
          <h2>Order Items</h2>
          <div>
            {items?.map((item, i) => (
              <p key={i}>{item.product.name}</p>
            ))}
          </div>
        </InfoContainer>
        <Hint>
          An email will be sent to your email address containes order
          confirmation and tacking code
        </Hint>
      </AlertMessage>
    </SuccessMessage>
  );
};

export default Index;
