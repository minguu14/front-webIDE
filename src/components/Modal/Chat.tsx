import React, { useState } from "react";
import sendButton from "../../img/sendButton.png";

export default function Chat() {
  const [chatValue, setCahtValue] = useState("");
  return (
    <div>
      <div className=" absolute top-11 right-2 w-[30%] h-4/5 rounded-2xl bg-gradient-to-r to-cyan-500 from-blue-500 z-50 ">
        <p>{chatValue}</p>
        <div className="flex absolute bottom-0 w-full h-[10%]  rounded-b-2xl bg-white ">
          <textarea
            rows={2}
            className="resize-none text-black w-full mr-20 rounded-b-2xl focus:outline-none focus:border-2 inline-block  p-2"
            onChange={(e) => setCahtValue(e.target.value)}
          ></textarea>
          <div className="relative">
            <button
              type="submit"
              className="absolute items-center bottom-3 right-3 w-14"
            >
              <img src={sendButton} alt="sendButton" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
