import ContactActionItem from "./contact-action-item";

function QuickActionsCard() {
  return (
    <ul className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg hover:shadow-xl transition-all duration-300 space-y-2 text-gray-600">
      <h1 className="text-xl font-bold">Quick Actions</h1>
      {quickActionsDataItem}
      <ContactActionItem />
    </ul>
  );
}

export default QuickActionsCard;
