import React from 'react';
import {
  Row,Col, Menu, Icon
} from 'antd'

import logo from '../images/logo.png';

const MenuItem = Menu.Item;

class NewsHeader extends React.Component {
  constructor(props) {
    super(props);
    // 初始化数据
    this.state = {
      key: 'toutiao'
    }
  }
  // 定义点击MenuItem时的回调函数
  changeKey = ({ key }) => {
    // console.log(item, key,keyPath);
    // 修改状态
    this.setState({key});
  };
  render () {
    let {key} = this.state;
    return (
      <div>
        <Row>
          <Col span={1}></Col>
          <Col span={3}>
            <div className="logo">
              <img src={logo} alt=""/>
              <span>ReactNews</span>
            </div>
          </Col>
          <Col span={19}>
            <Menu onClick={this.changeKey} mode="horizontal" selectedKeys={[key]}>
              <MenuItem key="toutiao">
                <Icon type="appstore"/> 头条
              </MenuItem>
              <MenuItem key="shehui">
                <Icon type="appstore"/> 社会
              </MenuItem>
              <MenuItem key="guonei">
                <Icon type="appstore"/>国内
              </MenuItem>
              <MenuItem key="guoji">
                <Icon type="appstore"/>国际
              </MenuItem>
              <MenuItem key="yule">
                <Icon type="appstore"/>娱乐
              </MenuItem>
              <MenuItem key="tiyu">
                <Icon type="appstore"/>体育
              </MenuItem>
              <MenuItem key="keji">
                <Icon type="appstore"/>科技
              </MenuItem>
              <MenuItem key="shishang">
                <Icon type="appstore"/>时尚
              </MenuItem>
            </Menu>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    );
  }
}


export default NewsHeader;