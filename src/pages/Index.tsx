
import { useState } from "react";
import { AgentCard } from "@/components/AgentCard";

const Index = () => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

  const agents = [
    {
      id: 1,
      title: "睡前故事",
      image: "/placeholder.svg",
      capabilities: ["沉浸式演绎", "问答互动", "个性化", "故事推荐", "声音个性化", "学习进度跟踪"],
      stories: ["童话故事", "虚构类如科幻，太空，生物起源"],
    },
    {
      id: 2,
      title: "睡前故事",
      image: "/placeholder.svg", 
      capabilities: ["术语的解析", "知识点的拆解与问答", "交互式的回答", "核心内容的总结"],
      stories: ["我可以讲三国演义", "明清史", "唐宋史"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-in">
          <h1 className="mb-12 text-center text-3xl font-medium text-neutral-900 sm:text-4xl">
            选择你的有声书 agent
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                title={agent.title}
                image={agent.image}
                capabilities={agent.capabilities}
                stories={agent.stories}
                isSelected={selectedAgent === agent.id}
                onSelect={() => setSelectedAgent(agent.id)}
              />
            ))}
          </div>
        </div>

        {selectedAgent && (
          <div className="mt-12 animate-fade-in text-center">
            <button 
              className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800"
              onClick={() => console.log("Selected agent:", selectedAgent)}
            >
              选好了
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
