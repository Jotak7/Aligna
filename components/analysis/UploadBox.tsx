"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [fileName, setFileName] = useState("");

  const router = useRouter();

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);

      setTimeout(() => {
        router.push("/loading");
      }, 2000);
    }
  };

  return (
    <div className="border border-gray-700 rounded-2xl p-10 bg-neutral-900">
      <input
        type="file"
        accept="video/*,image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            上传训练视频或图片
          </h2>

          <p className="text-gray-400 text-sm">
            支持 MP4、MOV、PNG、JPG 格式
          </p>
        </div>

        <button
          onClick={handleChooseFile}
          className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          选择文件
        </button>

        {fileName && (
          <div className="text-center">
            <p className="text-sm text-green-400">
              已选择：{fileName}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              AI 正在分析动作表现...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}