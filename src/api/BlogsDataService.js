import axios from 'axios';

class BlogsDataService {
  getAllBlogs() {
    return axios.get('http://localhost:8080/api/v1/blogs');
  }
}

export default new BlogsDataService();
