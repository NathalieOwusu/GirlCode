// landing page (CTA:'Join Now' or "Log in")
import favicon from '../assets/icons/favicon3.png';
import background from '../assets/illustrations/Background.jpg';
import Nav from "../components/Navbar.tsx";
import Signup from './Signup.tsx';
import Logo from '../assets/illustrations/Logo.png';
import SpeechBubble from '../assets/illustrations/speech bubble.png'
export default function Home() {
  return (
    <>
      <div className="absolute w-full h-screen flex items-center justify-center">
        <div className=" relative bottom-[203px] left-[300px] " >
        

         </div>
  {/* Speech bubble*/}
  <div className="absolute left-[500px] bottom-[350px] z-10 transform- rotate-10">
    <img src={SpeechBubble} alt="speech-bubble" width={450} />
  </div>

  {/* Favicon */}
  <div className="absolute top-[25px] left-[190px] z-0 transform [rotate:-15deg]">
    <img src={favicon} alt="Favicon" width={330} />
  </div>

  {/* Bonbon text */}
  <div className="bonbon-regular absolute left-[610px] bottom-[650px] z-30 text-4xl text-black-600">
    <p>Welcome to</p>
  </div>
  {/* Bonbon text */}
  <div className="bonbon-regular absolute left-[700px] bottom-[465px] z-30 text-4xl text-black-600">
    <p>1.o.1</p>
  </div>


  {/* Logo */}
  <div className="absolute left-[540px] bottom-[400px] z-40">
    <img src={Logo} alt="Logo" width={350} />
  </div>
</div>

      <div
        className="w-[1200px] h-[500px] mx-auto bg-center bg-no-repeat bg-cover rounded-xl shadow-lg border-6 border-purple-300 top-80 relative"
        style={{
          backgroundImage: `url(${background})`,
        }}>
        <Signup />
      </div>

      <div className="px- mt-15 relative top-[300px]">
        <Nav color="teal" />

      </div>
        <p className="mt-4 text-center text-lg font-semibold text-pink-400 top-[252px] relative lacquer-regular">
          ✨ “For women who want to make noise, break barriers, and challenge the status quo in Tech” ✨
        </p>

    </>
  );
}
