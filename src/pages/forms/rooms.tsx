
import React from 'react'

const rooms = () => {
  return (
    <div className='my-10 bg-gray-400  bg-clip-padding backdrop-filter w-[700px] backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden'>
      <h2 className="text-3xl font-bold mb-4">Room Details </h2>

      <form className="w-full mx-auto" action="/submit-room" method="post" encType="multipart/form-data">
        <div className="mb-4 w-full">
          <label htmlFor="roomNumber" className="block font-bold mb-1 w-full">Room Number:</label>
          <input type="number " id="roomNumber" name="roomNumber" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="roomType" className="block font-bold mb-1">Room Type:</label>
          <select id="roomType" name="roomType" required className="input-field text-black p-2 rounded-md">
            <option value="rental">Rental</option>
            <option value="sale">For Sale</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-bold mb-1">Price:</label>
          <input type="number" id="price" name="price" required className="input-field text-black p-2 rounded-md w-full " />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-bold mb-1">Location:</label>
          <input type="text" id="location" name="location" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <div className="mb-4 inline-block w-1/2">
          <label htmlFor="bathrooms" className=" mr-3 font-bold mb-1">Number of Bathrooms:</label>
          <select id="bathrooms" name="bathrooms" required className="input-field text-black p-2 rounded-md">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="mb-4 inline-block w-1/2">
          <label htmlFor="bedrooms" className=" font-bold mr-3 mb-1">Number of Bedrooms:</label>
          <select id="bedrooms" name="bedrooms" required className="input-field text-black p-2 rounded-md">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="squareFeet" className="block font-bold mb-1">Square Feet:</label>
          <input type="number" id="squareFeet" name="squareFeet" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-1">Description:</label>
          <textarea id="description" name="description" required className="input-field text-black p-2 rounded-md "></textarea>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Agent Details</h3>
          <label htmlFor="agentName" className="block font-bold mb-1">Name:</label>
          <input type="text" id="agentName" name="agentName" required className="input-field text-black p-2 rounded-md w-full" />
          <label htmlFor="agentContact" className="block font-bold mb-1">Contact:</label>
          <input type="tel" id="agentContact" name="agentContact" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block font-bold mb-1">Room Images:</label>
          <input type="file" id="images" name="images[]" multiple accept="image/*" required className="input-field text-black p-2 rounded-md w-full" />
        </div>
        <button className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Submit</button>
      </form>
    </div>
  )
}

export default rooms
