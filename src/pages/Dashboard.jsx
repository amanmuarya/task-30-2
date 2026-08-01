import { TrendingUp, Users, DollarSign } from 'lucide-react';

function Dashboard() {
    const stats = [
        { label: 'Total Users', value: '1,284', icon: <Users size={18} /> },
        { label: 'Uptime', value: '99.2%', icon: <TrendingUp size={18} /> },
        { label: 'Revenue', value: '$4.2k', icon: <DollarSign size={18} /> },
    ];

    const activities = [
        { text: 'New user registration from Mumbai', time: '2 min ago', color: 'bg-blue-500' },
        { text: 'Payment processed successfully', time: '15 min ago', color: 'bg-emerald-500' },
        { text: 'Server alert: High CPU usage', time: '1 hr ago', color: 'bg-rose-500' },
        { text: 'New comment on Project Alpha', time: '3 hrs ago', color: 'bg-violet-500' },
    ];

    return (
        <div className="animate-fade-in space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-500 text-sm mt-1">Overview of your application metrics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
                    >
                        <div className="flex justify-center mb-2 text-gray-400">{s.icon}</div>
                        <div className="text-3xl font-bold text-gray-900 tabular-nums">
                            {s.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-0">
                    {activities.map((a, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
                        >
                            <div className={`w-2 h-2 rounded-full ${a.color}`} />
                            <span className="text-sm text-gray-600 flex-1">{a.text}</span>
                            <span className="text-xs text-gray-400">{a.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;