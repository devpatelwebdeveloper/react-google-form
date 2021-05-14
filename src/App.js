import "./styles.css";
import Form from "./Components/Form/FormValidation";

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (fieldValue.trim().length < 4) {
    return `${fieldName} needs to be at least four characters`;
  }
  return null;
};
const provinceValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 2) {
    return `${fieldName} needs to be at least four characters`;
  }
  return null;
};

const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

const phonenumberValidation = (phone) => {
  if (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)) {
    return null;
  }
  if (phone.trim() === "") {
    return "Phone is required";
  }
  return "Please enter a valid phone";
};
const postalvalidation = (postal) => {
  if (
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/.test(
      postal
    )
  ) {
    return null;
  }
  if (postal.trim() === "") {
    return "Postal is required";
  }
  return "Please enter a valid postal (A2A 2A2)";
};

const validate = {
  firstName: (name) => nameValidation("First Name", name),
  lastName: (name) => nameValidation("Last Name", name),
  merchBusinessName: (name) => nameValidation("Merchant business name", name),
  quickbooksCompanyId: (name) => nameValidation("Quickbooks CompanyId", name),
  merchStreetAddress: (name) => nameValidation("Merchant Street Address", name),
  city: (name) => nameValidation("City", name),
  province: (name) => provinceValidation("Province", name),
  postal: postalvalidation,
  phone: phonenumberValidation,
  email: emailValidation,
  complaintDetails: (name) => nameValidation("Complaint Details", name)
};

export default function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Form validate={validate} />
    </div>
  );
}
