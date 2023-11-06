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
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import Speech from 'react-text-to-speech';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import MicNoneIcon from '@mui/icons-material/MicNone';
import OpenAI from 'openai';
import { Scrollbar } from 'src/components/scrollbar';
import {  useMoralis } from 'react-moralis';

const Chatbot = () => {
  const [isLoading2,setLoading2]=useState(false)

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  
  async function handleSpeaker(){
    setLoading2(true)
  }
  async function handleStopSpeaker(){
    setLoading2(false)

  }
  const startBtn = !isLoading2?<VolumeMuteIcon onClick={handleSpeaker}/>:null
  const pauseBtn = isLoading2?<VolumeUpIcon onClick={handleStopSpeaker}/>:null
  const stopBtn =  null
  const [history, setHistory] = useState([
    {
      role: "assistant",
      content: "Bienvenido al chatbot de Move on Academy. Sientete libre de chatear con MOA",
    },
  ]);
  
 async function chatgpt() { 
return 
}

const {Moralis}=useMoralis()
const [values, setValues] = useState({
  userResponse:"",
});
async function handleChat(){
  let newHistory = [...history, { role: "user", content: values.userResponse}];

  let res=await Moralis.Cloud.run(
    "chatgpt",
    { history:newHistory, userResponse:values.userResponse}
  );
 
console.log(JSON.stringify(res))
setHistory([...newHistory, {role:"assistant",content:res}])

}

const [isLoading,setLoading]=useState(false)

async function handleStart(){
  SpeechRecognition.startListening()
  setLoading(true)


}
async function handleStop(){
  SpeechRecognition.stopListening()
  setLoading(false)
  console.log(transcript)
  let newHistory = [...history, { role: "user", content: transcript}];

  let res=await Moralis.Cloud.run(
    "chatgpt",
    { history:newHistory, userResponse:transcript}
  );
  
  console.log(JSON.stringify(res))

setHistory([...newHistory, {role:"assistant",content:res}])

}
const handleChange = useCallback(
  async (event) => {
   setValues((prevState) => ({
     ...prevState,
     ["userResponse"]: event
   }))});
  return (<div style={{ position: "relative", height: "90%" }}>
   

   <Button   variant="contained">{ isLoading?    <MicNoneIcon  onClick={handleStop}/>    
 :<MicIcon   onClick={handleStart} />}</Button>

  <MainContainer style={{marginTop:20}}>
    <ChatContainer>
    
      <MessageList>
      
      {history.map((message, index) => (
        
        <div 
        key={index}>
           <Message
                key={index}
                name="userResponse"

                model={{
                  sentTime: "just now",
                  message: message.role+": "+message.content,
                  sender: message.role,
                }}
              /><Speech 
              text={message.content}
              pitch={1.5}
              rate={1}
              volume={1}
              r
              startBtn={startBtn}
              pauseBtn={pauseBtn}
              stopBtn={stopBtn}
              props={{ title: 'React Text-To-Speech Component' }}
              onError={() => console.error('Browser not supported!')}
          /></div>
            ))}
            
      </MessageList>
     
      <MessageInput   onSend={handleChat} onChange={handleChange} placeholder="Type message here" />
     
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

