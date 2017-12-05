# react app news
## 1、注册路由
  * Router： 路由器
  * Route： 注册路由
  * IndexRoute：默认子路由
  * hashHistory： 管理hashUrl
  * Link： 生成a标签
  * 参与路由组件：
    - App：应用主组件
    - news_container: 新闻内容区
    - news_detail: 新闻详情页
    - user_center: 用户中心
## 2、头部功能
  * antd
    - 栅格布局: Row, Col
    - 导航按钮: Menu, Menu.Item === MenuItem(key == '唯一值')
    - 小图标: Icon
### !!!! 注意地方
  * <font color=red>MenuItem: 登录注册</font>
  * <font color=red>**登录注册：用户是否登录决定**</font>
  * 使用form表单的时候
    - 暴露组件： Form.create()(组件名);
    - 通过以上的暴露方式可以在当前的组件获取： this.props.form;
    - from中的API；
    