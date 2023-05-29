import './App.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEdit, BiDotsVerticalRounded, BiSend } from 'react-icons/bi';
import { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';

function App() {
  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
  }
  const [chat, setchat] = useState([])
  const [newchat, setnewchat] = useState("")
  return (
    <div style={{ backgroundColor: "#f3efea", height: "100vh" }} className="main">
      <div style={{ height: "19%" }} className=' sticky w-screen'>
        <div className='chat-heading p-3'>
          <div className='flex head-text items-center justify-between'><BsArrowLeftShort className='text-3xl mt-1' /> Trip 1</div>
          <BiEdit className='text-xl mt-1 text-gray-600' />
        </div>
        <div className='flex items-center justify-between pb-3 px-3'>
          <div className='flex items-center justify-between gap-3'><div style={{ height: "40px", width: "40px" }} className='rounded-full overflow-hidden'><div className='flex items-end justify-center'><img src="user1.jpg" width={"20px"} height={"20px"} alt="" /><img src="user2.jpg" width={"20px"} height={"20px"} alt="" /></div><div className='flex items-start justify-center'><img src="user3.jpg" width={"20px"} height={"20px"} alt="" /><img src="user4.jpg" width={"20px"} height={"20px"} alt="" /></div></div><div><div className='flex items-start justify-start gap-1'>From <h2 className='font-bold'>IGI Airport, T3</h2></div><div className='flex items-center justify-start gap-1'>To <h2 className='font-bold'>Sector 38</h2></div></div></div>
          <BiDotsVerticalRounded className='text-2xl mt-1' />
        </div>
        <hr />
      </div>
      <div style={{ height: "66%" }} id='Box' className="chat-container">
        {chat.map((e, i) => {
          return <div key={i} className="message">{e}</div>
        })}
      </div>
      <div style={{ height: "15%" }} className='absolute p-4 flex items-center justify-center bottom-0 left-0  w-screen z-20'><div style={{ width: "100%" }} className='bg-white input flex items-center justify-center py-1 rounded px-2'><input value={newchat} onChange={(e) => { setnewchat(e.target.value) }} type="text" placeholder="Reply to @Rohit Yadav" /><GrAttachment className='ml-2 text-xl' /><BiSend onClick={(e) => { if (newchat !== "") { setchat(chat.concat(newchat)); setnewchat(""); scrollToBottom("Box") } }} className='ml-4 text-xl' /></div></div>
    </div >
  );
}

export default App;
