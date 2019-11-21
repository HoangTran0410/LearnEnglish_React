import axios from 'axios';

const myaxios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
});

const getListCourses = async (query) => {

  try {
    const config = { method: 'GET', url: '/getListCourse', params: query }
    const result = await myaxios(config);

    return result.data

  } catch (err) {
    alert(err);
  }

  return null;
}

export default {
  getListCourses
}