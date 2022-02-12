import React from "react";
import ReactDOM from "react-dom";

import FeedbackForm from "./FeedbackForm";

ReactDOM.render(
    <FeedbackForm
        options={[
            { label: "😔", value: "very dissatisfied"},
            { label: "😟", value: "dissatisfied" },
            { label: "😐", value: "ok"},
            { label: "🙂", value: "satisfied" },
            { label: "😍", value: "very satisfied" }
        ]}
        value="ok"
        validateEmail={(value) => {
            const re = /^\S+@\S+$/
            return re.test(String(value).toLowerCase())}}
        validateName={(value) => value.length >= 2}
    />,
  document.querySelector("#root")
);
