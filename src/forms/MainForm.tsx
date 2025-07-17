import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  companyName: "",
  natureBusiness: "",
  address: "",
  postcode: "",
  contactName: "",
  contactPhone: "",
  email: "",
  idea: "",
  protectData: "",
};

const validationSchema = Yup.object().shape({
  companyName: Yup.string().min(2, "Too Short!").required("Required"),
  address: Yup.string().min(2, "Too Short!").required("Required"),
});

function MainForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        alert("fin");
      }}
      validationSchema={validationSchema}
    >
      <Form className="grid gap-4">
        <label>
          Your Company Name <Field name="companyName" type="text" />
        </label>
        <ErrorMessage
          className="bg-red-900 text-white"
          component="span"
          name="companyName"
        />
        <label>
          Nature of Business <Field name="natureBusiness" type="text" />
        </label>
        <label>
          Address <Field name="address" type="text" />
        </label>
        <ErrorMessage
          className="bg-red-900 text-white"
          name="address"
          component="span"
        />
        <label>
          Postcode <Field name="postcode" type="text" />
        </label>
        <label>
          Contact Name <Field name="contactName" type="text" />
        </label>
        <label>
          Contact Phone <Field name="contactPhone" type="text" />
        </label>
        <label>
          Email <Field name="email" type="text" />
        </label>
        <label>
          Let’s talk about your idea <Field name="idea" as="textarea" id="" />
        </label>
        <label>
          I want to protect my data <Field name="protectData" type="checkbox" />
        </label>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default MainForm;
