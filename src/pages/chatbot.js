import { useEffect, useCallback, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";
import Speech from 'react-text-to-speech';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import MicNoneIcon from '@mui/icons-material/MicNone';
import { Scrollbar } from 'src/components/scrollbar';
import { useMoralis } from 'react-moralis';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const Chatbot = () => {
  const [isLoading2, setLoading2] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recorderControls = useAudioRecorder()
  const addAudioElement = async (blob) => {
    const url = URL.createObjectURL(blob);
    
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    let res= await Moralis.Cloud.run(
      "chatgptVoiceToText",
      { audioUrl:url}
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
  async function handleChatVoice() {

    // Integración con la API de OpenAI para transcribir audio
    // Asegúrate de reemplazar 'YOUR_OPENAI_API_KEY' con tu clave de API real
   

    setHistory([...newHistory, { role: "assistant", content: transcriptionResult }]);
  }

  const [isLoading, setLoading] = useState(false);

  async function handleStart() {
    setLoading(true);
  }

  async function handleStop() {
    setLoading(false);
    console.log(transcript);
    let newHistory = [...history, { role: "user", content: transcript }];

    let res = await Moralis.Cloud.run(
      "chatgpt",
      { history: newHistory, userResponse: transcript }
    );

    console.log(JSON.stringify(res));

    setHistory([...newHistory, { role: "assistant", content: res }]);
  }

  const handleChange = useCallback(
    async (event) => {
      setValues((prevState) => ({
        ...prevState,
        ["userResponse"]: event
      }));
    });

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
            }} onSend={handleChat} onChange={handleChange} placeholder="Type message here" />
          <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
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
