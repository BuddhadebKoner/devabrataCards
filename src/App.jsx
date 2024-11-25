import React from 'react';
import profileData from './data';

const App = () => {
  const { profile, bio, skills, socialMedia, contact } = profileData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-gray-300 p-4">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-2xl p-6 sm:p-8 border border-cyan-500">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.image}
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-cyan-400 shadow-lg mb-4 neon-effect"
          />
          <h2 className="text-2xl font-extrabold text-cyan-300">{profile.name}</h2>
          <p className="text-sm text-gray-400">{profile.title}</p>
        </div>

        {/* Bio Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2 neon-text">{bio.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{bio.description}</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2 neon-text">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 bg-gradient-to-r ${social.bgColor} hover:scale-110 transition-transform shadow-md`}
                title={social.title}
              >
                <img src={social.icon} alt={social.title} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-2 neon-text">Contact</h3>
          <p className="text-sm text-gray-400">Email: {contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
