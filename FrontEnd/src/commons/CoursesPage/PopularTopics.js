import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Skeleton } from 'antd';

import { getPopularTopics } from '../../utils/fakedata';

export default class PopularTopics extends Component {

  constructor(props) {
    super(props)

    this.state = {
      topics: [],
      loading: false
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    await this.setState({ loading: true })
    const api_result = await getPopularTopics(10);
    this.setState({ topics: api_result, loading: false })
  }

  render() {
    const { topics, loading } = this.state;

    return (
      <>
        {/* <!-- Topics --> */}
        <div className="sidebar_section">
          <div className="sidebar_section_title">
            Chủ đề nổi bật <Icon type={loading ? "loading" : "reload"} title="Làm mới" onClick={this.getData} />
          </div>

          <Skeleton loading={loading} active>
            <div className="sidebar_tags">
              <ul className="tags_list">
                {
                  topics.map((topic, index) => (
                    <li key={"topic-best-" + index}>
                      <Link to="/">
                        <Icon type="tag" />
                        {" " + topic.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </Skeleton>
        </div>
      </>
    )
  }
}
