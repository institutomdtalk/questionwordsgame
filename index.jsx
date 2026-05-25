import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, RotateCcw, BookOpen, Brain, Target, CheckCircle2, XCircle, Lock, Unlock, GraduationCap, Zap } from "lucide-react";

const questionWords = [
  {
    word: "WHAT",
    asks: "information, things, actions or ideas",
    pt: "o quê / qual",
    clue: "Think: object, idea, activity.",
    example: "What do you do after class?",
  },
  {
    word: "WHERE",
    asks: "place or location",
    pt: "onde",
    clue: "Think: place, room, city, hospital, clinic.",
    example: "Where does the patient live?",
  },
  {
    word: "WHEN",
    asks: "time, date or moment",
    pt: "quando",
    clue: "Think: clock, calendar, schedule.",
    example: "When is your next appointment?",
  },
  {
    word: "WHY",
    asks: "reason or cause",
    pt: "por que",
    clue: "Think: reason, explanation, cause.",
    example: "Why did you choose this specialty?",
  },
  {
    word: "WHO",
    asks: "a person",
    pt: "quem",
    clue: "Think: person, doctor, student, patient.",
    example: "Who is your English teacher?",
  },
  {
    word: "WHOSE",
    asks: "possession or ownership",
    pt: "de quem",
    clue: "Think: owner, belonging, possession.",
    example: "Whose notebook is this?",
  },
  {
    word: "WHICH",
    asks: "choice from a limited group",
    pt: "qual / quais",
    clue: "Think: option A or option B.",
    example: "Which option is better for you?",
  },
  {
    word: "HOW",
    asks: "manner, method, condition or quality",
    pt: "como",
    clue: "Think: process, condition, way.",
    example: "How are you feeling today?",
  },
  {
    word: "HOW MANY",
    asks: "quantity with countable nouns",
    pt: "quantos / quantas",
    clue: "Think: numbers + plural countable things.",
    example: "How many classes do you have this week?",
  },
  {
    word: "HOW MUCH",
    asks: "quantity, price or uncountable nouns",
    pt: "quanto / quanta / quanto custa",
    clue: "Think: money, water, time as amount, information.",
    example: "How much time do you need?",
  },
  {
    word: "HOW LONG",
    asks: "duration or length of time",
    pt: "por quanto tempo / quanto tempo",
    clue: "Think: duration from start to finish.",
    example: "How long have you studied English?",
  },
  {
    word: "HOW OFTEN",
    asks: "frequency",
    pt: "com que frequência",
    clue: "Think: always, usually, sometimes, once a week.",
    example: "How often do you review vocabulary?",
  },
  {
    word: "HOW FAR",
    asks: "distance",
    pt: "quão longe / qual a distância",
    clue: "Think: kilometers, distance, location gap.",
    example: "How far is the hospital from here?",
  },
  {
    word: "HOW OLD",
    asks: "age",
    pt: "quantos anos",
    clue: "Think: age of a person, building, object, or institution.",
    example: "How old is your son?",
  },
];

