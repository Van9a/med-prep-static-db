// Змінні стану додатка
let currentSubject = null;
let currentTopic = null;
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 150 * 60; 

// Конфігурація для KaTeX (щоб розумів знаки $)
const katexOptions = {
    delimiters: [
        {left: "$", right: "$", display: false}
    ],
    throwOnError: false
};

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    renderSubjects();
});

// --- НАВІГАЦІЯ ---

function goHome() {
    stopTimer();
    hideAll();
    document.getElementById('screen-subjects').classList.remove('hidden');
    renderSubjects();
}

function renderSubjects() {
    const container = document.getElementById('screen-subjects');
    container.innerHTML = medDB.subjects.map(s => `
        <div onclick="viewSubject('${s.id}')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
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
    
    const container = document.getElementById('topics-container');
    container.innerHTML = currentSubject.topics.map(t => `
        <div onclick="viewTopic('${t.id}')" class="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:bg-blue-50 transition-colors flex justify-between items-center border border-slate-100">
            <span class="font-medium text-slate-700">${t.title}</span>
            <span class="text-blue-500 font-bold">→</span>
        </div>
    `).join('');
}

function viewTopic(topicId) {
    currentTopic = currentSubject.topics.find(t => t.id === topicId);
    hideAll();
    document.getElementById('screen-study').classList.remove('hidden');
    
    const studyContainer = document.getElementById('study-material');
    studyContainer.innerHTML = currentTopic.content;
    
    // Рендеримо математику в конспекті
    if (window.renderMathInElement) {
        renderMathInElement(studyContainer, katexOptions);
    }
    
    switchTab('study');
}

function switchTab(tab) {
    const sTab = document.getElementById('tab-study');
    const qTab = document.getElementById('tab-quiz');
    const sContent = document.getElementById('content-study');
    const qContent = document.getElementById('content-quiz');

    if(tab === 'study') {
        stopTimer();
        sTab.classList.add('tab-active'); 
        qTab.classList.remove('tab-active');
        sContent.classList.remove('hidden'); 
        qContent.classList.add('hidden');
    } else {
        sTab.classList.remove('tab-active'); 
        qTab.classList.add('tab-active');
        sContent.classList.add('hidden'); 
        qContent.classList.remove('hidden');
        resetQuizUI();
    }
}

// --- ЛОГІКА ТЕСТУВАННЯ ---

function startQuiz() {
    let allQuestions = [];
    const isFullSubject = confirm("Бажаєте пройти тест по всьому предмету?");
    
    if (isFullSubject) {
        currentSubject.topics.forEach(topic => {
            if (topic.questions) allQuestions = allQuestions.concat(topic.questions);
        });
    } else {
        allQuestions = [...currentTopic.questions];
    }

    if (allQuestions.length === 0) {
        alert("Питань поки немає!");
        return;
    }

    quizQuestions = shuffleArray(allQuestions).slice(0, 150);
    currentIndex = 0;
    score = 0;
    timeLeft = 150 * 60;
    
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');

    startTimer();
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentIndex];
    const qTextElement = document.getElementById('question-text');
    
    document.getElementById('quiz-progress').innerText = `Питання: ${currentIndex + 1}/${quizQuestions.length}`;
    
    // Використовуємо innerHTML для підтримки KaTeX
    qTextElement.innerHTML = q.q;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const shuffledOptions = shuffleArray(q.options.map((text, index) => ({ text, index })));

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all font-medium mb-2 quiz-option';
        btn.innerHTML = opt.text; // innerHTML для формул у кнопках
        btn.onclick = () => handleAnswer(opt.index, q.correct, btn);
        container.appendChild(btn);
    });

    // Оновлюємо рендер формул для всього блоку тесту
    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('quiz-game'), katexOptions);
    }
}

function handleAnswer(selectedIndex, correctIndex, btnElement) {
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-700');
        score++;
    } else {
        btnElement.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-700');
        buttons.forEach(b => {
            if (quizQuestions[currentIndex].options[correctIndex] === b.innerHTML) {
                b.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-700');
            }
        });
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 1500);
}

function finishQuiz() {
    stopTimer();
    const percent = Math.round((score / quizQuestions.length) * 100);
    const passed = percent >= 80;

    document.getElementById('quiz-game').innerHTML = `
        <div class="text-center py-10">
            <h3 class="text-3xl font-bold ${passed ? 'text-emerald-600' : 'text-rose-600'} mb-4">
                ${passed ? 'Passed!' : 'Try Again'}
            </h3>
            <p class="text-6xl font-black mb-4">${percent}%</p>
            <p class="text-slate-600 mb-8">Correct: ${score} / ${quizQuestions.length}</p>
            <button onclick="resetQuizUI()" class="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-colors">
                Back to Menu
            </button>
        </div>
    `;
}

// --- UTILS ---

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        document.getElementById('quiz-timer').innerText = `Час: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft <= 0) finishQuiz();
    }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

function resetQuizUI() {
    document.getElementById('quiz-intro').classList.remove('hidden');
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-game').innerHTML = `
        <div class="flex justify-between mb-6 font-mono text-sm text-slate-500">
            <span id="quiz-progress">Питання: 1/150</span>
            <span id="quiz-timer">Час: 150:00</span>
        </div>
        <div id="question-text" class="text-xl font-semibold mb-8 text-slate-800 leading-relaxed"></div>
        <div id="options-container" class="space-y-3"></div>
    `;
}

function hideAll() {
    ['screen-subjects', 'screen-topics', 'screen-study'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
