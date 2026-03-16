const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Фізіологія системи крові",
                    content: `
                        <div class="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                            <h3 class="font-bold text-blue-800 mb-2">Основні функції та показники</h3>
                            <p>Кров складається з плазми (55-60%) та формених елементів (40-45%).</p>
                        </div>

                        <div class="mb-6">
                            <h4 class="font-bold text-slate-800">1. Еритроцити та Гемоглобін</h4>
                            <ul class="list-disc pl-5 space-y-2 text-slate-700">
                                <li><strong>Еритроцити:</strong> Чоловіки: 4.0-5.1 * 10^12/л; Жінки: 3.7-4.7 * 10^12/л.</li>
                                <li><strong>Гемоглобін (Hb):</strong> Чоловіки: 130-160 г/л; Жінки: 120-140 г/л.</li>
                                <li><strong>ШОЕ (ESR):</strong> Чоловіки: 1-10 мм/год; Жінки: 2-15 мм/год.</li>
                            </ul>
                        </div>

                        <div class="formula-box bg-slate-100 p-4 my-4 rounded-lg border-2 border-slate-200">
                            <h4 class="font-bold text-blue-700 mb-2 underline">Важливі формули:</h4>
                            <div class="space-y-4">
                                <div>
                                    <p class="font-semibold text-sm">Колірний показник (КП):</p>
                                    <div class="bg-white p-2 text-center font-mono text-lg rounded border">
                                        КП = (3 * Hb (г/л)) / (перші три цифри еритроцитів)
                                    </div>
                                    <p class="text-xs text-slate-500 mt-1">Норма: 0.85 – 1.05</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-sm">Гематокрит (Ht):</p>
                                    <p class="text-slate-600 italic">Співвідношення об'єму формених елементів до об'єму плазми.</p>
                                </div>
                            </div>
                        </div>

                        <div class="krok-marker">
                            <strong>КРОК-Маркери (2001-2026):</strong><br>
                            - Осмотична резистентність еритроцитів знижена → <strong>Спадковий сфероцитоз (хвороба Мінковського-Шоффара)</strong>.<br>
                            - Зсув лейкоцитарної формули вліво → <strong>Поява незрілих форм (паличкоядерні, мієлоцити) при запаленні</strong>.<br>
                            - ШОЕ ↑ (прискорення) → <strong>Запалення, вагітність, пухлини (через ріст фібриногену та глобулінів)</strong>.
                        </div>
                    `,
                    questions: [
                        {
                            q: "У жінки 25-ти років після крововтрати при пологах визначено групу крові: аглютинація відбулася з сироватками I(0) та II(A) груп, і не відбулася з III(B). Яка група крові у породіллі?",
                            options: ["I (0)", "II (A)", "III (B)", "IV (AB)"],
                            correct: 2,
                            lang: "ua"
                        },
                        {
                            q: "An analysis of a patient's blood showed a decrease in the number of erythrocytes and a color index of 0.6. What type of anemia is this?",
                            options: ["Hypochromic", "Hyperchromic", "Normochromic", "B12-deficiency"],
                            correct: 0,
                            lang: "en"
                        }
                    ]
                },
                { id: "ps-2", title: "Фізіологія серцево-судинної системи", content: "...", questions: [] },
                { id: "ps-3", title: "Фізіологія дихання та газообміну", content: "...", questions: [] }
            ]
        },
        { id: "pharma", title: "Фармакологія", en: "Pharmacology", topics: [] },
        { id: "pathmorph", title: "Патоморфологія", en: "Pathomorphology", topics: [] },
        { id: "pathphys", title: "Патофізіологія", en: "Pathophysiology", topics: [] },
        { id: "anatomy", title: "Анатомія", en: "Anatomy", topics: [] },
        { id: "histo", title: "Гістологія", en: "Histology", topics: [] }
    ]
};
