

function AboutPage() {
    return (
        <div className="min-h-screen bg-[#090a0b] flex flex-col items-center pt-8 pb-16">
            <div className="w-full max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center mb-10">
                    <h1 className="text-5xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">Giới thiệu CineHome</h1>
                    <span className="text-lg text-red-500 font-bold uppercase tracking-widest mb-4">Cụm rạp nghệ thuật hiện đại</span>
                    <p className="text-center text-gray-300 max-w-2xl">
                        CineHome là hệ thống rạp chiếu phim hiện đại, mang đến trải nghiệm điện ảnh đỉnh cao với không gian nghệ thuật, công nghệ tiên tiến và dịch vụ tận tâm. Sứ mệnh của chúng tôi là kết nối cộng đồng yêu phim, sáng tạo và truyền cảm hứng qua từng khung hình.
                    </p>
                </div>

                {/* Thành tựu/Đối tác/Điểm nổi bật */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col items-center">
                        {/* <img src={logo} alt="Công nghệ hiện đại" className="w-16 h-16 mb-3" /> */}
                        <h3 className="text-xl font-bold text-white mb-2">Công nghệ hiện đại</h3>
                        <p className="text-gray-400 text-center">Trang bị hệ thống chiếu phim 4K, âm thanh vòm sống động, mang lại trải nghiệm điện ảnh chân thực nhất.</p>
                    </div>
                    <div className="bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col items-center">
                        {/* <img src={logo} alt="Không gian nghệ thuật" className="w-16 h-16 mb-3" /> */}
                        <h3 className="text-xl font-bold text-white mb-2">Không gian nghệ thuật</h3>
                        <p className="text-gray-400 text-center">Thiết kế không gian sáng tạo, nghệ thuật, phù hợp cho mọi lứa tuổi và sự kiện điện ảnh.</p>
                    </div>
                    <div className="bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col items-center">
                        {/* <img src={logo} alt="Dịch vụ tận tâm" className="w-16 h-16 mb-3" /> */}
                        <h3 className="text-xl font-bold text-white mb-2">Dịch vụ tận tâm</h3>
                        <p className="text-gray-400 text-center">Đội ngũ nhân viên chuyên nghiệp, thân thiện, luôn hỗ trợ khách hàng tận tình từ đặt vé đến trải nghiệm phim.</p>
                    </div>
                </div>

                 <div className="flex flex-col items-center mb-10">
                    <div>
                        <h1 className="text-5xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">SỨ MỆNH</h1>
                    </div>
                
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">  
                    <div className="bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white mb-2">01</h3>
                        <p className="text-gray-400 text-center">Góp phần tăng trưởng thị phần điện ảnh, văn hóa, giải trí của người Việt Nam.</p>
                    </div>
                    <div className="bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white mb-2">02</h3>
                        <p className="text-gray-400 text-center">Phát triển dịch vụ tốt nhất với mức giá tối ưu, phù hợp với thu nhập người Việt Nam.</p>
                    </div>
                    <div className="bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white mb-2">03</h3>
                        <p className="text-gray-400 text-center">Mang nghệ thuật điện ảnh, văn hóa Việt Nam hội nhập quốc tế.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;
