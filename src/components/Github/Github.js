import React, { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {

    const  data = useLoaderData();


    // const [data,setData]= useSearchParams({})
    // useEffect(() => {
    //  fetch('https://api.github.com/users/butola9730')
    //  .then(response=>response.json())
    //  .then(data=>{
    //     console.log(data)
    //     setData(data)
    //  })
    // }, [])
    
  return (
    < >
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers:{data.followers_url}
    <img className='' src={data.avatar_url} alt='Git photo' width={300}/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async() =>{

    const response = await fetch('https://api.github.com/users/butola9730')
    return response.json()
}