import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {useEffect} from 'react';
import {Layout} from '../../layouts/default';
import {useReactMediaRecorder} from 'react-media-recorder';
import {useEffect, useRef, useState} from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {facingMode: 'user'};
const w = 300,
  h = 300;

const HomePage = () => {
  const videoRef = useRef(null);
  const webcamRef = useRef(null);
  const [recordingState, setRecordingState] = useState('idle'); // 'idle' | 'recording' | 'recorded'

  const {status, startRecording, stopRecording, mediaBlobUrl, previewStream} =
    useReactMediaRecorder({video: true});

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{status}</p>
          {recordingState !== 'recording' ? (
            recordingState === 'idle' ? (
              <button
                onClick={() => {
                  startRecording();
                  setRecordingState('recording');
                }}
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={() => {
                  setRecordingState('idle');
                }}
              >
                reshoot
              </button>
            )
          ) : (
            <button
              onClick={() => {
                stopRecording();
                setRecordingState('recorded');
              }}
            >
              Stop Recording
            </button>
          )}
          <br />
          {
            // idle状態はreact-media-recorderのプレビュー画面が表示されないため、WebCamという別ライブラリを使用した。
            recordingState === 'idle' && (
              <Webcam
                audio={false}
                ref={webcamRef}
                videoConstraints={videoConstraints}
                width={w}
                height={h}
              />
            )
          }
          {
            // 録画中はWebCamが動作しなくなるため、react-media-recorderのプレビューを動作させる
            recordingState === 'recording' && previewStream && (
              // playsInlineがないと、録画中の画面プレビューが自動で再生されない
              <video
                ref={videoRef}
                width={w}
                height={h}
                controls
                playsInline
                autoPlay
              />
            )
          }
          {
            // 録画完了後は、録画したものを表示する
            recordingState === 'recorded' && (
              <video
                src={mediaBlobUrl}
                controls
                autoPlay
                playsInline
                width={w}
                height={h}
              />
            )
          }
        </div>
      </header>
    </div>
  );
};

export {HomePage};
