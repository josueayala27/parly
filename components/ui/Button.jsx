const Button = ({ children, ...args }) => {
  const { color } = args;

  const buttonTypes = {
    danger: ['bg-red-500', 'hover:bg-red-600', 'text-white'],
    default: ['bg-blue-500', 'hover:bg-blue-600', 'text-white'],
  };

  const buttonSize = {
    small: ['text-sm', 'px-[10px]', 'py-[5px]'],
  };

  return (
    <>
      <button
        className={
          'rounded-md transition-all ' +
          buttonTypes[color || 'default'].join(' ') +
          ' ' +
          buttonSize['small'].join(' ')
        }>
        {children}
      </button>
    </>
  );
};

export default Button;
