"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const commands = [
  { label: "Go to About", hint: "G A", action: () => scrollToSection("about") },
  { label: "Go to Education", hint: "G E", action: () => scrollToSection("education") },
  { label: "Go to Experience", hint: "G X", action: () => scrollToSection("experience") },
  { label: "Go to Skills", hint: "G S", action: () => scrollToSection("skills") },
  { label: "Open GitHub", hint: "↗", action: () => window.open("https://github.com/", "_blank", "noopener,noreferrer") },
  { label: "Open LinkedIn", hint: "↗", action: () => window.open("https://linkedin.com/", "_blank", "noopener,noreferrer") },
  { label: "Contact Me", hint: "G C", action: () => scrollToSection("contact") },
];

const terminalResponses: Record<string, string[]> = {
  whoami: ["Yuhan Chen", "Computer Science @ Stony Brook University"],
  education: ["B.S. in Computer Science", "Stony Brook University · Expected May 2028"],
  skills: ["Java · C · JavaScript · Python", "Git · VS Code · IntelliJ IDEA", "Data Structures & Algorithms · Robotics Programming"],
  experience: ["Medical Office Staff · Wang’s Medical PC", "Program Intern · NYCCP — Operation: ADULTing™", "FTC Robotics · Tottenville High School Robotics Team"],
  contact: ["Email, GitHub, and LinkedIn are available in the Contact section."],
  help: ["Available commands: whoami, education, skills, experience, contact, clear, help"],
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function PortfolioControls() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>(["Type help to explore."]);
  const commandInput = useRef<HTMLInputElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (commandOpen) {
          setCommandOpen(false);
        } else {
          setSelectedIndex(0);
          setCommandOpen(true);
        }
        return;
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setTerminalOpen(false);
        return;
      }

      if (!commandOpen) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((index) => (index + (event.key === "ArrowDown" ? 1 : -1) + commands.length) % commands.length);
      }
      if (event.key === "Enter") {
        event.preventDefault();
        commands[selectedIndex].action();
        setCommandOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [commandOpen, selectedIndex]);

  useEffect(() => {
    if (commandOpen) {
      window.setTimeout(() => commandInput.current?.focus(), 0);
    }
  }, [commandOpen]);

  useEffect(() => {
    if (terminalOpen) window.setTimeout(() => terminalInputRef.current?.focus(), 0);
  }, [terminalOpen]);

  const runTerminalCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setTerminalLines([]);
    } else {
      const response = terminalResponses[command] ?? [`Command not found: ${command}`, "Type help to see available commands."];
      setTerminalLines((lines) => [...lines, `> ${command}`, ...response]);
    }
    setTerminalInput("");
  };

  return <>
    <button type="button" className="command-trigger" onClick={() => { setSelectedIndex(0); setCommandOpen(true); }} aria-haspopup="dialog" aria-label="Open command palette">
      <span className="hidden sm:inline">⌘</span><span className="sm:hidden">Ctrl</span> K
    </button>
    {commandOpen && <div className="command-overlay" role="presentation" onMouseDown={() => setCommandOpen(false)}>
      <section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-search"><span>⌕</span><input ref={commandInput} aria-label="Search commands" placeholder="Search commands" readOnly /></div>
        <div className="command-list" role="listbox" aria-label="Commands">
          {commands.map((command, index) => <button key={command.label} type="button" role="option" aria-selected={selectedIndex === index} className="command-item" data-selected={selectedIndex === index || undefined} onMouseEnter={() => setSelectedIndex(index)} onClick={() => { command.action(); setCommandOpen(false); }}>
            <span>{command.label}</span><kbd>{command.hint}</kbd>
          </button>)}
        </div>
        <p className="command-footer"><span>↑↓ to navigate</span><span>↵ to select</span><span>esc to close</span></p>
      </section>
    </div>}
    <button type="button" className="terminal-trigger" onClick={() => setTerminalOpen((open) => !open)} aria-expanded={terminalOpen} aria-controls="portfolio-terminal" aria-label="Open portfolio terminal">&gt;_</button>
    {terminalOpen && <section id="portfolio-terminal" className="terminal-panel" aria-label="Portfolio terminal">
      <div className="terminal-titlebar"><span><i /> <i /> <i /></span><button type="button" onClick={() => setTerminalOpen(false)} aria-label="Close terminal">×</button></div>
      <div className="terminal-body" aria-live="polite">{terminalLines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div>
      <form onSubmit={runTerminalCommand} className="terminal-form"><span>&gt;</span><input ref={terminalInputRef} value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck="false" /></form>
    </section>}
  </>;
}
