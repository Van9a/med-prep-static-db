// Змінні стану додатка
let currentSubject = null;
let currentTopic = null;
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 150 * 60; // 150 хвилин у секундах

// Ініціалізація при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    renderSubjects();
});

// --- НАВІГАЦІЯ ---

function goHome() {
    stopTimer();
    hideAll();
    document.getElementById('screen-subjects').classList.remove('hidden');
    document.getElementById('screen-subjects').classList.add('fade-in');
    renderSubjects();
}

function renderSubjects() {
    const container = document.getElementById('screen-subjects');
    container.innerHTML = medDB.subjects.map(s => `
        <div onclick="viewSubject('${s.id}')" class="subject-card bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer">
            <h3 class="text-xl font-bold text-slate-800">${s.title}</h3>
            <p class="text-slate-400 text-sm uppercase tracking-wider">${s.en}</p>
        </div>
    `).join('');
}

function viewSubject(id) {
    currentSubject = medDB.subjects.find(s => s.id === id);
    hideAll();
    const screen = document.getElementById('screen-topics');
    screen.classList.remove('hidden');
    screen.classList.add('fade-in');
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
    const screen = document.getElementById('screen-study');
    screen.classList.remove('hidden');
    screen.classList.add('fade-in');
    
    // Завантажуємо контент (можна додати підтримку Markdown або HTML)
    document.getElementById('study-material').innerHTML = `
        <h2 class="text-2xl font-bold text-blue-800 mb-4">${currentTopic.title}</h2>
        <div class="content-body text-slate-700 leading-relaxed">
            ${currentTopic.content}
        </div>
    `;
    switchTab('study');
}

function switchTab(tab) {
    const sTab = document.getElementById('tab-study');
    const qTab = document.getElementById('tab-quiz');
    const sContent = document.getElementById('content-study');
    const qContent = document.getElementById('content-quiz');

    if(tab === 'study') {
        stopTimer();
        sTab.classList.add('active-tab'); 
        qTab.classList.remove('active-tab');
        sContent.classList.remove('hidden'); 
        qContent.classList.add('hidden');
    } else {
        sTab.classList.remove('active-tab'); 
        qTab.classList.add('active-tab');
        sContent.classList.add('hidden'); 
        qContent.classList.remove('hidden');
        resetQuizUI();
    }
}

// --- ЛОГІКА ТЕСТУВАННЯ ---

function startQuiz() {
    // Збираємо всі питання з поточної теми
    // Якщо хочеш 150 з усього ПРЕДМЕТА, можна змінити логіку вибору
    let allQuestions = [...currentTopic.questions];
    
    if (allQuestions.length === 0) {
        alert("В цій темі поки немає питань. Додай їх у data.js!");
        return;
    }

    // Рандомізація: перемішуємо і беремо максимум 150
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
    document.getElementById('quiz-progress').innerText = `Питання: ${currentIndex + 1}/${quizQuestions.length}`;
    document.getElementById('question-text').innerText = q.q;

    // Перемішуємо варіанти відповідей, щоб не запам'ятовувала порядок
    const options = q.options.map((text, index) => ({ text, index }));
    const shuffledOptions = shuffleArray(options);

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option fade-in';
        btn.innerText = opt.text;
        btn.onclick = () => handleAnswer(opt.index, q.correct, btn);
        container.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, btnElement) {
    // Блокуємо інші кнопки
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // Показуємо правильну відповідь
        buttons.forEach(b => {
            // Знаходимо кнопку з правильним індексом тексту
            if (quizQuestions[currentIndex].options[correctIndex] === b.innerText) {
                b.classList.add('correct');
            }
        });
    }

    // Затримка перед наступним питанням для аналізу помилки
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 1200);
}

function finishQuiz() {
    stopTimer();
    const percent = Math.round((score / quizQuestions.length) * 100);
    const passed = percent >= 80; // Поріг КРОК зазвичай 60-80% залежно від року

    document.getElementById('quiz-game').innerHTML = `
        <div class="text-center py-8 fade-in">
            <h3 class="text-3xl font-bold ${passed ? 'text-emerald-600' : 'text-rose-600'} mb-4">
                ${passed ? 'Тест пройдено!' : 'Потрібно ще підучити'}
            </h3>
            <p class="text-5xl font-black mb-4">${percent}%</p>
            <p class="text-slate-600 mb-6">Правильних відповідей: ${score} з ${quizQuestions.length}</p>
            <button onclick="resetQuizUI()" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg">Спробувати ще раз</button>
        </div>
    `;
}

// --- ДОПОМІЖНІ ФУНКЦІЇ ---

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        document.getElementById('quiz-timer').innerText = `Час: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetQuizUI() {
    document.getElementById('quiz-intro').classList.remove('hidden');
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-game').innerHTML = `
        <div class="flex justify-between mb-4 font-mono text-sm">
            <span id="quiz-progress">Питання: 1/150</span>
            <span id="quiz-timer">Час: 150:00</span>
        </div>
        <div id="question-text" class="text-lg font-medium mb-6 italic text-slate-800"></div>
        <div id="options-container" class="grid gap-3"></div>
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

function backToTopics() {
    viewSubject(currentSubject.id);
}
