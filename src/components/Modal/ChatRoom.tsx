import React, { useEffect, useState } from "react";

import SockJS from "sockjs-client";
// import * as StompJS from "@stomp/stompjs";
import { Stomp } from "@stomp/stompjs";
import { createRoom } from "../../api/axios";
import { userRooms } from "../../api/axios";
import { joinRoomByName } from "../../api/axios";
import { chatHistory } from "../../api/axios";
import { CompatClient } from "@stomp/stompjs";

interface MessageType {
  type: string;
  roomId: string;
  sender: string;
  message: string;
  timestamp: string;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<MessageType[]>([] as MessageType[]);
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);
  const [roomName, setRoomName] = useState("");
  const [userid, setUserid] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const socket = new SockJS("http://popos.iptime.org:8080/ws/");
    const client = Stomp.over(socket);
    // const name = prompt("send your name");
    // console.log(name);
    setNickname(userid);
    client.connect({}, () => {
      console.log("Connected to WebSocket");
      client.subscribe(`/topic/${roomId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    });
    setStompClient(client);

    // 소켓이 연결되었을 때 실행되는 코드
    socket.onopen = () => {
      console.log("WebSocket connected");
    };
    // 소켓이 닫혔을 때 실행되는 코드
    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      // 컴포넌트가 언마운트될 때 실행되는 코드
      socket.close(); // 소켓 연결 닫기
      if (client) {
        client.disconnect(); // Stomp 클라이언트 연결 종료
      }
    };
  }, [roomId]); // roomId가 변경될 때마다 실행되도록 함

  const onClick = async () => {
    const result = await createRoom(roomName, userid);
    console.log(result);
  };

  const showRoooms = async () => {
    const resultRooms = await userRooms(userid);
    console.log(resultRooms);
    setRooms(resultRooms);
  };

  const joinRoom = async () => {
    const resultJoin = await joinRoomByName(roomName, userid);
    console.log(resultJoin.roomId);
    setRoomId(resultJoin.roomId);
  };
  console.log(roomId);

  const chatHistories = async () => {
    const resultChatHistories = await chatHistory(roomId);
    console.log(resultChatHistories);
    setMessages(resultChatHistories);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();

    if (stompClient) {
      const chatMessage = {
        type: "TALK",
        roomId: roomId,
        sender: userid,
        message: message,
      };

      stompClient.send(
        `/app/chat.sendMessage/${roomId}`,
        {},
        JSON.stringify(chatMessage)
      );
    } else {
      console.error("Stomp client is not initialized.");
    }
    setMessage("");
  };
  console.log(messages[0]);
  return (
    <div>
      냠냠
      <form>
        <h1>Chat Application</h1>
        {/* <div>
          {showRoooms.map((room, index) => {
            <div key={index}>{showRoooms[index].name}</div>;
          })}
        </div> */}
        <div className="chatBox">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.sender === userid ? "chat_left" : "chat_right"
              }`}
            >
              <strong>{msg.sender}: </strong>
              {msg.message}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="ring-1 ring-red-500"
        />
        <button onClick={sendMessage}>send</button>
      </form>
      <input
        type="text"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
        className="ring-1 ring-red-500"
      />
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className="ring-1 ring-red-500"
      />
      <button onClick={onClick}>방만들기버튼</button>
      <div>
        <button onClick={showRoooms}>방보기</button>
      </div>
      <div>
        <button onClick={joinRoom}>방들어가기</button>
      </div>
      <div>
        <button onClick={chatHistories}>history 불러오기</button>
      </div>
    </div>
  );
};

export default ChatRoom;
