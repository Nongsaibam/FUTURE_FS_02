import Navbar from "../components/Navbar"; 
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Users, DollarSign, ShoppingCart } from "lucide-react";

// 🔥 Chart Data
const salesData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
  { name: "May", value: 700 },
  { name: "Jun", value: 600 },
];

const visitorData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 300 },
  { name: "May", value: 250 },
  { name: "Jun", value: 400 },
];

// 🎯 Animated Card with Glow
const Card = ({ title, value, icon: Icon, color = "indigo" }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`relative bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl overflow-hidden`}
  >
    {/* Neon Glow Behind Card */}
    <div className={`absolute -top-10 -left-10 w-40 h-40 bg-${color}-500/40 rounded-full filter blur-3xl animate-blob`}></div>
    <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-${color}-400/40 rounded-full filter blur-2xl animate-blob animation-delay-2000`}></div>

    <div className="relative flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-3xl font-bold mt-2">{value}</h2>
      </div>
      <Icon className={`text-${color}-400`} size={28} />
    </div>
  </motion.div>
);

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-[#0a0b1a] text-white min-h-screen relative overflow-hidden">
      
      {/* Floating Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>

      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 relative z-10">
        <Navbar />

        <div className="p-6 space-y-6">

          {/* 🔍 Search */}
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* 📊 Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Total Sales" value="$5,000" icon={DollarSign} color="indigo" />
            <Card title="Orders" value="500" icon={ShoppingCart} color="cyan" />
            <Card title="Customers" value="120" icon={Users} color="green" />
          </div>

          {/* 📈 Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* 📉 Sales Chart */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
            >
              <h2 className="mb-4 text-lg font-semibold">Sales Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#6366f1" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* 📊 Visitor Chart */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
            >
              <h2 className="mb-4 text-lg font-semibold">Visitor Insights</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={visitorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#22c55e" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

          </div>

          {/* 📋 Leads Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
          >
            <h2 className="text-lg font-semibold mb-4">Recent Leads</h2>
            <div className="space-y-4">
              {["John", "Alice", "Michael"].map((name, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                >
                  <p>{name}</p>
                  <span className="text-green-400 text-sm">Active</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;