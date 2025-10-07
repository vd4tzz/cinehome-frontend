import { useState } from "react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090a0b]">
      <div className="w-full max-w-md bg-[#23232d] bg-opacity-90 rounded-2xl shadow-2xl p-8 border border-white/10">
        <h1 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-lg uppercase">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h1>
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Họ và tên"
              className="px-4 py-3 rounded-lg bg-[#353544] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-[#353544] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="px-4 py-3 rounded-lg bg-[#353544] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="px-4 py-3 rounded-lg bg-[#353544] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          )}
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-200 text-lg"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-purple-400 hover:text-yellow-400 font-semibold underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
