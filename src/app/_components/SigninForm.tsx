import { FaEnvelope, FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function SigninForm({ email, password, setEmail, setPassword }: any) {
  return (
    <div className="space-y-4">
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

      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded border" /> Remember me
        </label>
        <Link href="/forgot-password" className="text-indigo-600">
          Forgot password?
        </Link>
      </div>

      <button className="w-full py-2 bg-gradient-to-r from-[#0072BC] to-[#00B140] text-white rounded">Sign In</button>
    </div>
  );
}