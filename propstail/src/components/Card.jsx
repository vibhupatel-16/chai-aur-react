import React from 'react'

function Card({username, btntext}) {
   
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gradient-to-br from-green-200 via-blue-200 to-purple-200">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Card"
          className="rounded-lg mb-6 w-full h-48 object-cover"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{username}</h2>
        <p className="text-gray-600 mb-4">
          This is a beautiful card component styled with Tailwind CSS. You can use it for profiles, products, or any content!
        </p>
        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded shadow transition duration-200">
          {btntext}
        </button>
      </div>
    </div>
  )
}

export default Card