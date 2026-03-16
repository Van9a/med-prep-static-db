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
                            </div>
                        </div>
                        <div class="krok-marker">
                            <strong>КРОК-Маркери (2001-2026):</strong><br>
                            - Осмотична резистентність еритроцитів знижена → <strong>Спадковий сфероцитоз (Мінковського-Шоффара)</strong>.<br>
                            - Зсув лейкоцитарної формули вліво → <strong>Поява незрілих форм при запаленні</strong>.<br>
                            - ШОЕ ↑ → <strong>Запалення, вагітність, пухлини</strong>.
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
                {
                    id: "ps-2",
                    title: "Фізіологія серцево-судинної системи (ССС)",
                    content: `
                        <div class="krok-marker">Маркери КРОК (2001-2026):</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Закон Франка-Старлінга:</strong> Чим більше розтягується міокард кров'ю, тим сильніше він скорочується.</li>
                            <li><strong>ЕКГ (Зубець P):</strong> Охоплення збудженням передсердь.</li>
                            <li><strong>ЕКГ (Комплекс QRS):</strong> Збудження шлуночків.</li>
                            <li><strong>ЕКГ (Зубець T):</strong> Реполяризація шлуночків.</li>
                            <li><strong>Вагус (Vagus):</strong> Уповільнює серце. <strong>Симпатика:</strong> прискорює.</li>
                        </ul>
                        <div class="formula-box bg-slate-100 p-3 my-3 rounded">
                            <strong>АТ Систолічний (120) / Діастолічний (80).</strong> <br>
                            Пульсовий тиск = Систолічний - Діастолічний.
                        </div>
                    `,
                    questions: []
                },
                {
                    id: "ps-3",
                    title: "Фізіологія дихання",
                    content: `
                        <div class="krok-marker">Маркери КРОК:</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Сурфактант:</strong> Не дає альвеолам злипатися. Дефіцит → ателектаз.</li>
                            <li><strong>Хеморецептори:</strong> Найчутливіші до надлишку <strong>CO2</strong>.</li>
                            <li><strong>ЖЄЛ:</strong> Сума дихального об'єму, резерву вдиху та резерву видиху.</li>
                        </ul>
                    `,
                    questions: []
                },
                {
                    id: "ps-4",
                    title: "Фізіологія травлення",
                    content: `
                        <div class="krok-marker">Маркери КРОК:</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Гастрин:</strong> Стимулює виділення шлункового соку.</li>
                            <li><strong>Ентерокіназа:</strong> Активує трипсиноген.</li>
                            <li><strong>Жовч:</strong> Емульгує жири, не має ферментів!</li>
                        </ul>
                    `,
                    questions: []
                },
                {
                    id: "ps-5",
                    title: "Видільна система (Нирки)",
                    content: `
                        <div class="krok-marker">Маркери КРОК:</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Глюкозурія:</strong> Глюкоза в крові > 10 ммоль/л.</li>
                            <li><strong>Вазопресин:</strong> Збільшує реобсорбцію води (мало сечі).</li>
                            <li><strong>Альдостерон:</strong> Затримує Na+, виводить K+.</li>
                        </ul>
                    `,
                    questions: []
                }
            ]
        },
        { id: "pharma", title: "Фармакологія", en: "Pharmacology", topics: [] },
        { id: "pathmorph", title: "Патоморфологія", en: "Pathomorphology", topics: [] },
        { id: "pathphys", title: "Патофізіологія", en: "Pathophysiology", topics: [] },
        { id: "anatomy", title: "Анатомія", en: "Anatomy", topics: [] },
        { id: "histo", title: "Гістологія", en: "Histology", topics: [] }
    ]
};
