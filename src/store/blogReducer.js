
// Initial state for blogs
const initialState = []

const blogReducer  = ((blogsState =  initialState, action) => {
  switch (action.type) {
    
    case "PUBLISH":
      return [
        ...blogsState,
      ]
    
    case "DRAFT":
      return []

    case "COMMENT":
      return []

    default:
      return initialState;
  }
})

export default blogReducer;