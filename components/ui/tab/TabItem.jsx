export default function TabItem({ click, id, children, active }) {
  return (
    <div
      onClick={click}
      id={id}
      className={
        'rounded-lg p-2 cursor-pointer font-semibold z-10 transition-all duration-300 select-none ' +
        (active ? '' : 'text-gray-500 hover:text-black')
      }>
      {children}
    </div>
  );
}
