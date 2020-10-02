const blogs = [
  { id: 1, title: 'Blog 1', body: 'Some blog about nature...' },
  { id: 2, title: 'Blog 2', body: 'Text about blog 2 .' },
  { id: 3, title: 'Blog 3', body: 'Some information inside blog 3.' },
];

export const getBlogs = () => {
  return blogs;
};

export const getBlog = (id) => {
  return blogs[id - 1];
};
