import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

console.log(formData);


    const navigate = useNavigate()
   function handleloginclick() {
      navigate("/login")
   }

  async function handleformsubmit(e) {
      e.preventDefault();
    const response =  await  axios.post("http://localhost:8000/api/v1/users/registerUser" , formData ,{
  withCredentials: true
})
console.log(response);
    setFormData({ name: "", email: "", password: "" });

   }

  return (
    <div> 
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6"  onSubmit={handleformsubmit}>
                    <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                      <input type="text" name="name" id="name" placeholder="enter you name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}required/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} required/>
                  </div>
                 
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"       onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} required/>
                  </div>
                 
                  <Button  type="submit"  >create an account</Button>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400" onClick={handleloginclick}>
                      Already have an account? <a href="" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
              
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Register
