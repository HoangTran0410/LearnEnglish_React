import React, { Component } from 'react'
import { Pagination, Input, Collapse, Select } from 'antd';

import { topics } from '../../utils/fakedata';
import API from '../../utils/callAPI';
import CourseCard from '../components/CourseCard';

const { Panel } = Collapse;
const customPanelStyle = {
  background: '#f9f9f9',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const HeartLoading = React.lazy(() => import('../components/HeartLoading'));
// const CourseCard = React.lazy(() => import('../components/CourseCard')); //màn hình bị nháy
// const SearchArea = React.lazy(() => import('./SearchArea.js'))

export default class CoursesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      total: 0,
      pageIndex: 1,
      pageSize: 1,

      title: ''
    }
  }

  // lấy danh sách khoá học ngay lúc component này được tạo
  componentDidMount = () => {
    this.getListCourses();
  }

  // hàm lấy danh sách khoá học từ api
  getListCourses = async () => {
    // loading ON
    await this.setState({ loading: true })

    // get list from API
    const { pageIndex, pageSize, title } = this.state;
    const api_result = await API.getListCourses({ pageIndex, pageSize, title });

    this.setState({
      courses: api_result.listCourse,
      total: api_result.totalPage,

      // loading OFF
      loading: false
    })
  }

  // khi thay đổi pageSize
  onShowSizeChange = async (current, pageSize) => {
    await this.setState({
      pageSize: pageSize,
      pageIndex: 1
    })

    this.getListCourses();
  }

  // khi thay đổi pageIndex
  onPageIndexChange = async (newPageIndex) => {
    await this.setState({ pageIndex: newPageIndex });
    this.getListCourses();
  }

  render() {
    const { pageIndex, pageSize, courses, total, loading, title } = this.state;
    console.log(topics)
    return (
      <>
        {/* Search */}
        <div className="courses_search_container row">
          <div className="col-lg-6">
            <Input.Search
              size="large"
              enterButton="Tìm"
              value={title}
              placeholder="Tìm theo tên Khoá học"
              onChange={(e) => this.setState({ title: e.target.value })}
              onSearch={this.getListCourses}
            />
          </div>

          <div className="col-lg-6">
            <Collapse bordered={false}>
              <Panel header="Tìm kiếm nâng cao" style={customPanelStyle}>
                <Select placeholder="Chọn chủ đề" style={{ width: '100%' }}>
                  <Select.Option value="">Tất cả</Select.Option>
                  {
                    topics && topics.map((topic, index) => {
                      console.log(topic)
                      return (
                        <Select.Option key={index} value={topic.ID}>{topic.name}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Panel>
            </Collapse>
          </div>
        </div>

        <div className="courses_container">

          {/* List Courses */}
          <div className="row courses_row">
            {
              courses.map((course, index) => (
                <div className="col-lg-6 course_col" key={"courses-card-" + index}>
                  <CourseCard data={course} />
                </div>
              ))
            }

            {/* Loading Overlay */}
            {
              loading && (
                <div className="overlay_full_div">
                  <HeartLoading />
                </div>
              )
            }
          </div>

          {/* Pagination */}
          <div className="row pagination_row">
            <div className="col">
              <div className="pagination_container d-flex flex-row align-items-center justify-content-start">
                <Pagination
                  showQuickJumper
                  showSizeChanger
                  // hideOnSinglePage
                  pageSizeOptions={['1', '2', '5', '10', '20', '40']}
                  current={pageIndex}
                  pageSize={pageSize}
                  onChange={this.onPageIndexChange}
                  onShowSizeChange={this.onShowSizeChange}
                  total={total}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
