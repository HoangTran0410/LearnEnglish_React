import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Skeleton } from 'antd';

import { getLatestCourses } from '../../utils/fakedata'

export default class LatestCourses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latest_courses: [],
      loading: false
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = async () => {
    await this.setState({ loading: true });
    const api_result = await getLatestCourses();
    this.setState({ latest_courses: api_result, loading: false })
  }

  render() {
    const { latest_courses, loading } = this.state

    return (
      <>
        {/* <!-- Latest Courses --> */}
        <div className="sidebar_section">
          <div className="sidebar_section_title">
            Khoá học mới nhất <Icon type={loading ? "loading" : "reload"} title="Làm mới" onClick={this.getData} />
          </div>

          <Skeleton active loading={loading}>
            <div className="sidebar_latest">
              {
                latest_courses.map((course, index) => {
                  const {
                    ID,
                    Picture,
                    Title,
                    TopicID,
                    Description,
                    last_modified_date = '2 ngày trước'
                  } = course

                  return (
                    <Link to={"/course?id=" + ID} className="latest d-flex flex-row align-items-start justify-content-start" key={"lastest-course-" + index}>
                      <div className="latest_image">
                        <div> <img src={Picture} alt="" className="trans_300" /></div>
                      </div>
                      <div className="latest_content">
                        <div className="latest_title">
                          <span>{Title}</span>
                        </div>
                        <div className="latest_info">
                          <Icon type="tag" />{" " + TopicID}
                          <br />
                          <Icon type="clock-circle" />{" " + last_modified_date}
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          </Skeleton>

        </div>
      </>
    )
  }
}
