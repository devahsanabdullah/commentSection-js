const initialState = {
    userName:[],
    reply:false,
    replyId:0,
    comment:[],
    showComment:false,
    commentView:[],
    sendComment:[],
    editId:0

        
  }
  
  const DataFilter = (state = initialState, action) => {
    switch(action.type){
    case "USER_NAME":
        return {
            ...state,
        userName:action.payload.userName,
       
    }
    case "REPLY":
        return {
            ...state,
            reply:action.payload.reply,
            replyId:action.payload.replyId
            
    }
    case "EDIT_DATA":
        return {
            ...state,
           
            editId:action.payload.editId,
           
            
    }
    case "COMMENT":
        return {
            ...state,
            comment:action.payload.comment
       
        
        }
        case "VIEW_COMMENT":
            return {
                ...state,

                commentView:[...state.commentView,action.payload.commentView]
                
               
            
            }
            case "DELETE_COMMENT":
                return {
                    ...state,
    
                    commentView:action.payload.commentView
                    
                   
                
                }
            case "SEND_COMMENT":
                return {
                    ...state,
                    
                    
                    sendComment:[...state.sendComment,action.payload.sendComment]
                
                }    
        default:
            return state
    }
 }
 export default DataFilter;