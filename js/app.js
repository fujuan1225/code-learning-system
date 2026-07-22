// ===== Core App =====
const App = {
    // State
    state: null,
    currentWeek: 0,
    currentDay: 0,
    quizState: { current: 0, score: 0, answers: {}, wrong: [], startTime: 0 },

    // ===== Init =====
    init() {
        this.state = this.loadState();
        this.updateGreeting();
        this.renderHome();
        this.checkAchievements();
    },

    // ===== State Management =====
    loadState() {
        try {
            const s = localStorage.getItem('xiaok_learn_v2');
            if (s) return JSON.parse(s);
        } catch(e) {}
        return {
            currentWeek: 0,
            currentDay: 0,
            days: {},  // "w0d0": { learnDone: true, quizDone: true, score: 3, wrongIdx: [] }
            streak: 0,
            lastActiveDate: null,
            wrongBook: [],  // [{week, day, qIdx, userAns}]
            achievements: [],
            totalCorrect: 0,
            totalQuestions: 0
        };
    },

    saveState() {
        try { localStorage.setItem('xiaok_learn_v2', JSON.stringify(this.state)); } catch(e) {}
    },

    getDayKey(w, d) { return 'w' + w + 'd' + d; },

    getDayState(w, d) {
        const key = this.getDayKey(w, d);
        return this.state.days[key] || { learnDone: false, quizDone: false, score: 0, wrongIdx: [] };
    },

    setDayState(w, d, data) {
        const key = this.getDayKey(w, d);
        this.state.days[key] = { ...this.getDayState(w, d), ...data };
        this.saveState();
    },

    // ===== Navigation =====
    showPage(name) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + name).classList.add('active');

        const tabBar = document.getElementById('tab-bar');
        tabBar.style.display = ['home','progress','notebook','achievements'].includes(name) ? 'flex' : 'none';

        // Update tab active state
        document.querySelectorAll('.tab-item').forEach((t, i) => {
            const pages = ['home','progress','notebook','achievements'];
            t.classList.toggle('active', pages[i] === name);
        });

        window.scrollTo(0, 0);

        if (name === 'home') this.renderHome();
        if (name === 'progress') this.renderProgress();
        if (name === 'notebook') this.renderNotebook();
        if (name === 'achievements') this.renderAchievements();
    },

    // ===== Home Page =====
    renderHome() {
        const s = this.state;
        const w = s.currentWeek;
        const d = s.currentDay;
        const course = COURSE_DATA.weeks[w];
        const day = course.days[d];
        const ds = this.getDayState(w, d);

        // Week label
        document.getElementById('week-label').textContent = '📚 第' + (w+1) + '周 · ' + course.topic;
        const dayType = d < 5 ? 'Day ' + (d+1) + ' / 5' : '周末';
        document.getElementById('week-day-label').textContent = dayType;

        // Week progress
        let doneDays = 0;
        for (let i = 0; i < 5; i++) {
            const dds = this.getDayState(w, i);
            if (dds.learnDone && dds.quizDone) doneDays++;
        }
        document.getElementById('week-progress-fill').style.width = (doneDays / 5 * 100) + '%';

        // Calendar
        this.renderCalendar(w);

        // Today's tasks
        document.getElementById('learn-title').textContent = day.title;
        document.getElementById('learn-desc').textContent = day.desc;
        document.getElementById('quiz-title').textContent = '每日测验 · ' + day.title.replace(/^.*[：:]/, '');

        // Learn badge
        const taskLearn = document.getElementById('task-learn');
        const badgeLearn = document.getElementById('badge-learn');
        if (ds.learnDone) {
            taskLearn.classList.add('completed');
            badgeLearn.textContent = '已完成 ✓';
            badgeLearn.className = 'task-card-badge badge-done';
        } else {
            taskLearn.classList.remove('completed');
            badgeLearn.textContent = '待学习';
            badgeLearn.className = 'task-card-badge badge-todo';
        }

        // Quiz badge
        const taskQuiz = document.getElementById('task-quiz');
        const badgeQuiz = document.getElementById('badge-quiz');
        if (ds.quizDone) {
            taskQuiz.classList.add('completed');
            badgeQuiz.textContent = ds.score + '/3 已完成 ✓';
            badgeQuiz.className = 'task-card-badge badge-done';
        } else {
            taskQuiz.classList.remove('completed');
            badgeQuiz.textContent = '待完成';
            badgeQuiz.className = 'task-card-badge badge-todo';
        }

        // Review badge
        const taskReview = document.getElementById('task-review');
        const badgeReview = document.getElementById('badge-review');
        const reviewDesc = document.getElementById('review-desc');
        const todayWrong = ds.wrongIdx || [];
        if (todayWrong.length > 0) {
            taskReview.classList.remove('completed');
            badgeReview.textContent = todayWrong.length + ' 道错题';
            badgeReview.className = 'task-card-badge badge-todo';
            reviewDesc.textContent = '你有 ' + todayWrong.length + ' 道错题需要复习～';
        } else if (ds.quizDone && todayWrong.length === 0) {
            taskReview.classList.add('completed');
            badgeReview.textContent = '无错题 🎉';
            badgeReview.className = 'task-card-badge badge-done';
            reviewDesc.textContent = '全部答对了，没有错题～';
        } else {
            taskReview.classList.remove('completed');
            badgeReview.textContent = '待复习';
            badgeReview.className = 'task-card-badge badge-todo';
            reviewDesc.textContent = '完成测验后，错题会出现在这里～';
        }

        // Stats
        const totalDays = Object.keys(s.days).filter(k => s.days[k].learnDone && s.days[k].quizDone).length;
        document.getElementById('stat-days').textContent = totalDays;
        document.getElementById('stat-correct').textContent = s.totalCorrect;
        const rate = s.totalQuestions > 0 ? Math.round(s.totalCorrect / s.totalQuestions * 100) : 0;
        document.getElementById('stat-rate').textContent = rate + '%';

        // Streak
        document.getElementById('streak-count').textContent = s.streak;

        // Joke card
        const jokeCard = document.getElementById('home-joke-card');
        const jokeTitle = document.getElementById('joke-section-title');
        if (ds.learnDone && ds.quizDone) {
            const joke = this.getTodayJoke();
            document.getElementById('home-joke-q').textContent = joke.q;
            document.getElementById('home-joke-a').textContent = joke.a;
            jokeCard.classList.add('show');
            jokeTitle.style.display = 'flex';
        } else {
            jokeCard.classList.remove('show');
            jokeTitle.style.display = 'none';
        }
    },

    renderCalendar(weekIdx) {
        const strip = document.getElementById('calendar-strip');
        const weekdays = ['一','二','三','四','五','六','日'];
        strip.innerHTML = '';
        for (let i = 0; i < 7; i++) {
            const ds = i < 5 ? this.getDayState(weekIdx, i) : {};
            const isDone = ds.learnDone && ds.quizDone;
            const isToday = i === this.state.currentDay && weekIdx === this.state.currentWeek;
            const div = document.createElement('div');
            div.className = 'cal-day' + (isDone ? ' done' : '') + (isToday && !isDone ? ' today' : '');
            div.innerHTML = '<div class="cal-weekday">' + weekdays[i] + '</div>' +
                '<div class="cal-date">' + (i < 5 ? (i+1) : (i === 5 ? '六' : '日')) + '</div>' +
                '<div class="cal-dot"></div>';
            strip.appendChild(div);
        }
    },

    // ===== Learn Page =====
    goLearn() {
        const w = this.state.currentWeek;
        const d = this.state.currentDay;
        const course = COURSE_DATA.weeks[w];
        const day = course.days[d];

        document.getElementById('learn-page-title').textContent = '📖 ' + day.title;
        document.getElementById('learn-page-subtitle').textContent =
            '第' + (w+1) + '周 · ' + course.topic + ' · ' + day.cards.length + '张卡片';

        // Render dots
        const dotsEl = document.getElementById('learn-dots');
        dotsEl.innerHTML = '';
        day.cards.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'learn-dot' + (i === 0 ? ' active' : '');
            dot.id = 'ldot-' + i;
            dotsEl.appendChild(dot);
        });

        // Render cards
        const container = document.getElementById('learn-cards');
        container.innerHTML = '';
        day.cards.forEach((card, i) => {
            const el = document.createElement('div');
            el.className = 'knowledge-card';
            el.id = 'kcard-' + i;
            let html = '<span class="kc-tag">' + card.tag + '</span>';
            html += '<div class="kc-title">' + card.title + '</div>';
            html += '<div class="kc-explain">' + card.explain + '</div>';
            if (card.code) {
                html += '<div class="code-block">' + card.code + '</div>';
            }
            if (card.analogy) {
                html += '<div class="analogy-box"><div class="label">💡 大白话理解</div><div class="content">' + card.analogy + '</div></div>';
            }
            if (card.tip) {
                html += '<div class="tip-box"><span class="icon">⚡</span><span>' + card.tip + '</span></div>';
            }
            el.innerHTML = html;
            container.appendChild(el);
        });

        // Add scroll hint at end
        const hint = document.createElement('div');
        hint.className = 'scroll-hint';
        hint.id = 'learn-complete-hint';
        hint.style.display = 'none';
        hint.textContent = '✅ 卡片都看完啦！点下方按钮去做测验吧～';
        container.appendChild(hint);

        this.showPage('learn');
        this.setupScrollTracking(day.cards.length);
    },

    setupScrollTracking(cardCount) {
        const seen = new Set();
        const check = () => {
            for (let i = 0; i < cardCount; i++) {
                const card = document.getElementById('kcard-' + i);
                if (!card) continue;
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
                    seen.add(i);
                    const dot = document.getElementById('ldot-' + i);
                    if (dot) { dot.classList.add('done'); dot.classList.remove('active'); }
                }
            }
            // Active dot
            let closest = 0, minDist = Infinity;
            for (let i = 0; i < cardCount; i++) {
                const card = document.getElementById('kcard-' + i);
                if (!card) continue;
                const rect = card.getBoundingClientRect();
                const dist = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
                if (dist < minDist) { minDist = dist; closest = i; }
            }
            for (let i = 0; i < cardCount; i++) {
                const dot = document.getElementById('ldot-' + i);
                if (dot && !seen.has(i)) dot.classList.remove('active');
            }
            if (!seen.has(closest)) {
                const dot = document.getElementById('ldot-' + closest);
                if (dot) dot.classList.add('active');
            }
            // All seen
            if (seen.size === cardCount) {
                const hint = document.getElementById('learn-complete-hint');
                if (hint) hint.style.display = 'block';
            }
        };
        window.addEventListener('scroll', check);
        setTimeout(check, 300);
    },

    finishLearn() {
        const w = this.state.currentWeek, d = this.state.currentDay;
        const ds = this.getDayState(w, d);
        this.setDayState(w, d, { learnDone: true });
        this.updateStreak();
        this.showPage('home');
        if (!ds.quizDone) {
            this.showToast('📖', '学习完成！', '太棒啦！接下来去做每日测验吧～');
        } else {
            this.checkAllDoneAndJoke();
        }
        this.checkAchievements();
    },

    finishLearnAndQuiz() {
        this.setDayState(this.state.currentWeek, this.state.currentDay, { learnDone: true });
        this.updateStreak();
        this.goQuiz();
    },

    // ===== Quiz =====
    goQuiz() {
        const w = this.state.currentWeek, d = this.state.currentDay;
        const course = COURSE_DATA.weeks[w];
        const day = course.days[d];
        const quiz = day.quiz;

        document.getElementById('quiz-page-title').textContent = '✏️ ' + day.title;

        // Reset quiz state
        this.quizState = { current: 0, score: 0, answers: {}, wrong: [], startTime: Date.now() };

        // Render all questions (show only first)
        const container = document.getElementById('quiz-questions');
        container.innerHTML = '';
        quiz.forEach((q, qi) => {
            const el = document.createElement('div');
            el.className = 'question-card animate-in';
            el.id = 'q-' + qi;
            el.style.display = qi === 0 ? 'block' : 'none';

            let html = '<div class="q-number">🌸 第 ' + (qi+1) + ' 题（' + q.type + '）</div>';
            html += '<div class="q-text">' + q.question + '</div>';
            if (q.code) html += '<div class="q-code">' + q.code + '</div>';
            html += '<div class="options">';
            q.options.forEach((opt, oi) => {
                const letter = String.fromCharCode(65 + oi);
                html += '<div class="option" onclick="App.selectAnswer(' + qi + ',' + oi + ')">';
                html += '<span class="option-letter">' + letter + '</span><span>' + opt + '</span></div>';
            });
            html += '</div>';
            html += '<div class="explanation" id="exp-' + qi + '"></div>';
            el.innerHTML = html;
            container.appendChild(el);
        });

        document.getElementById('quiz-next-btn').style.display = 'none';
        this.updateQuizProgress();
        this.showPage('quiz');
    },

    selectAnswer(qIdx, optIdx) {
        const qs = this.quizState;
        if (qs.answers[qIdx] !== undefined) return;
        qs.answers[qIdx] = optIdx;

        const w = this.state.currentWeek, d = this.state.currentDay;
        const quiz = COURSE_DATA.weeks[w].days[d].quiz;
        const q = quiz[qIdx];
        const correct = q.options.findIndex(o => o === q.answer);
        const isCorrect = optIdx === correct;
        if (isCorrect) qs.score++;
        else qs.wrong.push(qIdx);

        // Highlight options
        const qCard = document.getElementById('q-' + qIdx);
        qCard.querySelectorAll('.option').forEach((opt, i) => {
            if (i === correct) opt.classList.add('correct');
            else if (i === optIdx && !isCorrect) opt.classList.add('wrong');
        });

        // Show explanation
        const exp = document.getElementById('exp-' + qIdx);
        exp.innerHTML = (isCorrect ? '✅ 回答正确！真聪明～' : '❌ 答错啦～正确答案是 ' + String.fromCharCode(65+correct) + '。') + '<br><br>' + q.explanation;
        exp.className = 'explanation show ' + (isCorrect ? 'correct-exp' : 'wrong-exp');

        // Show next button
        const btn = document.getElementById('quiz-next-btn');
        btn.style.display = 'block';
        btn.textContent = qs.current < quiz.length - 1 ? '下一题 →' : '查看结果 🎉';
    },

    nextQuestion() {
        const qs = this.quizState;
        const w = this.state.currentWeek, d = this.state.currentDay;
        const quiz = COURSE_DATA.weeks[w].days[d].quiz;

        if (qs.current < quiz.length - 1) {
            document.getElementById('q-' + qs.current).style.display = 'none';
            qs.current++;
            document.getElementById('q-' + qs.current).style.display = 'block';
            document.getElementById('quiz-next-btn').style.display = 'none';
            this.updateQuizProgress();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            this.showResult();
        }
    },

    updateQuizProgress() {
        const qs = this.quizState;
        const w = this.state.currentWeek, d = this.state.currentDay;
        const total = COURSE_DATA.weeks[w].days[d].quiz.length;
        document.getElementById('quiz-progress-fill').style.width = ((qs.current + 1) / total * 100) + '%';
        document.getElementById('quiz-progress-text').textContent = (qs.current + 1) + ' / ' + total;
    },

    showResult() {
        const qs = this.quizState;
        const w = this.state.currentWeek, d = this.state.currentDay;
        const quiz = COURSE_DATA.weeks[w].days[d].quiz;
        const total = quiz.length;
        const elapsed = Math.round((Date.now() - qs.startTime) / 1000);

        document.getElementById('result-score').textContent = qs.score + '/' + total;
        document.getElementById('result-correct').textContent = qs.score + ' 题';
        document.getElementById('result-wrong').textContent = (total - qs.score) + ' 题';
        document.getElementById('result-rate').textContent = Math.round(qs.score / total * 100) + '%';
        document.getElementById('result-time').textContent = (elapsed >= 60 ? Math.floor(elapsed/60) + '分' : '') + (elapsed%60) + '秒';

        const mascot = document.getElementById('result-mascot');
        const title = document.getElementById('result-title');
        const desc = document.getElementById('result-desc');

        if (qs.score === total) {
            mascot.textContent = '🐱✨';
            title.textContent = '满分！太厉害了！';
            desc.innerHTML = '全部答对！小克为你骄傲！🎉';
        } else if (qs.score >= total * 0.6) {
            mascot.textContent = '🐱👍';
            title.textContent = '做得不错！';
            desc.innerHTML = '看看错题解析，复习一下就好 💪';
        } else {
            mascot.textContent = '🐱💪';
            title.textContent = '加油！';
            desc.innerHTML = '没关系！回去再看看卡片，下次一定行 ✨';
        }

        // Save state
        this.state.totalCorrect += qs.score;
        this.state.totalQuestions += total;

        // Save wrong to book
        qs.wrong.forEach(qIdx => {
            this.state.wrongBook.push({
                week: w, day: d, qIdx: qIdx,
                userAns: qs.answers[qIdx], date: new Date().toISOString()
            });
        });

        this.setDayState(w, d, {
            quizDone: true,
            score: qs.score,
            wrongIdx: qs.wrong
        });

        this.updateStreak();
        this.showPage('result');
        if (qs.score >= total * 0.6) this.launchConfetti();
        this.checkAchievements();
    },

    finishQuiz() {
        this.showPage('home');
        const ds = this.getDayState(this.state.currentWeek, this.state.currentDay);
        if (ds.learnDone && ds.quizDone) {
            this.checkAllDoneAndJoke();
        } else if ((ds.wrongIdx || []).length > 0) {
            this.showToast('🐱', '测验完成！', '有 ' + ds.wrongIdx.length + ' 道错题，记得复习哦～');
        } else {
            this.showToast('✨', '测验完成！', '今天的学习任务搞定啦～');
        }
    },

    // ===== Review =====
    goReview() {
        const ds = this.getDayState(this.state.currentWeek, this.state.currentDay);
        if (!ds.quizDone) {
            this.showToast('📝', '还没有错题', '先完成今天的测验～');
            return;
        }
        if ((ds.wrongIdx || []).length === 0) {
            this.showToast('🎉', '没有错题', '全部答对了，真棒！');
            return;
        }
        // Mark as reviewed
        this.setDayState(this.state.currentWeek, this.state.currentDay, { wrongIdx: [] });
        this.showToast('✅', '复习完成！', '错题已标记为复习完成，继续努力～');
        this.renderHome();
    },

    // ===== Progress Center =====
    renderProgress() {
        const container = document.getElementById('progress-content');
        let html = '';

        // Overall progress
        let totalDone = 0;
        const totalDays = 40; // 8 weeks x 5 days
        COURSE_DATA.weeks.forEach((week, wi) => {
            week.days.forEach((day, di) => {
                const ds = this.getDayState(wi, di);
                if (ds.learnDone && ds.quizDone) totalDone++;
            });
        });

        html += '<div class="progress-overall">';
        html += '<div class="progress-overall-title">📈 总体进度</div>';
        html += '<div class="progress-bar-big"><div class="fill" style="width:' + (totalDone/totalDays*100) + '%"></div></div>';
        html += '<div class="progress-overall-text">' + totalDone + ' / ' + totalDays + ' 天完成 (' + Math.round(totalDone/totalDays*100) + '%)</div>';
        html += '</div>';

        // Week cards
        COURSE_DATA.weeks.forEach((week, wi) => {
            const isCurrent = wi === this.state.currentWeek;
            let weekDone = 0;
            week.days.forEach((day, di) => {
                const ds = this.getDayState(wi, di);
                if (ds.learnDone && ds.quizDone) weekDone++;
            });

            html += '<div class="progress-week-card' + (isCurrent ? ' current' : '') + '">';
            html += '<div class="progress-week-header">';
            html += '<div><div class="progress-week-num">第' + (wi+1) + '周</div>';
            html += '<div class="progress-week-topic">' + week.topic + '</div></div>';
            const badgeClass = weekDone === 5 ? 'badge-done' : (weekDone > 0 ? 'badge-todo' : 'badge-todo');
            html += '<span class="progress-week-badge ' + badgeClass + '">' + weekDone + '/5</span>';
            html += '</div>';
            html += '<div class="progress-days-grid">';
            const labels = ['一','二','三','四','五','六','日'];
            for (let di = 0; di < 7; di++) {
                const ds = di < 5 ? this.getDayState(wi, di) : {};
                const isDone = di < 5 && ds.learnDone && ds.quizDone;
                const isToday = wi === this.state.currentWeek && di === this.state.currentDay;
                const cls = (isDone ? 'done' : '') + (isToday ? ' today' : '') + (di >= 5 ? ' weekend' : '');
                html += '<div class="progress-day-cell ' + cls + '">';
                html += '<div class="progress-day-num">' + (di < 5 ? 'D' + (di+1) : '💤') + '</div>';
                html += '<div class="progress-day-label">' + labels[di] + '</div>';
                html += '</div>';
            }
            html += '</div></div>';
        });

        container.innerHTML = html;
    },

    // ===== Notebook =====
    renderNotebook() {
        const container = document.getElementById('notebook-content');
        const wrongBook = this.state.wrongBook;

        if (wrongBook.length === 0) {
            container.innerHTML = '<div class="notebook-empty"><div class="icon">📭</div>' +
                '<div class="text">错题本是空的～<br>继续保持，或者去做做测验吧！</div></div>';
            return;
        }

        let html = '<div class="section-title">📕 共 ' + wrongBook.length + ' 道错题</div>';
        // Show newest first
        const sorted = [...wrongBook].reverse();
        sorted.forEach(item => {
            const week = COURSE_DATA.weeks[item.week];
            if (!week) return;
            const day = week.days[item.day];
            if (!day) return;
            const quiz = day.quiz[item.qIdx];
            if (!quiz) return;

            const correctIdx = quiz.options.findIndex(o => o === quiz.answer);
            const correctLetter = String.fromCharCode(65 + correctIdx);

            html += '<div class="notebook-item">';
            html += '<div class="notebook-item-header">';
            html += '<span class="notebook-item-week">第' + (item.week+1) + '周 · ' + day.title + '</span>';
            html += '<span class="notebook-item-result">你选了 ' + String.fromCharCode(65+item.userAns) + '</span>';
            html += '</div>';
            html += '<div class="notebook-item-question">' + quiz.question + '</div>';
            if (quiz.code) html += '<div class="notebook-item-code">' + quiz.code + '</div>';
            html += '<div class="notebook-item-answer"><strong>正确答案：' + correctLetter + '. ' + quiz.answer + '</strong><br>' + quiz.explanation + '</div>';
            html += '</div>';
        });

        container.innerHTML = html;
    },

    // ===== Achievements =====
    renderAchievements() {
        const container = document.getElementById('achievements-content');
        const unlocked = this.state.achievements || [];

        let html = '<div class="achievements-grid">';
        ACHIEVEMENTS.forEach(ach => {
            const isUnlocked = unlocked.includes(ach.id);
            html += '<div class="achievement-card ' + (isUnlocked ? 'unlocked' : 'locked') + '">';
            html += '<div class="achievement-icon">' + ach.icon + '</div>';
            html += '<div class="achievement-name">' + ach.name + '</div>';
            html += '<div class="achievement-desc">' + ach.desc + '</div>';
            html += '</div>';
        });
        html += '</div>';
        container.innerHTML = html;
    },

    checkAchievements() {
        const s = this.state;
        const unlocked = s.achievements || [];
        let newOnes = [];

        const totalDays = Object.keys(s.days).filter(k => s.days[k].learnDone && s.days[k].quizDone).length;

        ACHIEVEMENTS.forEach(ach => {
            if (unlocked.includes(ach.id)) return;
            let earned = false;

            switch(ach.id) {
                case 'first_day': earned = totalDays >= 1; break;
                case 'first_week': earned = totalDays >= 5; break;
                case 'perfect_quiz':
                    earned = Object.values(s.days).some(d => d.quizDone && d.score === 3);
                    break;
                case 'streak_3': earned = s.streak >= 3; break;
                case 'streak_7': earned = s.streak >= 7; break;
                case 'half_way': earned = totalDays >= 20; break;
                case 'all_done': earned = totalDays >= 40; break;
                case 'ten_correct': earned = s.totalCorrect >= 10; break;
                case 'thirty_correct': earned = s.totalCorrect >= 30; break;
                case 'hundred_correct': earned = s.totalCorrect >= 100; break;
            }

            if (earned) {
                unlocked.push(ach.id);
                newOnes.push(ach);
            }
        });

        if (newOnes.length > 0) {
            s.achievements = unlocked;
            this.saveState();
            // Show first new achievement
            const ach = newOnes[0];
            setTimeout(() => {
                this.showToast(ach.icon, '🏆 新成就解锁！', ach.name + ' - ' + ach.desc);
            }, 1000);
        }
    },

    // ===== Streak =====
    updateStreak() {
        const today = new Date().toDateString();
        if (this.state.lastActiveDate === today) return;

        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (this.state.lastActiveDate === yesterday) {
            this.state.streak++;
        } else if (this.state.lastActiveDate !== today) {
            this.state.streak = 1;
        }
        this.state.lastActiveDate = today;
        this.saveState();
    },

    // ===== Joke System =====
    getTodayJoke() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        return JOKES[dayOfYear % JOKES.length];
    },

    checkAllDoneAndJoke() {
        const ds = this.getDayState(this.state.currentWeek, this.state.currentDay);
        if (ds.learnDone && ds.quizDone) {
            setTimeout(() => this.showJokePopup(), 600);
            return true;
        }
        return false;
    },

    showJokePopup() {
        const joke = this.getTodayJoke();
        document.getElementById('joke-question').textContent = joke.q;
        document.getElementById('joke-answer').textContent = joke.a;
        document.getElementById('joke-answer').classList.remove('show');
        document.getElementById('joke-reveal-btn').classList.remove('hidden');
        document.getElementById('joke-popup').classList.add('show');
        document.getElementById('joke-backdrop').classList.add('show');
    },

    revealJoke() {
        document.getElementById('joke-answer').classList.add('show');
        document.getElementById('joke-reveal-btn').classList.add('hidden');
    },

    closeJoke() {
        document.getElementById('joke-popup').classList.remove('show');
        document.getElementById('joke-backdrop').classList.remove('show');
    },

    // ===== Toast =====
    showToast(emoji, title, desc) {
        document.getElementById('toast-emoji').textContent = emoji;
        document.getElementById('toast-title').textContent = title;
        document.getElementById('toast-desc').textContent = desc;
        document.getElementById('completion-toast').classList.add('show');
        document.getElementById('toast-backdrop').classList.add('show');
    },

    closeToast() {
        document.getElementById('completion-toast').classList.remove('show');
        document.getElementById('toast-backdrop').classList.remove('show');
    },

    // ===== Confetti =====
    launchConfetti() {
        const container = document.getElementById('confetti-container');
        container.innerHTML = '';
        const emojis = ['🌸','⭐','💖','✨','🎀','🌟','💫','🩷','🎉','🐱'];
        for (let i = 0; i < 30; i++) {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            c.style.left = Math.random() * 100 + '%';
            c.style.fontSize = (14 + Math.random() * 16) + 'px';
            const dur = 2 + Math.random() * 2;
            c.style.animation = 'confettiFall ' + dur + 's ease-out forwards';
            c.style.animationDelay = Math.random() + 's';
            container.appendChild(c);
        }
        setTimeout(() => { container.innerHTML = ''; }, 5000);
    },

    // ===== Greeting =====
    updateGreeting() {
        const h = new Date().getHours();
        const el = document.getElementById('home-greeting');
        if (h < 6) el.textContent = '主人，这么晚还在学习，辛苦啦！';
        else if (h < 12) el.textContent = '主人，早上好！今天也要加油哦～';
        else if (h < 14) el.textContent = '主人，中午好！吃完饭学一会儿吧～';
        else if (h < 18) el.textContent = '主人，下午好！抽空学10分钟吧～';
        else el.textContent = '主人，晚上好！今天的任务完成了吗？';
    }
};

// ===== Boot =====
document.addEventListener('DOMContentLoaded', () => App.init());
