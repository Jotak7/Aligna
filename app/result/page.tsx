export default function ResultPage() {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-16">
  
        <div className="max-w-5xl mx-auto">
  
          {/* 标题区域 */}
          <div className="mb-14">
  
            <h1 className="text-5xl font-bold mb-4">
              AI 动作分析结果
            </h1>
  
            <p className="text-gray-400 text-lg">
              基于动作轨迹、关节角度与身体协调性生成
            </p>
  
          </div>
  
          {/* 总评分 */}
          <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-10 mb-10">
  
            <div className="flex items-center justify-between">
  
              <div>
                <p className="text-gray-400 mb-2">
                  综合动作评分
                </p>
  
                <h2 className="text-6xl font-bold">
                  87
                </h2>
              </div>
  
              <div className="text-right">
                <p className="text-green-400 text-xl font-semibold">
                  优秀
                </p>
  
                <p className="text-gray-500 mt-2">
                  动作完成度较高
                </p>
              </div>
  
            </div>
  
          </div>
  
          {/* 数据卡片 */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
  
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400 mb-3">
                动作稳定性
              </p>
  
              <h3 className="text-4xl font-bold">
                91
              </h3>
            </div>
  
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400 mb-3">
                爆发力评分
              </p>
  
              <h3 className="text-4xl font-bold">
                84
              </h3>
            </div>
  
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400 mb-3">
                身体协调性
              </p>
  
              <h3 className="text-4xl font-bold">
                89
              </h3>
            </div>
  
          </div>
  
          {/* AI 问题检测 */}
          <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-8 mb-10">
  
            <h2 className="text-3xl font-bold mb-6">
              AI 检测到的问题
            </h2>
  
            <div className="space-y-4">
  
              <div className="border border-red-500/30 bg-red-500/10 rounded-xl p-5">
                <h3 className="font-semibold text-red-400 mb-2">
                  落地稳定性不足
                </h3>
  
                <p className="text-gray-300 leading-7">
                  在动作结束阶段，膝盖与脚踝存在轻微晃动，
                  可能影响整体动作稳定性。
                </p>
              </div>
  
              <div className="border border-yellow-500/30 bg-yellow-500/10 rounded-xl p-5">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  手臂摆动幅度偏小
                </h3>
  
                <p className="text-gray-300 leading-7">
                  手臂驱动力不足，
                  会影响动作爆发力输出。
                </p>
              </div>
  
            </div>
  
          </div>
  
          {/* AI 改进建议 */}
          <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-8">
  
            <h2 className="text-3xl font-bold mb-6">
              AI 改进建议
            </h2>
  
            <div className="space-y-5 text-gray-300 leading-8">
  
              <p>
                · 增强核心稳定训练，提高动作控制能力
              </p>
  
              <p>
                · 增加下肢爆发训练，提高启动速度
              </p>
  
              <p>
                · 优化手臂摆动节奏，提高整体协调性
              </p>
  
              <p>
                · 建议每周进行 2~3 次动作复盘训练
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </main>
    );
  }