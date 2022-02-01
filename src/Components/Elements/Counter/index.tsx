import Button from "../Buttons";
import { ContainerCounter, CounterDiv } from "./counter.style";
import { useTheme } from "styled-components";
import { useAppDispatch } from "../../../Store/configureStore";
import { addItemToCart } from "../../../Store/Slices/user";
import { useState } from "react";
interface IPropsCounter {
  counter: number;
  productId?: string | undefined;
  color: string;
  setCounterDetails?: (obj: any) => void
}

const Counter: React.FC<IPropsCounter> = ({ setCounterDetails, ...props }: IPropsCounter) => {
  const [counterState, setCounterState] = useState(1)
  const dispatch = useAppDispatch();
  const { counter, productId, color } = props;
  const theme = useTheme();
  const increment = () => {
    if (productId) {
      if (setCounterDetails) {
        setCounterState(counterState + 1)
        setCounterDetails({ productId, qty: counterState + 1, color })
      }
      else { dispatch(addItemToCart({ productId, qty: counter + 1, color })) }
    }
  };

  const decrement = () => {
    if (productId) {
      if (setCounterDetails) {
        setCounterState(counterState - 1)
        setCounterDetails({ productId, qty: counterState - 1, color })
      }
      else {
        if (productId && counter !== 1) {
          dispatch(addItemToCart({ productId, qty: counter - 1, color }));
        }
      }
    }

  };

  return (
    <ContainerCounter>
      <Button
        bold={true}
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
        borderRaduies={"0px"}
        padding={"0rem 1rem "}
        onClick={decrement}
        backgroundColor={`${theme.background.default}`}
        type="button"
        fontSize={"14px"}
        colorHover={theme.common.black}
        color={theme.textColors.counterColor}
        disabled={counter === 1}
      >
        -
      </Button>

      <CounterDiv>{setCounterDetails ? counterState : counter}</CounterDiv>
      <Button
        bold={true}
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
        borderRaduies={"0px"}
        padding={"0rem 1rem"}
        backgroundColor={`${theme.background.default}`}
        type="button"
        fontSize={"14px"}
        colorHover={theme.common.black}
        color={theme.textColors.counterColor}
        onClick={increment}
      >
        +
      </Button>
    </ContainerCounter>
  );
};

export default Counter;
