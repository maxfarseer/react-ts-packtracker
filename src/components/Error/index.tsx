import React from 'react';

interface IProps {
  title: string;
  message: string;
}

const Error = ({ title, message }: IProps): JSX.Element => (
  <shore-error title={title}>{message}</shore-error>
);

export { Error };
