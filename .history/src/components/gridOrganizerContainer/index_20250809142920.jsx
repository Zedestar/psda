function GridOrganizerContainer({ children }) {
  return (
    <div className="flex items-center justify-center my-14">
      <div className="bg-blue-400 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl">
        {children}
      </div>
    </div>
  );
}

export default GridOrganizerContainer;
