import React from 'react';
import { Link } from 'react-router-dom';
// import { getBlogs } from '../api/BlogApi';
import BlogsDataService from '../api/BlogsDataService';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  componentDidMount() {
    // this.setState((state) => ({ blogs: getBlogs() }));
    // console.log(BlogsDataService.getAllBlogs());
    BlogsDataService.getAllBlogs()
      .then((response) => {
        console.log(response.data);
        this.setState((state) => ({ blogs: response.data }));
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className='blogs'>
        <h3>Blogs</h3>
        <div>
          {this.state.blogs.map((blog) => (
            <div className='blog' key={blog.id}>
              <p>
                <Link to={`blogs/${blog.id}`}>{blog.title}</Link>
              </p>
              <p>{blog.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogList;
