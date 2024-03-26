import React, { useState, useEffect } from "react";
import sendButton from "../../img/sendButton.png";
import { Client, IMessage } from "@stomp/stompjs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SockJS from "sockjs-client";
interface ChatMessageReqeust {
  from: string;
  text: string;
  roomId: number;
}
interface ChatMessageResponse {
  id: number;
  content: string;
  writer: string;
}

export default function Chat() {
  const [chatValue, setCahtValue] = useState("");
  const { roomId } = useParams();
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [writer, setWriter] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");

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
