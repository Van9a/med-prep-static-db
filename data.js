const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Збудливі тканини. Нервово-м'язова фізіологія",
                    content: `
                        <div class="krok-marker">Маркери КРОК (2001-2026):</div>
                        <ul class="list-disc pl-5 space-y-2 text-slate-700">
                            <li><strong>Натрій-Калієвий насос:</strong> Викачує 3 Na+ назовні, вкачує 2 K+ всередину. Створює від'ємний заряд.</li>
                            <li><strong>Потенціал спокою:</strong> Залежить переважно від виходу іонів <strong>Калію (K+)</strong> з клітини.</li>
                            <li><strong>Фаза деполяризації:</strong> Стрімкий вхід іонів <strong>Натрію (Na+)</strong> в клітину.</li>
                            <li><strong>Поріг деполяризації:</strong> Мінімальна сила подразника для виникнення збудження.</li>
                            <li><strong>Повний тетанус:</strong> Коли кожен наступний подразник припадає на фазу <strong>скорочення</strong> попереднього.</li>
                        </ul>
                        
                    `,
                    questions: []
                },
                {
                    id: "ps-2",
                    title: "Фізіологія системи крові",
                    content: `
                        <div class="mb-6">
                            <h4 class="font-bold text-slate-800 underline">Норми та показники:</h4>
                            <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Еритроцити: Ч: 4.0-5.1; Ж: 3.7-4.7 (*10^12/л).</li>
                                <li>Гемоглобін: Ч: 130-160; Ж: 120-140 (г/л).</li>
                                <li>Гематокрит: Ч: 0.40-0.48; Ж: 0.36-0.42.</li>
                            </ul>
                        </div>
                        <div class="formula-box bg-slate-100 p-4 my-4 rounded-lg border-l-4 border-blue-500">
                            <p class="font-semibold">Колірний показник (КП):</p>
                            <div class="bg-white p-2 text-center font-mono text-lg rounded border my-2">
                                КП = (3 * Hb (г/л)) / (перші три цифри еритроцитів)
                            </div>
                            <p class="text-xs">Норма: 0.85 – 1.05 (Нормохромія).</p>
                        </div>
                        <div class="krok-marker">
                            <strong>Важливо:</strong><br>
                            - Гемоліз еритроцитів у гіпотонічному розчині NaCl (0.3%) — норма. Якщо раніше — патологія.<br>
                            - Вітамін B12 та фолієва кислота — необхідні для дозрівання еритроцитів (їх дефіцит → мегалобластна анемія).
                        </div>
                    `,
                    questions: [
                        {
                            q: "An analysis of a patient's blood showed a decrease in the number of erythrocytes and a color index of 0.6. What type of anemia is this?",
                            options: ["Hypochromic", "Hyperchromic", "Normochromic", "B12-deficiency"],
                            correct: 0, lang: "en"
                        }
                    ]
                },
                {
                    id: "ps-3",
                    title: "Фізіологія серцево-судинної системи",
                    content: `
                        <div class="krok-marker">ЕКГ Аналіз:</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>P:</strong> Деполяризація передсердь.</li>
                            <li><strong>QRS:</strong> Деполяризація шлуночків.</li>
                            <li><strong>T:</strong> Реполяризація шлуночків.</li>
                            <li><strong>P-Q інтервал:</strong> Час проведення збудження від передсердь до шлуночків (АВ-вузол).</li>
                        </ul>
                        

[Image of ECG waves and their relationship to the cardiac cycle]

                        <div class="bg-yellow-50 p-3 rounded mt-4">
                            <strong>Регуляція:</strong> Симпатичні нерви (Норіпінефрин) → позитивні ефекти (ЧСС ↑). Парасимпатичні (Вагус, Ацетилхолін) → негативні ефекти (ЧСС ↓).
                        </div>
                    `,
                    questions: []
                },
                {
                    id: "ps-4",
                    title: "Фізіологія дихання",
                    content: `
                        <div class="krok-marker">Спірометрія:</div>
                        <ul class="list-disc pl-5">
                            <li><strong>ЖЄЛ = TV + IRV + ERV.</strong></li>
                            <li><strong>Залишковий об'єм:</strong> Повітря, що залишається після максимального видиху.</li>
                        </ul>
                        <p class="mt-4 italic">Перенесення газів: CO2 транспортується переважно у вигляді <strong>бікарбонатів (HCO3-)</strong>.</p>
                    `,
                    questions: []
                },
                {
                    id: "ps-5",
                    title: "Ендокринна система (Гормони)",
                    content: `
                        <div class="krok-marker">Маркери КРОК:</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Інсулін:</strong> Єдиний гормон, що ЗНИЖУЄ рівень цукру.</li>
                            <li><strong>Адреналін та Глюкагон:</strong> ПІДВИЩУЮТЬ рівень цукру.</li>
                            <li><strong>Альдостерон:</strong> Затримує Na+, виводить K+ (регуляція тиску).</li>
                            <li><strong>Вазопресин (АДГ):</strong> Реабсорбція води в нирках. Дефіцит → Нецукровий діабет (багато сечі).</li>
                            <li><strong>Тироксин (Т4):</strong> Основний обмін. Надлишок → Базедова хвороба (тахікардія, екзофтальм).</li>
                        </ul>
                        

[Image of the endocrine system feedback loops]

                    `,
                    questions: []
                },
                {
                    id: "ps-6",
                    title: "Вища нервова діяльність (ВНД)",
                    content: `
                        <div class="krok-marker">Типи за Павловим:</div>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Сангвінік:</strong> Сильний, врівноважений, рухливий.</li>
                            <li><strong>Флегматик:</strong> Сильний, врівноважений, інертний.</li>
                            <li><strong>Холерик:</strong> Сильний, НЕврівноважений (переважає збудження).</li>
                            <li><strong>Меланхолік:</strong> Слабкий тип.</li>
                        </ul>
                        <p class="mt-4"><strong>Перша сигнальна система:</strong> Реакція на фізичні подразники (світло, звук).<br>
                        <strong>Друга сигнальна система:</strong> Реакція на слово (мова, мислення) — тільки у людини.</p>
                    `,
                    questions: []
                }
            ]
        },
        {
            id: "pharma",
            title: "Фармакологія",
            en: "Pharmacology",
            topics: [
                { id: "ph-1", title: "Вегетативна НС", content: "Конспект завантажується...", questions: [] },
                { id: "ph-2", title: "Антибіотики", content: "...", questions: [] }
            ]
        },
        { id: "pathmorph", title: "Патоморфологія", en: "Pathomorphology", topics: [] },
        { id: "pathphys", title: "Патофізіологія", en: "Pathophysiology", topics: [] },
        { id: "anatomy", title: "Анатомія", en: "Anatomy", topics: [] },
        { id: "histo", title: "Гістологія", en: "Histology", topics: [] }
    ]
};
