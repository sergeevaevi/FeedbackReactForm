import React from "react";
import PropTypes from "prop-types";

export default class SegmentedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      value: props.value,
      onChange: props.onChange
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onChange(event.target.title)
    this.setState({ value: event.target.title });
  }

  render() {
    const { onChange  } = this.props;
    return (
      <div className="segmented-control">
        {this.state.options.map((option) => {
          if(option.value === this.state.value)
            return <div
                className="segmented-control__segment segmented-control__segment_selected"
                title={option.value}
                onMouseDown={onChange}
                onClick={this.handleClick}>{option.label}</div>
          return <div
              className="segmented-control__segment"
              title={option.value}
              onMouseDown={onChange}
              onClick={this.handleClick}>{option.label}</div>
        }
        )}
      </div>
    );
  }
}

SegmentedControl.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
