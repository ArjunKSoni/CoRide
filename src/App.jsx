import './App.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEdit, BiDotsVerticalRounded, BiSend } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
import Axios from "axios"

function App() {
  const [chat, setchat] = useState([])
  const [data, setdata] = useState([])
  const [newchat, setnewchat] = useState("")

  const dataChat = async () => {
    try {
      const apicall = await fetch(`https://3.111.128.67/assignment/chat?page=0`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      })
      let data = await apicall.json().then((data) => { setdata(data); setchat(data.chats) })
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dataChat();
    console.log(data.chats);
    scrollToBottom("Box")
  }, [])

  const infocus = () => {
    document.getElementById("input").focus()
  }
  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
  }
  return (
    <div style={{ backgroundColor: "#f3efea", height: "100vh" }} className="main">
      <div style={{ height: "19vh" }} className=' sticky w-screen'>
        <div className='chat-heading p-3'>
          <div className='flex head-text items-center justify-between'><BsArrowLeftShort className='text-3xl mt-1' />{data.name}</div>
          <BiEdit className='text-xl mt-1 text-gray-600' />
        </div>
        <div className='flex items-center justify-between pb-3 px-3'>
          <div className='flex items-center justify-between gap-3'><div style={{ height: "40px", width: "40px" }} className='rounded-full overflow-hidden'><div className='flex items-end justify-center'><img src="user1.jpg" width={"20px"} height={"20px"} alt="" /><img src="user2.jpg" width={"20px"} height={"20px"} alt="" /></div><div className='flex items-start justify-center'><img src="user3.jpg" width={"20px"} height={"20px"} alt="" /><img src="user4.jpg" width={"20px"} height={"20px"} alt="" /></div></div><div><div className='flex items-start justify-start gap-1'>From <h2 className='font-bold'>{data.from}</h2></div><div className='flex items-center justify-start gap-1'>To <h2 className='font-bold'>{data.to}</h2></div></div></div>
          <BiDotsVerticalRounded className='text-2xl mt-1' />
        </div>
      </div>
      <div style={{ height: "66vh", marginBottom: "12px" }} id='Box' className="chat-container">
        <div className='w-full'>
          {chat?.map((e, i) => {
            return (e.sender.image !== "user" ?
              <div key={i} className='p-2 flex gap-1'>
                <div className='rounded-full overflow-hidden' style={{ width: "20px", height: "20px" }}>
                  <img src={e.sender.image} width={"20px"} height={"20px"} alt="" />
                </div>
                <div style={{ maxWidth: "80%", borderRadius: "10px 10px 10px 0px" }} className='bg-white p-2'>
                  {e.message}
                </div>
              </div> :
              <div key={i} className='p-2 flex gap-1 justify-end'>
                <div style={{ maxWidth: "80%", borderRadius: "10px 10px 0px 10px" }} className='bg-blue-500 text-white p-2'>
                  {e.message}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ height: "15vh" }} className='absolute p-4 flex items-center justify-center bottom-0 left-0  w-screen z-20'>
        <div style={{ width: "100%" }} className='bg-white input flex items-center justify-center py-1 rounded px-2'>
          <input id='input' value={newchat} onChange={(e) => { setnewchat(e.target.value) }} type="text" placeholder="Reply to @Rohit Yadav" />
          <GrAttachment className='ml-2 text-xl' />
          <BiSend onClick={(e) => { if (newchat !== "") { setchat(chat.concat({ message: newchat, sender: { image: "user" } })); setnewchat(""); scrollToBottom("Box"); infocus() } }} className='ml-4 text-xl' />
        </div>
      </div>
    </div >
  );
}

export default App;
