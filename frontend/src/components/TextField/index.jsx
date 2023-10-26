// import package
import { useState } from "react";
import propTypes from "prop-types";

// import styles
import styles from "./TextField.module.css";

export default function TextField(props) {
  const { placeholder, onChange, errorMsg, type, value } = props;
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const trimmedValue = value.trim();

  // Function to handle when user didnt enter the input
  const handleEmptyInput = () => {
    if (trimmedValue === "") {
      setShowErrorMsg(true);
    } else {
      setShowErrorMsg(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <form>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={handleEmptyInput}
        />
      </form>
      {showErrorMsg && (
        <div className={styles.emptyAlert}>{errorMsg}</div>
      )}
    </section>
  );
}

TextField.propTypes = {
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  errorMsg: propTypes.string,
};
