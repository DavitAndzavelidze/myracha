const LoadingSpinner = () => (
  <div className="flex space-x-2 justify-center items-center h-screen">
    <span className="relative flex size-6">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex size-6 rounded-full bg-sky-500"></span>
    </span>
  </div>
);

export default LoadingSpinner;
