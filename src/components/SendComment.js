import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';

const SendComment = () => {
  const userName=useSelector(state=>state.userName);
  const dispatch=useDispatch()
  const [sendComment,setSendComment]=useState({});
  function commentSending (){
   
    dispatch({type:"SEND_COMMENT",payload:{sendComment:sendComment}})

  }
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
                  <textarea type="text" placeholder='Add commment'  onChange={(e)=>setSendComment({comment:e.target.value,userName:userName,id:RandomNumber})} className=" w-[90%] md:w-[450px] h-[100px] resize-none m-6 p-3 font-bold text-base rounded-md  border-[#dfe3fa] border-solid border-2 focus:outline-none focus:border-[#7C5DFA]"/>
                </div>
                <div>
                    <button className='m-6 md:block hidden bg-[#5457b6] text-white p-3 w-24 text-xl font-bold rounded-xl hover:bg-[#b0b2ec] cursor-pointer' onClick={() => commentSending()}>Send</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default SendComment