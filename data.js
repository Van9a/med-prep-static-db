const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Збудливі тканини та Нерви",
                    content: `
                        <div class="krok-marker">Ключові концепції:</div>
                        <ul class="list-disc pl-5">
                            <li><strong>Потенціал спокою:</strong> Вихід K+ (залежить від градієнту).</li>
                            <li><strong>Деполяризація:</strong> Стрімкий вхід Na+ в клітину.</li>
                            <li><strong>Реполяризація:</strong> Відновлення заряду через вихід K+.</li>
                            <li><strong>Поріг подразнення:</strong> Чим вищий поріг, тим нижча збудливість.</li>
                        </ul>
                    `,
                    questions: [
                        { q: "Який іон відповідає за фазу деполяризації?", options: ["Na+", "K+", "Ca2+", "Mg2+"], correct: 0, lang: "ua" },
                        { q: "Which ion is responsible for depolarization?", options: ["Na+", "K+", "Ca2+", "Mg2+"], correct: 0, lang: "en" },
                        { q: "Блокада Na+/K+ насоса призведе до:", options: ["Зникнення ПС", "Росту ПС", "Гіперполяризації", "Нічого"], correct: 0, lang: "ua" },
                        { q: "Blocking the Na+/K+ pump will lead to:", options: ["Loss of resting potential", "Increase of RP", "Hyperpolarization", "No effect"], correct: 0, lang: "en" },
                        { q: "Поріг подразнення зріс. Як змінилась збудливість?", options: ["Зменшилась", "Зросла", "Не змінилась", "Зникла"], correct: 0, lang: "ua" },
                        { q: "Stimulation threshold increased. Excitability is:", options: ["Decreased", "Increased", "No change", "Zero"], correct: 0, lang: "en" },
                        { q: "Медіатор у нервово-м'язовому синапсі:", options: ["Ацетилхолін", "Адреналін", "Дофамін", "Серотонін"], correct: 0, lang: "ua" },
                        { q: "Neurotransmitter in the neuromuscular junction:", options: ["Acetylcholine", "Epinephrine", "Dopamine", "Serotonin"], correct: 0, lang: "en" },
                        { q: "Фаза реполяризації зумовлена:", options: ["Виходом K+", "Входом Na+", "Входом Ca2+", "Виходом Na+"], correct: 0, lang: "ua" },
                        { q: "Repolarization phase is caused by:", options: ["K+ efflux", "Na+ influx", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" },
                        { q: "Який іон необхідний для скорочення м'язів?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "ua" },
                        { q: "Which ion is required for muscle contraction?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "en" },
                        { q: "У м'язі змінюється напруга без зміни довжини. Це скорочення:", options: ["Ізометричне", "Ізотонічне", "Тетанус", "Ауксотонічне"], correct: 0, lang: "ua" },
                        { q: "Muscle tension changes without a length change. This is:", options: ["Isometric", "Isotonic", "Tetanus", "Auxotonic"], correct: 0, lang: "en" },
                        { q: "Який закон описує проведення збудження тільки в одному напрямку?", options: ["Закон однобічного проведення", "Закон Боудіча", "Закон Старлінга", "Закон Белла-Мажанді"], correct: 0, lang: "ua" },
                        { q: "Which law describes one-way conduction in a synapse?", options: ["Law of one-way conduction", "Bowditch law", "Starling law", "Bell-Magendie law"], correct: 0, lang: "en" },
                        { q: "Повний тетанус виникає, коли подразнення припадає на фазу:", options: ["Скорочення", "Розслаблення", "Спокою", "Рефрактерності"], correct: 0, lang: "ua" },
                        { q: "Complete tetanus occurs when stimulation hits the phase of:", options: ["Contraction", "Relaxation", "Rest", "Refractoriness"], correct: 0, lang: "en" },
                        { q: "Мінімальна сила подразника — це:", options: ["Поріг", "Реобаза", "Хронаксія", "Сумація"], correct: 0, lang: "ua" },
                        { q: "The minimal strength of a stimulus is:", options: ["Threshold", "Rheobase", "Chronaxy", "Summation"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-2",
                    title: "Фізіологія крові",
                    content: `
                        <div class="krok-marker">Кров:</div>
                        <p><strong>КП (Колірний показник):</strong> 0.85 - 1.05. Гіпохромія < 0.85 (залізодефіцит).</p>
                        <p><strong>Групи крові:</strong> I(0) - аглютиногенів немає. IV(AB) - аглютинінів немає.</p>
                    `,
                    questions: [
                        { q: "КП = 0.7. Яка анемія?", options: ["Гіпохромна", "Гіперхромна", "Нормохромна", "B12"], correct: 0, lang: "ua" },
                        { q: "Color index is 0.7. Which anemia?", options: ["Hypochromic", "Hyperchromic", "Normochromic", "B12"], correct: 0, lang: "en" },
                        { q: "Група крові, де немає аглютинінів (антитіл) у плазмі:", options: ["IV(AB)", "I(0)", "II(A)", "III(B)"], correct: 0, lang: "ua" },
                        { q: "Blood group with no agglutinins in plasma:", options: ["IV(AB)", "I(0)", "II(A)", "III(B)"], correct: 0, lang: "en" },
                        { q: "Дефіцит якого вітаміну порушує зсідання крові?", options: ["K", "C", "A", "E"], correct: 0, lang: "ua" },
                        { q: "Which vitamin deficiency impairs blood clotting?", options: ["K", "C", "A", "E"], correct: 0, lang: "en" },
                        { q: "ШОЕ 40 мм/год свідчить про:", options: ["Запалення", "Норму", "Анемію", "Гіпоксію"], correct: 0, lang: "ua" },
                        { q: "ESR of 40 mm/h indicates:", options: ["Inflammation", "Normal state", "Anemia", "Hypoxia"], correct: 0, lang: "en" },
                        { q: "Для еритропоезу необхідно:", options: ["B12 та залізо", "Вітамін С", "Магній", "Інсулін"], correct: 0, lang: "ua" },
                        { q: "Required for erythropoiesis:", options: ["B12 and Iron", "Vitamin C", "Magnesium", "Insulin"], correct: 0, lang: "en" },
                        { q: "Аглютинація з сироватками I та II, але не з III. Яка група?", options: ["III (B)", "II (A)", "IV (AB)", "I (0)"], correct: 0, lang: "ua" },
                        { q: "Agglutination with sera I and II, but not III. Which group?", options: ["III (B)", "II (A)", "IV (AB)", "I (0)"], correct: 0, lang: "en" },
                        { q: "Що створює онкотичний тиск плазми?", options: ["Білки (альбуміни)", "NaCl", "Глюкоза", "Еритроцити"], correct: 0, lang: "ua" },
                        { q: "What creates the oncotic pressure of plasma?", options: ["Proteins (albumins)", "NaCl", "Glucose", "Erythrocytes"], correct: 0, lang: "en" },
                        { q: "Осмотична резистентність знижена при:", options: ["Сфероцитозі", "Нормі", "Анемії", "Гіпертонії"], correct: 0, lang: "ua" },
                        { q: "Osmotic resistance is decreased in:", options: ["Spherocytosis", "Normal state", "Anemia", "Hypertension"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-3",
                    title: "Серцево-судинна та Дихання",
                    content: `
                        <div class="krok-marker">ССС та Легені:</div>
                        <p><strong>ЕКГ:</strong> P-передсердя, QRS-шлуночки, T-відновлення.</p>
                        <p><strong>Сурфактант:</strong> Не дає альвеолам злипатися.</p>
                    `,
                    questions: [
                        { q: "На ЕКГ відсутній зубець P. Де водій ритму?", options: ["АВ-вузол", "СА-вузол", "Пучок Гіса", "Пуркін'є"], correct: 0, lang: "ua" },
                        { q: "P wave is absent. Where is the pacemaker?", options: ["AV node", "SA node", "His bundle", "Purkinje"], correct: 0, lang: "en" },
                        { q: "Що не дає альвеолам спадатися?", options: ["Сурфактант", "Азот", "Слиз", "Хрящ"], correct: 0, lang: "ua" },
                        { q: "What prevents alveoli from collapsing?", options: ["Surfactant", "Nitrogen", "Mucus", "Cartilage"], correct: 0, lang: "en" },
                        { q: "Як вагус впливає на серце?", options: ["Уповільнює ЧСС", "Прискорює ЧСС", "Збільшує силу", "Не впливає"], correct: 0, lang: "ua" },
                        { q: "How does the vagus nerve affect the heart?", options: ["Decreases HR", "Increases HR", "Increases force", "No effect"], correct: 0, lang: "en" },
                        { q: "АТ 160/100. Пульсовий тиск дорівнює:", options: ["60", "160", "100", "260"], correct: 0, lang: "ua" },
                        { q: "BP is 160/100. Pulse pressure is:", options: ["60", "160", "100", "260"], correct: 0, lang: "en" },
                        { q: "ЖЄЛ — це сума:", options: ["ДО+РОвд+РОвид", "ДО+ЗОб", "РОвд+ЗОб", "ДО+РОвд"], correct: 0, lang: "ua" },
                        { q: "Vital capacity (VC) is a sum of:", options: ["TV+IRV+ERV", "TV+RV", "IRV+RV", "TV+IRV"], correct: 0, lang: "en" },
                        { q: "Центр дихання найбільш чутливий до:", options: ["CO2", "O2", "N2", "H2"], correct: 0, lang: "ua" },
                        { q: "Respiratory center is most sensitive to:", options: ["CO2", "O2", "N2", "H2"], correct: 0, lang: "en" },
                        { q: "Зубець T на ЕКГ — це:", options: ["Реполяризація шлуночків", "Деполяризація", "Збудження передсердь", "Скорочення"], correct: 0, lang: "ua" },
                        { q: "T wave on ECG reflects:", options: ["Ventricular repolarization", "Depolarization", "Atrial excitation", "Contraction"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-4",
                    title: "Травлення, Виділення та Обмін",
                    content: `<div class="krok-marker">Ентерокіназа -> Трипсин. Реабсорбція глюкози.</div>`,
                    questions: [
                        { q: "Що активує трипсиноген?", options: ["Ентерокіназа", "Пепсин", "Жовч", "HCl"], correct: 0, lang: "ua" },
                        { q: "What activates trypsinogen?", options: ["Enterokinase", "Pepsin", "Bile", "HCl"], correct: 0, lang: "en" },
                        { q: "Жовч потрібна для:", options: ["Емульгації жирів", "Розщеплення білків", "Всмоктування глюкози", "Секреції HCl"], correct: 0, lang: "ua" },
                        { q: "Bile is required for:", options: ["Fat emulsification", "Protein breakdown", "Glucose absorption", "HCl secretion"], correct: 0, lang: "en" },
                        { q: "Де відбувається основна реабсорбція глюкози?", options: ["Проксимальні канальці", "Петля Генле", "Дистальні канальці", "Клубочок"], correct: 0, lang: "ua" },
                        { q: "Where does the main glucose reabsorption occur?", options: ["Proximal tubules", "Loop of Henle", "Distal tubules", "Glomerulus"], correct: 0, lang: "en" },
                        { q: "При якому АТ припиняється фільтрація в нирках?", options: ["< 70 мм рт.ст.", "120 мм рт.ст.", "90 мм рт.ст.", "150 мм рт.ст."], correct: 0, lang: "ua" },
                        { q: "At what BP does renal filtration stop?", options: ["< 70 mmHg", "120 mmHg", "90 mmHg", "150 mmHg"], correct: 0, lang: "en" },
                        { q: "Гормон, що збільшує реабсорбцію води:", options: ["Вазопресин (АДГ)", "Альдостерон", "Інсулін", "Окситоцин"], correct: 0, lang: "ua" },
                        { q: "Hormone that increases water reabsorption:", options: ["Vasopressin (ADH)", "Aldosterone", "Insulin", "Oxytocin"], correct: 0, lang: "en" },
                        { q: "В умовах 38°C найефективніший шлях тепловіддачі:", options: ["Випаровування", "Конвекція", "Радіація", "Кондукція"], correct: 0, lang: "ua" },
                        { q: "At 38°C the most effective heat loss is:", options: ["Evaporation", "Convection", "Radiation", "Conduction"], correct: 0, lang: "en" },
                        { q: "Дефіцит вітаміну А викликає:", options: ["Курячу сліпоту", "Рахіт", "Цингу", "Пелагру"], correct: 0, lang: "ua" },
                        { q: "Vitamin A deficiency causes:", options: ["Night blindness", "Rickets", "Scurvy", "Pellagra"], correct: 0, lang: "en" },
                        { q: "Основний обмін вимірюють:", options: ["Натщесерце, спокій", "Після їжі", "Під час бігу", "Уві сні"], correct: 0, lang: "ua" },
                        { q: "Basal metabolic rate is measured:", options: ["Fasting, rest", "After meal", "While running", "During sleep"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-5",
                    title: "Ендокринна та ВНД",
                    content: `<div class="krok-marker">Гормони та Темперамент.</div>`,
                    questions: [
                        { q: "Хворий схуд, ЧСС 120, екзофтальм. Який гормон?", options: ["Тироксин", "Інсулін", "Кортизол", "Глюкагон"], correct: 0, lang: "ua" },
                        { q: "Weight loss, HR 120, exophthalmos. Which hormone?", options: ["Thyroxine", "Insulin", "Cortisol", "Glucagon"], correct: 0, lang: "en" },
                        { q: "Людина сильна, врівноважена, рухлива. Тип:", options: ["Сангвінік", "Холерик", "Флегматик", "Меланхолік"], correct: 0, lang: "ua" },
                        { q: "Person is strong, balanced, mobile. Type:", options: ["Sanguine", "Choleric", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" },
                        { q: "Який гормон знижує цукор?", options: ["Інсулін", "Глюкагон", "Адреналін", "Кортизол"], correct: 0, lang: "ua" },
                        { q: "Which hormone decreases glucose?", options: ["Insulin", "Glucagon", "Epinephrine", "Cortisol"], correct: 0, lang: "en" },
                        { q: "Друга сигнальна система — це:", options: ["Мова", "Світло", "Звук", "Біль"], correct: 0, lang: "ua" },
                        { q: "The second signal system is:", options: ["Speech", "Light", "Sound", "Pain"], correct: 0, lang: "en" },
                        { q: "Тип ВНД — слабкий:", options: ["Меланхолік", "Сангвінік", "Холерик", "Флегматик"], correct: 0, lang: "ua" },
                        { q: "Temperament type — weak:", options: ["Melancholic", "Sanguine", "Choleric", "Phlegmatic"], correct: 0, lang: "en" },
                        { q: "Надлишок СТГ (гормон росту) у дорослих:", options: ["Акромегалія", "Гігантизм", "Карликовість", "Мікседема"], correct: 0, lang: "ua" },
                        { q: "Excess of GH in adults causes:", options: ["Acromegaly", "Gigantism", "Dwarfism", "Myxedema"], correct: 0, lang: "en" }
                    ]
                }
            ]
        },
        {
            id: "pharma",
            title: "Фармакологія",
            en: "Pharmacology",
            topics: [
                {
                    id: "ph-1",
                    title: "Вегетативна НС",
                    content: "М-холіноблокатори: Атропін.",
                    questions: [
                        { q: "Препарат для розширення зіниці:", options: ["Атропін", "Пілокарпін", "Прозерин", "Мезатон"], correct: 0, lang: "ua" },
                        { q: "Drug for pupil dilation:", options: ["Atropine", "Pilocarpine", "Neostigmine", "Phenylephrine"], correct: 0, lang: "en" }
                    ]
                }
            ]
        },
        { id: "pathmorph", title: "Патоморфологія", en: "Pathomorphology", topics: [] },
        { id: "pathphys", title: "Патофізіологія", en: "Pathophysiology", topics: [] },
        { id: "anatomy", title: "Анатомія", en: "Anatomy", topics: [] },
        { id: "histo", title: "Гістологія", en: "Histology", topics: [] }
    ]
};
