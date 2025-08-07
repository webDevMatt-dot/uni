export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`
        bg-indigo-600 text-white                      // beautiful deep blue button
        hover:bg-indigo-500 hover:shadow-lg           // smooth hover effect with shadow
        px-5 py-2.5 text-sm md:text-base              // comfy padding & font scales on screens
        rounded-full                                  // perfectly pill-shaped
        shadow-md transition duration-300 ease-in-out // smooth animations
        w-full whitespace-nowrap                      // fills container, no wrapping
        ${className}                                  // allows custom styling when used
      `}
      {...props}
    >
      {children}
    </button>
  );
}
