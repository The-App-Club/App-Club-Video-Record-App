import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {Layout} from '../../layouts/default';
import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import {createVideoRecord} from '../../plugins/videoRecord';

const HomePage = () => {
  useEffect(() => {
    createVideoRecord();
    return () => {};
  }, []);

  return (
    <section className="mt-12 w-full">
      <Link to={'/about'} className={`hover:underline`}>
        Go to about
      </Link>
      <div className="container">
        <div className="screen">
          <h2>カメラの映像</h2>
          <video
            playsInline
            className="js-video-record"
            data-video-player=".js-video-player"
            data-record-start=".js-record-start"
            data-record-stop=".js-record-stop"
            data-play-start=".js-play-start"
            data-download=".js-download"
          ></video>
          <div>
            <button
              className={cx(
                `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                `hover:cursor-pointer hover:bg-blue-800`,
                `js-record-start`
              )}
            >
              録画開始
            </button>
            <button
              className={cx(
                `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                `hover:cursor-pointer hover:bg-blue-800`,
                `js-record-stop`
              )}
            >
              録画停止
            </button>
            <button
              className={cx(
                `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                `hover:cursor-pointer hover:bg-blue-800`,
                `js-play-start`
              )}
            >
              動画の再生
            </button>
            <button
              className={cx(
                `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                `hover:cursor-pointer hover:bg-blue-800`,
                `js-download`
              )}
            >
              動画のダウンロード
            </button>
          </div>
        </div>

        <div className="screen">
          <h2>録画した動画の再生</h2>
          <video className="js-video-player" playsInline></video>
        </div>
      </div>
    </section>
  );
};

export {HomePage};
