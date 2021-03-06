const INIT_COMMENTS = 'INT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = "DELETE_COMMENT"

export default function (state, action) {
  if (!state) {
    state = {
      comments: []
    }
  }

  switch (action.type) {
    case INIT_COMMENTS:
      return {
        comments: action.comments
      }
      case ADD_COMMENT:
        return {
          comments: [...state.comments, action.comment]
        }
        case DELETE_COMMENT:
          return {
            comments: [...state.comments.slice(0, action.commentIndex),
              ...state.comments.slice(action.commentIndex + 1)
            ]
          }
          default:
            return state
  }
}
// action creators
export const initComments = (comments) => {
  return {
    type: INIT_COMMENTS,
    comments
  }
}
export const addComments = (comments) => {
  return {
    type: ADD_COMMENT,
    comments
  }
}
export const deleteComment = (comments) => {
  return {
    type: DELETE_COMMENT,
    comments
  }
}