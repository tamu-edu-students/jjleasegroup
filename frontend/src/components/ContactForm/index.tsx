import APIService from "../../api/APIService";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";
import { getUser } from "../../utils/cookie";

function ContactForm() {
  const [questionText, setQuestionText] = useState("");
  const [aptArea, setAptArea] = useState("0");
  const [questionPurpose, setQuestionPurpose] = useState("0");

  const submitForm = () => {
    APIService.add_question_consultation({
      question_purpose: questionPurpose,
      apt_area: aptArea,
      question_text: questionText,
      question_status: "0",
      submission_date_time: new Date().toISOString().slice(0, 19),
      customer_id: getUser().customer_id,
    }).then((resp) => console.log(resp));
  };

  const inputClass = classNames(styles.box, styles.input);

  useEffect(() => {
    console.log(questionText);
  }, [questionText]);

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <label className={styles.title} htmlFor="apt_area">
          Location
        </label>
        <select
          className={styles.box}
          name="apt_area"
          id="apt_area"
          value={aptArea}
          onChange={(e) => setAptArea(e.target.value)}
        >
          <option value="0">College Station</option>
          <option value="1">Austin</option>
          <option value="2">Houston</option>
        </select>
      </div>

      <div className={styles.container}>
        <label className={styles.title} htmlFor="question_purpose">
          Topic
        </label>
        <select
          className={styles.box}
          name="question_purpose"
          id="question_purpose"
          value={questionPurpose}
          onChange={(e) => setQuestionPurpose(e.target.value)}
        >
          <option value="0">apartment special offers</option>
          <option value="1">apartment roommate</option>
          <option value="2">apartment leasing office</option>
        </select>
      </div>

      <div className={styles.container}>
        <label className={styles.title} htmlFor="message">
          Message
        </label>
        {/*<input*/}
        {/*  className={inputClass}*/}
        {/*  type="text"*/}
        {/*  id="message"*/}
        {/*  value={questionText}*/}
        {/*  placeholder="enter your question"*/}
        {/*  onChange={(e) => setQuestionText(e.target.value)}*/}
        {/*/>*/}
        <textarea
          className={inputClass}
          id="message"
          value={questionText}
          rows={3}
          cols={50}
          placeholder="enter your question"
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <button className={styles.button} onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
