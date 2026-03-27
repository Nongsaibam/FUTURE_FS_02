import { useParams } from "react-router-dom";
import AIInsights from "../components/ai/AIInsights";

const LeadDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Lead Details</h1>

      {/* Existing Lead Info Here */}

      {/* 🔥 AI Insights */}
      <AIInsights leadId={id} />
    </div>
  );
};

export default LeadDetails;