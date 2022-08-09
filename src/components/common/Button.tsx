interface Button {
  children?: string;
}

function Button(props: Button) {
  const { children } = props;

  return (
    <button className="btn-primary  text-black p-4 text-3xl px-32 py-5 rounded-lg w-fit font-black	">
      {children}
    </button>
  );
}

export default Button;
