import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'

const SendReply = () => {
  
    const [Comment,setComment]=useState({
      comment:"",
      date:"",
      id:0
    });
    function generate() {
      let length = 3;
      const number = "1234567890";
      let result = " ";
      const numberLenght = number.length;
      for (let i = 0; i < length; i++) {
        result += number.charAt(Math.floor(Math.random() * numberLenght));
      }
      return parseInt(result) ;
    }
    
    const RandomNumber= generate()
    const replyId=useSelector(state=>state.replyId)
    let sendComment =useSelector(state=>state.sendComment)
    // let change=sendComment.find((obj)=>obj.id===replyId)
  
    // const data = sendComment.map((value,index) => {
    //   if(value.id == replyId){
    //      value.reply = Comment
    //     return value
    //   }
    //   return value
    // })

      
   
    const userName=useSelector(state=>state.userName);
    const dispatch=useDispatch()
    function SendComment (){

      
  
          dispatch({type:"VIEW_COMMENT",payload:{commentView:Comment}})
         dispatch({type:"REPLY" ,payload:{reply:false, replyId:replyId}})
    }
 
    
  return (
  <>
  <div className='flex justify-center '>
        <div className='shadow-lg w-[800px] bg-white  mt-7 rounded-xl'>

            <div className=' flex flex-col-reverse md:flex-row justify-between'>
                <div>
                  <div className='flex justify-between'>
                    <img src='images/ahsan.png' className='w-20 ml-5 h-20 rounded-lg p-3'/>
                    <button className='m-6 lg:hidden md:hidden block bg-[#5457b6] text-white p-3 w-24 text-xl font-bold rounded-xl hover:bg-[#b0b2ec]'>Send</button>
                    </div>
                </div>
                <div>
                  <textarea type="text" placeholder='Add commment'  onChange={(e)=>setComment({comment:e.target.value,date:new Date(),id:RandomNumber})} defaultValue={`@${userName} ,`} className=" w-[90%] md:w-[450px] h-[100px] resize-none m-6 p-3 font-bold text-base rounded-md  border-[#dfe3fa] border-solid border-2 focus:outline-none focus:border-[#7C5DFA]"/>
                </div>
                <div>
                    <button className='m-6 md:block hidden bg-[#5457b6] text-white p-3 w-24 text-xl font-bold rounded-xl hover:bg-[#b0b2ec]' onClick={SendComment}>Send</button>
                </div>
            </div>
        </div>
        </div>
  </>
  )
}

export default SendReply