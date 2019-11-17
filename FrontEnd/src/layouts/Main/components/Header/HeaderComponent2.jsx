import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon, Menu, Dropdown, message } from "antd";

const onClickMenu = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const userMenu = (
  <Menu onClick={onClickMenu}>
    <Menu.Item key="ho so">
      <Icon type="compass" /> Hồ sơ
    </Menu.Item>
    <Menu.Item key="cai dat">
      <Icon type="setting" /> Cài đặt
    </Menu.Item>
    <Menu.Item key="dang xuat">
      <Icon type="logout" /> Đăng xuất
    </Menu.Item>
  </Menu>
);

export default class HeaderComponent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      showSearch: false,
      showSideMenu: false
    };

    window.onscroll = e => {
      const { scrolled } = this.state;

      if (window.pageYOffset > 130) {
        if (!scrolled) this.setState({ scrolled: true });
      } else if (scrolled) {
        this.setState({ scrolled: false });
      }
    };
  }

  toggleSearch = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };

  toogleSideMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const { scrolled, showSearch } = this.state;

    const header_class = "header" + (scrolled ? " scrolled" : "");
    const search_container_class =
      "header_search_container" + (showSearch ? " active" : "");

    return (
      <>
        <header className={header_class}>
          {/* <!-- Top Bar --> */}
          <div className="top_bar">
            <div className="top_bar_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                      <ul className="top_bar_contact_list">
                        <li>
                          <div className="question">Have any questions?</div>
                        </li>
                        <li>
                          <Icon type="phone" theme="filled" />
                          <div>001-1234-88888</div>
                        </li>
                        <li>
                          <Icon type="google-plus-square" theme="filled" />
                          <div>info.deercreative@gmail.com</div>
                        </li>
                      </ul>
                      <div className="top_bar_login ml-auto">
                        <div className="login_button">
                          <Link to="/login">Đăng nhập / Đăng ký</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Header Content --> */}
          <div className="header_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_content d-flex flex-row align-items-center justify-content-start">
                    <div className="logo_container">
                      <Link to="/">
                        <div className="logo_text">
                          <span>L</span>ea<span>E</span>ng
                        </div>
                      </Link>
                    </div>
                    <nav className="main_nav_contaner ml-auto">
                      <ul className="main_nav">
                        <li>
                          <NavLink exact to="/home" activeClassName="active">
                            Trang chủ
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" activeClassName="active">
                            Giới thiệu
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/courses" activeClassName="active">
                            Khoá học
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/blog" activeClassName="active">
                            Blog
                          </NavLink>
                        </li>
                        {/* <li>
                          <NavLink to="/page" activeClassName="active">
                            Trang
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" activeClassName="active">
                            Liên hệ
                          </NavLink>
                        </li> */}
                      </ul>
                      <div
                        className="search_button"
                        onClick={this.toggleSearch}
                      >
                        <Icon type="search" />
                      </div>

                      {/* <!-- Hamburger --> */}
                      <Dropdown overlay={userMenu} placement="bottomCenter">
                        <div className="user">
                          <Icon type="user" />
                        </div>
                      </Dropdown>

                      <div
                        className="hamburger menu_mm"
                        onClick={this.toogleSideMenu}
                      >
                        <Icon type="menu" />
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Header Search Panel --> */}
          <div className={search_container_class}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                    <form action="#" className="header_search_form">
                      <input
                        type="search"
                        className="search_input"
                        placeholder="Search"
                        required="required"
                      />
                      <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                        <Icon type="search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Menu --> */}

        <div
          className={
            "menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400" +
            (this.state.showSideMenu ? " active" : "")
          }
        >
          <div className="menu_close_container">
            <div className="menu_close" onClick={this.toogleSideMenu}>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="search">
            <form action="#" className="header_search_form">
              <input
                type="search"
                className="search_input"
                placeholder="Search"
                required="required"
              />
              <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                <Icon type="search" />
              </button>
            </form>
          </div>
          <nav className="menu_nav">
            <ul>
              <li>
                <NavLink exact to="/home" activeClassName="active">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" activeClassName="active">
                  Khoá học
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/page" activeClassName="active">
                  Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Liên hệ
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
