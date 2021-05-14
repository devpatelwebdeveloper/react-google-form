import "./styles.css";
import Form from "./Components/Form/FormValidation";

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 4) {
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

const ageValidation = (age) => {
  if (!age) {
    return "Age is required";
  }
  if (age < 18) {
    return "Age must be at least 18";
  }
  if (age > 99) {
    return "Age must be under 99";
  }
  return null;
};

const validate = {
  firstName: (name) => nameValidation("First Name", name),
  lastName: (name) => nameValidation("Last Name", name),
  merchBusinessName: (name) => nameValidation("Merchant business name", name),
  quickbooksCompanyId: (name) => nameValidation("Quickbooks CompanyId", name),
  merchStreetAddress: (name) => nameValidation("Merchant Street Address", name),
  city: (name) => nameValidation("City", name),
  province: (name) => nameValidation("Province", name),
  postal: (name) => nameValidation("Postal Code", name),
  phone: (name) => nameValidation("Phone Number", name),
  complaintDetails: (name) => nameValidation("Complaint Details", name),
  email: emailValidation
};

export default function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Form validate={validate} />
    </div>
  );
}
