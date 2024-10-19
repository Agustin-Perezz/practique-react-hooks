import { useState } from 'react';

import { VideoPlayer } from './components/VideoPlayer';

const URL_VIDEO =
  'https:/interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

export const UseEffectExample = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex justify-center items-center mt-2">
      <button
        data-cy="play-pause-button"
        className="p-2 mr-2 h-14 bg-slate-700 rounded-md hover:bg-slate-500"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer isPlaying={isPlaying} src={URL_VIDEO} />
    </div>
  );
};
