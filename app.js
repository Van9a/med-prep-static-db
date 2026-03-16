let currentSubject = null;
let currentTopic = null;
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 150 * 60;

const katexOptions = { delimiters: [{left: "$", right: "$", display: false}], throwOnError: false };

document.addEventListener('DOMContentLoaded', () => renderSubjects());

function goHome() {
    stopTimer();
    hideAll();
    document.getElementById('screen-subjects').classList.remove('hidden');
    renderSubjects();
}

function renderSubjects() {
    const container = document.getElementById('screen-subjects');
    container.innerHTML = medDB.subjects.map(s => `
        <div onclick="viewSubject('${s.id}')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-all">
            <h3 class="text-xl font-bold text-slate-800">${s.title}</h3>
            <p class="text-slate-400 text-sm uppercase tracking-wider">${s.en}</p>
        </div>
    `).join('');
}

function viewSubject(id) {
    currentSubject = medDB.subjects.find(s => s.id === id);
    hideAll();
    document.getElementById('screen-topics').classList.remove('hidden');
    document.getElementById('subject-title').innerText = currentSubject.title;
    document.getElementById('topics-container').innerHTML = currentSubject.topics.map(t => `
        <div onclick="viewTopic('${t.id}')" class="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:bg-blue-50 border border-slate-100 flex justify-between">
            <span class="font-medium">${t.title}</span>
            <span class="text-blue-500">→</span>
        </div>
    `).join('');
}

function viewTopic(topicId) {
    currentTopic = currentSubject.topics.find(t => t.id === topicId);
    hideAll();
    document.getElementById('screen-study').classList.remove('hidden');
    const material = document.getElementById('study-material');
    material.innerHTML = currentTopic.content;
    if (window.renderMathInElement) renderMathInElement(material, katexOptions);
    switchTab('study');
}

function switchTab(tab) {
    const isStudy = tab === 'study';
    document.getElementById('tab-study').className = `flex-1 py-4 font-semibold ${isStudy ? 'tab-active' : 'text-slate-500'}`;
    document.getElementById('tab-quiz').className = `flex-1 py-4 font-semibold ${!isStudy ? 'tab-active' : 'text-slate-500'}`;
    document.getElementById('content-study').classList.toggle('hidden', !isStudy);
    document.getElementById('content-quiz').classList.toggle('hidden', isStudy);
    if (isStudy) stopTimer();
    else resetQuizUI();
}

function startQuiz() {
    let allQuestions = [];
    const isFull = confirm("По всьому предмету?");
    if (isFull) currentSubject.topics.forEach(t => allQuestions = allQuestions.concat(t.questions));
    else allQuestions = [...currentTopic.questions];

    quizQuestions = shuffleArray(allQuestions).slice(0, 150);
    currentIndex = 0; score = 0; timeLeft = 150 * 60;
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');
    startTimer();
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentIndex];
    const qText = document.getElementById('question-text');
    document.getElementById('quiz-progress').innerText = `Питання: ${currentIndex + 1}/${quizQuestions.length}`;
    
    qText.innerHTML = q.q;
    
    const container = document.getElementById('options-container');
    container.innerHTML = ''; // Очищуємо контейнер
    
    shuffleArray(q.options.map((text, index) => ({ text, index }))).forEach(opt => {
        const btn = document.createElement('button');
        // Прямі класи Tailwind: ширина на весь екран, відступи, рамка, колір фону
        btn.className = 'w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all font-medium block shadow-sm';
        btn.innerHTML = opt.text;
        btn.onclick = () => handleAnswer(opt.index, q.correct, btn);
        container.appendChild(btn);
    });

    if (window.renderMathInElement) renderMathInElement(document.getElementById('quiz-game'), katexOptions);
}

function handleAnswer(sel, correct, btn) {
    const btns = document.querySelectorAll('.quiz-option');
    btns.forEach(b => b.disabled = true);
    if (sel === correct) { btn.classList.add('correct'); score++; }
    else {
        btn.classList.add('wrong');
        btns.forEach(b => { if (b.innerHTML === quizQuestions[currentIndex].options[correct]) b.classList.add('correct'); });
    }
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) showQuestion();
        else finishQuiz();
    }, 1500);
}

function finishQuiz() {
    stopTimer();
    const pct = Math.round((score / quizQuestions.length) * 100);
    document.getElementById('quiz-game').innerHTML = `
        <div class="text-center py-10">
            <h3 class="text-3xl font-bold ${pct >= 80 ? 'text-green-600' : 'text-red-600'} mb-4">${pct >= 80 ? 'Пройдено!' : 'Спробуйте ще'}</h3>
            <p class="text-6xl font-black mb-4">${pct}%</p>
            <p class="mb-8">Результат: ${score} з ${quizQuestions.length}</p>
            <button onclick="resetQuizUI()" class="bg-blue-600 text-white px-10 py-3 rounded-xl">На головну</button>
        </div>
    `;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        document.getElementById('quiz-timer').innerText = `Час: ${m}:${s < 10 ? '0' : ''}${s}`;
        if (timeLeft <= 0) finishQuiz();
    }, 1000);
}
function stopTimer() { clearInterval(timerInterval); }
function hideAll() { ['screen-subjects', 'screen-topics', 'screen-study'].forEach(id => document.getElementById(id).classList.add('hidden')); }
function shuffleArray(arr) { return arr.sort(() => Math.random() - 0.5); }
function resetQuizUI() { 
    document.getElementById('quiz-intro').classList.remove('hidden'); 
    document.getElementById('quiz-game').classList.add('hidden');
}
function backToTopics() { viewSubject(currentSubject.id); }
