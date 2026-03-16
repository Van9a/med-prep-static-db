function renderSubjects() {
    const list = document.getElementById('subjects-list');
    list.innerHTML = krokData.subjects.map(subject => `
        <div onclick="showTopics('${subject.id}')" class="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform border-l-4 border-blue-500">
            <h3 class="text-xl font-bold">${subject.title}</h3>
            <p class="text-gray-500 text-sm">${subject.titleEn}</p>
        </div>
    `).join('');
}

function showTopics(subjectId) {
    const subject = krokData.subjects.find(s => s.id === subjectId);
    document.getElementById('subjects-list').classList.add('hidden');
    document.getElementById('topics-section').classList.remove('hidden');
    document.getElementById('current-subject-title').innerText = subject.title;

    const list = document.getElementById('topics-list');
    list.innerHTML = subject.topics.map(topic => `
        <div class="p-4 bg-white rounded shadow hover:bg-blue-50 cursor-pointer" onclick="goToStudy('${subjectId}', '${topic.id}')">
            <span>${topic.title}</span>
        </div>
    `).join('');
}

function showSubjects() {
    document.getElementById('subjects-list').classList.remove('hidden');
    document.getElementById('topics-section').classList.add('hidden');
}

// Запуск при завантаженні
renderSubjects();
