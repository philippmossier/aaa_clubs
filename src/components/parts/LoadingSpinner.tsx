import { FC } from 'react';

const LoadingSpinner: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-green-500 opacity-75 sm:text-3xl lg:text-base">
        <i className="fas fa-circle-notch fa-5x animate-spin-slow" />
      </span>
    </div>
  );
};

export default LoadingSpinner;
