import {
  Button,
  Center,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import  Footer  from "../Components/Footer";
import  Navbar  from "../Components/Navbar";
import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { resetcartbag } from "../Redux/action";

export const PaymentPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let data = useSelector((s) => s.products);
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let handlecheakout = () => {
    // data
    //   .filter((e) => e.cartquantity > 0)
    //   .forEach((e) => dispatch(resetcartbag(e.id)));
    // Swal.fire({
    //   title: "Order Placed Succesfully !!",
    //   text: "Thankyou For Shoping",
    //   type: "success",
    // });
    scrollTop();
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="Card-main">
        <div className="Card-left">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/724/908/non_2x/black-mock-up-credit-card-for-e-commerce-template-of-bank-card-with-golden-chip-black-plastic-card-for-debit-and-credit-transaction-isolated-illustration-vector.jpg"
            alt="debitcard"
            id="debit-card"
          />
        </div>
        <div className="Card-right">
          <Heading>Your Payment Record</Heading>
          <br />
          <div>
            <label>Card-holder Name</label>
            <InputGroup>
              <Input focusBorderColor="#DBDAF0" variant="flushed" />
            </InputGroup>
          </div>
          <br />
          <div>
            <label>Card Number </label>
            <InputGroup mt={5}>
              {/* <PinInput size="sm" focusBorderColor="#DBDAF0" variant="flushed">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="0px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="0px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="0px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput> */}
              <Input _placeholder='Enter Your 15 digit Number ' />
            </InputGroup>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginTop: "10px" }}>
              <label>Expiry Date</label>
              <InputGroup>
                <Input
                  focusBorderColor="#DBDAF0"
                  variant="flushed"
                  type="month"
                />
              </InputGroup>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>CVV</label>
              <InputGroup>
                <Input
                  focusBorderColor="#DBDAF0"
                  variant="flushed"
                  type="password"
                />
              </InputGroup>
            </div>
          </div>
          <br />
          <div>
            <Checkbox isDisabled defaultChecked>
              Save my details for future payments
            </Checkbox>
          </div>
          <br />
          <div>
            <Center>
              <Button onClick={handlecheakout} colorScheme="purple">
                Pay Now
              </Button>
            </Center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
