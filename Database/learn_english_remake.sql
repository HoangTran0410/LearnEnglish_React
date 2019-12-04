-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 23, 2019 lúc 04:48 PM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `learn_english`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baigiang`
--

CREATE TABLE `baigiang` (
  `Ma` int(11) NOT NULL,
  `MaKhoaHoc` int(11) NOT NULL,
  `Ten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Video` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` datetime NOT NULL,
  `NgayCapNhat` datetime DEFAULT NULL,
  `TrangThai` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `baigiang`
--

INSERT INTO `baigiang` (`Ma`, `MaKhoaHoc`, `Ten`, `Video`, `NgayTao`, `NgayCapNhat`, `TrangThai`) VALUES
(1, 1, 'Khởi động', 'https://picsum.photos/800/600', '2019-11-22 00:00:00', NULL, 0),
(2, 1, 'Tăng Tốc', 'https://picsum.photos/800/600', '2019-11-22 00:00:00', NULL, 0),
(3, 1, 'Về đích', 'https://picsum.photos/800/600', '2019-11-22 00:00:00', NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baocaobinhluan`
--

CREATE TABLE `baocaobinhluan` (
  `Ma` int(11) NOT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaBinhLuan` int(11) NOT NULL,
  `NoiDung` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` datetime NOT NULL,
  `TrangThai` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `baocaobinhluan`
--

INSERT INTO `baocaobinhluan` (`Ma`, `MaTaiKhoan`, `MaBinhLuan`, `NoiDung`, `NgayTao`, `TrangThai`) VALUES
(1, 3, 2, 'Mong xử lý thích đáng, ăn nói mất dạy', '2019-11-22 00:00:00', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `Ma` int(11) NOT NULL,
  `MaTaiKhoanTao` int(11) NOT NULL,
  `MaBinhLuanCha` int(11) DEFAULT NULL,
  `MaBaiGiang` int(11) NOT NULL,
  `NoiDung` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` datetime NOT NULL,
  `NgayCapNhat` datetime DEFAULT NULL,
  `TrangThai` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `binhluan`
--

INSERT INTO `binhluan` (`Ma`, `MaTaiKhoanTao`, `MaBinhLuanCha`, `MaBaiGiang`, `NoiDung`, `NgayTao`, `NgayCapNhat`, `TrangThai`) VALUES
(1, 1, NULL, 1, 'OHHHHHHHHHHHHHHHHHHH Hay ta ', '2019-11-22 00:00:00', NULL, 0),
(2, 1, 1, 1, 'Hay như shit', '2019-11-22 00:00:00', NULL, 0),
(3, 3, NULL, 3, 'Yay, khoá học quá hay luôn, xứng đáng 5 sao', '2019-11-22 00:00:00', NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiettinnhan`
--

CREATE TABLE `chitiettinnhan` (
  `Ma` int(11) NOT NULL,
  `MaTinNhan` int(11) NOT NULL,
  `MaTaiKhoanGui` int(11) NOT NULL,
  `MaTaiKhoanNhan` int(11) NOT NULL,
  `NgayGui` datetime NOT NULL,
  `TrangThai` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chude`
--

CREATE TABLE `chude` (
  `Ma` int(11) NOT NULL,
  `Ten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgayTao` datetime NOT NULL,
  `NgayCapNhat` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chude`
--

INSERT INTO `chude` (`Ma`, `Ten`, `HinhAnh`, `NgayTao`, `NgayCapNhat`) VALUES
(1, 'Ielts Nghe', 'https://picsum.photos/200/200', '2019-11-22 00:00:00', NULL),
(2, 'Ielts Đọc', 'https://picsum.photos/200/200', '2019-11-20 00:00:00', '2019-11-21 11:22:01'),
(3, 'Ielts Viết', NULL, '2019-11-18 00:00:00', NULL),
(4, 'Ielts Nói', 'https://picsum.photos/200/200', '2019-11-13 00:00:00', NULL),
(5, 'Toeic 4 Kỹ Năng', 'https://picsum.photos/200/200', '2019-11-03 00:00:00', '2019-11-29 15:48:00'),
(6, 'Toeic 2 Kỹ Năng', 'https://picsum.photos/200/200', '2019-11-08 00:00:00', NULL),
(7, 'Tiếng anh giao tiếp', 'https://picsum.photos/200/200', '2019-10-24 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhgia`
--

CREATE TABLE `danhgia` (
  `Ma` int(11) NOT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaKhoaHoc` int(11) NOT NULL,
  `SoSao` float NOT NULL,
  `NoiDung` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` datetime NOT NULL,
  `NgayCapNhat` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `danhgia`
--

INSERT INTO `danhgia` (`Ma`, `MaTaiKhoan`, `MaKhoaHoc`, `SoSao`, `NoiDung`, `NgayTao`, `NgayCapNhat`) VALUES
(1, 3, 3, 1.5, 'Khoá học tiếng anh đây à? Học sảng à', '2019-11-22 00:00:00', NULL),
(2, 2, 3, 1, 'Phá huỷ hình ảnh của cả 1 thế hệ giáo viên như tui, nghĩ sao làm admin mà tạo khoá học như vậy hả !!', '2019-11-22 12:15:10', NULL),
(3, 1, 3, 5, 'Hay !!', '2019-11-22 00:00:00', NULL),
(4, 3, 1, 4.5, 'Hay quá cô ơi !', '2019-11-22 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoahoc`
--

CREATE TABLE `khoahoc` (
  `Ma` int(11) NOT NULL,
  `MaChuDe` int(11) NOT NULL,
  `MaGiaoVien` int(11) NOT NULL,
  `Ten` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `CapDo` int(2) NOT NULL,
  `MoTa` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `KetQua` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `YeuCau` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgayTao` datetime NOT NULL,
  `NgayCapNhat` datetime DEFAULT NULL,
  `TrangThai` int(2) NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khoahoc`
--

INSERT INTO `khoahoc` (`Ma`, `MaChuDe`, `MaGiaoVien`, `Ten`, `CapDo`, `MoTa`, `HinhAnh`, `KetQua`, `YeuCau`, `NgayTao`, `NgayCapNhat`, `TrangThai`) VALUES
(1, 1, 2, 'Phát triển kỹ năng nghe từng ngày, vượt kỳ thi ielts 7.0 dễ dàng !!', 1, 'Mại dô mại dô, tiếng anh miễn phí đây', 'https://picsum.photos/400/300', 'Ielts 7.0\r\nVượt mọi kỳ thi trong trường', 'Kỹ năng nghe đã ở mức gần thượng thừa', '2019-11-22 00:00:00', NULL, 2),
(2, 7, 2, 'Giao tiếp lưu loát với các tips đơn giản', 1, 'Bạn muốn mua tivi, đến điện máy xanh, phun ra tiếng anh, điện máy xanh giảm giá', 'https://picsum.photos/400/300', 'Mua được TV', 'Có đủ tiền', '2019-11-22 05:18:10', NULL, 0),
(3, 5, 1, '4 Kỹ năng Toeic? Dễ như ăn cháo ... đá bát', 2, 'Hướng dẫn cách vượt 4 kỹ năng toeic bằng cách ăn cháo', 'https://picsum.photos/400/300', 'Ăn hết tô cháo', 'Chuẩn bị sẵn cháo, tô, nước sôi và muỗng', '2019-11-12 00:00:00', NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoahocdaluu`
--

CREATE TABLE `khoahocdaluu` (
  `Ma` int(11) NOT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaKhoaHoc` int(11) NOT NULL,
  `NgayLuu` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khoahocdaluu`
--

INSERT INTO `khoahocdaluu` (`Ma`, `MaTaiKhoan`, `MaKhoaHoc`, `NgayLuu`) VALUES
(1, 1, 1, '2019-11-22 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichsuthamgia`
--

CREATE TABLE `lichsuthamgia` (
  `Ma` int(11) NOT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaKhoaHoc` int(11) NOT NULL,
  `NgayThamGia` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lichsuthamgia`
--

INSERT INTO `lichsuthamgia` (`Ma`, `MaTaiKhoan`, `MaKhoaHoc`, `NgayThamGia`) VALUES
(1, 3, 1, '2019-11-22 00:00:00'),
(2, 1, 2, '2019-11-22 00:00:00'),
(3, 2, 2, '2019-11-22 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanquyen`
--

CREATE TABLE `phanquyen` (
  `Ma` int(11) NOT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaQuyen` int(11) NOT NULL,
  `NgayBatDau` datetime NOT NULL,
  `NgayKetThuc` datetime NOT NULL,
  `MaTaiKhoanTao` int(11) NOT NULL,
  `NgayTao` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phanquyen`
--

INSERT INTO `phanquyen` (`Ma`, `MaTaiKhoan`, `MaQuyen`, `NgayBatDau`, `NgayKetThuc`, `MaTaiKhoanTao`, `NgayTao`) VALUES
(1, 3, 1, '2019-11-21 00:00:00', '2019-12-31 00:00:00', 1, '2019-11-22 22:00:00'),
(2, 1, 3, '2019-11-22 00:00:00', '2019-12-31 00:00:00', 1, '2019-11-22 00:00:00'),
(3, 2, 2, '2019-11-22 00:00:00', '2019-12-31 00:00:00', 1, '2019-11-22 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quyen`
--

CREATE TABLE `quyen` (
  `Ma` int(11) NOT NULL,
  `Ten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` datetime NOT NULL,
  `GhiChu` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `quyen`
--

INSERT INTO `quyen` (`Ma`, `Ten`, `NgayTao`, `GhiChu`) VALUES
(1, 'Thành viên', '2019-11-22 00:00:00', NULL),
(2, 'Giáo viên', '2019-11-22 00:00:00', NULL),
(3, 'Quản lý', '2019-11-22 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `Ma` int(11) NOT NULL,
  `HoTen` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `TenTaiKhoan` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MatKhau` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `HinhDaiDien` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgayDangKy` datetime NOT NULL,
  `TrangThai` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`Ma`, `HoTen`, `TenTaiKhoan`, `MatKhau`, `Email`, `HinhDaiDien`, `NgayDangKy`, `TrangThai`) VALUES
(1, 'Trần Văn Hoàng', 'Hoang016', '123456abc', 'th01634044850@gmail.com', 'https://picsum.photos/100/100', '2019-11-22 00:00:00', 0),
(2, 'Trần Thị Thu Hiền', 'Hien0410', '123abc456', 'hien@gmail.com', 'https://picsum.photos/100/100', '2019-11-13 00:00:00', 0),
(3, 'Nguyễn Văn A', 'AAAA', 'aaaa', 'aAa@gmail.com', 'https://picsum.photos/100/100', '2019-11-20 00:00:00', 0),
(4, 'Phạm Văn Lo', 'LoLo', 'lolo', 'locc@gmail.com', 'https://picsum.photos/100/100', '2019-11-18 00:00:00', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tinnhan`
--

CREATE TABLE `tinnhan` (
  `Ma` int(11) NOT NULL,
  `Loai` int(11) NOT NULL DEFAULT '0',
  `NoiDung` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `baigiang`
--
ALTER TABLE `baigiang`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaKhoaHoc` (`MaKhoaHoc`);

--
-- Chỉ mục cho bảng `baocaobinhluan`
--
ALTER TABLE `baocaobinhluan`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTaiKhoan` (`MaTaiKhoan`),
  ADD KEY `MaBinhLuan` (`MaBinhLuan`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTaiKhoanTao` (`MaTaiKhoanTao`),
  ADD KEY `MaBinhLuanCha` (`MaBinhLuanCha`),
  ADD KEY `MaBaiGiang` (`MaBaiGiang`);

--
-- Chỉ mục cho bảng `chitiettinnhan`
--
ALTER TABLE `chitiettinnhan`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTinNhan` (`MaTinNhan`),
  ADD KEY `MaTaiKhoanGui` (`MaTaiKhoanGui`),
  ADD KEY `MaTaiKhoanNhan` (`MaTaiKhoanNhan`);

--
-- Chỉ mục cho bảng `chude`
--
ALTER TABLE `chude`
  ADD PRIMARY KEY (`Ma`);

--
-- Chỉ mục cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTaiKhoan` (`MaTaiKhoan`),
  ADD KEY `MaKhoaHoc` (`MaKhoaHoc`);

--
-- Chỉ mục cho bảng `khoahoc`
--
ALTER TABLE `khoahoc`
  ADD PRIMARY KEY (`Ma`) USING BTREE,
  ADD KEY `MaChuDe` (`MaChuDe`),
  ADD KEY `MaGiaoVien` (`MaGiaoVien`);

--
-- Chỉ mục cho bảng `khoahocdaluu`
--
ALTER TABLE `khoahocdaluu`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTaiKhoan` (`MaTaiKhoan`),
  ADD KEY `MaKhoaHoc` (`MaKhoaHoc`);

--
-- Chỉ mục cho bảng `lichsuthamgia`
--
ALTER TABLE `lichsuthamgia`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTaiKhoan` (`MaTaiKhoan`),
  ADD KEY `MaKhoaHoc` (`MaKhoaHoc`);

--
-- Chỉ mục cho bảng `phanquyen`
--
ALTER TABLE `phanquyen`
  ADD PRIMARY KEY (`Ma`),
  ADD KEY `MaTaiKhoan` (`MaTaiKhoan`),
  ADD KEY `MaQuyen` (`MaQuyen`),
  ADD KEY `MaTaiKhoanTao` (`MaTaiKhoanTao`);

--
-- Chỉ mục cho bảng `quyen`
--
ALTER TABLE `quyen`
  ADD PRIMARY KEY (`Ma`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`Ma`),
  ADD UNIQUE KEY `TenTaiKhoan` (`TenTaiKhoan`);

--
-- Chỉ mục cho bảng `tinnhan`
--
ALTER TABLE `tinnhan`
  ADD PRIMARY KEY (`Ma`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `baigiang`
--
ALTER TABLE `baigiang`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `baocaobinhluan`
--
ALTER TABLE `baocaobinhluan`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `chitiettinnhan`
--
ALTER TABLE `chitiettinnhan`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `chude`
--
ALTER TABLE `chude`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `khoahoc`
--
ALTER TABLE `khoahoc`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `khoahocdaluu`
--
ALTER TABLE `khoahocdaluu`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `lichsuthamgia`
--
ALTER TABLE `lichsuthamgia`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `phanquyen`
--
ALTER TABLE `phanquyen`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `quyen`
--
ALTER TABLE `quyen`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `tinnhan`
--
ALTER TABLE `tinnhan`
  MODIFY `Ma` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `baigiang`
--
ALTER TABLE `baigiang`
  ADD CONSTRAINT `baigiang_ibfk_1` FOREIGN KEY (`MaKhoaHoc`) REFERENCES `khoahoc` (`Ma`);

--
-- Các ràng buộc cho bảng `baocaobinhluan`
--
ALTER TABLE `baocaobinhluan`
  ADD CONSTRAINT `baocaobinhluan_ibfk_1` FOREIGN KEY (`MaBinhLuan`) REFERENCES `binhluan` (`Ma`),
  ADD CONSTRAINT `baocaobinhluan_ibfk_2` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`Ma`);

--
-- Các ràng buộc cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`MaTaiKhoanTao`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `binhluan_ibfk_3` FOREIGN KEY (`MaBaiGiang`) REFERENCES `baigiang` (`Ma`),
  ADD CONSTRAINT `binhluan_ibfk_4` FOREIGN KEY (`MaBinhLuanCha`) REFERENCES `binhluan` (`Ma`);

--
-- Các ràng buộc cho bảng `chitiettinnhan`
--
ALTER TABLE `chitiettinnhan`
  ADD CONSTRAINT `chitiettinnhan_ibfk_1` FOREIGN KEY (`MaTaiKhoanGui`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `chitiettinnhan_ibfk_2` FOREIGN KEY (`MaTaiKhoanNhan`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `chitiettinnhan_ibfk_3` FOREIGN KEY (`MaTinNhan`) REFERENCES `tinnhan` (`Ma`);

--
-- Các ràng buộc cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `danhgia_ibfk_1` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `danhgia_ibfk_2` FOREIGN KEY (`MaKhoaHoc`) REFERENCES `khoahoc` (`Ma`);

--
-- Các ràng buộc cho bảng `khoahoc`
--
ALTER TABLE `khoahoc`
  ADD CONSTRAINT `khoahoc_ibfk_1` FOREIGN KEY (`MaChuDe`) REFERENCES `chude` (`Ma`),
  ADD CONSTRAINT `khoahoc_ibfk_2` FOREIGN KEY (`MaGiaoVien`) REFERENCES `taikhoan` (`Ma`);

--
-- Các ràng buộc cho bảng `khoahocdaluu`
--
ALTER TABLE `khoahocdaluu`
  ADD CONSTRAINT `khoahocdaluu_ibfk_1` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `khoahocdaluu_ibfk_2` FOREIGN KEY (`MaKhoaHoc`) REFERENCES `khoahoc` (`Ma`);

--
-- Các ràng buộc cho bảng `lichsuthamgia`
--
ALTER TABLE `lichsuthamgia`
  ADD CONSTRAINT `lichsuthamgia_ibfk_1` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `lichsuthamgia_ibfk_2` FOREIGN KEY (`MaKhoaHoc`) REFERENCES `khoahoc` (`Ma`);

--
-- Các ràng buộc cho bảng `phanquyen`
--
ALTER TABLE `phanquyen`
  ADD CONSTRAINT `phanquyen_ibfk_1` FOREIGN KEY (`MaQuyen`) REFERENCES `quyen` (`Ma`),
  ADD CONSTRAINT `phanquyen_ibfk_2` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`Ma`),
  ADD CONSTRAINT `phanquyen_ibfk_3` FOREIGN KEY (`MaTaiKhoanTao`) REFERENCES `taikhoan` (`Ma`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
