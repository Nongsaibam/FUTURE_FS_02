import StatusBadge from "./StatusBadge";

const LeadCard = ({ lead }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2>{lead.name}</h2>
      <p>{lead.email}</p>
      <StatusBadge status={lead.status} />
    </div>
  );
};

export default LeadCard;