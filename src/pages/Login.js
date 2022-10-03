import React from 'react'

import { Field, Form, Formik,getIn } from 'formik';
import {SinupValdation} from '../components/ValidationForm'
import {Link,useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const Navigate =useNavigate();
  const dispatch=useDispatch();
    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
          return {
            border: '1px solid red'
          }
        }
      }
    const styles = "h-12 mt-1 pl-4 font-bold text-base rounded-md  border-[#dfe3fa] border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]";
  return (
    <div className=' '>
  <div className='flex justify-center items-center'>

    <div className='shadow-lg h-3/5 w-96 flex flex-col rounded-2xl mt-10 '>
        <h1 className='text-center font-extrabold p-8  text-3xl '>Login</h1>
<Formik
       initialValues={{ username: "" ,
       password:""}}
       validationSchema={SinupValdation}
       onSubmit={(values, actions) => {
    
           alert(JSON.stringify(values, null, 2));
           dispatch({type:"USER_NAME",payload:{userName:values.username}})

           Navigate("/commentSection")
        
       
       }}
     >
     
     {({ values, handleChange, handleBlur, handleSubmit,errors,formProps }) => (
         <Form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 px-16 '>
                <div>
                    <p className='text-black text-lg py-3'>Username</p>
                
            <Field  name="username" className={styles}  style={getStyles(errors, `username`)}/>
            </div>
            <div>
            <p className='text-black text-lg py-3'>Password</p>
            
            <Field  name="password" type="password" className={styles}  style={getStyles(errors, `password`)}/>
            </div>


         <button type="submit" className='w-56 mt-8 h-12 rounded-full text-white
        bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-xl font-bold'>Login</button>
           </div>
         </Form>
       )}
     </Formik>
     <div className='flex justify-center py-5'>
     <p>Not a member?</p> <span className='text-blue-500'>Signup now</span>
     </div>


     </div>
   </div>
   </div>

  )
}

export default Login