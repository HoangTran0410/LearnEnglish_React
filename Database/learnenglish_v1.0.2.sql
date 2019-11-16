-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 14, 2019 lúc 04:28 PM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `learnenglish`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `ID` int(11) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Avatar` varchar(500) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  `Birthday` date NOT NULL,
  `Email` varchar(50) NOT NULL,
  `RegisterDate` date NOT NULL,
  `Status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`ID`, `UserName`, `Password`, `Avatar`, `FullName`, `Birthday`, `Email`, `RegisterDate`, `Status`) VALUES
(1, 'usser name', 'password', 'avatar', 'fullname', '1999-09-22', 'Hieu minh tran', '1999-09-22', 1),
(2, 'usser name2', 'passwo2rd', 'avatar', 'fullname', '1999-09-22', 'Hieu minh tran', '1999-09-22', 1),
(3, 'dfadsf', 'dfadsf', '', 'dfadsf', '2018-12-22', 'dfadsf', '2019-10-22', 1),
(4, 'Hieu123', 'ti123', '', 'Full name', '2019-12-01', 'email@123', '2019-01-01', 0),
(5, 'Hieu1234', 'U2FsdGVkX19ru6GIUb/y', '', 'Thuy An', '2019-12-01', 'email@123', '2019-01-01', 0),
(6, 'tranminhhieu', 'U2FsdGVkX19LN8Ynqm36', '', 'Thuy An', '2019-12-01', 'email@123', '2019-01-01', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accountrole`
--

CREATE TABLE `accountrole` (
  `ID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `Note` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `accountrole`
--

INSERT INTO `accountrole` (`ID`, `RoleID`, `AccountID`, `StartDate`, `EndDate`, `Note`) VALUES
(1, 1, 6, '2019-11-14', '2019-11-22', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `answer`
--

CREATE TABLE `answer` (
  `ID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Content` varchar(500) NOT NULL,
  `Flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `LectureID` int(11) NOT NULL,
  `Content` varchar(500) NOT NULL,
  `CreatedDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `course`
--

CREATE TABLE `course` (
  `ID` int(11) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `Level` int(11) NOT NULL,
  `Picture` varchar(500) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `WhatWillYouLearn` varchar(500) NOT NULL,
  `Requirement` varchar(1000) NOT NULL,
  `CreatedDate` date NOT NULL,
  `LastModifiedDate` date NOT NULL,
  `Status` int(1) NOT NULL,
  `TopicID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `course`
--

INSERT INTO `course` (`ID`, `Title`, `Level`, `Picture`, `Description`, `WhatWillYouLearn`, `Requirement`, `CreatedDate`, `LastModifiedDate`, `Status`, `TopicID`) VALUES
(1, 'Basic pronoun', 1, 'linkpicture', 'Khoa hoc giup tang cường khả năng học của bla bla', 'Cách phát âm căn bản', 'Biết từ vựng mức độ phổ thông', '2019-11-13', '2019-11-06', 0, 1),
(2, 'name course', 1, 'link picture', 'gádgsg', 'agsdgwt', 'dgrwgtretg', '2019-11-13', '2019-11-15', 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lecture`
--

CREATE TABLE `lecture` (
  `ID` int(11) NOT NULL,
  `NameLecture` varchar(50) NOT NULL,
  `PreviewPicture` varchar(100) NOT NULL,
  `Video` varchar(200) NOT NULL,
  `SectionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `lecture`
--

INSERT INTO `lecture` (`ID`, `NameLecture`, `PreviewPicture`, `Video`, `SectionID`) VALUES
(1, 'Bai 1', 'link', 'linkVideo', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `question`
--

CREATE TABLE `question` (
  `ID` int(11) NOT NULL,
  `Content` varchar(500) NOT NULL,
  `LectureID` int(11) NOT NULL,
  `LastModifiedDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rate`
--

CREATE TABLE `rate` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `Start` int(1) NOT NULL,
  `Content` varchar(500) NOT NULL,
  `CreatedDate` date NOT NULL,
  `CourseID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `rate`
--

INSERT INTO `rate` (`ID`, `AccountID`, `Start`, `Content`, `CreatedDate`, `CourseID`) VALUES
(1, 6, 2, 'vxf', '2019-11-14', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `record`
--

CREATE TABLE `record` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `CourseID` int(11) NOT NULL,
  `JoinedDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `record`
--

INSERT INTO `record` (`ID`, `AccountID`, `CourseID`, `JoinedDate`) VALUES
(1, 6, 1, '2019-11-14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Note` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`ID`, `Name`, `Note`) VALUES
(1, 'admin', 'quan ly admin'),
(2, 'nhanvienbanhang', 'ban hang');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `section`
--

CREATE TABLE `section` (
  `ID` int(11) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `CourseID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `section`
--

INSERT INTO `section` (`ID`, `Title`, `CourseID`) VALUES
(1, 'Chuong I', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topic`
--

CREATE TABLE `topic` (
  `ID` int(11) NOT NULL,
  `Picture` varchar(100) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `LastModifiedDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `topic`
--

INSERT INTO `topic` (`ID`, `Picture`, `Title`, `LastModifiedDate`) VALUES
(1, 'link', 'topic1', '2019-11-13');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `accountrole`
--
ALTER TABLE `accountrole`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RoleID` (`RoleID`),
  ADD KEY `AccountID` (`AccountID`);

--
-- Chỉ mục cho bảng `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `QuestionID` (`QuestionID`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AccountID` (`AccountID`),
  ADD KEY `LectureID` (`LectureID`);

--
-- Chỉ mục cho bảng `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TopicID` (`TopicID`);

--
-- Chỉ mục cho bảng `lecture`
--
ALTER TABLE `lecture`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SectionID` (`SectionID`);

--
-- Chỉ mục cho bảng `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `LectureID` (`LectureID`);

--
-- Chỉ mục cho bảng `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AccountID` (`AccountID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Chỉ mục cho bảng `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AccountID` (`AccountID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Chỉ mục cho bảng `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `accountrole`
--
ALTER TABLE `accountrole`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `answer`
--
ALTER TABLE `answer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `course`
--
ALTER TABLE `course`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `lecture`
--
ALTER TABLE `lecture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `question`
--
ALTER TABLE `question`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `rate`
--
ALTER TABLE `rate`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `record`
--
ALTER TABLE `record`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `section`
--
ALTER TABLE `section`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `topic`
--
ALTER TABLE `topic`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `accountrole`
--
ALTER TABLE `accountrole`
  ADD CONSTRAINT `accountrole_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `role` (`ID`),
  ADD CONSTRAINT `accountrole_ibfk_2` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`);

--
-- Các ràng buộc cho bảng `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`QuestionID`) REFERENCES `question` (`ID`);

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`LectureID`) REFERENCES `lecture` (`ID`);

--
-- Các ràng buộc cho bảng `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`TopicID`) REFERENCES `topic` (`ID`);

--
-- Các ràng buộc cho bảng `lecture`
--
ALTER TABLE `lecture`
  ADD CONSTRAINT `lecture_ibfk_1` FOREIGN KEY (`SectionID`) REFERENCES `section` (`ID`);

--
-- Các ràng buộc cho bảng `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`LectureID`) REFERENCES `lecture` (`ID`);

--
-- Các ràng buộc cho bảng `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`),
  ADD CONSTRAINT `rate_ibfk_3` FOREIGN KEY (`CourseID`) REFERENCES `course` (`ID`);

--
-- Các ràng buộc cho bảng `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`),
  ADD CONSTRAINT `record_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `course` (`ID`);

--
-- Các ràng buộc cho bảng `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `course` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
