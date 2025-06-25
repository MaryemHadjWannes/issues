'use client';

import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

interface SignupFormProps {
  name: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function SignupForm({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
}: SignupFormProps) {
  return (
    <div className="space-y-4">
      {/* Name */}
      <div>
        <label className="text-sm">Name</label>
        <div className="relative">
          <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10 w-full px-4 py-2 rounded border"
            placeholder="Your Name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-sm">Email</label>
        <div className="relative">
          <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 w-full px-4 py-2 rounded border"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="text-sm">Password</label>
        <div className="relative">
          <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 w-full px-4 py-2 rounded border"
            placeholder="••••••••"
          />
        </div>
      </div>

      <button className="w-full py-2 bg-gradient-to-r from-[#0072BC] to-[#00B140] text-white rounded  transition">
        Create Account
      </button>
    </div>
  );
}
