import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 h-screen flex flex-col justify-between p-4 md:p-8">
      <div className="flex justify-center md:justify-start mb-4">
        <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
          <img src={logo} alt="Spotify" className="w-24 h-auto md:w-32" />
        </a>
      </div>
      <div className="flex justify-center md:justify-start">
        <img src={profile} alt="User" className="h-10 w-10 md:h-12 md:w-12 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
