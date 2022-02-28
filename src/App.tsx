import { useState } from "react";
import { Tweet } from "./components/Tweet"
import { AppRoutes } from "./Routes"
import './App.css';

function App() {
  return (
    <AppRoutes />
  );

  // const [tweets, setTweets] = useState<string[]>([
  //   "Tweet 1",
  //   "Tweet 2",
  //   "Tweet 3",
  //   "Tweet 4"
  // ])

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5'])
  // }
  
  // return (
  //   <div>
  //     {tweets.map(tweet => {
  //       return <Tweet text={tweet}/>
  //     })}

  //     <button 
  //       onClick={createTweet}
  //       style={{
  //         backgroundColor: '#8257e6',
  //         border: 1,
  //         padding: '60px 12px',
  //         color: '#FFF',
  //       }}
  //     >
  //       Adicionar Tweet</button>
  //   </div>
  // );
}

export default App
