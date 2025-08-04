import ContactActionItem from "./contact-action-item";
import quickActionsDataItem from "./quick-actions-data";

function QuickActionsCard() {
  return (
    <ul className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg hover:shadow-xl transition-all duration-300 space-y-3 text-gray-600">
      <h1 className="text-xl font-bold">Quick Actions</h1>
      {quickActionsDataItem.map((item) => (
        <ContactActionItem item={item} />
      ))}
    </ul>
  );
}

export default QuickActionsCard;
