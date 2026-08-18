import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User, GraduationCap, Code2, Mail, CheckCircle2 } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "bot",
    text: "Hi! I'm Mukesh's AI Assistant 🤖 Ask me anything about his M.Tech Data Science degree at SRM, computer vision projects, full-stack work, or availability!",
  },
];

const quickPrompts = [
  { label: "🎓 M.Tech Degree at SRM", query: "Tell me about Mukesh's M.Tech Data Science degree at SRM University." },
  { label: "👁️ Computer Vision Work", query: "What computer vision and AI projects has Mukesh built?" },
  { label: "💻 Full-Stack Skills", query: "What full-stack web frameworks and databases does Mukesh use?" },
  { label: "📬 How to Hire / Contact", query: "How can I contact or hire Mukesh P?" },
];

export function AiAssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || input.trim();
    if (!textToSend) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput("");
    setIsTyping(true);

    // Generate intelligent contextual response
    setTimeout(() => {
      let botResponse = "";
      const lower = textToSend.toLowerCase();

      if (lower.includes("srm") || lower.includes("m.tech") || lower.includes("education") || lower.includes("degree")) {
        botResponse = "Mukesh P is currently pursuing his M.Tech in Data Science at SRM Institute of Science and Technology, Kattankulathur! He also holds a B.Tech in Artificial Intelligence & Data Science from Velammal Engineering College, Chennai (7.8 GPA).";
      } else if (lower.includes("vision") || lower.includes("violence") || lower.includes("ai") || lower.includes("project")) {
        botResponse = "Mukesh has built several high-impact AI systems, including a Realtime Violence Detection System using CNN-LSTM motion analysis in OpenCV/TensorFlow, an AI Mental Health Companion correlating facial micro-expressions with NLP text embeddings, and an Autonomous RAG Document Intelligence pipeline!";
      } else if (lower.includes("stack") || lower.includes("web") || lower.includes("framework") || lower.includes("react") || lower.includes("backend")) {
        botResponse = "Mukesh is a full-stack engineer proficient in Python, React, TypeScript, Node.js, Express, C# .NET Core, SQL Server, and MongoDB. He completed a Web Developer Internship at Atlanwa Technologies building an enterprise LMS with PayPal payments and JWT role-based security.";
      } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("phone")) {
        botResponse = "You can reach Mukesh directly via email at mukeshdeepa206@gmail.com or call him at +91 76049 65113. He is open for full-time engineering roles, AI research collaborations, and software consulting!";
      } else {
        botResponse = "Mukesh P is an M.Tech Data Science student at SRM University Kattankulathur with expertise in computer vision, deep learning, and production full-stack engineering. Feel free to ask about his projects, skills, or contact info!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse,
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary px-4 py-3 text-xs font-bold text-primary-foreground shadow-2xl backdrop-blur-lg"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
        </span>
        <Bot className="size-4" />
        <span>Ask Mukesh's AI</span>
      </motion.button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-6 z-50 flex h-[520px] w-[90vw] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/50 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                  <Bot className="size-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-foreground">Mukesh's AI Assistant</h3>
                  <p className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
                    Online & Active
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${
                    m.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                      m.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground border border-border"
                    }`}
                  >
                    {m.sender === "user" ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
                  </div>

                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary/70 text-foreground border border-border/60 rounded-tl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="inline-flex size-7 items-center justify-center rounded-full bg-secondary text-secondary-foreground border border-border">
                    <Bot className="size-3.5" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-secondary/70 px-3.5 py-2 text-xs text-muted-foreground border border-border/60">
                    <span className="animate-pulse">AI is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Starter Prompts */}
            <div className="border-t border-border/40 bg-muted/20 p-2">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickPrompts.map((qp) => (
                  <button
                    key={qp.label}
                    onClick={() => handleSend(qp.query)}
                    className="shrink-0 rounded-full border border-border/80 bg-background px-2.5 py-1 text-[10px] font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    {qp.label}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="mt-1.5 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 rounded-full border border-border/80 bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="inline-flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-40"
                >
                  <Send className="size-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
