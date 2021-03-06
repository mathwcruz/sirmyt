import { useCallback, useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";

import { Loading } from "components/Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = useCallback(async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");

    onScreenshotTook(base64Image);
    setIsTakingScreenshot(false);
  }, [onScreenshotTook]);

  if (!!screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-[4px] border-transparent flex justify-end items-end text-zinc-400 dark:text-gray-300 dark:hover:text-zinc-100 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="p-2 bg-primary-100 dark:bg-dark-background rounded-[4px] border-transparent hover:bg-primary-300 dark:hover:bg-dark-background transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-100 focus:ring-primary-100"
      type="button"
      onClick={() => !isTakingScreenshot && handleTakeScreenshot()}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 dark:text-gray-300" />
      )}
    </button>
  );
};
