export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`
        bg-indigo-600 text-white
        hover:bg-indigo-500 hover:shadow-lg
        px-5 py-2.5 text-sm md:text-base rounded-full
        shadow-md transition duration-300 ease-in-out
        w-full whitespace-nowrap
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}