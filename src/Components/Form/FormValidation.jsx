import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.scss";

export default function CodeOfConductForm({ validate }) {
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    merchBusinessName: "",
    quickbooksCompanyId: "",
    merchStreetAddress: "",
    city: "",
    province: "",
    postal: "",
    phone: "",
    complaintDetails: ""
  });
  const {
    email,
    firstName,
    lastName,
    merchBusinessName,
    quickbooksCompanyId,
    merchStreetAddress,
    city,
    province,
    postal,
    phone,
    complaintDetails
  } = values;
  //
  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  // change event handler
  const handleChange = (evt) => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === "number" ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };

  //submit
  const submitGoogleForm = (url) => {
    let response;
    try {
      response = axios.post(url, null, null);
    } catch (e) {
      response = e;
    }
    console.log(response);
  };

  // form submit handler
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every((t) => t === true) // every touched field is true
    ) {
      //Submitting form Data
      console.log(values);
      //form data with not compulsory data
      const devNoid =
        "1FAIpQLSf2yrQUARhZbk9Zr4AO4ag04-qznvj89HiRJ30TBR2fmoNXSQ";
      const devnoFormData = {
        "entry.2072190569": values.email,
        "entry.1459916098": values.firstName,
        "entry.1741773011": values.lastName,
        "entry.431481611": values.merchBusinessName,
        "entry.1288171892": values.quickbooksCompanyId,
        "entry.1897877950": values.merchStreetAddress,
        "entry.1947415166": values.city,
        "entry.1373325993": values.province,
        "entry.746303561": values.postal,
        "entry.1034364738": values.phone,
        "entry.1564843107": values.complaintDetails
      };

      const formUrl =
        "https://docs.google.com/forms/d/e/" + devNoid + "/formResponse";
      const queryString = require("query-string");
      const q = queryString.stringifyUrl({
        url: formUrl,
        query: devnoFormData
      });
      console.log(q);
      submitGoogleForm(q);
      document.getElementById("form").style.display = "none";
      document.getElementById("successmessage").style.display = "block";
    }
  };

  return (
    <>
      <form id="form">
        <div className={styles.FormContainer}>
          <div className={styles.form__item}>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="email">
              Email<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.email && errors.email}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="firstName">
              First Name<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.firstName && errors.firstName}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="lastName"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="lastName">
              Last Name<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.lastName && errors.lastName}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="merchBusinessName"
              value={merchBusinessName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="merchBusinessName">
              Merchant Business Name<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.merchBusinessName && errors.merchBusinessName}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="quickbooksCompanyId"
              value={quickbooksCompanyId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="quickbooksCompanyId">
              Quickbooks Company ID<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.quickbooksCompanyId && errors.quickbooksCompanyId}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="merchStreetAddress"
              value={merchStreetAddress}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="merchStreetAddress">
              Merchant Street Address<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.merchStreetAddress && errors.merchStreetAddress}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="city"
              value={city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="city">
              City<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>{touched.city && errors.city}</div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="province"
              value={province}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="province">
              Province<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.province && errors.province}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="postal"
              value={postal}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="postal">
              Postal Code<span className={styles.required}>*</span>
            </label>
            <div className={styles.required}>
              {touched.postal && errors.postal}
            </div>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="phone">Phone number</label>
            <div className={styles.required}>
              {touched.phone && errors.phone}
            </div>
          </div>
          <div className={styles.form__item}>
            <textarea
              type="text"
              name="complaintDetails"
              value={complaintDetails}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              row="10"
            />
            <label htmlFor="complaintDetails">
              Code of Conduct Complaint Details
            </label>
            <div className={styles.required}>
              {touched.complaintDetails && errors.complaintDetails}
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <div id="successmessage" style={{ display: "none" }}>
        Form submitted
      </div>
    </>
  );
}
