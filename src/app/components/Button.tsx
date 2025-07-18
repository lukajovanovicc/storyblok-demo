import React, { FC, HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  color: string;
  children: ReactNode;
  darkTheme: boolean;
  type?: '' | 'classic' | 'outline';
}

const Button: FC<Props> = ({ type, children, color, darkTheme, ...rest }) => {
  return (
    <button
      style={
        type === 'outline'
          ? { borderColor: color, color: color }
          : { backgroundColor: color }
      }
      {...rest}
      className={`${rest.className} ${
        type === 'outline' ? 'border-2' : `${darkTheme ? 'text-white' : ''}`
      } flex items-center justify-center rounded-md  px-7 py-3 text-center text-base font-medium hover:opacity-80 duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
