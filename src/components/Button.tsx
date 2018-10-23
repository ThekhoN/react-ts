import * as React from "react";

interface IButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactChild | React.ReactChildren;
  borderColor?: string;
}

const Button = ({ handleClick, children, borderColor }: IButtonProps) => {
  if (borderColor) {
    const borderStyle = {
      border: `1px solid ${borderColor}`
    };
    return (
      <button style={borderStyle} onClick={handleClick}>
        {children}
      </button>
    );
  } else {
    return <button onClick={handleClick}>{children}</button>;
  }
};

export default Button;
