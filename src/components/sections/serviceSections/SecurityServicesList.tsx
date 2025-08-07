import React from "react";
import { Card, CardContent } from "src/components/ui/card";

const services = [
  {
    emoji: "🔍",
    title: "Vulnerability Assessment",
    description: "Identify and categorize security weaknesses in your systems and applications before they can be exploited by malicious actors.",
  },
  {
    emoji: "🛡️",
    title: "Penetration Testing",
    description: "Simulate real-world attacks to uncover exploitable vulnerabilities in your network, applications, and physical security posture.",
  },
  {
    emoji: "🚨",
    title: "Managed Security Services (MSS)",
    description: "Outsource your security operations to our experts for 24/7 monitoring, threat detection, incident response, and improvement.",
  },
  {
    emoji: "🧠",
    title: "Security Consulting & Strategy",
    description: "Develop a cybersecurity roadmap aligned with your goals — covering compliance, risk, and architecture.",
  },
  {
    emoji: "🩹",
    title: "Incident Response & Recovery",
    description: "Minimize the impact of breaches with rapid detection, containment, and recovery strategies.",
  },
  {
    emoji: "🧑‍🏫",
    title: "Security Awareness Training",
    description: "Train employees on phishing, password hygiene, and how to defend against threats effectively.",
  },
];

export function SecurityServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {services.map((item, i) => (
        <Card
          key={i}
          className="bg-zinc-900/80 border border-zinc-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-bold text-white text-lg md:text-xl">
                {item.title}
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
