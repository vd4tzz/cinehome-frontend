import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about-container">
      <h1>About CineHome</h1>
      <p>
        CineHome là dự án web đặt vé xem phim trực tuyến, giúp bạn dễ dàng chọn ghế, đặt vé và trải nghiệm phim ảnh hiện đại.
      </p>
      <ul>
        <li>Đặt vé nhanh chóng, tiện lợi</li>
        <li>Chọn ghế trực quan</li>
        <li>Thanh toán an toàn</li>
        <li>Giao diện thân thiện, dễ sử dụng</li>
      </ul>
      <p>
        Demo này chỉ là trang giới thiệu đơn giản. Cảm ơn bạn đã ghé thăm!
      </p>
    </div>
  );
}

export default About;
