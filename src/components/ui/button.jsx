export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
