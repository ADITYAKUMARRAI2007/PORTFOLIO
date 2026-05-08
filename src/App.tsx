/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Terminal, 
  Settings, 
  Cpu, 
  GraduationCap, 
  ShoppingCart, 
  GitMerge, 
  Camera, 
  FileText, 
  Eye, 
  Database, 
  CheckCircle2, 
  PenTool, 
  ScanText, 
  Network, 
  ClipboardCheck, 
  ArrowRight, 
  ArrowDown,
  Code2, 
  Briefcase, 
  Mail, 
  Trophy, 
  GitCommit,
  Github,
  Linkedin
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-12 py-6 transition-all duration-200">
        <div className="text-2xl font-mono tracking-[0.4em] font-bold text-primary">
          ADITYA KUMAR RAI
        </div>
        <div className="hidden md:flex gap-10">
          {["KERNEL", "SYSTEMS", "PATCHES", "STACK", "LOGS", "INQUIRY"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant hover:text-secondary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Terminal size={18} className="text-secondary hover:text-on-surface cursor-pointer transition-colors" />
          <Settings size={18} className="text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors" />
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <header className="min-h-[90vh] pb-16 px-6 flex flex-col items-center justify-center relative bg-grid-pattern overflow-hidden" id="kernel">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-secondary/30 bg-surface-container-lowest text-[10px] font-mono tracking-[0.4em] text-secondary mb-4">
              SYSTEM_BOOT // READY
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-on-surface leading-[0.95] tracking-tighter uppercase">
              Building <br /> AI-Native <span className="text-primary glow-text">Architectures.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed font-medium font-mono uppercase tracking-tight opacity-80">
              High-fidelity engineering for autonomous backend systems and neural workflows.
            </p>
          </motion.div>

          <div className="z-10 mt-20 w-full max-w-5xl relative h-[450px]">
            {/* Connection Lines (Visual Decor) */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
              <line stroke="white" strokeDasharray="4" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="25%" />
              <line stroke="white" strokeDasharray="4" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="80%" />
              <line stroke="white" strokeDasharray="4" strokeWidth="1" x1="50%" x2="70%" y1="50%" y2="15%" />
              <line stroke="white" strokeDasharray="4" strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="85%" />
            </svg>

            {/* Central Node */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/20 bg-surface-container p-10 rounded-none text-center shadow-[0_0_50px_rgba(139,92,246,0.1)] z-20 cursor-default"
            >
              <div className="w-16 h-16 mx-auto mb-4 border border-secondary/30 flex items-center justify-center relative bg-black">
                <div className="absolute inset-0 bg-secondary/5 blur-xl" />
                <Cpu size={32} className="text-secondary relative" />
              </div>
              <div className="text-[10px] font-bold font-mono tracking-[0.5em] text-on-surface uppercase px-4">CORE_KERNEL // UP</div>
            </motion.div>

            {/* Orbital Nodes */}
            <OrbitalNode 
              pos="top-[10%] left-[5%] md:left-[10%]" 
              icon={<GraduationCap size={16} className="text-tertiary" />}
              title="GradeSense"
              type="AI Evaluation Engine"
              stat="500+ sheets processed"
              color="border-tertiary/30"
            />
            <OrbitalNode 
              pos="top-[5%] right-[5%] md:right-[15%]" 
              icon={<GitMerge size={16} className="text-primary" />}
              title="LangChain"
              type="Open Source Patches"
              stat="2 merged fixes"
              color="border-primary/30"
            />
            <OrbitalNode 
              pos="bottom-[10%] right-[5%] md:right-[10%]" 
              icon={<ShoppingCart size={16} className="text-primary" />}
              title="E-Commerce API"
              type="Backend Payment Engine"
              stat="Razorpay architecture"
              color="border-primary/30"
            />
            <OrbitalNode 
              pos="bottom-[5%] left-[5%] md:left-[15%]" 
              icon={<Camera size={16} className="text-primary" />}
              title="SnapCams"
              type="AI Social Platform"
              stat="Gemini captions"
              color="border-primary/30"
            />
          </div>
        </header>

        {/* Impact Strip */}
        <section className="border-y border-outline-variant bg-black py-4 overflow-hidden z-20 relative">
          <div className="flex whitespace-nowrap animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 pr-16 text-[9px] font-mono text-secondary/40 uppercase tracking-[0.6em]">
                <div className="flex items-center gap-2">STATUS // 500+ PAYLOADS PROCESSED</div>
                <div className="flex items-center gap-2">NET // 2.5H MEAN TURNAROUND</div>
                <div className="flex items-center gap-2">LLM // 95% EXTRACTION PRECISION</div>
                <div className="flex items-center gap-2">PATCH // 2 REPO MERGES</div>
                <div className="flex items-center gap-2">GIT // 29+ ACTIVE NODES</div>
              </div>
            ))}
          </div>
        </section>

        {/* Systems Architecture */}
        <section className="py-24 px-6 max-w-7xl mx-auto w-full" id="systems">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-on-surface tracking-tighter uppercase font-mono">Systems_Architecture</h2>
            <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest opacity-60">High-performance backend implementations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-12 border border-outline-variant bg-surface-container rounded-none p-8 hover:bg-surface-container-high transition-colors shadow-none group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface mb-1 uppercase tracking-tight group-hover:text-primary transition-colors">GradeSense</h3>
                  <p className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em]">AI_EVALUATION_PIPELINE</p>
                </div>
                <span className="px-3 py-1 border border-primary/30 text-primary text-[10px] font-mono font-bold rounded-none bg-primary/5">NODE_STATUS // PRODUCTION</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <p className="text-on-surface-variant leading-relaxed font-mono text-xs uppercase tracking-tight opacity-80">
                  Engineered an end-to-end evaluation system processing handwritten exam sheets. Integrated Vision LLMs with a custom RAG architecture for context-aware scoring.
                </p>
                <div className="flex items-center justify-between text-[9px] font-mono border border-outline-variant rounded-none p-6 bg-black shadow-inner">
                  <Step icon={<FileText size={18} />} label="SOURCE" />
                  <ArrowRight size={14} className="text-primary opacity-30" />
                  <Step icon={<Eye size={18} className="text-secondary" />} label="VISION_LLM" active />
                  <ArrowRight size={14} className="text-primary opacity-30" />
                  <Step icon={<Database size={18} className="text-secondary" />} label="NEURAL_RAG" active />
                  <ArrowRight size={14} className="text-primary opacity-30" />
                  <Step icon={<CheckCircle2 size={18} className="text-tertiary" />} label="OUTPUT_PDF" active highlight />
                </div>
              </div>
            </div>

            <ProjectCard 
              span="md:col-span-6"
              title="SnapCams"
              subtitle="AI_SOCIAL_BACKEND"
              tag="REALTIME_SYNC"
              tagColor="text-secondary border-secondary/30 bg-secondary/5"
              description="Scalable social media backend with realtime capabilities. Integrated Gemini AI for automated dynamic image captioning and content moderation."
              tech={["Node.js", "Gemini_Pro", "WebSockets"]}
            />

            <ProjectCard 
              span="md:col-span-6"
              title="E-Commerce Core"
              subtitle="DISTRIBUTED_PAYMENTS"
              tag="MICROSERVICES"
              tagColor="text-primary border-primary/30 bg-primary/5"
              description="Architected a resilient payment processing backend using Spring Boot. Implemented robust webhook handling and transaction state management."
              tech={["Java", "Spring_Boot", "PostgreSQL"]}
            />
          </div>
        </section>

        {/* System Deep Dive */}
        <section className="py-24 px-6 max-w-7xl mx-auto w-full bg-black border-y border-outline-variant">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-on-surface tracking-tighter uppercase font-mono">Pipeline_Telemetry</h2>
            <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest opacity-60">Architectural breakdown of the automated evaluation system.</p>
          </div>

          <div className="border border-outline-variant bg-surface-container rounded-none overflow-hidden shadow-none">
            <div className="p-3 border-b border-outline-variant bg-surface-container-high flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-none border border-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-none border border-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-none border border-green-500/50" />
                <span className="ml-4 text-[9px] font-mono text-secondary uppercase tracking-[0.2em]">gradesense_core.v2.log</span>
              </div>
              <div className="text-[9px] font-mono text-on-surface-variant/40">LATENCY: 42MS</div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 mb-12">
                <DiveStep icon={<PenTool size={32} />} num="1" title="INGESTION" desc="RAW_IMAGE_STREAM // SECURE_ENDPOINT" />
                <div className="flex items-center justify-center py-2 md:py-0"><ArrowRight className="hidden md:block text-primary opacity-20" /><ArrowDown className="md:hidden text-primary opacity-20" /></div>
                <DiveStep icon={<ScanText size={32} className="text-secondary" />} num="2" title="VISION_PROC" desc="MODAL_LLM // TEXT_RECOVERY" active />
                <div className="flex items-center justify-center py-2 md:py-0"><ArrowRight className="hidden md:block text-primary opacity-20" /><ArrowDown className="md:hidden text-primary opacity-20" /></div>
                <DiveStep icon={<Network size={32} className="text-secondary" />} num="3" title="NEURAL_RAG" desc="VECTOR_SEARCH // CONTEXT_ENFORCEMENT" active />
                <div className="flex items-center justify-center py-2 md:py-0"><ArrowRight className="hidden md:block text-primary opacity-20" /><ArrowDown className="md:hidden text-primary opacity-20" /></div>
                <DiveStep icon={<ClipboardCheck size={32} className="text-tertiary" />} num="4" title="TERMINAL" desc="SCORING_FINAL // PDF_GEN" active highlight />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DeepDivePoint label="HARDWARE" content="NVIDIA A100 // 80GB VRAM Tensor Parallelism." />
                <DeepDivePoint label="OPTIMIZATION" content="KV-Caching & FP16 quantization for low-latency inference." />
                <DeepDivePoint label="RESULT" content="95% ACCURACY // 40% THROUGHPUT IMPROVEMENT." color="text-tertiary" />
              </div>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="py-24 px-6 max-w-7xl mx-auto w-full pt-16" id="patches">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-on-surface tracking-tighter uppercase font-mono">Kernel_Patches</h2>
            <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest opacity-60">Contributions to core neural infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContributionCard 
              repo="langchain-ai // core"
              title="Fix Vertex_AI Schema_Map #1527"
              description="Corrected type mismatches in Pydantic schema generation for Vertex AI tool calling, preventing validation errors on nested objects."
              code={{
                del: "ERR: schema_type = field.type_.__name__",
                add: "FIX: schema_type = _get_vertex_schema_type(field.type_)"
              }}
            />
            <ContributionCard 
              repo="langchain-ai // core"
              title="Enhance Anthropic_Stream #1516"
              description="Optimized async generator implementation for Anthropic's Claude 3 API, reducing latency in token delivery to clients."
              code={{
                del: "STALE: async for chunk in response:",
                add: "READY: async for chunk in response.stream():"
              }}
            />
          </div>
        </section>

        {/* Stack */}
        <section className="py-24 px-6 max-w-7xl mx-auto w-full" id="stack">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-on-surface tracking-tighter uppercase font-mono">Tech_Stack</h2>
            <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest opacity-60">System dependencies and neural frameworks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StackGroup title="Languages" items={["Python_3.11", "TypeScript", "Java_21", "PostgreSQL"]} />
            <StackGroup title="Core_Infra" items={["Node_Runtime", "Spring_Core", "Docker_Engine", "Redis_Store"]} />
            <StackGroup title="Neural_Systems" items={["LangChain", "PyTorch_2.0", "Transformers", "Vision_LLMs"]} color="text-secondary" />
            <StackGroup title="DevOps_Node" items={["Git_Actions", "AWS_S3", "Kubernetes", "WebSockets"]} />
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6" id="logs">
           <div className="flex items-center gap-6 p-8 border border-outline-variant rounded-none bg-surface-container-low group hover:border-secondary/50 transition-colors">
            <Trophy size={40} className="text-secondary/50 group-hover:scale-110 transition-transform" />
            <div className="font-mono">
              <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">MILESTONE // 500+ PAYLOADS</h4>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-tight opacity-60">Production threshold reached for automated evaluation grid.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 border border-outline-variant rounded-none bg-surface-container-low group hover:border-primary/50 transition-colors">
            <GitCommit size={40} className="text-primary/50 group-hover:scale-110 transition-transform" />
            <div className="font-mono">
              <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">CONTRIBUTOR // CORE_REPO</h4>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-tight opacity-60">Direct patches merged into neural infrastructure nodes.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 max-w-5xl mx-auto w-full text-center" id="contact">
          <div className="border border-white/5 bg-surface-container rounded-none p-16 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 70%)' }}></div>
            <div className="inline-block px-5 py-2 border border-secondary/30 text-secondary text-[10px] font-mono font-bold mb-10 tracking-[0.5em] uppercase relative z-10">
              INQUIRY // STATUS: ONLINE
            </div>
            <h2 className="text-5xl font-bold mb-8 text-on-surface relative z-10 leading-tight uppercase tracking-tighter">Initialize <br />Neural <span className="text-primary glow-text">Collaboration.</span></h2>
            <p className="text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed font-mono text-xs uppercase tracking-tight opacity-70 relative z-10">
              Actively seeking integration with forward-thinking engineering clusters dedicated to AI-native backend disruption.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10 items-center relative z-10">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="mailto:adityarai04012007@gmail.com"
                className="px-12 py-5 bg-primary text-white font-bold transition-all text-[11px] uppercase tracking-[0.4em] shadow-none border border-primary/20"
              >
                Execute_Inquiry
              </motion.a>
              <motion.a 
                whileHover={{ textShadow: "0 0 10px rgba(6,182,212,0.5)", color: "white" }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ADITYAKUMARRAI2007"
                className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-white/10 pb-2 text-on-surface-variant hover:border-secondary transition-all"
              >
                View_Repository
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-outline-variant px-12 py-16">
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-end items-center">
          <div className="text-[9px] text-white/5 uppercase tracking-[0.8em] hidden sm:block font-bold">
            HIGH_FIDELITY_AI_INFRASTRUCTURE
          </div>
        </div>
      </footer>
    </div>
  );
}

