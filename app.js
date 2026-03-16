let currentSubject = null;
let currentTopic = null;
let currentQuiz = [];
let currentQuestionIndex = 0;

function goHome() {
    hideAll();
    document.getElementById('screen-subjects').classList.remove('hidden');
    renderSubjects();
}

function renderSubjects() {
    const container = document.getElementById('screen-subjects');
    container.innerHTML = medDB.subjects.map(s => `
        <div onclick="viewSubject('${s.id}')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all">
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
        <div onclick="viewTopic('${t.id}')" class="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:bg-blue-50 transition-colors flex justify-between">
            <span class="font-medium">${t.title}</span>
            <span class="text-blue-500">→</span>
        </div>
    `).join('');
}

function viewTopic(topicId) {
    currentTopic = currentSubject.topics.find(t => t.id === topicId);
    hideAll();
    document.getElementById('screen-study').classList.remove('hidden');
    document.getElementById('study-material').innerHTML = currentTopic.content;
    switchTab('study');
}

function switchTab(tab) {
    const sTab = document.getElementById('tab-study');
    const qTab = document.getElementById('tab-quiz');
    const sContent = document.getElementById('content-study');
    const qContent = document.getElementById('content-quiz');

    if(tab === 'study') {
        sTab.classList.add('active-tab'); qTab.classList.remove('active-tab');
        sContent.classList.remove('hidden'); qContent.classList.add('hidden');
    } else {
        qTab.classList.add('active-tab'); sTab.classList.remove('active-tab');
        qContent.classList.remove('hidden'); sContent.classList.add('hidden');
    }
}

function hideAll() {
    document.getElementById('screen-subjects').classList.add('hidden');
    document.getElementById('screen-topics').classList.add('hidden');
    document.getElementById('screen-study').classList.add('hidden');
}

function backToTopics() {
    viewSubject(currentSubject.id);
}

// Початковий рендер
renderSubjects();
