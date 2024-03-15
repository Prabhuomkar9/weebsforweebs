
import React from 'react'

const issues = () => {
  return (
    <div className='my-10 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm  w-[700px]  bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden'>

      <h2 className="text-3xl font-bold mb-4">Issue Details </h2>

      <form className="w-full mx-auto" action="/submit-room" method="post" encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="issueTitle" className="block font-bold mb-1">Issue Title</label>
          <input type="string" id="issueTitle" name="issueTitle" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-1">Description:</label>
          <textarea id="description" name="description" required className="input-field text-black p-2 rounded-md w-full"></textarea>
        </div>
        
        <div className="mb-4">
          <label htmlFor="location" className="block font-bold mb-1">Location:</label>
          <input type="text" id="location" name="location" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        
        
        
        <div className="mb-4">
          <h3 className="font-bold mb-2">Creator Details </h3>
          <label htmlFor="agentName" className="block font-bold mb-1">Name:</label>
          <input type="text" id="agentName" name="agentName" required className="input-field text-black p-2 rounded-md w-full" />
          <label htmlFor="agentContact" className="block font-bold mb-1">Contact:</label>
          <input type="tel" id="agentContact" name="agentContact" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block font-bold mb-1">Images:</label>
          <input type="file" id="images" name="images[]" multiple accept="image/*" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <button className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Submit</button>
      </form>
    </div>
  )
}

export default issues;
