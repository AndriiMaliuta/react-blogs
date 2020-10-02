import React from 'react';
import { getBlog } from '../api/BlogApi';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: '',
      body: '',
    };
  }
  componentDidMount() {
    let blog = getBlog(this.state.id);
    this.setState((state) => ({
      title: blog.title,
      body: blog.body,
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div className='blog'>
        <h3>{this.state.title}</h3>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Blog;
