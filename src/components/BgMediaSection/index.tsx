import React from "react";
import clsx from "clsx";

export type BgMediaSectionProps = {
  children: React.ReactNode;
  media?: string;
  blur?: boolean;
  overlay?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const VIDEO_REGEX = /\.(mp4|webm|ogg)$/i;
const IMAGE_REGEX = /\.(jpe?g|png|webp|gif|svg)$/i;

const BgMediaSection: React.FC<BgMediaSectionProps> = ({
  children,
  media = "",
  blur = true,
  overlay = "bg-black/60",
  className = "",
  ...rest
}) => {
  const base = clsx(
    "relative isolate flex items-center justify-center min-h-[600px] lg:h-[calc(100vh-7.5rem)] h-[calc(100vh-4rem)]",
    className
  );

  const isVideo = VIDEO_REGEX.test(media);
  const isImage = IMAGE_REGEX.test(media);

  const mediaClasses = clsx(
    "absolute inset-0 -z-10 h-full w-full object-cover",
    blur && "blur-[3px]"
  );

  return (
    <section className={base} {...rest}>
      {isVideo && (
        <video
          src={media}
          autoPlay
          loop
          muted
          playsInline
          className={mediaClasses}
        />
      )}

      {isImage && (
        <img
          src={media}
          alt=""
          aria-hidden
          loading="lazy"
          className={mediaClasses}
        />
      )}

      {overlay && <span className={clsx("absolute inset-0 -z-10", overlay)} />}

      {children}
    </section>
  );
};

export default BgMediaSection;
