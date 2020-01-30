
// Initial state for blogs
const initialState = []

const blogReducer  = ((state =  initialState, action) => {
  switch (action.type) {
    
    case "PUBLISH":
      return []
    
    case "DRAFT":
      return []

    case "COMMENT":
      return []

    default:
      return initialState;
  }
})

export default blogReducer;