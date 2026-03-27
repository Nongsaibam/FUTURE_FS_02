import { useLeads } from "../hooks/useLeads";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 🎯 Lead Card
const LeadCard = ({ lead }) => (
  <Link to={`/leads/${lead._id}`}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 p-4 rounded-xl cursor-pointer hover:bg-white/10 transition"
    >
      <p className="font-semibold">{lead.name}</p>
      <p className="text-sm text-gray-400">{lead.email}</p>
    </motion.div>
  </Link>
);

// 🎯 Column
const Column = ({ title, leads, color }) => (
  <div className="flex-1 min-w-[280px]">
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className={`text-xs px-2 py-1 rounded-full ${color}`}>
        {leads.length}
      </span>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl space-y-3 min-h-[400px]">
      {leads.map((lead) => (
        <LeadCard key={lead._id} lead={lead} />
      ))}
    </div>
  </div>
);

const Leads = () => {
  const { leads } = useLeads();

  const newLeads = leads.filter((l) => l.status === "New");
  const contacted = leads.filter((l) => l.status === "Contacted");
  const converted = leads.filter((l) => l.status === "Converted");

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-6 overflow-x-auto"
      >
        <Column
          title="New"
          leads={newLeads}
          color="bg-blue-500/20 text-blue-400"
        />
        <Column
          title="Contacted"
          leads={contacted}
          color="bg-yellow-500/20 text-yellow-400"
        />
        <Column
          title="Converted"
          leads={converted}
          color="bg-green-500/20 text-green-400"
        />
      </motion.div>
    </div>
  );
};

export default Leads;