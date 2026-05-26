<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Question Words Memory Game | MD Talk</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Raleway:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy: #0B1D3A;
      --navy-deep: #050D1A;
      --navy-mid: #0F2645;
      --gold: #C4A45A;
      --gold-light: #D4BA7A;
      --off-white: #F6F4EF;
      --text-body: #E8E2D8;
      --text-muted: #A8A39D;
      --green: #88D498;
      --red: #E78A8A;
      --border: rgba(246, 244, 239, 0.14);
      --glass: rgba(255,255,255,0.055);
      --glass-strong: rgba(255,255,255,0.095);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      font-family: 'Raleway', sans-serif;
      color: var(--off-white);
      background:
        radial-gradient(circle at 15% 10%, rgba(196, 164, 90, 0.24), transparent 28%),
        radial-gradient(circle at 85% 12%, rgba(80, 139, 204, 0.17), transparent 28%),
        linear-gradient(135deg, #050D1A 0%, #0B1D3A 48%, #06101E 100%);
      overflow-x: hidden;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%);
      pointer-events: none;
    }

    .app {
      position: relative;
      width: min(1220px, calc(100% - 32px));
      margin: 0 auto;
      padding: 34px 0 46px;
    }

    .topbar {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 28px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 28px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border: 1px solid rgba(196,164,90,0.38);
      background: rgba(196,164,90,0.10);
      color: var(--gold-light);
      text-transform: uppercase;
      letter-spacing: 0.28em;
      font-size: 11px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    h1, h2, h3 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 700;
      letter-spacing: -0.025em;
    }

    h1 {
      font-size: clamp(48px, 7vw, 88px);
      line-height: 0.9;
    }

    .subtitle {
      max-width: 710px;
      margin-top: 14px;
      color: rgba(246,244,239,0.72);
      line-height: 1.75;
      font-size: 15px;
    }

    .score-panel {
      min-width: 390px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .stat {
      border: 1px solid var(--border);
      background: var(--glass);
      padding: 16px 12px;
      text-align: center;
      backdrop-filter: blur(18px);
    }

    .stat span {
      display: block;
      color: var(--text-muted);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.22em;
    }

    .stat strong {
      display: block;
      margin-top: 7px;
      color: var(--gold-light);
      font-size: 26px;
    }

    .screen {
      display: none;
      animation: fadeUp .45s ease both;
    }

    .screen.active {
      display: block;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .intro-grid {
      min-height: 630px;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 26px;
      align-items: center;
    }

    .hero-card, .game-card, .side-card, .final-card, .review-card {
      border: 1px solid var(--border);
      background: var(--glass);
      backdrop-filter: blur(22px);
      box-shadow: 0 30px 80px rgba(0,0,0,0.28);
    }

    .hero-card {
      padding: clamp(30px, 5vw, 56px);
    }

    .hero-icon {
      width: 64px;
      height: 64px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(196,164,90,0.35);
      background: rgba(196,164,90,0.10);
      color: var(--gold-light);
      font-size: 28px;
      margin-bottom: 24px;
    }

    .hero-card h2 {
      font-size: clamp(40px, 5.8vw, 72px);
      line-height: 0.95;
    }

    .hero-card p {
      margin-top: 20px;
      color: rgba(246,244,239,0.73);
      line-height: 1.9;
      font-size: 16px;
    }

    .button-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 34px;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border-radius: 0;
    }

    .btn {
      border: 1px solid rgba(196,164,90,0.45);
      padding: 18px 18px;
      text-align: left;
      transition: .25s ease;
      min-height: 98px;
    }

    .btn.primary {
      background: var(--gold-light);
      color: #07111F;
    }

    .btn.secondary {
      background: rgba(255,255,255,0.055);
      color: var(--off-white);
      border-color: var(--border);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 18px 38px rgba(0,0,0,0.22);
    }

    .btn .label {
      display: block;
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.18em;
    }

    .btn .note {
      display: block;
      margin-top: 8px;
      font-size: 13px;
      line-height: 1.55;
      opacity: 0.78;
    }

    .vault {
      display: grid;
      gap: 16px;
    }

    .side-card {
      padding: 26px;
    }

    .side-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      color: var(--gold-light);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .word-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .mini-word {
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.045);
      padding: 13px;
      min-height: 72px;
    }

    .mini-word strong {
      display: block;
      font-size: 14px;
      letter-spacing: 0.08em;
    }

    .mini-word span {
      display: block;
      margin-top: 6px;
      color: var(--text-muted);
      font-size: 12px;
    }

    .teacher-note {
      border: 1px solid rgba(196,164,90,0.25);
      background: rgba(196,164,90,0.075);
      padding: 24px;
      color: rgba(246,244,239,0.78);
      line-height: 1.75;
      font-size: 14px;
    }

    .teacher-note strong {
      display: block;
      color: var(--gold-light);
      text-transform: uppercase;
      letter-spacing: 0.22em;
      font-size: 12px;
      margin-bottom: 10px;
    }

    .game-layout {
      display: grid;
      grid-template-columns: 0.74fr 0.26fr;
      gap: 24px;
      align-items: start;
    }

    .progress-shell {
      height: 8px;
      background: rgba(255,255,255,0.09);
      margin-bottom: 18px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--gold), var(--gold-light));
      transition: width .35s ease;
    }

    .game-card {
      padding: clamp(26px, 4vw, 46px);
    }

    .mission-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 28px;
    }

    .mission-kicker {
      color: var(--gold-light);
      text-transform: uppercase;
      letter-spacing: 0.28em;
      font-size: 12px;
      font-weight: 800;
    }

    .mission-header h2 {
      margin-top: 9px;
      font-size: clamp(34px, 5vw, 58px);
      line-height: 0.95;
    }

    .level-tag {
      white-space: nowrap;
      border: 1px solid var(--border);
      background: rgba(5,13,26,0.35);
      padding: 11px 13px;
      color: rgba(246,244,239,0.72);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }

    .sentence-box {
      border: 1px solid rgba(196,164,90,0.23);
      background: rgba(5,13,26,0.42);
      padding: clamp(24px, 4vw, 38px);
    }

    .sentence-box span {
      display: block;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.22em;
      font-size: 11px;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .sentence-box .prompt {
      font-size: clamp(30px, 4.2vw, 56px);
      font-weight: 800;
      line-height: 1.08;
    }

    .sentence-box .translation {
      margin-top: 18px;
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.7;
    }

    .options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 22px;
    }

    .option {
      min-height: 86px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.045);
      color: var(--off-white);
      padding: 20px;
      transition: .22s ease;
      text-align: left;
    }

    .option:hover:not(:disabled) {
      border-color: rgba(196,164,90,0.55);
      background: rgba(255,255,255,0.085);
      transform: translateY(-1px);
    }

    .option strong {
      font-size: 20px;
      letter-spacing: 0.08em;
    }

    .option.correct {
      border-color: rgba(136,212,152,0.75);
      background: rgba(136,212,152,0.13);
    }

    .option.wrong {
      border-color: rgba(231,138,138,0.75);
      background: rgba(231,138,138,0.13);
    }

    .option.muted {
      opacity: 0.42;
      background: rgba(255,255,255,0.018);
    }

    .feedback {
      display: none;
      margin-top: 22px;
      border: 1px solid var(--border);
      background: rgba(5,13,26,0.45);
      padding: 22px;
      animation: fadeUp .3s ease both;
    }

    .feedback.show {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
    }

    .feedback strong {
      display: block;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      font-size: 12px;
      margin-bottom: 8px;
    }

    .feedback.correct strong { color: var(--green); }
    .feedback.wrong strong { color: var(--red); }

    .feedback p {
      color: rgba(246,244,239,0.78);
      line-height: 1.7;
      font-size: 14px;
    }

    .next-btn, .small-btn, .reset-btn {
      border: 1px solid rgba(196,164,90,0.48);
      background: var(--gold-light);
      color: #07111F;
      padding: 13px 18px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 12px;
      transition: .22s ease;
      white-space: nowrap;
    }

    .next-btn:hover, .small-btn:hover, .reset-btn:hover {
      transform: translateY(-1px);
      filter: brightness(1.04);
    }

    .sidebar {
      display: grid;
      gap: 14px;
    }

    .live-list {
      display: grid;
      gap: 0;
    }

    .live-row {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--border);
      padding: 13px 0;
      color: var(--text-muted);
      font-size: 14px;
    }

    .live-row:last-child { border-bottom: 0; }
    .live-row strong { color: var(--off-white); }

    .badge-list {
      display: grid;
      gap: 9px;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 12px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.035);
      padding: 12px;
      opacity: .55;
    }

    .badge.unlocked {
      border-color: rgba(196,164,90,0.35);
      background: rgba(196,164,90,0.10);
      opacity: 1;
    }

    .badge .icon {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      border: 1px solid var(--border);
      color: var(--gold-light);
      flex: 0 0 auto;
    }

    .badge strong {
      display: block;
      font-size: 13px;
    }

    .badge span {
      display: block;
      margin-top: 3px;
      color: var(--text-muted);
      font-size: 11px;
      line-height: 1.35;
    }

    .open-vault {
      width: 100%;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.052);
      color: var(--off-white);
      padding: 21px;
      text-align: left;
      transition: .22s ease;
    }

    .open-vault:hover {
      border-color: rgba(196,164,90,0.45);
      background: rgba(255,255,255,0.085);
    }

    .open-vault span {
      display: block;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.22em;
      font-size: 11px;
      font-weight: 800;
      margin-bottom: 6px;
    }

    .open-vault strong {
      font-size: 16px;
    }

    .final-grid {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      gap: 24px;
      align-items: start;
    }

    .final-card, .review-card {
      padding: clamp(26px, 4vw, 46px);
    }

    .final-card h2 {
      margin-top: 12px;
      font-size: clamp(42px, 6vw, 76px);
      line-height: 0.9;
    }

    .final-card p {
      margin-top: 20px;
      color: rgba(246,244,239,0.74);
      line-height: 1.8;
    }

    .final-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 30px;
    }

    .final-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 11px;
      margin-top: 30px;
    }

    .ghost-btn {
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.052);
      color: var(--off-white);
      padding: 13px 18px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 12px;
      transition: .22s ease;
    }

    .ghost-btn:hover {
      background: rgba(255,255,255,0.09);
      transform: translateY(-1px);
    }

    .mistake-list {
      margin-top: 22px;
      display: grid;
      gap: 12px;
    }

    .mistake {
      border: 1px solid var(--border);
      background: rgba(5,13,26,0.35);
      padding: 17px;
    }

    .mistake-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 14px;
    }

    .mistake-question {
      font-weight: 700;
      line-height: 1.5;
    }

    .answer-tag {
      border: 1px solid rgba(136,212,152,0.35);
      background: rgba(136,212,152,0.11);
      color: #C7F2D1;
      padding: 6px 9px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.12em;
    }

    .mistake p {
      margin-top: 12px;
      color: rgba(246,244,239,0.72);
      line-height: 1.65;
      font-size: 14px;
    }

    .modal {
      position: fixed;
      inset: 0;
      display: none;
      background: rgba(5,13,26,0.86);
      backdrop-filter: blur(18px);
      z-index: 20;
      padding: 18px;
    }

    .modal.show {
      display: block;
      animation: fadeUp .26s ease both;
    }

    .modal-box {
      width: min(1160px, 100%);
      height: 100%;
      margin: 0 auto;
      border: 1px solid var(--border);
      background: #07111F;
      box-shadow: 0 40px 100px rgba(0,0,0,0.45);
      display: flex;
      flex-direction: column;
    }

    .modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      padding: 22px;
      border-bottom: 1px solid var(--border);
    }

    .modal-head h2 {
      font-size: 36px;
    }

    .modal-content {
      padding: 22px;
      overflow-y: auto;
    }

    .study-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .study-card {
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.052);
      padding: 20px;
      transition: .22s ease;
    }

    .study-card:hover {
      border-color: rgba(196,164,90,0.45);
      background: rgba(255,255,255,0.08);
      transform: translateY(-2px);
    }

    .study-word {
      display: flex;
      justify-content: space-between;
      gap: 14px;
      align-items: flex-start;
    }

    .study-word strong {
      font-size: 25px;
      letter-spacing: 0.08em;
    }

    .study-word span {
      color: var(--gold-light);
      font-size: 13px;
    }

    .study-card .label {
      margin-top: 18px;
      padding-top: 15px;
      border-top: 1px solid var(--border);
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 10px;
      font-weight: 800;
    }

    .study-card p {
      margin-top: 9px;
      color: rgba(246,244,239,0.75);
      line-height: 1.6;
      font-size: 14px;
    }

    .study-example {
      margin-top: 14px;
      border: 1px solid var(--border);
      background: rgba(5,13,26,0.38);
      padding: 13px;
      color: rgba(246,244,239,0.76);
      font-size: 13px;
      line-height: 1.55;
      font-style: italic;
    }

    @media (max-width: 1000px) {
      .topbar, .intro-grid, .game-layout, .final-grid {
        grid-template-columns: 1fr;
        display: grid;
      }

      .topbar {
        display: grid;
      }

      .score-panel {
        min-width: 0;
        width: 100%;
      }

      .study-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .app {
        width: min(100% - 22px, 1220px);
        padding-top: 20px;
      }

      .button-grid, .options, .word-grid, .final-stats, .study-grid, .score-panel {
        grid-template-columns: 1fr;
      }

      .mission-header, .feedback.show, .modal-head {
        flex-direction: column;
      }

      .level-tag {
        white-space: normal;
      }

      .modal {
        padding: 8px;
      }
    }
  </style>
