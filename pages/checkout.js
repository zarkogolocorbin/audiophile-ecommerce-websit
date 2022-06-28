import React, { useState, useEffect } from "react";
import FooterComponent from "../components/Shared/Footer";
import NavbarComponent from "../components/Shared/Navbar";
import Link from "next/link";
import SummaryComponent from "../components/Checkuout/Summary";
import Image from "next/image";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FieldComponent from "../components/Checkuout/Field";
import Confirmation from "../components/Shared/Confirmation";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eNumber: "",
  ePin: "",
};

const checkoutSchema = {
  name: Yup.string().required("*Required"),
  email: Yup.string().email("Wrong format").required("*Required"),
  phone: Yup.string().required("*Required"),
  address: Yup.string().required("*Required"),
  zipCode: Yup.string().min(4, "Too short").required("*Required"),
  city: Yup.string().required("*Required"),
  country: Yup.string().required("*Required"),
};

export default function CheckoutPage({ prev }) {
  const [paymentType, setPaymentType] = useState("e-money");
  const [schema, setSchema] = useState(checkoutSchema);
  const [done, setDone] = useState(false);

  const handleDone = () => {
    setDone(true);
  };

  useEffect(() => {
    if (paymentType === "e-money") {
      const eSchema = {
        eNumber: Yup.number().required("*Required"),
        ePin: Yup.string().min(4, "Too short").required("*Required"),
      };
      setSchema(Yup.object().shape({ ...checkoutSchema, ...eSchema }));
    } else {
      setSchema(Yup.object().shape({ ...checkoutSchema }));
    }
  }, [paymentType]);
  return (
    <>
      <NavbarComponent />
      <main className="main-checkout">
        <div className="prev-btn">
          <Link href={prev} passHref>
            <a>Go Back</a>
          </Link>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => handleDone()}
        >
          {(props) => (
            <div className="checkout-wrapper">
              <div className="form-wrapper">
                <h1 className="title">CHECKOUT</h1>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <div className="form">
                    <div className="form-part">
                      <h2 className="subtitle">Bling Details</h2>
                      <div className="form-split">
                        <div className="form-control">
                          <FieldComponent
                            name={"name"}
                            label={"Name"}
                            placeholder={"Alexei Ward"}
                            type={"text"}
                          />
                        </div>
                        <div className="form-control">
                          <FieldComponent
                            name={"email"}
                            label={"Email Address"}
                            placeholder={"alexei@mail.com"}
                            type={"email"}
                          />
                        </div>
                        <div className="form-control">
                          <FieldComponent
                            name={"phone"}
                            label={"Phone Number"}
                            placeholder={"+1 202-555-0136"}
                            type={"text"}
                          />
                        </div>
                      </div>
                      <h2 className="subtitle">shipping info</h2>
                      <div className="form-control address">
                        <FieldComponent
                          name={"address"}
                          label={"Address"}
                          placeholder={"1137 Williams Avenue"}
                          type={"text"}
                        />
                      </div>
                      <div className="form-split">
                        <div className="form-control">
                          <FieldComponent
                            name={"zipCode"}
                            label={"ZIP Code"}
                            placeholder={"10001"}
                            type={"text"}
                          />
                        </div>
                        <div className="form-control">
                          <FieldComponent
                            name={"city"}
                            label={"City"}
                            placeholder={"New York"}
                            type={"text"}
                          />
                        </div>
                        <div className="form-control">
                          <FieldComponent
                            name={"country"}
                            label={"Country"}
                            placeholder={"United States"}
                            type={"text"}
                          />
                        </div>
                      </div>
                      <h2 className="subtitle">payment details</h2>
                      <div className="payment-method">
                        <h3>Payment Method</h3>
                        <div>
                          <div
                            className={`radio-button ${
                              paymentType === "e-money" ? "active" : ""
                            }`}
                            onClick={() => setPaymentType("e-money")}
                          >
                            <span />
                            e-Money
                          </div>
                          <div
                            className={`radio-button ${
                              paymentType === "cash" ? "active" : ""
                            }`}
                            onClick={() => setPaymentType("cash")}
                          >
                            <span />
                            Cash on Delivery
                          </div>
                        </div>
                      </div>
                      {paymentType === "e-money" ? (
                        <div className="form-split">
                          <div className="form-control">
                            <FieldComponent
                              name={"eNumber"}
                              label={"e-Money Number"}
                              placeholder={"238521993"}
                              type={"number"}
                            />
                          </div>
                          <div className="form-control">
                            <FieldComponent
                              name={"ePin"}
                              label={"e-Money PIN"}
                              placeholder={"6891"}
                              type={"number"}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="cash-delivery">
                          <Image
                            src="/assets/checkout/icon-hands.svg"
                            width={48}
                            height={48}
                            alt="hands icon"
                          />
                          <p>
                            The ‘Cash on Delivery’ option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Form>
              </div>
              <SummaryComponent submit={props.handleSubmit} />
            </div>
          )}
        </Formik>
        {done && <Confirmation />}
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      prev: req.headers.referer,
    },
  };
}
