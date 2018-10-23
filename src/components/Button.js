import React from 'react';
import styled, { css } from 'styled-components';

const defaultStyles = css`
  border-color: #247ba0;
  background-color: #247ba0;
  color: white;
`;

const secondaryStyles = css`
  border-color: #eee;
  background-color: #eee;
  color: #333;
`;

const outlineStyles = css`
  border-color: #247ba0;
  border-width: 2px;
  color: black;
  margin: -1px;
`;

const linkStyles = css`
  color: #247ba0;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  ${p => p.kind === 'default' && defaultStyles}
  ${p => p.kind === 'secondary' && secondaryStyles}
  ${p => p.kind === 'outline' && outlineStyles}
  ${p => p.kind === 'link' && linkStyles}
`;

Button.defaultProps = {
  kind: 'default',
};

export default Button;
