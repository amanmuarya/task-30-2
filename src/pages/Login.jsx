import { Link } from 'react-router-dom';
function Login() {
    return (
        <div >
            <div className="bg-white border">
     <h2 className="text-2xl font-bold ">
      Welcome Back
     </h2>
     <p className="text-gray-500 text-sm text-center mb-6">
       Sign in to your account
        </p>
        <form
         onSubmit={(e) => {
           e.preventDefault();
       alert('Login submitted! (In a real app, call your auth API here)');
          }}
      className="space-y-4"
         >
          <div>
          <label >
          Email
         </label>
          <input
           type="email"
              placeholder="you@example.com"
               required
          />
          </div>
      <div>
             <label >
            Password
             </label>
             <input
              type="password"
              placeholder="••••••••"
             required
           />
        </div>
         <button
          type="submit"
      >
      Sign In
                    </button>
                </form>
     <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{' '}
         <Link to="/signup" className="text-gray-900 font-medium underline">
         Sign up
        </Link>
      </p>
            </div>
        </div>
    );
}
export default Login;