import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react'
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

function Input() {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false)
    const filePickerRef =useRef(null);

    const addImageToPost = () => {};

    // const addEmoji = (e:any) => {
    //     let sym = e.unified.split("-");
    //     let codesArray:any = [];
    //     sym.forEach((el:string) => codesArray.push("0x" + el));
    //     let emoji = String.fromCodePoint(...codesArray);
    //     setInput(input + emoji);
    // }

  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll:visible`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYKvPdloxi57q6s5IOVIBdARhkkvM4qPfOg&usqp=CAU"
    alt="" className="h-11 w-11 rounded-full cursor-pointer"/>
    <div className='w-full divide-y divide-gray-700'>
        <div className={``}>
            <textarea 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                rows={2}
                placeholder="What's happening?"
                className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]'
            />
            {selectedFile && (
                <div className='relative'>
                    <div className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full items-center justify-center
                    top-1 left-1 cursor-pointer' onClick={() => setSelectedFile(null)}>
                        <XIcon className='text-white h-5'/>
                    </div>
                    <img src={selectedFile} alt="" className='rounded-2xl max-h-80 object-contain'/>
                </div>
            )}
        </div>
            <div className='flex items-center justify-between pt-2.5'>
                <div className='flex items-center'>
                    <div className='icon' onClick={() => filePickerRef.current.click()}>
                        <PhotographIcon className='h-[22px] text-[#1d9bf0]'/>
                        <input type='file' hidden onChange={addImageToPost} ref={filePickerRef} />
                    </div>
                    <div className='icon rotate-90'>
                        <ChartBarIcon className='text-[#1d9bf0] h-[22px]'/>
                    </div>
                    <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
                        <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]'/>
                    </div>
                    <div className='icon'>
                        <CalendarIcon className='text-[#1d9bf0] h-[22px]'/>
                    </div>
                    {/* {showEmojis && (
                        <Picker
                            onSelect={addEmoji}
                            style={{
                                position: "absolute",
                                marginTop: "465px",
                                marginLeft: -40,
                                maxWidth: "320px",
                                borderRadius: "20px",
                            }}
                            theme='dark'/>
                    )} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Input