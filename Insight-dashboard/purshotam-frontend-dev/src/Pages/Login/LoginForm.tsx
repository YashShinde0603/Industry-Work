import { Button } from '@radix-ui/themes';
import { Lock, Mail } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-white">
      <h2 className="mb-4 text-3xl font-extrabold text-[#333333]">
        Hello Again!
      </h2>
      <p className="mb-8 text-[#333333]/60 ">Welcome Back</p>
      <form className="max-w-md w-80">
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#333333]/20" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 p-3 border border-[#333333]/20 rounded-3xl"
          />
        </div>
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#333333]/20" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-3 border text-[#333333]/20 rounded-3xl"
          />
        </div>
        <Link to={'/'}>
          <Button type="submit">Login</Button>
        </Link>
      </form>
      <Link
        to="/"
        className="mt-4 text-blue-500 transition-all duration-300 hover:underline"
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default LoginForm;
