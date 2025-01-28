import { Paragraph } from "./Typography";

export const Construction = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-400"></div>
        </div>
        <Paragraph className="mt-4 text-gray-600 dark:text-gray-400">
          Construction in Progress...
        </Paragraph>
      </div>
    </div>
  );
};

export default Construction;
