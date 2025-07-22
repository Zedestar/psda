function MinContaier({ children }) {
  return (
    <div className="bg-slate-200 py-8 rounded-lg space-y-4 hover:shadow-xl border border-gray-300 transition">
      {children}
      <div className="flex items-center justify-center my-2">
        <FullRoundedButton
          text={"Submit your idea"}
          bgColor={"bg-blue-400"}
          textColor={"text-white"}
          onClick={null}
        />
        <FullRoundedButton
          text={"Join existing project"}
          bgColor={"bg-white"}
          textColor={"text-black"}
          onClick={null}
        />
      </div>
    </div>
  );
}

export default MinContaier;
