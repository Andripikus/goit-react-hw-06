import React from "react";
import css from "./Contact.module.css";

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className={css.contactItem}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
}
