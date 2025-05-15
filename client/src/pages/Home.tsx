// landing page (CTA:'Join Now' or "Log in")
import favicon from '../assets/icons/favicon3.png';
import background from '../assets/illustrations/Background.jpg';
import Nav from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <div className="p-10">
        <img src={favicon} alt="Favicon" width={300} />
      </div>

      <div
        className="w-[1200px] h-[800px] mx-auto bg-center bg-no-repeat bg-cover rounded-xl shadow-lg border-6 border-purple-300"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      <div className="px-10 mt-10">
        <Nav color="yellow" className="w-full p-6" />

        <p className="mt-4 text-center text-lg font-semibold text-purple-700 bottom-[100px] relative font-cursive">
          ✨ “For women who want to make noise, break barriers, and challenge the status quo in Tech” ✨
        </p>
      </div>
    </>
  );
}
