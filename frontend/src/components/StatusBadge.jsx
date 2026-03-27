const StatusBadge = ({ status }) => {
  const color =
    status === "New"
      ? "bg-blue-500"
      : status === "Contacted"
      ? "bg-yellow-500"
      : "bg-green-500";

  return <span className={`px-2 py-1 text-white rounded ${color}`}>{status}</span>;
};

export default StatusBadge;