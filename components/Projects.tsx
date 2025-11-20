const projects = [
  {
    title: "HFT Infra Automation",
    desc: "Python-based infra automation for servers & exchanges.",
  },
  {
    title: "Trading Log Analyzer",
    desc: "Script to analyze order/trade logs with Python & Shell.",
  },
  {
    title: "DevOps Monitoring",
    desc: "Monitoring setup using Linux, Cron, Alerts & APIs.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-slate-900 rounded-xl border border-slate-700 
                       hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-300 mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}