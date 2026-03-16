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
            content: `<div class="krok-marker">Деполяризація: Na+ в клітину. Реполяризація: K+ з клітини.</div>`,
            questions: [
                { q: "Який іон відповідає за фазу деполяризації?", options: ["Na+", "K+", "Ca2+", "Mg2+"], correct: 0, lang: "ua" },
                { q: "Which ion is responsible for depolarization?", options: ["Na+", "K+", "Ca2+", "Mg2+"], correct: 0, lang: "en" },
                { q: "Поріг подразнення зріс. Як змінилась збудливість?", options: ["Зменшилась", "Зросла", "Не змінилась", "Зникла"], correct: 0, lang: "ua" },
                { q: "Stimulation threshold increased. Excitability is:", options: ["Decreased", "Increased", "No change", "Zero"], correct: 0, lang: "en" },
                { q: "Медіатор у нервово-м'язовому синапсі:", options: ["Ацетилхолін", "Адреналін", "Дофамін", "Серотонін"], correct: 0, lang: "ua" },
                { q: "Neurotransmitter in the neuromuscular junction:", options: ["Acetylcholine", "Epinephrine", "Dopamine", "Serotonin"], correct: 0, lang: "en" },
                { q: "Блокада Na+/K+ насоса призведе до:", options: ["Зникнення ПС", "Росту ПС", "Гіперполяризації", "Нічого"], correct: 0, lang: "ua" },
                { q: "Blocking the Na+/K+ pump will lead to:", options: ["Loss of resting potential", "Increase of RP", "Hyperpolarization", "No effect"], correct: 0, lang: "en" },
                { q: "Фаза реполяризації зумовлена:", options: ["Виходом K+", "Входом Na+", "Входом Ca2+", "Виходом Na+"], correct: 0, lang: "ua" },
                { q: "Repolarization phase is caused by:", options: ["K+ efflux", "Na+ influx", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" }
            ]
        },
        {
            id: "ps-2",
            title: "Кров та Імунітет",
            content: `<div class="krok-marker">КП = 0.85-1.05. Група I(0) - без антигенів.</div>`,
            questions: [
                { q: "КП = 0.7. Яка анемія?", options: ["Гіпохромна", "Гіперхромна", "Нормохромна", "B12"], correct: 0, lang: "ua" },
                { q: "Color index is 0.7. Which anemia?", options: ["Hypochromic", "Hyperchromic", "Normochromic", "B12"], correct: 0, lang: "en" },
                { q: "Група крові, де немає аглютинінів (антитіл):", options: ["IV(AB)", "I(0)", "II(A)", "III(B)"], correct: 0, lang: "ua" },
                { q: "Blood group with no agglutinins in plasma:", options: ["IV(AB)", "I(0)", "II(A)", "III(B)"], correct: 0, lang: "en" },
                { q: "Дефіцит якого вітаміну порушує зсідання крові?", options: ["K", "C", "A", "E"], correct: 0, lang: "ua" },
                { q: "Which vitamin deficiency impairs blood clotting?", options: ["K", "C", "A", "E"], correct: 0, lang: "en" },
                { q: "Осмотичний тиск плазми крові переважно створюють:", options: ["NaCl", "Білки", "Глюкоза", "Сечовина"], correct: 0, lang: "ua" },
                { q: "Osmotic pressure of blood plasma is mainly created by:", options: ["NaCl", "Proteins", "Glucose", "Urea"], correct: 0, lang: "en" },
                { q: "Для еритропоезу необхідно:", options: ["B12 та залізо", "Вітамін С", "Магній", "Інсулін"], correct: 0, lang: "ua" },
                { q: "Required for erythropoiesis:", options: ["B12 and Iron", "Vitamin C", "Magnesium", "Insulin"], correct: 0, lang: "en" }
            ]
        },
        {
            id: "ps-3",
            title: "ССС та Дихання",
            content: `<div class="krok-marker">QRS - шлуночки. Сурфактант - альвеоли.</div>`,
            questions: [
                { q: "На ЕКГ відсутній зубець P. Де водій ритму?", options: ["АВ-вузол", "СА-вузол", "Пучок Гіса", "Пуркін'є"], correct: 0, lang: "ua" },
                { q: "P wave is absent. Where is the pacemaker?", options: ["AV node", "SA node", "His bundle", "Purkinje"], correct: 0, lang: "en" },
                { q: "Що не дає альвеолам спадатися?", options: ["Сурфактант", "Азот", "Слиз", "Хрящ"], correct: 0, lang: "ua" },
                { q: "What prevents alveoli from collapsing?", options: ["Surfactant", "Nitrogen", "Mucus", "Cartilage"], correct: 0, lang: "en" },
                { q: "Зубець T на ЕКГ — це:", options: ["Реполяризація шлуночків", "Деполяризація", "Збудження передсердь", "Скорочення"], correct: 0, lang: "ua" },
                { q: "T wave on ECG reflects:", options: ["Ventricular repolarization", "Depolarization", "Atrial excitation", "Contraction"], correct: 0, lang: "en" },
                { q: "Як вагус впливає на серце?", options: ["Уповільнює ЧСС", "Прискорює ЧСС", "Збільшує силу", "Не впливає"], correct: 0, lang: "ua" },
                { q: "How does the vagus nerve affect the heart?", options: ["Decreases HR", "Increases HR", "Increases force", "No effect"], correct: 0, lang: "en" },
                { q: "ЖЄЛ — це сума:", options: ["ДО+РОвд+РОвид", "ДО+ЗОб", "РОвд+ЗОб", "ДО+РОвд"], correct: 0, lang: "ua" },
                { q: "Vital capacity (VC) is a sum of:", options: ["TV+IRV+ERV", "TV+RV", "IRV+RV", "TV+IRV"], correct: 0, lang: "en" }
            ]
        },
        {
            id: "ps-4",
            title: "Травлення та Виділення",
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
                { q: "Hormone that increases water reabsorption:", options: ["Vasopressin (ADH)", "Aldosterone", "Insulin", "Oxytocin"], correct: 0, lang: "en" }
            ]
        },
        {
            id: "ps-5",
            title: "Ендокринна та ВНД",
            content: `<div class="krok-marker">Інсулін знижує цукор. Сангвінік - сильний врівноважений.</div>`,
            questions: [
                { q: "Хворий схуд, ЧСС 120, екзофтальм. Який гормон?", options: ["Тироксин", "Інсулін", "Кортизол", "Глюкагон"], correct: 0, lang: "ua" },
                { q: "Weight loss, HR 120, exophthalmos. Which hormone?", options: ["Thyroxine", "Insulin", "Cortisol", "Glucagon"], correct: 0, lang: "en" },
                { q: "Людина сильна, врівноважена, рухлива. Тип:", options: ["Сангвінік", "Холерик", "Флегматик", "Меланхолік"], correct: 0, lang: "ua" },
                { q: "Person is strong, balanced, mobile. Type:", options: ["Sanguine", "Choleric", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" },
                { q: "Який гормон знижує рівень глюкози в крові?", options: ["Інсулін", "Глюкагон", "Адреналін", "Кортизол"], correct: 0, lang: "ua" },
                { q: "Which hormone decreases blood glucose levels?", options: ["Insulin", "Glucagon", "Epinephrine", "Cortisol"], correct: 0, lang: "en" },
                { q: "Друга сигнальна система — це:", options: ["Мова (слово)", "Світло", "Звук", "Смак"], correct: 0, lang: "ua" },
                { q: "The second signal system is:", options: ["Speech (word)", "Light", "Sound", "Taste"], correct: 0, lang: "en" },
                { q: "Тип ВНД — сильний, неврівноважений:", options: ["Холерик", "Сангвінік", "Флегматик", "Меланхолік"], correct: 0, lang: "ua" },
                { q: "Temperament type — strong, unbalanced:", options: ["Choleric", "Sanguine", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" }
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
                    title: "Вегетативна НС та Антибіотики",
                    content: `<div class="krok-marker">Атропін - мідріаз. Тетрациклін - зуби.</div>`,
                    questions: [
                        { q: "Антидот при отруєнні морфіном:", options: ["Налоксон", "Атропін", "Унітіол", "Бемегрид"], correct: 0, lang: "ua" },
                        { q: "Antidote for morphine poisoning:", options: ["Naloxone", "Atropine", "Unithiol", "Bemegride"], correct: 0, lang: "en" }
                    ]
                }
            ]
        },
        {
            id: "pathmorph",
            title: "Патоморфологія",
            en: "Pathomorphology",
            topics: [
                {
                    id: "pm-1",
                    title: "Загальна патологія",
                    content: `<div class="krok-marker">Мускатна печінка - венозне повнокрів'я.</div>`,
                    questions: [
                        { q: "Печінка виглядає як мускатний горіх. Це:", options: ["Хронічне венозне повнокрів'я", "Цироз", "Амілоїдоз", "Некроз"], correct: 0, lang: "ua" }
                    ]
                }
            ]
        },
        {
            id: "pathphys",
            title: "Патофізіологія",
            en: "Pathophysiology",
            topics: [
                {
                    id: "pp-1",
                    title: "Запалення та Гарячка",
                    content: `<div class="krok-marker">Стадія стояння t - теплопродукція = тепловіддача.</div>`,
                    questions: [
                        { q: "Стадія гарячки, де продукція тепла дорівнює віддачі:", options: ["Стадія стояння", "Підйом", "Зниження", "Кризис"], correct: 0, lang: "ua" }
                    ]
                }
            ]
        },
        {
            id: "anatomy",
            title: "Анатомія",
            en: "Anatomy",
            topics: [
                {
                    id: "an-1",
                    title: "Неврологія",
                    content: `<div class="krok-marker">N. facialis - міміка.</div>`,
                    questions: [
                        { q: "Хворий не може закрити око, кут рота опущений. Який нерв?", options: ["Лицевий", "Трійчастий", "Блукаючий", "Окоруховий"], correct: 0, lang: "ua" }
                    ]
                }
            ]
        },
        {
            id: "histo",
            title: "Гістологія",
            en: "Histology",
            topics: [
                {
                    id: "hs-1",
                    title: "Тканини",
                    content: `<div class="krok-marker">Епітелій шкіри - багатошаровий плоский зроговілий.</div>`,
                    questions: [
                        { q: "Тканина стравоходу:", options: ["Багатошаровий плоский незроговілий", "Одношаровий", "Перехідний", "Залозистий"], correct: 0, lang: "ua" }
                    ]
                }
            ]
        }
    ]
};
