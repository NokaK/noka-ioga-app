// Initial state for blogs
const initialState = [
  {
    title: 'new post i wrote',
    desc: 'blog post about state of web',
    id: 37
  }
];

const blogReducer = (blogsState = initialState, action) => {
  switch (action.type) {
    case 'PUBLISH':
      return [
        ...blogsState,
        {
          title: action.title,
          desc: action.desc,
          id: action.id
        }
      ];

    case 'DRAFT':
      return [];

    case 'COMMENT':
      return [];

    default:
      return initialState;
  }
};

export default blogReducer;
