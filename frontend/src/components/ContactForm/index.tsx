import APIService from "../../api/APIService";
import { useState } from "react";

function ContactForm() {
  const [questionText, setQuestionText] = useState("");
  const [aptArea, setAptArea] = useState("0");
  const [questionPurpose, setQuestionPurpose] = useState("0");

  const submitForm = () => {
    APIService.add_question_consulation({
      question_purpose: questionText,
      apt_area: aptArea,
      question_text: questionPurpose,
      question_status: "0",
      submission_date_time: new Date().toISOString().slice(0, 19),
      customer_id: "2",
    }).then((resp) => console.log(resp));
  };

  return (
    <div className="form">
      <label htmlFor="apartment area">
        where is your interested apartment:
      </label>
      <select
        name="apt_area"
        id="apt_area"
        value={aptArea}
        onChange={(e) => setAptArea(e.target.value)}
      >
        <option value="0">College Station</option>
        <option value="1">Austin</option>
        <option value="2">Houston</option>
      </select>
      <br />
      <br />

      <label htmlFor="question purpose">your question is about:</label>
      <select
        name="question_purpose"
        id="question_purpose"
        value={questionPurpose}
        onChange={(e) => setQuestionPurpose(e.target.value)}
      >
        <option value="0">apartment special offers</option>
        <option value="1">apartment roommate</option>
        <option value="2">apartment leasing office</option>
      </select>
      <br />
      <br />

      <input
        type="text"
        value={questionText}
        placeholder="enter your question"
        className="form-control"
        onChange={(e)=> setQuestionText(e.target.value)}
      />

      <button className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
