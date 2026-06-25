// components/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-container px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
