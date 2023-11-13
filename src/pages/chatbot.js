import { useEffect, useCallback, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";
import Speech from 'react-text-to-speech';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { useMoralis } from 'react-moralis';
import { useWhisper } from '@chengsokdara/use-whisper'

const Chatbot = () => {
  const [isLoading2, setLoading2] = useState(false);
  const {
    recording,
    speaking,
    transcribing,
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: "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", // YOUR_OPEN_AI_TOKEN
  })
  const addAudioElement = async (blob) => {
    const url = URL.createObjectURL(blob);
    
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    let res= await Moralis.Cloud.run(
      "chatgptVoiceToText",
      { audioBlob:"https://bafkreiha3mmjqrknll4rbwfmshjpj63vkctx43sohfz55w3e25v2zkw7i4.ipfs.nftstorage.link/"}
    );
    console.log(JSON.stringify(res))

    document.body.appendChild(audio);
  };

  async function handleSpeaker() {
    setLoading2(true);
  }

  async function handleStopSpeaker() {
    setLoading2(false);
  }

  const startBtn = !isLoading2 ? <VolumeMuteIcon onClick={handleSpeaker} /> : null;
  const pauseBtn = isLoading2 ? <VolumeUpIcon onClick={handleStopSpeaker} /> : null;
  const stopBtn = null;

  const [history, setHistory] = useState([
    {
      role: "assistant",
      content: "Bienvenido al chatbot de Move on Academy. Siéntete libre de chatear con MOA",
    },
  ]);

  const { Moralis } = useMoralis();

  const [values, setValues] = useState({
    userResponse: "",
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
  const [isLoading, setLoading] = useState(false);

  async function handleStart() {
    setLoading(true);
    startRecording()
    setValues({userResponse:""})
  }

  async function handleStop() {
    setLoading(false);
    stopRecording()
     }

  const handleChange = useCallback(
    async (event) => {
      setValues((prevState) => ({
        ...prevState,
        ["userResponse"]: event
      }));
    });
useEffect(()=>{

  if(transcript.text){
    setValues((prevState) => ({
      ...prevState,
      ["userResponse"]:transcript.text
    }));
  }
}
,[transcript.text])
  return (
    <div style={{ position: "relative", height: "90%" }}>
       
      <MainContainer style={{ marginTop: 20 }}>
       <ChatContainer>
          <MessageList>
            {history.map((message, index) => (
              <div key={index}>
                <Message
                  key={index}
                  name="userResponse"
                  model={{
                    sentTime: "just now",
                    message: message.role + ": " + message.content,
                    sender: message.role,
                  }}
                />
                <Speech
                  text={message.content}
                  pitch={1.5}
                  rate={1}
                  volume={1}
                  startBtn={startBtn}
                  pauseBtn={pauseBtn}
                  stopBtn={stopBtn}
                  props={{ title: 'React Text-To-Speech Component' }}
                  onError={() => console.error('Browser not supported!')}
                />
              </div>
            ))}
          </MessageList>
          <div as={MessageInput} style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            marginBottom: 0,
          }}>
            <MessageInput style={{
              flexGrow: 1,
              borderTop: 0,
              flexShrink: "initial"
            }}

            sendDisabled={false} onSend={handleChat} value={values.userResponse} onChange={handleChange} placeholder="Type message here" />
            <Button  onClick={isLoading?handleStop:handleStart} variant="contained">{ isLoading?    <MicIcon/>    
 :<MicNoneIcon/>}</Button>
          </div>
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
