function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-green-600">
      <div className="bg-rose-500 absolute h-screen w-56">
        <h1>THe side bar</h1>
      </div>
      <div className="flex-1 h-screen">
        <div className="flex flex-col bg-teal-700">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-4">Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
