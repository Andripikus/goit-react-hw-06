import React from "react";
import css from "./SearchBox.module.css"; // Імпорт стилів

export default function SearchBox({ filter, onChange }) {
  return (
    <div className={css.searchBox}>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Find contacts by name..."
      />
    </div>
  );
}
