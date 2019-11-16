import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "antd";

export default class HeaderComponent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      showSearch: false,
      showSideMenu: false
    };

    window.onscroll = e => {
      if (window.pageYOffset > 100) {
        this.setState({ scrolled: true });
      } else if (window.pageYOffset === 0) {
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
                          <NavLink to="/login">Register or Login</NavLink>
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
                      <a href="/">
                        <div className="logo_text">
                          <span>L</span>ea<span>E</span>ng
                        </div>
                      </a>
                    </div>
                    <nav className="main_nav_contaner ml-auto">
                      <ul className="main_nav">
                        <li>
                          <NavLink exact to="/home" activeClassName="active">
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" activeClassName="active">
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/courses" activeClassName="active">
                            Courses
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/blog" activeClassName="active">
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/page" activeClassName="active">
                            Page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" activeClassName="active">
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                      <div
                        className="search_button"
                        onClick={this.toggleSearch}
                      >
                        <Icon type="search" />
                      </div>

                      {/* <!-- Hamburger --> */}

                      <div className="shopping_cart">
                        <Icon type="shopping" />
                      </div>
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
            <form action="#" className="header_search_form menu_mm">
              <input
                type="search"
                className="search_input menu_mm"
                placeholder="Search"
                required="required"
              />
              <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                <Icon type="search" />
              </button>
            </form>
          </div>
          <nav className="menu_nav">
            <ul className="menu_mm">
              <li className="menu_mm">
                <NavLink exact to="/home" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="menu_mm">
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="menu_mm">
                <NavLink to="/courses" activeClassName="active">
                  Courses
                </NavLink>
              </li>
              <li className="menu_mm">
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li>
              <li className="menu_mm">
                <NavLink to="/page" activeClassName="active">
                  Page
                </NavLink>
              </li>
              <li className="menu_mm">
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
