import { useState } from "react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

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

          {/* Password + eye */}
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Mật khẩu"
              className="w-full px-4 py-3 pr-12 rounded-lg bg-[#353544] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="button"
              aria-label={showPwd ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              onClick={() => setShowPwd((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 cursor-pointer"
            >
              {/* SVG con mắt (mặc định) / mắt gạch (khi showPwd = true) */}
              {showPwd ? (
                // eye-off
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3l18 18" />
                  <path d="M10.73 5.08A10.94 10.94 0 0 1 12 5c5 0 9.27 3.11 10.5 7.5a11.72 11.72 0 0 1-3.02 4.78M6.47 6.47A11.8 11.8 0 0 0 1.5 12.5 11.9 11.9 0 0 0 8 18.94" />
                  <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
                </svg>
              ) : (
                // eye
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          {/* Confirm password + eye (chỉ khi đăng ký) */}
          {!isLogin && (
            <div className="relative">
              <input
                type={showConfirmPwd ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-[#353544] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                aria-label={showConfirmPwd ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                onClick={() => setShowConfirmPwd((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 cursor-pointer"
              >
                {showConfirmPwd ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3l18 18" />
                    <path d="M10.73 5.08A10.94 10.94 0 0 1 12 5c5 0 9.27 3.11 10.5 7.5a11.72 11.72 0 0 1-3.02 4.78M6.47 6.47A11.8 11.8 0 0 0 1.5 12.5 11.9 11.9 0 0 0 8 18.94" />
                    <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          )}

          {/* Nút submit: đảm bảo có con trỏ bàn tay */}
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-300 to-green-500 text-purple-900 font-bold shadow-lg hover:from-pink-400 hover:to-orange-500 transition-all duration-200 text-lg cursor-pointer"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        {/* Link chuyển chế độ: thêm cursor-pointer */}
        <div className="mt-6 text-center">
          <button
            className="text-blue-300 hover:text-purple-700 font-semibold underline cursor-pointer"
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
