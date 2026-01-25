export default function InfoAlert({ children }) {
  return (
    <div
      className="text-center p-2 rounded-lg text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      {children}
    </div>
  );
}
