export const courses = [
  {
    "ID": 1,
    "Title": "Basic pronoun",
    "Level": 1,
    "Picture": "linkpicture",
    "Description": "Khoa hoc giup tang cường khả năng học của bla bla",
    "WhatWillYouLearn": "Cách phát âm căn bản",
    "Requirement": "Biết từ vựng mức độ phổ thông",
    "CreatedDate": "2019-11-12T17:00:00.000Z",
    "LastModifiedDate": "2019-11-05T17:00:00.000Z",
    "Status": 0,
    "TopicID": 1
  },
  {
    "ID": 2,
    "Title": "name course",
    "Level": 1,
    "Picture": require("../assets/images/courses/course_3.jpg"),
    "Description": "gádgsg",
    "WhatWillYouLearn": "agsdgwt",
    "Requirement": "dgrwgtretg",
    "CreatedDate": "2019-11-12T17:00:00.000Z",
    "LastModifiedDate": "2019-11-14T17:00:00.000Z",
    "Status": 0,
    "TopicID": 1
  }
];

export const topics = [
  {
    ID: 0,
    name: "Ielts",
    image: "",
  },
  {
    ID: 1,
    name: "Toeic 2 kỹ năng",
    image: ""
  },
  {
    ID: 2,
    name: "Giao tiếp cơ bản",
    image: ""
  },
  {
    ID: 4,
    name: "Văn bằng B",
    image: ""
  },
  {
    ID: 5,
    name: "Toeic 4 kỹ năng",
    image: ""
  }
]

// Functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getCourses = async (pageIndex, pageSize) => {
  const from = (pageIndex - 1) * pageSize;
  const to = from + pageSize;

  // await sleep(2000);

  return {
    listCourse: courses.slice(from, to),
    totalPage: courses.length
  }
}

export const getLatestCourses = async (count = 5) => {
  await sleep(1000);
  return courses.slice(0, count);
}

export const getPopularTopics = async (count = 5) => {
  await sleep(750);
  return topics.slice(0, count);
}