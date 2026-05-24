import UploadBox from "@/components/analysis/UploadBox";

export default function AnalyzePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-4">
          AI 动作分析
        </h1>

        <p className="text-gray-400 text-center mb-10">
          上传你的训练视频，系统将自动分析动作表现。
        </p>

        <UploadBox />
      </div>
    </main>
  );
}