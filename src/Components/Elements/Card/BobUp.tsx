import React, { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Dialog/Modal";
import ModalTitle from "../Modal/Dialog/ModalTitle/ModalTitle";
import ModalAction from "../Modal/Dialog/ModalAction/ModalAction";
import Button from "../Buttons";
import { deleteItemFromCart } from "../../../Store/Slices/user";
import { useAppDispatch } from "../../../Store/configureStore";
import { ModalProductName } from "./style";
import { useTheme } from "styled-components";

interface IBopUpProps {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  name: string;
  id: string;
}

const BopUp = ({ isOpen, name, id, close }: IBopUpProps) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const closeClickHandler = (id: string) => {
    dispatch(deleteItemFromCart(id));
    close((prev) => !prev);
  };
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => close(false)}>
          <ModalTitle>
            Remove <ModalProductName>{name}</ModalProductName> from cart?
          </ModalTitle>
          <ModalAction>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => {
                closeClickHandler(id);
              }}
              backgroundColor={theme.colors.error}
            >
              Remove
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              backgroundColor={theme.colors.primary}
              onClick={() => {
                close((prev: boolean) => !prev);
              }}
            >
              Cancel
            </Button>
          </ModalAction>
        </Modal>
      )}
    </>
  );
};

export default BopUp;
