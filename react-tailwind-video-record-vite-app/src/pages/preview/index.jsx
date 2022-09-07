import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';
import {useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Layout} from '../../layouts/default';

const PreviewPage = ({gutter = `1rem`}) => {
  const location = useLocation();
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
        <h2 className="text-3xl flex items-center justify-center">
          PreviewPage
        </h2>
        <div style={{width: '100%', maxWidth: 480, height: 640}}>
          <video
            src={window.URL.createObjectURL(location.state.videoBlob)}
            width={480}
            height={640}
            autoPlay
            loop
            controls
          />
        </div>
      </section>
    </Layout>
  );
};

export {PreviewPage};
