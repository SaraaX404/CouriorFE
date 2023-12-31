import { Link } from "react-router-dom";
import Sidepanel from "../../components/sidepanel";
import {useEffect, useState} from 'react'
import bg from '../../images/mainbg1.jpg';
import axios from 'axios'
import { BaseUrl } from "../../utils/base_url";

export default function Tickets() {

  const [data,setData] = useState([])

  

  const fetchData = async()=>{
    const res = await axios.get(`${BaseUrl}/delivery`)
    console.log(res.data)
    if(Array.isArray(res.data.data)){
      setData(res.data.data)
    }else{
      setData([])
    }

  }

  const deleteData = async(e,id)=>{
    e.preventDefault()
    await axios.delete(`http://localhost:5000/delivery/${id}`)
    fetchData()

  }
  useEffect(()=>{
    
    fetchData()


  },[])

  useEffect(()=>console.log(data),[data])



    return (
      <div className="main-body h-screen w-full bg-slate-100">
        <img src={bg} alt="" srcset="" className="object-cover w-[100%] h-[100%] fixed" />
        <div className="main-body-container w-full flex flex-row absolute">
          <Sidepanel />
          <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">

          <div className="common-body p-5 flex flex-col h-full bg-white rounded-lg">
            <h2 className="flex items-center justify-center pt-4 text-xl uppercase font-bold pb-4 mt-4 mb-4">Performance Tracking Orders</h2>


            <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Orders....." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<br/>

            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-6 py-4">#ID</th>
                          <th scope="col" class="px-6 py-4">Sender Name</th>
                          <th scope="col" class="px-6 py-4">Receiver Name</th>
                          <th scope="col" class="px-6 py-4">Receiver Address</th>
                          <th scope="col" class="px-6 py-4">Province</th>
                          <th scope="col" class="px-6 py-4">Item Type</th>
                          <th scope="col" class="px-6 py-4">Predetermine's Day</th>
                          <th scope="col" class="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {data.map((x,i)=>(
                          <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">{x?.id}</td>
                          <td class="whitespace-nowrap px-6 py-4">{x?.sender_name}</td>
                          <td class="whitespace-nowrap px-6 py-4">{x?.receiver_name}</td>
                          <td class="whitespace-nowrap px-6 py-4">{x?.address}</td>
                          <td class="whitespace-nowrap px-6 py-4">{x?.province}</td>
                          <td class="whitespace-nowrap px-6 py-4">{x?.item_type}</td>
                          <td class="whitespace-nowrap px-6 py-4">{Math.floor(Math.random() * 10) + 1}</td>
                        <td class="whitespace-nowrap px-6 py-4">
                            <a href={`/UpdateOrder/${x?.id}`}>
                              <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-purple-900 text-sm font-bold text-white mr-4">
                                Update
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                            </a>
                            <a href={""}>
                              <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-red-500 text-sm font-bold text-white mr-4" onClick={(e)=> deleteData(e,x?.id)}>
                                Remove
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                            </a>
                            <a href={`/MoreInfo/${x?.id}`}>
                              <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-blue-500 text-sm font-bold text-white mr-4">
                                View
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                            </a>
                          </td>
                        </tr>
                        ))}
                      

                    
                        


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    );
}
