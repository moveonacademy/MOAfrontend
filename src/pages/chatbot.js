/* eslint-disable complexity */
/* eslint-disable arrow-spacing */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */

/* eslint-disable no-unused-expressions */

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
import {   useEffect, useCallback,useState} from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, CardActions,CardContent,Button,TextField, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import Speech from 'react-text-to-speech';

import OpenAI from 'openai';
const openai = new OpenAI({ apiKey:"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", dangerouslyAllowBrowser: true })

const Chatbot = () => {
  const startBtn = <button className='my-start-btn'>Start Speech</button>
  const pauseBtn = <button className='my-pause-btn'>Pause Speech</button>
  const stopBtn = <button className='my-stop-btn'>Stop Speech</button>
  const [history, setHistory] = useState([
    {
      role: "assistant",
      content: "Bienvenido al chatbot de Move on Academy. Sientete libre de chatear con MOA",
    },
  ]);
  
useEffect(()=>{
  // chatgpt()
},[])
 async function chatgpt() { 
  let newHistory = [...history, { role: "assistant", content: `       `}];
   const stream = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: newHistory,
  stream: true,
});
let mess=""
for await (const part of stream) {
        if(part.choices[0]?.delta?.content){
          mess= mess+part.choices[0]?.delta?.content

        }

}

setHistory([...newHistory, {role:"assistant",content:mess}])

return 
}
const [values, setValues] = useState({
  userResponse:"",
});
async function handleChat(){
  
  let newHistory = [...history, { role: "assistant", content: values.userResponse}];
   const stream = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: newHistory,
  stream: true,
});
let mess=""
for await (const part of stream) {
        if(part.choices[0]?.delta?.content){
          mess= mess+part.choices[0]?.delta?.content

        }

}
console.log(mess)

setHistory([...newHistory, {role:"assistant",content:mess}])

}
const handleChange = useCallback(
  async (event) => {
   setValues((prevState) => ({
     ...prevState,
     ["userResponse"]: event
   }))});
  return (<div style={{ position: "relative", height: "100%" }}>
  <MainContainer>
    <ChatContainer>
      <MessageList>
      {history.map((message, index) => (
        
        <div 
        key={index}> <Message
                key={index}
                name="userResponse"

                model={{
                  message: message.content,
                  sender: message.role,
                }}
              /><Speech 
              text={message.content}
              pitch={1.5}
              rate={1}
              volume={1}
              startBtn={startBtn}
              pauseBtn={pauseBtn}
              stopBtn={stopBtn}
              props={{ title: 'React Text-To-Speech Component' }}
              onError={() => console.error('Browser not supported!')}
          /></div>
            ))}
      </MessageList>
      <MessageInput onSend={handleChat} onChange={handleChange} placeholder="Type message here" />
    </ChatContainer>
  </MainContainer>
</div>
  );
}

Chatbot.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Chatbot;

