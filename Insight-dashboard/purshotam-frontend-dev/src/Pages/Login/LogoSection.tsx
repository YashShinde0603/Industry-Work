import React from 'react';
// import logo from '../../../public/assets/logo.svg';

const LogoSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-orange-400 to-purple-600">
      <div className="flex flex-row items-center">
        <img src={'/assets/logo.svg'} alt="Purshotam Profiles" className="mr-4 w-36 h-36" />
        <div>
          <h1 className="text-4xl font-bold text-white">Purshotam Profiles</h1>
          <p className="mt-2 text-lg text-white">
            Your AI Integrated Dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
