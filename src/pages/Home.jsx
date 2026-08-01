import { Link } from 'react-router-dom';
import { Map, Link2, Layers } from 'lucide-react';

function Home() {
    const features = [
        {
            icon: <Map size={20} />,
            title: 'Declarative Routing',
            desc: 'Define routes as components with <Route path="/">',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            icon: <Link2 size={20} />,
            title: 'Smooth Navigation',
            desc: 'Use <Link> and <NavLink> for seamless transitions',
            color: 'bg-emerald-50 text-emerald-600',
        },
        {
            icon: <Layers size={20} />,
            title: 'Nested Layouts',
            desc: 'Share UI shells across routes with layout routes',
            color: 'bg-violet-50 text-violet-600',
        },
    ];

    return (
        <div className="animate-fade-in">
            <div className="text-center py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to RouteFlow
                </h1>
                <p className="text-gray-500 text-lg max-w-lg mx-auto mb-8">
                    A clean, modern React Router DOM demo with four distinct views and
                    smooth navigation.
                </p>
                <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                    Go to Dashboard →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
                    >
                        <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${f.color}`}
                        >
                            {f.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;