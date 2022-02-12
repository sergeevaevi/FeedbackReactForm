import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import SegmentedControl from "./SegmentedControl";


export default class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            value: props.value,
            validEmail: true,
            validName: true,
            submit: false,

            name: "",
            email: "",

        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.handleNameValidation = this.handleNameValidation.bind(this);
        this.handleFocusOnName = this.handleFocusOnName.bind(this);
        this.handleFocusOnEmail = this.handleFocusOnEmail.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);

    }

    handleSubmit() {
        if (!this.state.name.length || !this.state.email.length)
            return this.setState(
                {
                    validName: !!this.state.name.length,
                    validEmail: !!this.state.email.length
                }
            )
        if (this.state.validEmail && this.state.validName)
            this.setState({submit: true})

    }

    handleEmailValidation() {
        const value = this.state.email
        const re = /^\S+@\S+\.\S+$/;
        // const res =
        this.setState({validEmail: re.test(String(value).toLowerCase())});
    }

    handleNameValidation() {
        const value = this.state.name
        const re = /^[a-z ,.'-]+$/;
        this.setState({validName:  re.test(String(value).toLowerCase())});

    }

    handleFocusOnEmail() {
        this.setState({validEmail: true});
    }

    handleFocusOnName() {
        this.setState({validName: true});
    }

    handleNameChange(value) {
        this.setState({name: value});
    }

    handleEmailChange(value) {
        this.setState({email: value});
    }

    handleFeedbackChange(newValue){
        this.setState({value: newValue});
    }

    render() {
        return (
            <div className="container">
                {this.state.submit ? <h1>Thanks for your "{this.state.value}" feedback, {this.state.name}! ❤️️ </h1> :
                    <h1>How was your experience?</h1>}
                {!this.state.submit ? <SegmentedControl
                    options={this.state.options}
                    value={this.state.value}
                    onChange={this.handleFeedbackChange}
                /> : null}
                {!this.state.submit ? <p>
                    Please tell a bit about you so we can improve your experience later.
                </p> : null}
                {!this.state.submit ? <Input
                    placeholder="Name"
                    validate={this.handleNameValidation}
                    onFocus={this.handleFocusOnName}
                    onValueChange={this.handleNameChange}
                    errorMessage="The name field should be valid"
                    isValid={this.state.validName}
                    value={this.state.name}
                /> : null}
                {!this.state.submit ? <Input
                    placeholder="Email"
                    onFocus={this.handleFocusOnEmail}
                    onValueChange={this.handleEmailChange}
                    validate={this.handleEmailValidation}
                    errorMessage="Should be a valid email"
                    isValid={this.state.validEmail}
                    value={this.state.email}
                /> : null}
                {!this.state.submit ? <button onClick={this.handleSubmit}>Submit</button> : null}
            </div>
        );
    }
}

FeedbackForm.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    validEmail: PropTypes.bool,
    validName: PropTypes.bool,
    submit: PropTypes.bool,

    name: PropTypes.string,
    email: PropTypes.string,
};
