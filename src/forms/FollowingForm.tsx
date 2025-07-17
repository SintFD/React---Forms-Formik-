import { Field, Form, Formik } from "formik";

const initialValues = {
  mailInput: "",
};

function FollowingForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <h3>Would you like to join our newsletter?</h3>
        <label>
          Email:
          <Field name="mailInput" />
        </label>
        <button>Send</button>
      </Form>
    </Formik>
  );
}

export default FollowingForm;
