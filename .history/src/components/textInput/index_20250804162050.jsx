function FormTextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  row = 1,
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm text-gray-600">{label}</label>
      <input
        type={type}
        rows={row}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default FormTextInput;
