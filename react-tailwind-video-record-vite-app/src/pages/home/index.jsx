import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {useEffect} from 'react';
import {Layout} from '../../layouts/default';
import {createVideoRecord} from '../../plugins/videoRecord';

const HomePage = () => {
  useEffect(() => {
    createVideoRecord();
  }, []);

  return (
    <Layout>
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative pt-12 scrollbar-none overflow-hidden overflow-y-auto`,
          css`
            min-height: 100vh;
          `
        )}
      >
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
            <div
              className={cx(
                `pt-2 flex items-center w-full gap-2`,
                css`
                  @media (max-width: 768px) {
                    flex-direction: column;
                  }
                `
              )}
            >
              <button
                className={cx(
                  `js-record-start`,
                  `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                  `hover:cursor-pointer hover:bg-blue-800`
                )}
              >
                録画開始
              </button>
              <button
                className={cx(
                  `
              js-record-stop
              `,
                  `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                  `hover:cursor-pointer hover:bg-blue-800`
                )}
              >
                録画停止
              </button>
              <button
                className={cx(
                  `js-play-start`,
                  `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                  `hover:cursor-pointer hover:bg-blue-800`
                )}
              >
                動画の再生
              </button>
              <button
                className={cx(
                  `js-download`,
                  `py-2 px-6 bg-blue-600 text-white rounded-lg`,
                  `hover:cursor-pointer hover:bg-blue-800`
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
    </Layout>
  );
};

export {HomePage};
