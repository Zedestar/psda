function Container({ children }) {
  return (
    <div className="w-full h-full flex justify-center overflow-x-scroll">
      <div className="w-full h-full py-10 space-y-10 max-w-screen-2xl flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}

export default Container;