const missions = [
  {
    id: 1,
    level: "Foundation",
    prompt: "____ is your name?",
    answer: "WHAT",
    options: ["WHAT", "WHO", "WHERE", "WHEN"],
    explanation: "Use WHAT to ask for information, names, things or ideas.",
    translation: "Qual é o seu nome?",
  },
  {
    id: 2,
    level: "Foundation",
    prompt: "____ are you from?",
    answer: "WHERE",
    options: ["WHEN", "WHERE", "WHY", "WHOSE"],
    explanation: "Use WHERE to ask about place or origin.",
    translation: "De onde você é?",
  },
  {
    id: 3,
    level: "Foundation",
    prompt: "____ is your appointment?",
    answer: "WHEN",
    options: ["WHEN", "WHY", "WHICH", "HOW"],
    explanation: "Use WHEN to ask about time, date or moment.",
    translation: "Quando é sua consulta?",
  },
  {
    id: 4,
    level: "Foundation",
    prompt: "____ is your favorite doctor?",
    answer: "WHO",
    options: ["WHO", "WHAT", "WHOSE", "WHERE"],
    explanation: "Use WHO when the answer is a person.",
    translation: "Quem é seu médico favorito?",
  },
  {
    id: 5,
    level: "Meaning",
    prompt: "____ did you cancel the class?",
    answer: "WHY",
    options: ["WHY", "WHEN", "WHERE", "WHICH"],
    explanation: "Use WHY to ask for the reason or cause of something.",
    translation: "Por que você cancelou a aula?",
  },
  {
    id: 6,
    level: "Meaning",
    prompt: "____ phone is ringing?",
    answer: "WHOSE",
    options: ["WHO", "WHOSE", "WHICH", "WHAT"],
    explanation: "Use WHOSE to ask about possession or ownership.",
    translation: "De quem é o telefone que está tocando?",
  },
  {
    id: 7,
    level: "Meaning",
    prompt: "____ course do you prefer: Medical English or Business English?",
    answer: "WHICH",
    options: ["WHAT", "WHICH", "WHY", "HOW"],
    explanation: "Use WHICH when there is a limited set of options.",
    translation: "Qual curso você prefere: inglês médico ou inglês para negócios?",
  },
  {
    id: 8,
    level: "Meaning",
    prompt: "____ are you feeling after the night shift?",
    answer: "HOW",
    options: ["HOW", "WHAT", "WHERE", "WHO"],
    explanation: "Use HOW to ask about condition, manner, process or quality.",
    translation: "Como você está se sentindo depois do plantão noturno?",
  },
  {
    id: 9,
    level: "Precision",
    prompt: "____ patients did you see today?",
    answer: "HOW MANY",
    options: ["HOW MUCH", "HOW MANY", "HOW OFTEN", "HOW LONG"],
    explanation: "Use HOW MANY with countable plural nouns, such as patients, books, classes, exams.",
    translation: "Quantos pacientes você atendeu hoje?",
  },
  {
    id: 10,
    level: "Precision",
    prompt: "____ water do you drink every day?",
    answer: "HOW MUCH",
    options: ["HOW MANY", "HOW MUCH", "HOW FAR", "HOW OLD"],
    explanation: "Use HOW MUCH with uncountable nouns, prices and amounts.",
    translation: "Quanta água você bebe todos os dias?",
  },
  {
    id: 11,
    level: "Precision",
    prompt: "____ have you worked at this hospital?",
    answer: "HOW LONG",
    options: ["HOW OFTEN", "HOW LONG", "HOW FAR", "HOW MUCH"],
    explanation: "Use HOW LONG to ask about duration.",
    translation: "Há quanto tempo você trabalha neste hospital?",
  },
  {
    id: 12,
    level: "Precision",
    prompt: "____ do you practice English?",
    answer: "HOW OFTEN",
    options: ["HOW OLD", "HOW OFTEN", "HOW FAR", "HOW LONG"],
    explanation: "Use HOW OFTEN to ask about frequency.",
    translation: "Com que frequência você pratica inglês?",
  },
  {
    id: 13,
    level: "Challenge",
    prompt: "____ is your clinic from the airport?",
    answer: "HOW FAR",
    options: ["HOW FAR", "HOW LONG", "WHERE", "WHEN"],
    explanation: "Use HOW FAR to ask about distance.",
    translation: "A que distância sua clínica fica do aeroporto?",
  },
  {
    id: 14,
    level: "Challenge",
    prompt: "____ is your daughter? She looks very young.",
    answer: "HOW OLD",
    options: ["HOW LONG", "HOW MANY", "HOW OLD", "WHOSE"],
    explanation: "Use HOW OLD to ask about age.",
    translation: "Quantos anos tem sua filha? Ela parece muito jovem.",
  },
  {
    id: 15,
    level: "Challenge",
    prompt: "____ did the patient arrive late? Because of traffic.",
    answer: "WHY",
    options: ["WHEN", "WHY", "WHERE", "HOW MANY"],
    explanation: "The answer gives a reason, so the correct question word is WHY.",
    translation: "Por que o paciente chegou atrasado? Por causa do trânsito.",
  },
  {
    id: 16,
    level: "Challenge",
    prompt: "____ document should I sign, this one or that one?",
    answer: "WHICH",
    options: ["WHOSE", "WHICH", "WHAT", "WHY"],
    explanation: "There are two specific options, so WHICH is more precise than WHAT.",
    translation: "Qual documento eu devo assinar, este ou aquele?",
  },
];

