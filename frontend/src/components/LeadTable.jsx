import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

const LeadTable = ({ leads }) => {
  return (
    <table className="w-full bg-white shadow">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((l) => (
          <tr key={l._id}>
            <td>
              <Link to={`/leads/${l._id}`} className="text-blue-500">
                {l.name}
              </Link>
            </td>
            <td>{l.email}</td>
            <td><StatusBadge status={l.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;