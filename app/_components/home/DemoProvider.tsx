"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { DemoModal } from "./DemoModal";
import { VideoModal } from "./VideoModal";

type DemoContextValue = {
  openDemo: () => void;
  openVideo: (name: string) => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within a DemoProvider");
  return ctx;
}

export function useOptionalDemo() {
  return useContext(DemoContext);
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const [video, setVideo] = useState("");

  return (
    <DemoContext.Provider
      value={{
        openDemo: () => setDemoOpen(true),
        openVideo: (name) => setVideo(name),
      }}
    >
      {children}
      {demoOpen && <DemoModal close={() => setDemoOpen(false)} />}
      {video && <VideoModal video={video} close={() => setVideo("")} />}
    </DemoContext.Provider>
  );
}
