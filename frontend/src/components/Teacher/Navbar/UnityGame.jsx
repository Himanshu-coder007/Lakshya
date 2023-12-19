import React from 'react';
import { Unity } from 'react-unity-webgl';

function UnityGame() {
  return (
    <div>
      <h1>Your React App</h1>
      <Unity src="https://tarang1605.itch.io/wordle/Build/UnityLoader.js" />
    </div>
  );
}

export default UnityGame;
