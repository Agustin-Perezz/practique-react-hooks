import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer: React.FC<Props> = ({ src, isPlaying }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  // in this way we can acces to the node element after the component is rendered and the dom is mounted
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
    // this effect will be triggered only if isPlaying is different from the previous render value
  }, [isPlaying]);

  return (
    <video
      data-cy="video-player"
      className="w-56"
      ref={ref}
      src={src}
      loop
      playsInline
    >
      <track kind="captions" />
    </video>
  );
};
