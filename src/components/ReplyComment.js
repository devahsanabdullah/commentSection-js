import React,{useState} from 'react'
import { FaReply } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike} from "react-icons/bi";
import { MdDelete} from "react-icons/md";
import { MdEdit} from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment/moment';
const ReplyComment = () => {
 
  const [editOpen,setEditOpen]=useState(false)
  const [value ,setValue]=useState("")
  const  commentView=useSelector((state)=>state.commentView)
  const editid=useSelector((state)=>state.editId)

  const dispatch= useDispatch()
 
 
  function removeHandle(id)
  {

  const val = commentView.filter((data)=>data.id!==id)

   
    dispatch({type:"DELETE_COMMENT",payload:{commentView:val}})
  }
  function editHandle(id)
  {
    const val = commentView.filter((data)=>{
      if(data.id===id)
      {
        data.comment=value

      }
    })
    
    setEditOpen(false)

  }
 function editable(id)
 {
  dispatch({type:"EDIT_DATA",payload:{editId:id}})
  setEditOpen(true)
 }
 
  
  return (
    <>
   
 {commentView&&commentView.map((data)=>{
  return(

 

   
    <div className='flex justify-center ml-10'>
        <div className='shadow-lg w-[750px] bg-white  p-5 mt-7 rounded-xl'>
            <div className='flex flex-col-reverse md:flex-row '>
             
              <div>
               <div className='flex justify-between  '>
               
                <div className='shadow-lg bg-gray-100  p-2 flex  w-20 items-center  md:flex-col md:w-9 md:m-3 md:p-3 rounded-xl'>
            <h1 className='font-bold text-2xl text-gray-500 hover:text-[#5457b6] cursor-pointer'><BiLike /></h1>
            <h1 className=' font-bold text-[#5457b6]'>25</h1>
            <h1 className='font-bold text-2xl  text-gray-500 hover:text-[#5457b6] cursor-pointer'><BiDislike /></h1>
            </div>
            <div className='lg:hidden md:hidden block'> 
            <div className='flex justify-center items-center'>
            <MdDelete className='text-xl font-bold ml-1 text-red-500  ' />
            <h1 className='text-xl font-bold ml-1 text-red-500 cursor-pointer ' onClick={()=>removeHandle(data.id)}>Delete</h1>
            
            <div className='flex cursor-pointer justify-center '>
              <MdEdit className='text-xl font-bold ml-2 text-[#5457b6]  '/>
            <h1 className='text-xl font-bold ml-1 text-[#5457b6] cursor-pointer hover:text-[#b7b9eb]' onClick={()=>editable(data.id)}>Edit</h1>
            </div>
            </div>
              </div>
            </div>
            </div>

            
            <div>
                <div className='flex flex-col'>
                <div className='flex justify-between'>
                 <div className='flex'>
              <img src='images/ahsan.png'  className='w-8 h-8  rounded-lg'/>
            <h1 className='text-lg font-bold pl-3 '>amyrobson</h1>
          <p className='text-lg text-gray-500 pl-3 '>{moment(data.date).fromNow()}</p>
          </div>
            <div className=' md:block hidden text-end'>
              <div className='flex justify-center items-center'>
               
             <MdDelete className='text-xl font-bold ml-1 text-red-500  ' />
            <h1 className='text-xl font-bold ml-1 text-red-500  cursor-pointer'  onClick={()=>removeHandle(data.id)}>Delete</h1>
            
            <div className='flex cursor-pointer justify-center '>
              <MdEdit className='text-xl font-bold ml-2 text-[#5457b6]  '/>
            <h1 className='text-xl font-bold ml-1 text-[#5457b6] cursor-pointer hover:text-[#b7b9eb]' onClick={()=>editable(data.id)} >Edit</h1>
            </div>
            </div>
            </div>
            </div>
            <div>
             { data.id===editid&&editOpen?<div><textarea type="text" placeholder='Add commment' defaultValue={data.comment} onChange={(e)=>setValue(e.target.value)} className=" w-[90%] md:w-[450px] h-[100px] resize-none m-6 p-3 font-bold text-base rounded-md  border-[#dfe3fa] border-solid border-2 focus:outline-none focus:border-[#7C5DFA]"/>
               <button className='  bg-[#5457b6] text-white p-3 w-24 text-xl font-bold rounded-xl hover:bg-[#b0b2ec] cursor-pointer' onClick={()=>editHandle(data.id)}>Update</button></div>:<p className='p-3 text-lg text-gray-500 font-medium'>{data.comment}</p>}
   
    
  
          </div>
          </div>
          </div>
          </div>
          </div>
          
    </div>
     )
    })}
       
 
    </>
  )
}

export default ReplyComment