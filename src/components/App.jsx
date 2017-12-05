import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render(){
    return (
      <div>
        <div>header内容。。。</div>
        <p><Link to="/news_detail/1">新闻1</Link></p>
        <p><Link to="/news_detail/2">新闻2</Link></p>
        <p><Link to="/user_center">用户中心</Link></p>
        {this.props.children}
        <div>footer内容。。。</div>

      </div>
    )
  }
}

export default App;