"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

type Command = { label: string; hint: string; target?: string; href?: string };

const commands: Command[] = [
  { label: "Go to About", hint: "1", target: "about" },
  { label: "Go to Education", hint: "2", target: "education" },
  { label: "Go to Experience", hint: "3", target: "experience" },
  { label: "Go to Skills", hint: "4", target: "skills" },
  { label: "Open GitHub", hint: "↗", href: profile.github },
  { label: "Open LinkedIn", hint: "↗", href: profile.linkedin },
  { label: "Contact Me", hint: "G C", target: "contact" },
];

const portfolioAnswers = [
  { matches: ["where", "study"], answer: "Yuhan studies Computer Science at Stony Brook University.", target: "education" },
  { matches: ["programming", "language"], answer: "Yuhan works with Java, C, JavaScript, and Python.", target: "skills" },
  { matches: ["experience"], answer: "Yuhan has experience in medical office operations, professional readiness programming, and FTC robotics.", target: "experience" },
  { matches: ["graduate", "graduation"], answer: "Expected graduation is May 2028.", target: "education" },
  { matches: ["skill", "show"], answer: "Skills include programming languages, developer tools, data structures & algorithms, and robotics programming.", target: "skills" },
];

const terminalResponses: Record<string, string[]> = {
  whoami: ["Yuhan Chen", "Computer Science @ Stony Brook University"],
  about: ["Computer Science student focused on software development, algorithms, and practical systems."],
  education: ["B.S. in Computer Science", "Stony Brook University · Expected May 2028"],
  skills: ["Java · C · JavaScript · Python", "Git · VS Code · IntelliJ IDEA", "Data Structures & Algorithms · Robotics Programming"],
  experience: ["Medical Office Staff · Wang’s Medical PC", "Program Intern · NYCCP — Operation: ADULTing™", "FTC Robotics · Tottenville High School Robotics Team"],
  resume: ["Resume module is not currently available."],
  contact: ["Email, GitHub, and LinkedIn are available in the Contact section."],
  help: ["Commands: whoami, about, education, experience, skills, resume, contact, clear, help"],
};

const terminalNavigation: Record<string, string> = { about: "about", education: "education", experience: "experience", skills: "skills", contact: "contact" };

function scrollToSection(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }

export default function PortfolioControls() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>(["[ready] profile loaded", "[ready] education module", "[ready] experience module", "[ready] skills module", "Type help to explore."]);
  const commandInput = useRef<HTMLInputElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = query.toLowerCase();
  const answer = normalizedQuery ? portfolioAnswers.find((item) => item.matches.some((match) => normalizedQuery.includes(match))) ?? null : null;
  const runCommand = (command: Command) => {
    if (command.target) scrollToSection(command.target);
    if (command.href) window.open(command.href, "_blank", "noopener,noreferrer");
    setCommandOpen(false);
  };
  const openPalette = () => { setSelectedIndex(0); setQuery(""); setCommandOpen(true); };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); if (commandOpen) setCommandOpen(false); else openPalette(); return; }
      if (event.key === "Escape") { setCommandOpen(false); setTerminalOpen(false); return; }
      if (isTyping) return;
      if (event.key === "/") { event.preventDefault(); openPalette(); return; }
      if (event.key.toLowerCase() === "t") { event.preventDefault(); setTerminalOpen((open) => !open); return; }
      const shortcut = { "1": "about", "2": "education", "3": "experience", "4": "skills" }[event.key];
      if (shortcut) { event.preventDefault(); scrollToSection(shortcut); return; }
      if (!commandOpen) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setSelectedIndex((index) => (index + (event.key === "ArrowDown" ? 1 : -1) + commands.length) % commands.length); }
      if (event.key === "Enter") { event.preventDefault(); runCommand(commands[selectedIndex]); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [commandOpen, selectedIndex]);
  useEffect(() => { if (commandOpen) window.setTimeout(() => commandInput.current?.focus(), 0); }, [commandOpen]);
  useEffect(() => { if (terminalOpen) window.setTimeout(() => terminalInputRef.current?.focus(), 0); }, [terminalOpen]);

  const runTerminalCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const command = terminalInput.trim().toLowerCase(); if (!command) return;
    if (command === "clear") setTerminalLines([]);
    else { if (terminalNavigation[command]) scrollToSection(terminalNavigation[command]); const response = terminalResponses[command] ?? [`Command not found: ${command}`, "Type help to see available commands."]; setTerminalLines((lines) => [...lines, `> ${command}`, ...response]); }
    setTerminalInput("");
  };

  return <>
    <button type="button" className="command-trigger" onClick={openPalette} aria-haspopup="dialog" aria-label="Open command palette"><span className="hidden sm:inline">⌘</span><span className="sm:hidden">Ctrl</span> K</button>
    {commandOpen && <div className="command-overlay" role="presentation" onMouseDown={() => setCommandOpen(false)}><section className="command-palette" role="dialog" aria-modal="true" aria-label="Ask Yuhan's portfolio" onMouseDown={(event) => event.stopPropagation()}><div className="command-search"><span>⌕</span><input ref={commandInput} value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Ask Yuhan's portfolio" placeholder="Ask my portfolio or search commands" /></div>{answer && <button type="button" className="portfolio-answer" onClick={() => { scrollToSection(answer.target); setCommandOpen(false); }}><span>PORTFOLIO RESPONSE</span><strong>{answer.answer}</strong><em>View source ↗</em></button>}<div className="command-list" role="listbox" aria-label="Commands">{commands.map((command, index) => <button key={command.label} type="button" role="option" aria-selected={selectedIndex === index} className="command-item" data-selected={selectedIndex === index || undefined} onMouseEnter={() => setSelectedIndex(index)} onClick={() => runCommand(command)}><span>{command.label}</span><kbd>{command.hint}</kbd></button>)}</div><p className="command-footer"><span>↑↓ to navigate</span><span>/ to ask</span><span>esc to close</span></p></section></div>}
    <button type="button" className="terminal-trigger" onClick={() => setTerminalOpen((open) => !open)} aria-expanded={terminalOpen} aria-controls="portfolio-terminal" aria-label="Open portfolio terminal">&gt;_</button>
    {terminalOpen && <section id="portfolio-terminal" className="terminal-panel" aria-label="Portfolio console"><div className="terminal-titlebar"><span><i /> <i /> <i /></span><small>YUHAN.OS / CONSOLE</small><button type="button" onClick={() => setTerminalOpen(false)} aria-label="Close terminal">×</button></div><div className="terminal-body" aria-live="polite">{terminalLines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><form onSubmit={runTerminalCommand} className="terminal-form"><span>&gt;</span><input ref={terminalInputRef} value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck="false" /></form></section>}
  </>;
}