function OrbitalNode({ pos, icon, title, type, stat, color }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className={`absolute ${pos} border ${color} bg-black/80 backdrop-blur-sm p-4 rounded-none hover:border-secondary transition-colors cursor-default group z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
    >
      <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
        {icon}
        <span className="text-[10px] font-bold text-on-surface uppercase tracking-[0.2em] group-hover:text-secondary transition-colors">{title}</span>
      </div>
      <div className="text-[9px] text-on-surface-variant/60 font-mono uppercase tracking-[0.3em] mb-2">{type}</div>
      <div className="text-[9px] text-secondary font-mono tracking-tight font-bold">{stat}</div>
    </motion.div>
  );
}

function ProjectCard({ span, title, subtitle, tag, tagColor, description, tech }: any) {
  return (
    <div className={`${span} border border-outline-variant bg-surface-container rounded-none p-8 hover:bg-surface-container-high transition-colors shadow-none group flex flex-col relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl" />
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em] opacity-60">{subtitle}</p>
        </div>
        <span className={`px-2 py-0.5 border text-[9px] font-mono font-bold rounded-none ${tagColor}`}>{tag}</span>
      </div>
      <p className="text-xs font-mono uppercase tracking-tight text-on-surface-variant leading-relaxed mb-6 flex-grow opacity-80 relative z-10">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 relative z-10">
        {tech.map((t: string) => (
          <span key={t} className="text-[8px] font-mono px-2 py-1 bg-black border border-outline-variant rounded-none text-secondary">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Step({ icon, label, active, highlight }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`p-2 rounded-none border ${active ? (highlight ? "bg-tertiary/10 text-tertiary border-tertiary" : "bg-primary/10 text-primary border-primary") : "text-on-surface-variant/40 border-outline-variant"}`}>
        {icon}
      </div>
      <span className={`text-[8px] font-mono uppercase tracking-tighter ${active ? "text-on-surface" : "text-on-surface-variant/40"}`}>{label}</span>
    </div>
  );
}

function DiveStep({ icon, num, title, desc, active, highlight }: any) {
  return (
    <div className={`flex-1 border ${active ? (highlight ? "border-primary/30 shadow-none bg-black" : "border-secondary/30 shadow-none bg-black") : "border-outline-variant"} rounded-none p-8 text-center relative overflow-hidden group hover:border-primary transition-all`}>
      <div className="absolute top-3 left-3 text-[9px] font-mono text-outline-variant group-hover:text-primary transition-colors">NODE_ID // 0{num}</div>
      <div className="mb-6 flex justify-center">
        {icon}
      </div>
      <h4 className={`text-[10px] font-bold ${active ? "text-on-surface" : "text-on-surface-variant"} mb-3 uppercase tracking-[0.4em]`}>{title}</h4>
      <p className="text-[9px] font-mono uppercase tracking-tight text-on-surface-variant/60 leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function DeepDivePoint({ label, content, color = "text-secondary" }: any) {
  return (
    <div className="bg-black p-4 rounded-none border border-outline-variant">
      <span className={`${color} text-[9px] font-mono font-bold uppercase tracking-[0.3em] mr-2`}>{label}_TRC:</span>
      <span className="text-[10px] font-mono uppercase tracking-tight text-on-surface-variant opacity-80">{content}</span>
    </div>
  );
}

function ContributionCard({ repo, title, description, code }: any) {
  return (
    <div className="border border-outline-variant bg-surface-container rounded-none p-8 hover:border-primary/40 transition-all shadow-none group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-20" />
      <div className="flex items-center gap-3 mb-6">
        <GitMerge size={14} className="text-primary" />
        <span className="text-[9px] font-mono font-bold text-secondary uppercase tracking-[0.4em]">{repo}</span>
        <span className="ml-auto px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-bold rounded-none border border-primary/20 tracking-tighter uppercase">NODE_RESOLVED</span>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-xs font-mono uppercase tracking-tight text-on-surface-variant mb-8 leading-relaxed opacity-70">{description}</p>
      <div className="bg-black border border-outline-variant rounded-none p-5 font-mono text-[9px] overflow-x-auto shadow-inner">
        <div className="text-red-400/80 bg-red-400/5 px-2 py-1 mb-1 border-l-2 border-red-400/30 tracking-tight">{code.del}</div>
        <div className="text-primary bg-primary/5 px-2 py-1 border-l-2 border-primary/30 tracking-tight">{code.add}</div>
      </div>
    </div>
  );
}

function StackGroup({ title, items, color = "text-primary" }: any) {
  return (
    <div className="border border-outline-variant bg-surface-container p-8 rounded-none hover:border-primary/20 transition-colors">
      <h4 className={`${color} font-bold mb-6 font-mono text-[10px] uppercase tracking-[0.4em]`}>{title}</h4>
      <ul className="space-y-3">
        {items.map((item: string) => (
          <li key={item} className="text-xs text-on-surface-variant hover:text-on-surface transition-colors cursor-default font-light">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ icon, label, href }: any) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant hover:text-primary transition-all tracking-widest"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
