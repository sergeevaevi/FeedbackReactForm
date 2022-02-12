import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputTag = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: inline-block;
  caret-color: #21262d;
  font-size: 16px;
  padding: 8px 13px;

  color: #444;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  outline: 0;
  text-align: left;
  line-height: 24px;
  margin-bottom: 4px;
  border: 1px solid #dfdfdf;
  border-color: ${(props) => (props.isValid ? "#444" : "#E95140")};

  &:hover,
  &:focus {
    border-color: ${(props) => (props.isValid ? "#1e72f7" : "#E95140")};
  }
`;

const Error = styled.div`
  font-size: 10px;
  color: #e95140;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            placeholder: props.placeholder,
            validate: props.validate,
            onFocus: props.onFocus,
            onValueChange: props.onValueChange,
            errorMessage: props.errorMessage,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleBlur() {
        this.state.validate()
    }

    handleFocus() {
        this.state.onFocus()
    }

    handleInputChange(event) {
        this.props.onValueChange(event.target.value)
    }

    render() {
        const {name, placeholder, errorMessage} = this.props;
        return (
            <div>
                <InputTag
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleInputChange}
                    isValid={this.props.isValid}
                />
                {!this.props.isValid && <Error>{errorMessage}</Error>}
            </div>
        );
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    validate: PropTypes.func,
    onFocus: PropTypes.func,
    onValueChange: PropTypes.func,
    errorMessage: PropTypes.string,
};
