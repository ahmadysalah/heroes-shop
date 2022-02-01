import Counter from "../Counter";
import Typography from "../../Typography";
import {
  ContainerShopping,
  ContainerClose,
  ItemImg,
  ItemCounter,
  ItemTypo,
  Itemprice,
  ContentWrapper,
} from "./style";
import CloseIcon from "../../Icons/CloseIcon";
import { useState } from "react";
import { useNavigate } from "react-router";
import BopUp from "./BobUp";

interface IpropsShopCart {
  data: any;
}
const ShoppingCart = ({ data }: IpropsShopCart) => {
  const { items } = data;

  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [proName, setProName] = useState<string>("this product");
  const [proId, setProId] = useState<string>("");

  const openModalHandler = (productName: string, id: string) => {
    setProId(id)
    setProName(productName);
    setModalDisplay(true);
  };

  const navigate = useNavigate();

  return (
    <>
      {items.map((element: any) => (
        <ContainerShopping key={element.name + element.product._id}>
          <ContainerClose
            onClick={() =>
              openModalHandler(element.product.name, element.product._id)
            }
          >
            <CloseIcon />
          </ContainerClose>

          <ItemImg alignItems="center" justifyContent="center">
            <img
              src={`${element?.product?.images[0]}`}
              onError={(e) => { e.currentTarget.src = "/Assets/default.png" }}
              alt=""
              width={"100%"}
              loading="lazy"
            />
          </ItemImg>
          <ContentWrapper>
            <ItemTypo>
              <Typography
                onClick={() => navigate(`/product/${element.product?._id}`)}
                variant="body1"
                children={element.product.name}
                fontWeight={700}
              />
            </ItemTypo>
            <ItemCounter>
              <Counter
                color=""
                max={element.product.countInStock}
                counter={element.qty}
                productId={element.product._id && element.product._id}
              />
            </ItemCounter>
            <Itemprice>
              <Typography
                variant="body1"
                fontWeight={500}
                children={` $${Math.round(element.itemTotalPrice) - 0.01}`}
              />
            </Itemprice>
          </ContentWrapper>
          <BopUp isOpen={modalDisplay} close={setModalDisplay} name={proName} id={proId} />
        </ContainerShopping>
      ))}
    </>
  );
};

export default ShoppingCart;
