import axios from 'axios';

class BlogsDataService {
  getAllBlogs() {
    return axios.get('http://localhost:8080/api/v1/blogs', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbm1hIiwiZXhwIjoxNjAxNjYwNzkzLCJpYXQiOjE2MDE2NTcxOTN9.EeX70tlS6dWnpNFULRAwVfa7-9TZ8grIC0cTxRwwwWM',
      },
    });
  }
}

export default new BlogsDataService();
