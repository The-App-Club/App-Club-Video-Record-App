import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
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
    <section className="mt-12 w-full">
      <div>
        <p>{status}</p>
        {recordingState !== 'recording' ? (
          recordingState === 'idle' ? (
            <button
              className={cx(
                `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                `hover:cursor-pointer hover:bg-blue-800`
              )}
              onClick={() => {
                startRecording();
                setRecordingState('recording');
              }}
            >
              Start Recording
            </button>
          ) : (
            <button
              className={cx(
                `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                `hover:cursor-pointer hover:bg-blue-800`
              )}
              onClick={() => {
                setRecordingState('idle');
              }}
            >
              reshoot
            </button>
          )
        ) : (
          <button
            className={cx(
              `py-2 px-6 bg-blue-600 text-white rounded-lg`,
              `hover:cursor-pointer hover:bg-blue-800`
            )}
            onClick={async () => {
              stopRecording();
              setRecordingState('recorded');
              // https://stackoverflow.com/a/71885435
              const recordedBlob = await fetch(mediaBlobUrl).then((r) =>
                r.blob()
              );
              console.log(recordedBlob);
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
    </section>
  );
};

export {HomePage};
