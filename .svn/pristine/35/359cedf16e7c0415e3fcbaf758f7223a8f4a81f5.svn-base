import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from 'react-router';
import {Card } from 'antd';

class NewsBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newsArr: []
    }
  }
  componentWillMount(){
    // 准备工作
    let {type, count} = this.props;
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
    axios.get(url)
      .then(response => {
        let data = response.data
        console.log(data);
        // 更新状态
        this.setState({newsArr: data});
      })
      .catch(error => {
        console.log(error);
      })
  }
  render(){
    let {newsArr} = this.state;
    let newsList = newsArr.length?
      (
        newsArr.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/news_detail/${item.uniquekey}`}>
                {item.title}
              </Link>
            </li>
          )
        })
      )
      : '暂时没有新闻推送';
    return (
      <Card>
        <ul>
          {newsList}
        </ul>
      </Card>
    )
  }
}



// 规定传入的props数据类型和必要性
NewsBlock.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default NewsBlock;