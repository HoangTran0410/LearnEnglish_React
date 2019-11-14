import React from "react";
import { Menu } from "antd";
import shortid from "shortid";

const SubMenu = Menu.SubMenu;

function DropDownMenuComponent() {
  return (
    <Menu mode={this.props.menuMode}>
      <SubMenu title={<span>Khóa học</span>}>
        <SubMenu title="Học từ vựng">
          <Menu.Item key={shortid.generate()}>
            Học 3000 từ vựng cấp tốc
          </Menu.Item>
          <Menu.Item key={shortid.generate()}>Từ vựng toeic</Menu.Item>
        </SubMenu>
        <SubMenu title="Học ngữ pháp">
          <Menu.Item key={shortid.generate()}>Phổ thông</Menu.Item>
          <Menu.Item key={shortid.generate()}>Tất tần tật 12 thì</Menu.Item>
          <Menu.Item key={shortid.generate()}>Theo cấp độ</Menu.Item>
        </SubMenu>
        <SubMenu title="Tiếng anh giao tiếp">
          <Menu.Item key={shortid.generate()}>Căn bản</Menu.Item>
          <Menu.Item key={shortid.generate()}>Topic</Menu.Item>
          <Menu.Item key={shortid.generate()}>Theo cấp độ</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
}

export default DropDownMenuComponent;
