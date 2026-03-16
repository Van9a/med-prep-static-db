const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Загальна фізіологія (Збудливі тканини)",
                    content: `
                        <div class="krok-marker">Ключові концепції:</div>
                        <ul class="list-disc pl-5">
                            <li><strong>Потенціал спокою:</strong> Вихід K+ з клітини.</li>
                            <li><strong>Деполяризація:</strong> Вхід Na+ в клітину.</li>
                            <li><strong>Реполяризація:</strong> Вихід K+ (відновлення заряду).</li>
                            <li><strong>Поріг подразнення:</strong> Мінімальна сила для збудження.</li>
                        </ul>
                    `,
                    questions: [
                        { q: "Який іонний процес відповідає за фазу деполяризації потенціалу дії?", options: ["Вхід Na+", "Вихід K+", "Вхід Ca2+", "Вихід Na+"], correct: 0, lang: "ua" },
                        { q: "Which ionic process is responsible for the depolarization phase?", options: ["Na+ influx", "K+ efflux", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" },
                        { q: "Як зміниться збудливість клітини при підвищенні порогу подразнення?", options: ["Зменшиться", "Збільшиться", "Не зміниться", "Зникне"], correct: 0, lang: "ua" },
                        { q: "How will the cell excitability change if the stimulation threshold is increased?", options: ["Decrease", "Increase", "Not change", "Disappear"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-2",
                    title: "Фізіологія крові",
                    content: `
                        <div class="krok-marker">Аналіз КРОК:</div>
                        <p><strong>Колірний показник:</strong> Норма 0.85-1.05. Нижче 0.85 — залізодефіцит (гіпохромія).</p>
                        <p><strong>Група I(0):</strong> Немає аглютиногенів A та B.</p>
                    `,
                    questions: [
                        { q: "У пацієнта КП = 0,7. Який тип анемії найбільш імовірний?", options: ["Залізодефіцитна", "B12-дефіцитна", "Гемолітична", "Апластична"], correct: 0, lang: "ua" },
                        { q: "A patient's color index is 0.7. Which type of anemia is most likely?", options: ["Iron-deficiency", "B12-deficiency", "Hemolytic", "Aplastic"], correct: 0, lang: "en" },
                        { q: "Який вітамін необхідний для синтезу факторів зсідання крові у печінці?", options: ["Вітамін K", "Вітамін C", "Вітамін D", "Вітамін B12"], correct: 0, lang: "ua" },
                        { q: "Which vitamin is essential for prothrombin synthesis in the liver?", options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-3",
                    title: "Серцево-судинна система",
                    content: `
                        <div class="krok-marker">ЕКГ Ключі:</div>
                        <p>P — передсердя. QRS — шлуночки. T — реполяризація шлуночків.</p>
                        <p>Vagus (ACh) — уповільнює серце. Sympathicus (NE) — прискорює.</p>
                    `,
                    questions: [
                        { q: "На ЕКГ відсутній зубець P перед кожним QRS. Де водій ритму?", options: ["Атріовентрикулярний вузол", "Синоатріальний вузол", "Пучок Гіса", "Волокна Пуркін'є"], correct: 0, lang: "ua" },
                        { q: "P wave is absent on the ECG. Where is the pacemaker located?", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Purkinje fibers"], correct: 0, lang: "en" },
                        { q: "Подразнення блукаючого нерва викликало зупинку серця. Який медіатор це спричинив?", options: ["Ацетилхолін", "Адреналін", "Норадреналін", "ГАМК"], correct: 0, lang: "ua" },
                        { q: "Vagus nerve stimulation caused cardiac arrest. Which mediator is responsible?", options: ["Acetylcholine", "Epinephrine", "Norepinephrine", "GABA"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-4",
                    title: "Травлення, Виділення та Обмін",
                    content: `
                        <div class="krok-marker">Важливі маркери:</div>
                        <p><strong>Ентерокіназа:</strong> Активує трипсиноген. <strong>Жовч:</strong> Емульгує жири.</p>
                        <p><strong>Нирки:</strong> Глюкозурія при нормі крові = порушення реабсорбції.</p>
                        <p><strong>Терморегуляція:</strong> Випаровування — основний шлях при t > 35°C.</p>
                    `,
                    questions: [
                        { q: "У хворого порушено перетравлення білків через дефіцит ентерокінази. Який фермент не активується?", options: ["Трипсиноген", "Пепсиноген", "Амілаза", "Ліпаза"], correct: 0, lang: "ua" },
                        { q: "Protein digestion is impaired due to enterokinase deficiency. What fails to activate?", options: ["Trypsinogen", "Pepsinogen", "Amylase", "Lipase"], correct: 0, lang: "en" },
                        { q: "Який гормон ШКТ стимулює секрецію соляної кислоти?", options: ["Гастрин", "Секретин", "Холецистокінін", "Соматостатин"], correct: 0, lang: "ua" },
                        { q: "Which GI hormone stimulates hydrochloric acid secretion?", options: ["Gastrin", "Secretin", "Cholecystokinin", "Somatostatin"], correct: 0, lang: "en" },
                        { q: "У сечі виявлено глюкозу при її нормі в плазмі крові. Де відбулося порушення?", options: ["Реабсорбція", "Фільтрація", "Секреція", "Екскреція"], correct: 0, lang: "ua" },
                        { q: "Glucose was found in urine despite normal plasma levels. Identify the process:", options: ["Reabsorption", "Filtration", "Secretion", "Excretion"], correct: 0, lang: "en" },
                        { q: "В умовах високої температури (38°C) найефективніший шлях тепловіддачі:", options: ["Випаровування поту", "Конвекція", "Радіація", "Теплопроведення"], correct: 0, lang: "ua" },
                        { q: "In conditions of high temperature (38°C), the most effective heat loss is:", options: ["Evaporation of sweat", "Convection", "Radiation", "Conduction"], correct: 0, lang: "en" },
                        { q: "Який іон необхідний для скорочення м'язів (зв'язування актину з міозином)?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "ua" },
                        { q: "Which ion is required for muscle contraction (actin-myosin binding)?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-5",
                    title: "Ендокринна система та ВНД",
                    content: `
                        <div class="krok-marker">Типи ВНД:</div>
                        <p><strong>Сангвінік:</strong> Сильний, врівноважений, рухливий.</p>
                        <p><strong>Холерик:</strong> Сильний, НЕврівноважений.</p>
                        <p><strong>Тироксин:</strong> Надлишок — тахікардія, схуднення (Базедова хвороба).</p>
                    `,
                    questions: [
                        { q: "Хворий схуд, екзофтальм, ЧСС 120. Надлишок якого гормону?", options: ["Тироксин", "Інсулін", "Кортизол", "Глюкагон"], correct: 0, lang: "ua" },
                        { q: "A patient has weight loss, exophthalmos, tachycardia. Excess of which hormone?", options: ["Thyroxine", "Insulin", "Cortisol", "Glucagon"], correct: 0, lang: "en" },
                        { q: "Людина сильна, врівноважена, інертна. Який це тип темпераменту?", options: ["Флегматик", "Сангвінік", "Холерик", "Меланхолік"], correct: 0, lang: "ua" },
                        { q: "A person is strong, balanced, and inert. Which temperament type is this?", options: ["Phlegmatic", "Sanguine", "Choleric", "Melancholic"], correct: 0, lang: "en" }
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
