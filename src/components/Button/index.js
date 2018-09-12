import styled from "react-emotion";
import { Button as ReactstrapButton } from "reactstrap";
import PropTypes from "prop-types";

const Button = styled(ReactstrapButton)`
  border: 2px solid transparent;
  cursor: pointer;
  width: ${({ block }) => block && "100%"};
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  transition: background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear;
  user-select: none;
  padding: 0.75rem 2.5rem;
  &:focus,
  &.focus {
    outline: 0;
    box-shadow: none;
  }

  &.disabled,
  &:disabled {
    opacity: 0.75;
    box-shadow: none;
    cursor: not-allowed;
  }

  ${({ color, theme }) =>
    color === "link" &&
    `
      background-color: transparent;

      &:hover,
      &.hover {
        text-decoration: underline;
        background-color: transparent;
        border-color: transparent;
      }

      &:focus,
      &.focus {
        text-decoration: underline;
        border-color: transparent;
        box-shadow: none;
      }
    `};

  ${({ size }) =>
    size === "sm" &&
    `
    padding: 0.5rem 1rem;
  `}

  ${({ size }) =>
    size === "lg" &&
    `
    font-size: 1rem;
    padding: 0.75rem 4rem;
  `}

  ${({ active }) =>
    active &&
    `
      background-image: none;
      box-shadow: none;
    `};
`;

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.string
};

Button.defaultProps = {
  active: false,
  block: false,
  color: "primary",
  disabled: false,
  outline: false,
  size: ""
};

export default Button;
