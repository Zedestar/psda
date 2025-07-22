function GridOrganizerContainer({ children }) {
  return (
    <div className="flex items-center justify-center my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl">
        {children}
      </div>
    </div>
  );
}

export default GridOrganizerContainer;