</head>
<body>
  <main class="app">
    <header class="topbar">
      <section>
        <div class="eyebrow">✦ MD Talk Memory Game</div>
        <h1>Question Words</h1>
        <p class="subtitle">
          A sophisticated memorization game designed to help students recognize, choose and internalize English question words through fast decisions, immediate feedback and review cards.
        </p>
      </section>

      <section class="score-panel" aria-label="Score panel">
        <div class="stat"><span>Score</span><strong id="score">0</strong></div>
        <div class="stat"><span>Streak</span><strong id="streak">0</strong></div>
        <div class="stat"><span>Mastery</span><strong id="mastery">0%</strong></div>
      </section>
    </header>

    <section id="introScreen" class="screen active">
      <div class="intro-grid">
        <article class="hero-card">
          <div class="hero-icon">?</div>
          <h2>Train recognition before translation.</h2>
          <p>
            The student will not only translate question words. They will connect each word to its communicative function: person, place, time, reason, quantity, duration, frequency, distance, possession and choice.
          </p>

          <div class="button-grid">
            <button class="btn primary" onclick="startGame('guided')">
              <span class="label">Guided Mode</span>
              <span class="note">Ordered progression: foundation → meaning → precision → challenge.</span>
            </button>
            <button class="btn secondary" onclick="startGame('challenge')">
              <span class="label">Challenge Mode</span>
              <span class="note">Random order for stronger recall and memory pressure.</span>
            </button>
          </div>
        </article>

        <aside class="vault">
          <div class="side-card">
            <div class="side-title"><span>Memory Vault</span><span>14 Cards</span></div>
            <div class="word-grid" id="miniWordGrid"></div>
          </div>

          <div class="teacher-note">
            <strong>Teacher Note</strong>
            Use this game after presenting the meaning of each word. Then ask the student to explain why the correct answer is correct. That final step transforms recognition into active language awareness.
          </div>
        </aside>
      </div>
    </section>

    <section id="gameScreen" class="screen">
      <div class="game-layout">
        <section>
          <div class="progress-shell"><div class="progress-bar" id="progressBar"></div></div>

          <article class="game-card">
            <div class="mission-header">
              <div>
                <p class="mission-kicker" id="missionKicker">Mission 1 / 16</p>
                <h2>Complete the question</h2>
              </div>
              <div class="level-tag" id="levelTag">Foundation · Guided</div>
            </div>

            <div class="sentence-box">
              <span>Sentence</span>
              <div class="prompt" id="promptText">____ is your name?</div>
              <div class="translation" id="translationText">Qual é o seu nome?</div>
            </div>

            <div class="options" id="optionsBox"></div>

            <div class="feedback" id="feedbackBox">
              <div>
                <strong id="feedbackTitle">Correct</strong>
                <p id="feedbackText">Use WHAT to ask for information, names, things or ideas.</p>
              </div>
              <button class="next-btn" onclick="nextMission()" id="nextButton">Next</button>
            </div>
          </article>
        </section>

        <aside class="sidebar">
          <div class="side-card">
            <div class="side-title"><span>Live Performance</span><span>●</span></div>
            <div class="live-list">
              <div class="live-row"><span>Correct</span><strong id="correctLive">0</strong></div>
              <div class="live-row"><span>Mistakes</span><strong id="mistakesLive">0</strong></div>
              <div class="live-row"><span>Best streak</span><strong id="bestStreakLive">0</strong></div>
            </div>
          </div>

          <div class="side-card">
            <div class="side-title"><span>Badges</span><span>🏆</span></div>
            <div class="badge-list" id="badgeList"></div>
          </div>

          <button class="open-vault" onclick="openVault()">
            <span>Open</span>
            <strong>Study Cards</strong>
          </button>
        </aside>
      </div>
    </section>

    <section id="finalScreen" class="screen">
      <div class="final-grid">
        <article class="final-card">
          <div class="hero-icon">🏆</div>
          <p class="mission-kicker">Session Complete</p>
          <h2 id="finalTitle">Excellent recall.</h2>
          <p id="finalText">Final score: 0. The student got 0 out of 16 missions correct.</p>

          <div class="final-stats">
            <div class="stat"><span>Mastery</span><strong id="finalMastery">0%</strong></div>
            <div class="stat"><span>Best Streak</span><strong id="finalBestStreak">0</strong></div>
            <div class="stat"><span>Badges</span><strong id="finalBadges">0</strong></div>
          </div>

          <div class="final-actions">
            <button class="small-btn" onclick="startGame('challenge')">Play Again</button>
            <button class="ghost-btn" onclick="resetGame()">Reset</button>
            <button class="ghost-btn" onclick="openVault()">Review Cards</button>
          </div>
        </article>

        <article class="review-card">
          <p class="mission-kicker">Personalized Review</p>
          <h2 style="font-size:42px;margin-top:10px;">What to review next</h2>
          <div class="mistake-list" id="mistakeList"></div>
        </article>
      </div>
    </section>
  </main>

  <section class="modal" id="vaultModal" aria-label="Study cards modal">
    <div class="modal-box">
      <div class="modal-head">
        <div>
          <p class="mission-kicker">Memory Vault</p>
          <h2>Question Word Study Cards</h2>
        </div>
        <button class="ghost-btn" onclick="closeVault()">Close</button>
      </div>
      <div class="modal-content">
        <div class="study-grid" id="studyGrid"></div>
      </div>
    </div>
  </section>

  <script>
    const questionWords = [
      { word: "WHAT", asks: "information, things, actions or ideas", pt: "o quê / qual", clue: "Think: object, idea, activity.", example: "What do you do after class?" },
      { word: "WHERE", asks: "place or location", pt: "onde", clue: "Think: place, room, city, hospital, clinic.", example: "Where does the patient live?" },
      { word: "WHEN", asks: "time, date or moment", pt: "quando", clue: "Think: clock, calendar, schedule.", example: "When is your next appointment?" },
      { word: "WHY", asks: "reason or cause", pt: "por que", clue: "Think: reason, explanation, cause.", example: "Why did you choose this specialty?" },
      { word: "WHO", asks: "a person", pt: "quem", clue: "Think: person, doctor, student, patient.", example: "Who is your English teacher?" },
      { word: "WHOSE", asks: "possession or ownership", pt: "de quem", clue: "Think: owner, belonging, possession.", example: "Whose notebook is this?" },
      { word: "WHICH", asks: "choice from a limited group", pt: "qual / quais", clue: "Think: option A or option B.", example: "Which option is better for you?" },
      { word: "HOW", asks: "manner, method, condition or quality", pt: "como", clue: "Think: process, condition, way.", example: "How are you feeling today?" },
      { word: "HOW MANY", asks: "quantity with countable nouns", pt: "quantos / quantas", clue: "Think: numbers + plural countable things.", example: "How many classes do you have this week?" },
      { word: "HOW MUCH", asks: "quantity, price or uncountable nouns", pt: "quanto / quanta / quanto custa", clue: "Think: money, water, time as amount, information.", example: "How much time do you need?" },
      { word: "HOW LONG", asks: "duration or length of time", pt: "por quanto tempo / quanto tempo", clue: "Think: duration from start to finish.", example: "How long have you studied English?" },
      { word: "HOW OFTEN", asks: "frequency", pt: "com que frequência", clue: "Think: always, usually, sometimes, once a week.", example: "How often do you review vocabulary?" },
      { word: "HOW FAR", asks: "distance", pt: "quão longe / qual a distância", clue: "Think: kilometers, distance, location gap.", example: "How far is the hospital from here?" },
      { word: "HOW OLD", asks: "age", pt: "quantos anos", clue: "Think: age of a person, building, object, or institution.", example: "How old is your son?" }
    ];

    const missions = [
      { id: 1, level: "Foundation", prompt: "____ is your name?", answer: "WHAT", options: ["WHAT", "WHO", "WHERE", "WHEN"], explanation: "Use WHAT to ask for information, names, things or ideas.", translation: "Qual é o seu nome?" },
      { id: 2, level: "Foundation", prompt: "____ are you from?", answer: "WHERE", options: ["WHEN", "WHERE", "WHY", "WHOSE"], explanation: "Use WHERE to ask about place or origin.", translation: "De onde você é?" },
      { id: 3, level: "Foundation", prompt: "____ is your appointment?", answer: "WHEN", options: ["WHEN", "WHY", "WHICH", "HOW"], explanation: "Use WHEN to ask about time, date or moment.", translation: "Quando é sua consulta?" },
      { id: 4, level: "Foundation", prompt: "____ is your favorite doctor?", answer: "WHO", options: ["WHO", "WHAT", "WHOSE", "WHERE"], explanation: "Use WHO when the answer is a person.", translation: "Quem é seu médico favorito?" },
      { id: 5, level: "Meaning", prompt: "____ did you cancel the class?", answer: "WHY", options: ["WHY", "WHEN", "WHERE", "WHICH"], explanation: "Use WHY to ask for the reason or cause of something.", translation: "Por que você cancelou a aula?" },
      { id: 6, level: "Meaning", prompt: "____ phone is ringing?", answer: "WHOSE", options: ["WHO", "WHOSE", "WHICH", "WHAT"], explanation: "Use WHOSE to ask about possession or ownership.", translation: "De quem é o telefone que está tocando?" },
      { id: 7, level: "Meaning", prompt: "____ course do you prefer: Medical English or Business English?", answer: "WHICH", options: ["WHAT", "WHICH", "WHY", "HOW"], explanation: "Use WHICH when there is a limited set of options.", translation: "Qual curso você prefere: inglês médico ou inglês para negócios?" },
      { id: 8, level: "Meaning", prompt: "____ are you feeling after the night shift?", answer: "HOW", options: ["HOW", "WHAT", "WHERE", "WHO"], explanation: "Use HOW to ask about condition, manner, process or quality.", translation: "Como você está se sentindo depois do plantão noturno?" },
      { id: 9, level: "Precision", prompt: "____ patients did you see today?", answer: "HOW MANY", options: ["HOW MUCH", "HOW MANY", "HOW OFTEN", "HOW LONG"], explanation: "Use HOW MANY with countable plural nouns, such as patients, books, classes, exams.", translation: "Quantos pacientes você atendeu hoje?" },
      { id: 10, level: "Precision", prompt: "____ water do you drink every day?", answer: "HOW MUCH", options: ["HOW MANY", "HOW MUCH", "HOW FAR", "HOW OLD"], explanation: "Use HOW MUCH with uncountable nouns, prices and amounts.", translation: "Quanta água você bebe todos os dias?" },
      { id: 11, level: "Precision", prompt: "____ have you worked at this hospital?", answer: "HOW LONG", options: ["HOW OFTEN", "HOW LONG", "HOW FAR", "HOW MUCH"], explanation: "Use HOW LONG to ask about duration.", translation: "Há quanto tempo você trabalha neste hospital?" },
      { id: 12, level: "Precision", prompt: "____ do you practice English?", answer: "HOW OFTEN", options: ["HOW OLD", "HOW OFTEN", "HOW FAR", "HOW LONG"], explanation: "Use HOW OFTEN to ask about frequency.", translation: "Com que frequência você pratica inglês?" },
      { id: 13, level: "Challenge", prompt: "____ is your clinic from the airport?", answer: "HOW FAR", options: ["HOW FAR", "HOW LONG", "WHERE", "WHEN"], explanation: "Use HOW FAR to ask about distance.", translation: "A que distância sua clínica fica do aeroporto?" },
      { id: 14, level: "Challenge", prompt: "____ is your daughter? She looks very young.", answer: "HOW OLD", options: ["HOW LONG", "HOW MANY", "HOW OLD", "WHOSE"], explanation: "Use HOW OLD to ask about age.", translation: "Quantos anos tem sua filha? Ela parece muito jovem." },
      { id: 15, level: "Challenge", prompt: "____ did the patient arrive late? Because of traffic.", answer: "WHY", options: ["WHEN", "WHY", "WHERE", "HOW MANY"], explanation: "The answer gives a reason, so the correct question word is WHY.", translation: "Por que o paciente chegou atrasado? Por causa do trânsito." },
      { id: 16, level: "Challenge", prompt: "____ document should I sign, this one or that one?", answer: "WHICH", options: ["WHOSE", "WHICH", "WHAT", "WHY"], explanation: "There are two specific options, so WHICH is more precise than WHAT.", translation: "Qual documento eu devo assinar, este ou aquele?" }
    ];

    const badges = [
      { name: "First Spark", icon: "✦", text: "Answered your first mission", test: () => state.totalAnswered >= 1 },
      { name: "Memory Streak", icon: "⚡", text: "Reached a 3-answer streak", test: () => state.bestStreak >= 3 },
      { name: "Precision Mode", icon: "◎", text: "Got 8 answers correct", test: () => state.correct >= 8 },
      { name: "Question Master", icon: "🏆", text: "Perfect score", test: () => state.correct === state.rounds.length && state.rounds.length > 0 }
    ];

    let state = {
      started: false,
      mode: "guided",
      rounds: [...missions],
      index: 0,
      selected: null,
      answered: false,
      correct: 0,
      streak: 0,
      bestStreak: 0,
      mistakes: [],
      totalAnswered: 0
    };

    function $(id) {
      return document.getElementById(id);
    }

    function shuffle(array) {
      return [...array].sort(() => Math.random() - 0.5);
    }

    function renderMiniWords() {
      const html = questionWords.slice(0, 12).map(item => `
        <div class="mini-word">
          <strong>${item.word}</strong>
          <span>${item.pt}</span>
        </div>
      `).join("");
      $("miniWordGrid").innerHTML = html;
    }

    function renderStudyCards() {
      const html = questionWords.map(item => `
        <article class="study-card">
          <div class="study-word">
            <div>
              <strong>${item.word}</strong><br>
              <span>${item.pt}</span>
            </div>
            <span>?</span>
          </div>
          <div class="label">Use it to ask about</div>
          <p>${item.asks}</p>
          <div class="label">Memory clue</div>
          <p>${item.clue}</p>
          <div class="study-example">“${item.example}”</div>
        </article>
      `).join("");
      $("studyGrid").innerHTML = html;
    }

    function renderBadges() {
      const html = badges.map(badge => {
        const unlocked = badge.test();
        return `
          <div class="badge ${unlocked ? 'unlocked' : ''}">
            <div class="icon">${unlocked ? badge.icon : '🔒'}</div>
            <div>
              <strong>${badge.name}</strong>
              <span>${badge.text}</span>
            </div>
          </div>
        `;
      }).join("");
      $("badgeList").innerHTML = html;
    }

    function updateStats() {
      const score = state.correct * 100 + state.bestStreak * 20;
      const mastery = state.rounds.length ? Math.round((state.correct / state.rounds.length) * 100) : 0;
      state.totalAnswered = state.answered ? state.index + 1 : state.index;

      $("score").textContent = score;
      $("streak").textContent = state.streak;
      $("mastery").textContent = mastery + "%";
      $("correctLive").textContent = state.correct;
      $("mistakesLive").textContent = state.mistakes.length;
      $("bestStreakLive").textContent = state.bestStreak;

      renderBadges();
    }

    function setScreen(screenId) {
      ["introScreen", "gameScreen", "finalScreen"].forEach(id => $(id).classList.remove("active"));
      $(screenId).classList.add("active");
    }

    function startGame(mode) {
      state = {
        started: true,
        mode,
        rounds: mode === "challenge" ? shuffle(missions) : [...missions],
        index: 0,
        selected: null,
        answered: false,
        correct: 0,
        streak: 0,
        bestStreak: 0,
        mistakes: [],
        totalAnswered: 0
      };
      setScreen("gameScreen");
      renderMission();
      updateStats();
    }

    function resetGame() {
      state = {
        started: false,
        mode: "guided",
        rounds: [...missions],
        index: 0,
        selected: null,
        answered: false,
        correct: 0,
        streak: 0,
        bestStreak: 0,
        mistakes: [],
        totalAnswered: 0
      };
      setScreen("introScreen");
      updateStats();
    }

    function renderMission() {
      const current = state.rounds[state.index];
      if (!current) {
        renderFinal();
        return;
      }

      const progress = ((state.index + (state.answered ? 1 : 0)) / state.rounds.length) * 100;
      $("progressBar").style.width = progress + "%";
      $("missionKicker").textContent = `Mission ${state.index + 1} / ${state.rounds.length}`;
      $("levelTag").textContent = `${current.level} · ${state.mode === "challenge" ? "Random" : "Guided"}`;
      $("promptText").textContent = current.prompt;
      $("translationText").textContent = current.translation;
      $("feedbackBox").className = "feedback";
      $("feedbackTitle").textContent = "";
      $("feedbackText").textContent = "";
      $("nextButton").textContent = state.index + 1 === state.rounds.length ? "Finish" : "Next";

      const html = current.options.map(option => `
        <button class="option" onclick="chooseAnswer('${option.replace(/'/g, "\\'")}')">
          <strong>${option}</strong>
          <span>○</span>
        </button>
      `).join("");
      $("optionsBox").innerHTML = html;
      updateStats();
    }

    function chooseAnswer(option) {
      if (state.answered) return;

      const current = state.rounds[state.index];
      state.selected = option;
      state.answered = true;

      const isCorrect = option === current.answer;

      if (isCorrect) {
        state.correct += 1;
        state.streak += 1;
        state.bestStreak = Math.max(state.bestStreak, state.streak);
      } else {
        state.streak = 0;
        state.mistakes.push({ ...current, selected: option });
      }

      const optionButtons = Array.from(document.querySelectorAll(".option"));
      optionButtons.forEach(button => {
        const text = button.querySelector("strong").textContent;
        button.disabled = true;
        button.querySelector("span").textContent = "";

        if (text === current.answer) {
          button.classList.add("correct");
          button.querySelector("span").textContent = "✓";
        } else if (text === option && !isCorrect) {
          button.classList.add("wrong");
          button.querySelector("span").textContent = "✕";
        } else {
          button.classList.add("muted");
        }
      });

      $("feedbackBox").className = "feedback show " + (isCorrect ? "correct" : "wrong");
      $("feedbackTitle").textContent = isCorrect ? "Correct" : "Review this";
      $("feedbackText").textContent = current.explanation;
      $("progressBar").style.width = (((state.index + 1) / state.rounds.length) * 100) + "%";

      updateStats();
    }

    function nextMission() {
      state.index += 1;
      state.selected = null;
      state.answered = false;
      renderMission();
    }

    function renderFinal() {
      setScreen("finalScreen");
      const score = state.correct * 100 + state.bestStreak * 20;
      const mastery = Math.round((state.correct / state.rounds.length) * 100);
      const badgeCount = badges.filter(b => b.test()).length;

      let title = "Review mode needed.";
      if (mastery >= 85) title = "Excellent recall.";
      else if (mastery >= 60) title = "Good foundation.";

      $("finalTitle").textContent = title;
      $("finalText").innerHTML = `Final score: <strong style="color:var(--gold-light)">${score}</strong>. The student got <strong style="color:var(--off-white)">${state.correct}</strong> out of <strong style="color:var(--off-white)">${state.rounds.length}</strong> missions correct.`;
      $("finalMastery").textContent = mastery + "%";
      $("finalBestStreak").textContent = state.bestStreak;
      $("finalBadges").textContent = badgeCount;

      if (state.mistakes.length === 0) {
        $("mistakeList").innerHTML = `
          <div class="mistake" style="border-color:rgba(136,212,152,0.35); background:rgba(136,212,152,0.10);">
            <div class="mistake-question">Perfect performance.</div>
            <p>Move to oral production: ask the student to create 2 original questions with each question word.</p>
          </div>
        `;
      } else {
        $("mistakeList").innerHTML = state.mistakes.map(mistake => `
          <div class="mistake">
            <div class="mistake-top">
              <div>
                <div class="mistake-question">${mistake.prompt}</div>
                <p>Your answer: <span style="color:var(--red)">${mistake.selected}</span></p>
              </div>
              <span class="answer-tag">${mistake.answer}</span>
            </div>
            <p>${mistake.explanation}</p>
          </div>
        `).join("");
      }

      updateStats();
    }

    function openVault() {
      $("vaultModal").classList.add("show");
    }

    function closeVault() {
      $("vaultModal").classList.remove("show");
    }

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") closeVault();
    });

    renderMiniWords();
    renderStudyCards();
    renderBadges();
    updateStats();
  </script>
</body>
</html>
