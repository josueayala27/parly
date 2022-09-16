const Button = ({ children, click, ...props }) => {
  const { color, icon } = props;

  const buttonTypes = {
    outlined: ['border', 'hover:bg-gray-50', 'bg-white'],
    danger: [
      'bg-red-500',
      'hover:bg-red-600',
      'text-white',
      'border-transparent',
      'border',
    ],
    default: ['bg-blue-500', 'hover:bg-blue-600', 'text-white'],
  };

  const buttonSize = {
    small: ['text-sm', 'px-[10px]', 'py-[5px]'],
    icon: ['text-sm', 'p-2'],
  };

  return (
    <>
      <button
        onClick={click}
        className={
          'rounded-md transition-all ' +
          buttonTypes[color || 'default'].join(' ') +
          ' ' +
          buttonSize[icon ? 'icon' : 'small'].join(' ')
        }>
        {children}
      </button>
    </>
  );
};

export default Button;
