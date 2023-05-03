import React from 'react';
import {Unity, useUnityContext } from "react-unity-webgl";

function WebGL() {
  const { unityProvider, loadingProgression, isLoaded} = useUnityContext({
    loaderUrl: "/Build/UnityLoader.js",
    dataUrl: "/Build/TestProject.data.unityweb",
    frameworkUrl: "/Build/TestProject.asm.framework.unityweb",
    codeUrl: "/Build/TestProject.asm.code.unityweb",
  });

  return (
    <>
    {!isLoaded && (
      <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
    )}
    <Unity
      unityProvider={unityProvider}
      style={{ visibility: isLoaded ? "visible" : "hidden" }}
    />
    </>
  );
};

export default WebGL;

