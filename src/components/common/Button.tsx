import { ButtonHTMLAttributes } from 'react';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  _onClick?: () => {};
  small?: boolean;
}

function Button(props: Button) {
  const { children, _onClick, small, ...prop } = props;

  if (small) {
    return (
      <button
        onClick={_onClick}
        className="btn-primary text-black p-4 text-2xl px-28 py-5 rounded-lg w-fit font-black"
        {...prop}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={_onClick}
      className="btn-primary text-black p-4 text-3xl px-32 py-5 rounded-lg w-fit font-black"
      {...prop}
    >
      {children}
    </button>
  );
}

export default Button;
