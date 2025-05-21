//Allows new Users to register (basic info: email, password, name)
//after signup redirects to profile
import { Link } from 'react-router-dom';
import EmailIcon from '../assets/icons/Email-Icon.png';
import PasswordIcon from '../assets/icons/Password-Icon.png';
import ProfileIcon from '../assets/icons/profile-Icon.png';
import Button from '../components/button.tsx';

export default function SignupPage() {
  return (
    <div className='absolute w-[500px] left-181 top-2.5'>
      <div className=" bg-amber-50/90 p-3 rounded-lg shadow-lg max-w-md">
        <form method="post" className="space-y-4.5 ">
          <div>
            <label htmlFor="email" className="font-medium bg-[#fdf3d3] border-2 border-[#fdf3d3] rounded text-purple-950">Username</label>
            <div className="relative flex items-center">
           <img
    src={ProfileIcon}
    alt="Username Icon"
    className="absolute left-3 w-5 h-5 text-purple-500"
  />
  <input
    className="pl-10 w-full border border-purple-950 rounded px-3 py-2 bg-purple-50 placeholder-fuchsia-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
    type="text"
    placeholder="Enter your Username..."
    name="username"
    required
  />
</div>
          </div>

          <div>
            <label htmlFor="username" className="font-medium bg-[#fdf3d3] border-2 border-[#fdf3d3] rounded text-purple-950">Email Address</label>
            <div className="relative flex items-center">
            <img
    src={EmailIcon}
    alt="Email Icon"
    className="absolute left-3 w-5 h-5 text-purple-500"
  />
            <input
               className="pl-10 w-full border border-purple-950 rounded px-3 py-2 bg-purple-50 placeholder-fuchsia-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              type="text"
              placeholder='Enter your Email...'
              name='email'
              required
            />
            </div>
          </div>


          <div>
            <label htmlFor="createpassword" className="font-medium bg-[#fdf3d3] border-2 border-[#fdf3d3] rounded text-purple-950">Create Password</label>
            <div className="relative flex items-center">
            <img
    src={PasswordIcon}
    alt="Password Icon"
    className="absolute left-3 w-5 h-5 text-purple-500"
  />
            <input
              className="pl-10 w-full border border-purple-950 rounded px-3 py-2 bg-purple-50 placeholder-fuchsia-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              type="password"
              placeholder="Enter your Password..."
              name="createpassword"
              required
            />
          </div>
         </div>
         
          <div>
            <label htmlFor="confirmpassword" className="font-medium bg-[#fdf3d3] border-2 border-[#fdf3d3] rounded text-purple-950">Confirm Password</label>
            <div className="relative flex items-center">
            <img
    src={PasswordIcon}
    alt="Password Icon"
    className="absolute left-3 w-5 h-5 text-purple-500"
  />
            <input
              className="pl-10 w-full border border-purple-950 rounded px-3 py-2 bg-purple-50 placeholder-fuchsia-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              type="text"
              placeholder="Confirm your Password..."
              name="confirmpassword"
              required
            />
</div>
          </div>
          <div className="relative flex items-center ">
    <input
      type="checkbox"
      id="remember"
      name="remember"
      className="mr-2"
    />
    <label htmlFor="remember" className="text-purple-950">
      Remember me
    </label>
  </div>

          
<Button color= 'black' label="sign up" type="submit"/>

    
        </form>
  <div className="text-center relative">
        <Link to="/login" className="text-purple-700 hover:underline ">
          Already have an account? Log in
        </Link>
      </div>
      </div>
    </div>
  );
}

