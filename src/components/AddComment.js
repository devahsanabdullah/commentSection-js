import React from 'react'
import CommentSection from '../pages/CommentSection'
import ReplyComment from './ReplyComment'
import SendComment from './SendComment'
import SendReply from './SendReply'
import { useSelector } from 'react-redux'

const AddComment = () => {
  const reply=useSelector(state=>state.reply)
  return (
   <>
    <div className='flex justify-center'>
    <div class="flex md:ml-20 divide-gray-400 divide-x-4">
      <div></div>
      <div className='col-span-3 ml-10'>
        <ReplyComment /></div>
    </div>
    </div>
    
    <SendComment />
    </>
  )
}

export default AddComment