const badgeRules = [
  { name: "First Spark", icon: Sparkles, test: (s) => s.totalAnswered >= 1, text: "Answered your first mission" },
  { name: "Memory Streak", icon: Zap, test: (s) => s.bestStreak >= 3, text: "Reached a 3-answer streak" },
  { name: "Precision Mode", icon: Target, test: (s) => s.correct >= 8, text: "Got 8 answers correct" },
  { name: "Question Master", icon: Trophy, test: (s) => s.correct === missions.length, text: "Perfect score" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuestionWordsMemoryGame() {
  const [started, setStarted] = useState(false);
  const [rounds, setRounds] = useState(() => missions);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [studyOpen, setStudyOpen] = useState(false);
  const [mode, setMode] = useState("guided");

  const current = rounds[index];
  const totalAnswered = answered ? index + 1 : index;
  const score = correct * 100 + bestStreak * 20;
  const progress = started ? ((index + (answered ? 1 : 0)) / rounds.length) * 100 : 0;
  const isFinished = started && index >= rounds.length;

  const stats = { correct, totalAnswered, bestStreak };
  const unlockedBadges = badgeRules.filter((b) => b.test(stats));

  const mastery = useMemo(() => {
    if (!started) return 0;
    return Math.round((correct / rounds.length) * 100);
  }, [correct, rounds.length, started]);

  const startGame = (gameMode = "guided") => {
    setMode(gameMode);
    setRounds(gameMode === "challenge" ? shuffle(missions) : missions);
    setStarted(true);
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setCorrect(0);
    setStreak(0);
    setBestStreak(0);
    setMistakes([]);
  };

  const resetGame = () => {
    setStarted(false);
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setCorrect(0);
    setStreak(0);
    setBestStreak(0);
    setMistakes([]);
    setRounds(missions);
  };

  const chooseAnswer = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);

    const isCorrect = option === current.answer;
    if (isCorrect) {
      const nextStreak = streak + 1;
      setCorrect((prev) => prev + 1);
      setStreak(nextStreak);
      setBestStreak((prev) => Math.max(prev, nextStreak));
    } else {
      setMistakes((prev) => [...prev, { ...current, selected: option }]);
      setStreak(0);
    }
  };

  const nextRound = () => {
    setSelected(null);
    setAnswered(false);
    setIndex((prev) => prev + 1);
  };

  const optionState = (option) => {
    if (!answered) return "idle";
    if (option === current.answer) return "correct";
    if (option === selected && selected !== current.answer) return "wrong";
    return "muted";
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,181,106,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(74,144,226,0.18),transparent_30%),linear-gradient(135deg,#07111f,#0b1d34_45%,#06111d)]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 border border-amber-300/30 bg-amber-200/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-amber-100">
              <GraduationCap className="h-3.5 w-3.5" /> MD Talk Memory Game
            </div>
            <h1 className="font-serif text-4xl leading-tight text-white md:text-6xl">Question Words</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
              A memorization game designed to help students recognize, choose and internalize English question words through fast decisions, explanations and recall cards.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center sm:w-[390px]">
            <div className="border border-white/10 bg-white/[0.06] p-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Score</p>
              <p className="mt-1 text-2xl font-semibold text-amber-100">{score}</p>
            </div>
            <div className="border border-white/10 bg-white/[0.06] p-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Streak</p>
              <p className="mt-1 text-2xl font-semibold text-amber-100">{streak}</p>
            </div>
            <div className="border border-white/10 bg-white/[0.06] p-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Mastery</p>
              <p className="mt-1 text-2xl font-semibold text-amber-100">{mastery}%</p>
            </div>
          </div>
        </header>

        {!started && (
          <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-amber-200/30 bg-amber-100/10">
                <Brain className="h-7 w-7 text-amber-100" />
              </div>
              <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">Train recognition before translation.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The student will not only translate question words. They will connect each word to its communicative function: person, place, time, reason, quantity, duration, frequency, distance, possession and choice.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button onClick={() => startGame("guided")} className="group border border-amber-200/40 bg-amber-200 px-5 py-4 text-left text-slate-950 transition hover:bg-amber-100">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">Guided Mode</span>
                    <Unlock className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm leading-5 text-slate-800">Ordered progression: foundation → precision → challenge.</p>
                </button>

                <button onClick={() => startGame("challenge")} className="group border border-white/15 bg-white/[0.06] px-5 py-4 text-left transition hover:border-amber-200/40 hover:bg-white/[0.1]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">Challenge Mode</span>
                    <Zap className="h-5 w-5 text-amber-100 transition group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm leading-5 text-slate-300">Random order for stronger recall and memory pressure.</p>
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="grid gap-4">
              <div className="border border-white/10 bg-slate-950/35 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2 text-amber-100">
                  <BookOpen className="h-5 w-5" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.25em]">Memory Vault</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {questionWords.slice(0, 12).map((item) => (
                    <div key={item.word} className="border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-sm font-bold text-white">{item.word}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-amber-200/20 bg-amber-100/[0.06] p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-100">Teacher Note</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Use this game after presenting the meaning of each word. Then ask the student to explain why the correct answer is correct. That final step transforms recognition into active language awareness.
                </p>
              </div>
            </motion.div>
          </section>
        )}

        {started && !isFinished && current && (
          <section className="grid flex-1 gap-7 lg:grid-cols-[0.74fr_0.26fr]">
            <div className="flex flex-col">
              <div className="mb-5 h-2 w-full overflow-hidden bg-white/10">
                <motion.div className="h-full bg-amber-200" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={current.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.32 }} className="flex-1 border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-10">
                  <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-amber-100">Mission {index + 1} / {rounds.length}</p>
                      <h2 className="mt-2 font-serif text-3xl text-white md:text-5xl">Complete the question</h2>
                    </div>
                    <div className="w-fit border border-white/10 bg-slate-950/30 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                      {current.level} · {mode === "challenge" ? "Random" : "Guided"}
                    </div>
                  </div>

                  <div className="border border-amber-200/20 bg-slate-950/35 p-6 md:p-8">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Sentence</p>
                    <p className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{current.prompt}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{current.translation}</p>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {current.options.map((option) => {
                      const state = optionState(option);
                      return (
                        <button
                          key={option}
                          onClick={() => chooseAnswer(option)}
                          className={classNames(
                            "group flex min-h-[86px] items-center justify-between border px-5 py-4 text-left transition",
                            state === "idle" && "border-white/10 bg-white/[0.04] hover:border-amber-200/50 hover:bg-white/[0.09]",
                            state === "correct" && "border-emerald-300/70 bg-emerald-300/15",
                            state === "wrong" && "border-rose-300/70 bg-rose-300/15",
                            state === "muted" && "border-white/5 bg-white/[0.02] opacity-45"
                          )}
                        >
                          <span className="text-lg font-bold tracking-[0.08em] text-white">{option}</span>
                          {state === "correct" && <CheckCircle2 className="h-6 w-6 text-emerald-200" />}
                          {state === "wrong" && <XCircle className="h-6 w-6 text-rose-200" />}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {answered && (
                      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-7 border border-white/10 bg-slate-950/40 p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className={classNames("text-sm font-bold uppercase tracking-[0.25em]", selected === current.answer ? "text-emerald-200" : "text-rose-200")}>{selected === current.answer ? "Correct" : "Review this"}</p>
                            <p className="mt-2 text-base leading-7 text-slate-200">{current.explanation}</p>
                          </div>
                          <button onClick={nextRound} className="border border-amber-200/50 bg-amber-200 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-100">
                            {index + 1 === rounds.length ? "Finish" : "Next"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>

            <aside className="grid content-start gap-4">
              <div className="border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Live Performance</p>
                <div className="mt-5 grid gap-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                    <span className="text-slate-400">Correct</span>
                    <span className="font-bold text-white">{correct}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                    <span className="text-slate-400">Mistakes</span>
                    <span className="font-bold text-white">{mistakes.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Best streak</span>
                    <span className="font-bold text-white">{bestStreak}</span>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Badges</p>
                  <Trophy className="h-4 w-4 text-amber-100" />
                </div>
                <div className="grid gap-2">
                  {badgeRules.map((badge) => {
                    const Icon = badge.icon;
                    const unlocked = badge.test(stats);
                    return (
                      <div key={badge.name} className={classNames("flex items-center gap-3 border p-3", unlocked ? "border-amber-200/30 bg-amber-100/10" : "border-white/10 bg-white/[0.03] opacity-55")}>
                        {unlocked ? <Icon className="h-5 w-5 text-amber-100" /> : <Lock className="h-5 w-5 text-slate-500" />}
                        <div>
                          <p className="text-sm font-semibold text-white">{badge.name}</p>
                          <p className="text-xs text-slate-400">{badge.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button onClick={() => setStudyOpen(true)} className="border border-white/10 bg-white/[0.05] p-5 text-left transition hover:border-amber-200/40 hover:bg-white/[0.08]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Open</p>
                    <p className="mt-1 font-semibold text-white">Study Cards</p>
                  </div>
                  <BookOpen className="h-5 w-5 text-amber-100" />
                </div>
              </button>
            </aside>
          </section>
        )}

        {isFinished && (
          <section className="grid flex-1 items-start gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center border border-amber-200/40 bg-amber-100/10">
                <Trophy className="h-8 w-8 text-amber-100" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100">Session complete</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-6xl">{mastery >= 85 ? "Excellent recall." : mastery >= 60 ? "Good foundation." : "Review mode needed."}</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Final score: <span className="font-bold text-amber-100">{score}</span>. The student got <span className="font-bold text-white">{correct}</span> out of <span className="font-bold text-white">{rounds.length}</span> missions correct.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mastery</p>
                  <p className="mt-2 text-3xl font-bold text-white">{mastery}%</p>
                </div>
                <div className="border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Best Streak</p>
                  <p className="mt-2 text-3xl font-bold text-white">{bestStreak}</p>
                </div>
                <div className="border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Badges</p>
                  <p className="mt-2 text-3xl font-bold text-white">{unlockedBadges.length}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => startGame("challenge")} className="border border-amber-200/50 bg-amber-200 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-100">
                  Play Again
                </button>
                <button onClick={resetGame} className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/[0.09]">
                  <RotateCcw className="h-4 w-4" /> Reset
                </button>
                <button onClick={() => setStudyOpen(true)} className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/[0.09]">
                  <BookOpen className="h-4 w-4" /> Review Cards
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Personalized Review</p>
              <h3 className="mt-3 font-serif text-3xl text-white">What to review next</h3>
              {mistakes.length === 0 ? (
                <div className="mt-6 border border-emerald-300/30 bg-emerald-300/10 p-5">
                  <p className="font-semibold text-emerald-100">Perfect performance.</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Move to oral production: ask the student to create 2 original questions with each question word.</p>
                </div>
              ) : (
                <div className="mt-6 grid gap-3">
                  {mistakes.map((mistake, i) => (
                    <div key={`${mistake.id}-${i}`} className="border border-white/10 bg-slate-950/30 p-4">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">{mistake.prompt}</p>
                          <p className="mt-2 text-xs text-slate-400">Your answer: <span className="text-rose-200">{mistake.selected}</span></p>
                        </div>
                        <span className="w-fit border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">{mistake.answer}</span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{mistake.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </section>
        )}
      </div>

      <AnimatePresence>
        {studyOpen && (
          <motion.div className="fixed inset-0 z-50 bg-slate-950/80 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 28, opacity: 0 }} className="mx-auto h-full max-w-6xl overflow-hidden border border-white/10 bg-[#07111f] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-100">Memory Vault</p>
                  <h2 className="font-serif text-3xl text-white">Question Word Study Cards</h2>
                </div>
                <button onClick={() => setStudyOpen(false)} className="border border-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/[0.08]">Close</button>
              </div>
              <div className="h-[calc(100%-88px)] overflow-y-auto p-5 md:p-7">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {questionWords.map((item) => (
                    <div key={item.word} className="group border border-white/10 bg-white/[0.05] p-5 transition hover:border-amber-200/40 hover:bg-white/[0.08]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-2xl font-black tracking-[0.08em] text-white">{item.word}</p>
                          <p className="mt-1 text-sm text-amber-100">{item.pt}</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center border border-amber-200/30 bg-amber-100/10">
                          <Brain className="h-5 w-5 text-amber-100" />
                        </div>
                      </div>
                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Use it to ask about</p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">{item.asks}</p>
                      </div>
                      <div className="mt-4 border border-white/10 bg-slate-950/30 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Memory clue</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.clue}</p>
                      </div>
                      <p className="mt-4 text-sm italic leading-6 text-slate-300">“{item.example}”</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
