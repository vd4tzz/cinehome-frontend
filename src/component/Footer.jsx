import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="border-t border-gray-600">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-red-500">CinemaBooking</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Nền tảng đặt vé xem phim trực tuyến hàng đầu Việt Nam.
                            Trải nghiệm điện ảnh tuyệt vời với giá cả hợp lý.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                                <FaFacebookF size={20}/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                                <FaInstagram size={20}/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                                <FaTwitter size={20}/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                                <FaYoutube size={20}/>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Liên kết nhanh</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Phim đang chiếu
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Phim sắp chiếu
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Rạp chiếu phim
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Khuyến mãi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Tin tức điện ảnh
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Hỗ trợ</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Hướng dẫn đặt vé
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Điều khoản sử dụng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Câu hỏi thường gặp
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Liên hệ hỗ trợ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Thông tin liên hệ</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <FaPhone size={16} className="text-red-500"/>
                                <span className="text-gray-300 text-sm">1900 123 456</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope size={16} className="text-red-500"/>
                                <span className="text-gray-300 text-sm">support@cinemabooking.vn</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt size={16} className="text-red-500 mt-0.5"/>
                                <span className="text-gray-300 text-sm leading-relaxed">
                                    Khu phố 34<br/>
                                    Phường Linh Xuân<br/>
                                    TP. Hồ Chí Minh
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-4">Đăng ký nhận tin khuyến mãi</h4>
                        <div
                            className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn..."
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                            />
                            <button
                                className="sm:w-auto px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2024 CinemaBooking. Tất cả quyền được bảo lưu.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Chính sách bảo mật
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Điều khoản dịch vụ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
