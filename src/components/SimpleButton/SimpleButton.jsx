import React from "react";
import { Button } from "./Styled";
import PropTypes from "prop-types";

const SimpleButton = ({
  label,
  type,
  handleClick = () => {},
  isDisabled = false,
}) => {
  return (
    <Button type={type} onClick={handleClick} disabled={isDisabled}>
      {label}
    </Button>
  );
};

SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default SimpleButton;
