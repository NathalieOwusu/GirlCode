// Autenticates existing users (Accepts email/username + password or uses OAuth (e.g Github).
// on sucess redirects to Dashboard or Profile 
import React from 'react';
import { Link } from 'react-router-dom';
import PasswordIcon from '../assets/icons/Password-Icon.png';
import ProfileIcon from '../assets/icons/profile-Icon.png';
import Button from '../components/button.tsx';
import SpeechBubble from '../assets/illustrations/speech bubble.png'
import favicon from '../assets/icons/favicon3.png'
import Logo from '../assets/illustrations/Logo.png'
import background from '../assets/illustrations/Background.jpg'
import Nav from '../components/Navbar.tsx';





export default function Login(): React.JSX.Element{
  return (

 <>
      <div className="absolute w-full h-screen flex items-center justify-center">
        
  {/* Speech bubble*/}
  <div className="absolute left-[500px] bottom-[350px] z-10 transform- rotate-10">
    <img src={SpeechBubble} alt="speech-bubble" width={450} />
  </div>

  {/* Favicon */}
  <div className="absolute top-[25px] left-[190px] z-0 transform [rotate:-15deg]">
    <img src={favicon} alt="Favicon" width={330} />
  </div>

  {/* Bonbon text */}
  <div
  className="bonbon-regular absolute left-[780px] bottom-[319px] z-30 text-6xl text-purple-950 bg-purple-200/50 rounded-[50%] transition-transform duration-300 hover:scale-110 cursor-pointer"
  style={{
    textShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #9333ea'
  }}
>
  Welcome back!
</div>

  {/* Bonbon text */}
  {/* <div className="bonbon-regular absolute left-[700px] bottom-[465px] z-30 text-4xl text-black-600">
    <p>1.o.1</p>
  </div> */}


  {/* Logo */}
  <div className="absolute left-[540px] bottom-[400px] z-40">
    <img src={Logo} alt="Logo" width={350} />
  </div>
</div>

  {/* background */}
      <div
        className="w-[1200px] h-[400px] mx-auto bg-center bg-no-repeat bg-cover rounded-xl shadow-lg border-6 border-purple-300 top-80 relative"
        style={{
          backgroundImage: `url(${background})`,
        }}>
    
      </div>

  {/* Navbar */}
      <div className="px- mt-15 relative top-[300px]">
        <Nav color="teal" />

      </div>


  {/* Footer */}
        <p className="mt-4 text-center text-lg font-semibold text-pink-400 top-[252px] relative lacquer-regular">
          ✨ “For women who want to make noise, break barriers, and challenge the status quo in Tech” ✨
        </p>

 
    
  {/* Log in card */}
      <div className='absolute w-[500px] left-193 top-108'>
      <div className=" bg-amber-50/90 p-8 rounded-lg shadow-lg max-w-md">
       
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
            <label htmlFor="password" className="font-medium bg-[#fdf3d3] border-2 border-[#fdf3d3] rounded text-purple-950"> Password</label>
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
              max="6"
              required
              />
          </div>
         </div>
        
        
  {/* Button */}  
<Button color= 'black' label="log in" type="submit"/>

        </form>


  {/* Log in card footer*/}
  <div className="text-center relative top-[15px]">
        <Link to="/" className="text-purple-700 hover:underline ">
          Don't have an account? Sign up
        </Link>
      </div>
      </div>
    </div>
    </>
  );
}
   

