import React, { useContext } from 'react'
import { Button, ButtonWrapper, Content, Heading, Label } from './styledComponents/CartConfirmation'
import { Box, Modal } from '@mui/material'
import { Context } from '../utilities/context/Context';
import { ButtonClose } from '../pages/styledComponents/Payment';
import { useDispatch } from 'react-redux';
import { addItems, clearCart } from '../utilities/redux/cartSlice';

const CartConfirmation = ({data}) => {
  const { name, price, id, restId } = data

    const style = {
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 250,
        bgcolor: 'white',
        boxShadow: 2
      };

      const context = useContext(Context)
      const dispatch = useDispatch()


      const handleClose = () => {
        context.setShowModal(false);
      };

      
      const handleStart = () => {
        // make cart empty, add the current item
        context.setCartData([])
        context.setQuantity([])
        dispatch(clearCart())
        context.setStart(true)
        context.setShowModal(false)
        dispatch(addItems(data))
        context.setQuantity(prev => [...prev, { id: id, qty: 1, name: name, price: price / 100, restId: restId }])
      }

      const handleNO = () => {
        // don't add current item to the cart, make qty inc decrease btn back to "add"
        context.setCartChoiceNo(true)
        context.setShowModal(false)
      }

  return (
    <Modal
        open={context.showModal}
        onClose={handleClose}
        BackdropProps={{
            invisible: true
          }}
        className="modal-dialog-centered"
    >
        <Box sx={style}>
            <ButtonClose onClick={() => context.setShowModal(false)}><i class="fa-solid fa-xmark" style={{fontSize: "18px"}}></i></ButtonClose>
            <Content>
                <Heading>Items already in cart</Heading>
                <Label>Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</Label>
            </Content>
            <ButtonWrapper>
                <Button onClick={handleNO}> No </Button>
                <Button onClick={handleStart} type="start"> Yes, start afresh </Button>
            </ButtonWrapper>
        </Box>
    </Modal>
  )
}

export default CartConfirmation
