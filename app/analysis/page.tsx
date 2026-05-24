import UploadBox from "@/components/analysis/UploadBox";

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl">
      <h1 className="text-5xl font-bold text-center mb-4">
  动作分析
</h1>

<p className="text-gray-400 text-center mb-10">
  上传姿态或动作视频，开始 AI 智能分析
</p>

        <UploadBox />
      </div>
    </main>
  );
}