import { Span } from '@/components/Typography';

export default function InfoAlert({ text }) {
  return (
    <div
      className="text-center p-4 rounded-lg text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <Span>{text}</Span>
    </div>
  );
}
