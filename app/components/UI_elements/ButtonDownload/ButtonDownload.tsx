import React, { useState, useEffect, ReactNode } from "react";

interface ButtonDownloadProps {
  href: string;
  name: string;
  text: string;
}

export default function ButtonDownload({ href, name, text }: ButtonDownloadProps) {
  return (
    <button>
      <a href={href} download={name}>
        {text}
      </a>
    </button>
  );
}
