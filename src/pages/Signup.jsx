import { Link } from 'react-router-dom';

function Signup() {
    return (
<div >
      <div >
     <h2 >
      Create Account
     </h2>
      <p >
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
                        <label >
          Full Name
                        </label>
                        <input
             type="text"
             placeholder="John Doe"
         required
                           
  />
                    </div>
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
              Create Account
                    </button>
                </form>
  <p >
   Already have an account?{' '}
         <Link to="/login" >
        Sign in
     </Link>
                </p>
            </div>
        </div>
    );
}
export default Signup;