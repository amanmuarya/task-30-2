import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="animate-fade-in max-w-sm mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
                    Create Account
                </h2>
                <p className="text-gray-500 text-sm text-center mb-6">
                    Get started with RouteFlow
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Account created! (In a real app, call your register API here)');
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-5">
                    Already have an account?{' '}
                    <Link to="/login" className="text-gray-900 font-medium underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;