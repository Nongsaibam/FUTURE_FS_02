import { useEffect, useState } from "react";
import API from "../services/api";

export const useLeads = () => {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await API.get("/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return { leads, fetchLeads };
};