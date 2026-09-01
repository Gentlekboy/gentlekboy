"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

export default function ProjectImage({
  image,
  images,
  alt,
}: {
  image?: string;
  images?: string[];
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const clickable = !!images && images.length > 0;
  const src = image ?? images?.[0];

  if (!src) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => clickable && setOpen(true)}
        aria-label={clickable ? `View ${alt} screenshots` : alt}
        className={`group/image relative block h-full w-full ${
          clickable ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover:scale-105"
        />
        {clickable && (
          <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg-elevated/80 text-text-secondary opacity-0 backdrop-blur-sm transition-opacity duration-[var(--duration-fast)] group-hover/image:opacity-100">
            <Expand size={14} strokeWidth={1.75} />
          </span>
        )}
      </button>

      {clickable && (
        <ImageLightbox
          images={images!}
          alt={alt}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
