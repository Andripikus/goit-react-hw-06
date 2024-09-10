import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        "Invalid phone number format. Use xxx-xx-xx."
      )
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <Field
            id="name"
            className={`${styles.input} ${
              errors.name && touched.name ? styles.errorInput : ""
            }`}
            name="name"
            type="text"
            placeholder="Enter contact name"
          />
          <ErrorMessage className={styles.error} name="name" component="span" />
          <label className={styles.label} htmlFor="number">
            Number:
          </label>
          <Field
            id="number"
            className={`${styles.input} ${
              errors.number && touched.number ? styles.errorInput : ""
            }`}
            name="number"
            type="text"
            placeholder="Enter phone number (xxx-xx-xx)"
          />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
