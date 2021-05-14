import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.scss";

export default function CodeOfConductForm() {
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
  const updateFormData = (event) =>
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });

  const submitGoogleForm = (url) => {
    let response;
    try {
      response = axios.post(url, null, null);
    } catch (e) {
      response = e;
    }
    console.log(response);
  };

  const submitForm = (e) => {
    e.preventDefault();
    //form  data with compulsory email
    const devid = "1FAIpQLScZvMir0oT5o_97qG8dmlYBL2UkelMr-Gn12Uh10AeHbq6XdA"; //YOUR FORM ID
    const devFormData = {
      emailAddress: values.email,
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
    //form data with not compulsory data
    const devNoid = "1FAIpQLSf2yrQUARhZbk9Zr4AO4ag04-qznvj89HiRJ30TBR2fmoNXSQ";
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
    console.log(values);
    console.log(q);
    submitGoogleForm(q);
  };

  return (
    <>
      <form>
        <div className={styles.FormContainer}>
          <div className={styles.form__item}>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="email">
              Email<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="firstName"
              value={firstName}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="firstName">
              First Name<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="lastName"
              value={lastName}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="lastName">
              Last Name<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="merchBusinessName"
              value={merchBusinessName}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="merchBusinessName">
              Merchant Business Name<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="quickbooksCompanyId"
              value={quickbooksCompanyId}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="quickbooksCompanyId">
              Quickbooks Company ID<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="merchStreetAddress"
              value={merchStreetAddress}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="merchStreetAddress">
              Merchant Street Address<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="city"
              value={city}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="city">
              City<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="province"
              value={province}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="province">
              Province<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              required
              name="postal"
              value={postal}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="postal">
              Postal Code<span className={styles.required}>*</span>
            </label>
          </div>
          <div className={styles.form__item}>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => updateFormData(e)}
            />
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className={styles.form__item}>
            <textarea
              type="text"
              name="complaintDetails"
              value={complaintDetails}
              required
              onChange={(e) => updateFormData(e)}
              row="10"
            />
            <label htmlFor="complaintDetails">
              Code of Conduct Complaint Details
            </label>
          </div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </form>
    </>
  );
}
