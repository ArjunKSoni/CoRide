import './App.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEdit, BiDotsVerticalRounded } from 'react-icons/bi';
import { useState } from 'react';


function App() {
  const [chat, setchat] = useState([])
  return (
    <div style={{ backgroundColor: "#f3efea" }} className="main">
      <div className=' sticky w-screen'>
        <div className='chat-heading p-3'>
          <div className='flex head-text items-center justify-between'><BsArrowLeftShort className='text-3xl mt-1' /> Trip</div>
          <BiEdit className='text-xl mt-1 text-gray-600' />
        </div>
        <div className='flex items-center justify-between pb-3 px-3'>
          <div className='flex items-center justify-between gap-3'><div style={{ height: "40px", width: "40px" }} className='rounded-full overflow-hidden'><div className='flex items-end justify-center'><img src="user1.jpg" width={"20px"} height={"20px"} alt="" /><img src="user2.jpg" width={"20px"} height={"20px"} alt="" /></div><div className='flex items-start justify-center'><img src="user3.jpg" width={"20px"} height={"20px"} alt="" /><img src="user4.jpg" width={"20px"} height={"20px"} alt="" /></div></div><div><div className='flex items-start justify-start gap-1'>From <h2 className='font-bold'>IGI Airport, T3</h2></div><div className='flex items-center justify-start gap-1'>To <h2 className='font-bold'>Sector 38</h2></div></div></div>
          <BiDotsVerticalRounded className='text-2xl mt-1' />
        </div>
        <hr />
      </div>
      <div class="chat-container">
        {chat.map((e) => {
          return <div class="message">{e}</div>
        })}
      </div>
      <div className='absolute flex items-center justify-center bottom-0 left-0 p-2 w-screen z-20 pb-8'><input className=' p-3 rounded-xl bg-slate-300' size={40} type="text" /></div>
    </div >
  );
}

export default App;
