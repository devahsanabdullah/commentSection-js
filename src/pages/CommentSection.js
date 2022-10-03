import React, { useState } from 'react'
import AddComment from '../components/AddComment'
import { FaReply } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike} from "react-icons/bi";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ReplyComment from '../components/ReplyComment'
import moment from 'moment/moment';

import SendReply from '../components/SendReply'
const CommentSection = () => {
  const [replyShow,setReplyShow]=useState(false);
  const dispatch=useDispatch()
  const reply=useSelector(state=>state.reply)
  const replyId=useSelector(state=>state.replyId)
 
  
  let sendComment =useSelector(state=>state.sendComment)
   console.log("🚀 ~ file: CommentSection.js ~ line 20 ~ CommentSection ~ sendComment", sendComment)
  
  

 

  // const handleChange=()=>{
  //   setReplyShow(current=>!current)
  //   dispatch({type:"REPLY" ,payload:{reply:replyShow}})
  // }

  return (
    <>
    {sendComment&&sendComment.map((data,index)=>{
      
      
      return(

     <>
    <div className='flex justify-center '>
        <div className='shadow-lg w-[800px] bg-white  p-5 mt-7 rounded-xl'>
            <div className='flex flex-col-reverse md:flex-row '>
             
              <div>
               <div className='flex justify-between  '>
               
                <div className='shadow-lg bg-gray-100  p-2 flex  w-20 items-center  md:flex-col md:w-9 md:m-3 md:p-3 rounded-xl'>
            <h1 className='font-bold text-2xl text-gray-500 hover:text-[#5457b6] cursor-pointer'><BiLike /></h1>
            <h1 className=' font-bold text-[#5457b6]'>25</h1>
            <h1 className='font-bold text-2xl  text-gray-500 hover:text-[#5457b6] cursor-pointer'><BiDislike /></h1>
            </div>
            <div className='lg:hidden md:hidden block'> 
            <div className='flex justify-center items-center cursor-pointer' 
          onClick={()=>dispatch({type:"REPLY" ,payload:{reply:true,replyId:data.id}})}
            >
              <FaReply className='text-[#5457b6] '/>
            <h1 className='text-xl font-bold ml-1 text-[#5457b6]  '>Reply</h1>
            </div>
              </div>
            </div>
            </div>

            
            <div>
                <div className='flex flex-col'>
                <div className='flex justify-between'>
                 <div className='flex'>
              <img src='images/ahsan.png'  className='w-8 h-8  rounded-lg'/>
            <h1 className='text-lg font-bold pl-3 '>{data.userName}</h1>
          <p className='text-lg text-gray-500 pl-3 '>{moment(data.date).fromNow()}</p>
          </div>
            <div className=' md:block hidden text-end'>
              <div className='flex justify-center items-center cursor-pointer' onClick={()=> dispatch({type:"REPLY" ,payload:{reply:true,replyId:data.id}})}>
              <FaReply className='text-[#5457b6] '/>
            <h1 className='text-xl font-bold ml-1 text-[#5457b6]  '>Reply</h1>
            </div>
            </div>
            </div>
            <div>
    <p className='p-3 text-lg text-gray-500 font-medium'>{data.comment}</p>
          </div>
          </div>
          </div>
          </div>
          </div>

    

    
         
    </div>
    {data.id===replyId&&reply?<SendReply />:null} 


 
     </>
    )
  })}  
    <AddComment />
 
    </>
  )
}

export default CommentSection