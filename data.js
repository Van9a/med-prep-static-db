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
                            <li><strong>Потенціал спокою (Resting potential):</strong> Вихід K+.</li>
                            <li><strong>Деполяризація (Depolarization):</strong> Вхід Na+.</li>
                            <li><strong>Поріг подразнення:</strong> Мінімальна сила для збудження.</li>
                        </ul>
                    `,
                    questions: [
                        { q: "Який іонний процес відповідає за фазу деполяризації потенціалу дії?", options: ["Вхід Na+", "Вихід K+", "Вхід Ca2+", "Вихід Na+"], correct: 0, lang: "ua" },
                        { q: "Which ionic process is responsible for the depolarization phase of the action potential?", options: ["Na+ influx", "K+ efflux", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-2",
                    title: "Фізіологія крові",
                    content: `<div class="krok-marker">КП: 0.85-1.05. Група I(0) - немає аглютиногенів.</div>`,
                    questions: [
                        { q: "У пацієнта КП = 0,7. Який тип анемії найбільш імовірний?", options: ["Залізодефіцитна", "B12-дефіцитна", "Гемолітична", "Апластична"], correct: 0, lang: "ua" },
                        { q: "A patient's color index is 0.7. Which type of anemia is most likely?", options: ["Iron-deficiency", "B12-deficiency", "Hemolytic", "Aplastic"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-3",
                    title: "Серцево-судинна система",
                    content: `<div class="krok-marker">P - передсердя, QRS - шлуночки. Vagus - брадикардія.</div>`,
                    questions: [
                        { q: "На ЕКГ відсутній зубець P. Де водій ритму?", options: ["Атріовентрикулярний вузол", "Синоатріальний вузол", "Пучок Гіса", "Ніжки Гіса"], correct: 0, lang: "ua" },
                        { q: "P wave is absent on the ECG. Where is the pacemaker located?", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Purkinje fibers"], correct: 0, lang: "en" },
                        { q: "Подразнення блукаючого нерва викликало зупинку серця. Який медіатор це спричинив?", options: ["Ацетилхолін", "Адреналін", "Норадреналін", "ГАМК"], correct: 0, lang: "ua" },
                        { q: "Vagus nerve stimulation caused cardiac arrest. Which mediator is responsible?", options: ["Acetylcholine", "Epinephrine", "Norepinephrine", "GABA"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-4",
                    title: "Травлення та Виділення (Pack 2)",
                    content: `<div class="krok-marker">Ентерокіназа активує трипсин. Глюкозурія при нормі крові = ниркова реабсорбція.</div>`,
                    questions: [
                        // --- ТРАВЛЕННЯ ---
    { q: "У хворого порушено перетравлення білків через дефіцит ентерокінази. Який фермент не активується?", options: ["Трипсиноген", "Пепсиноген", "Амілаза", "Ліпаза"], correct: 0, lang: "ua" },
    { q: "Protein digestion is impaired due to enterokinase deficiency. Which enzyme fails to activate?", options: ["Trypsinogen", "Pepsinogen", "Amylase", "Lipase"], correct: 0, lang: "en" },
    { q: "Який гормон ШКТ стимулює секрецію соляної кислоти обкладовими клітинами?", options: ["Гастрин", "Секретин", "Холецистокінін", "Соматостатин"], correct: 0, lang: "ua" },
    { q: "Which GI hormone stimulates hydrochloric acid secretion by parietal cells?", options: ["Gastrin", "Secretin", "Cholecystokinin", "Somatostatin"], correct: 0, lang: "en" },
    { q: "У пацієнта порушено емульгацію жирів. Відсутність якого секрету є причиною?", options: ["Жовч", "Шлунковий сік", "Слина", "Кишковий сік"], correct: 0, lang: "ua" },
    { q: "Fat emulsification is impaired in a patient. The absence of which secretion is the cause?", options: ["Bile", "Gastric juice", "Saliva", "Intestinal juice"], correct: 0, lang: "en" },
    

[Image of the human digestive system]

    
    // --- НИРКИ / ВИДІЛЕННЯ ---
    { q: "У сечі виявлено глюкозу при її нормі в плазмі крові. Де відбулося порушення?", options: ["Реабсорбція в проксимальних канальцях", "Фільтрація в клубочках", "Секреція в дистальних канальцях", "Екскреція"], correct: 0, lang: "ua" },
    { q: "Glucose was found in urine despite normal plasma levels. Where is the impairment?", options: ["Reabsorption in proximal tubules", "Filtration in glomeruli", "Secretion in distal tubules", "Excretion"], correct: 0, lang: "en" },
    { q: "Сечовиділення припинилося при АТ 70 мм рт.ст. Причиною є падіння:", options: ["Гідростатичного тиску в капілярах клубочків", "Осмотичного тиску", "Онкотичного тиску", "Проникності мембрани"], correct: 0, lang: "ua" },
    { q: "Urination stopped at BP of 70 mmHg. The cause is a drop in:", options: ["Hydrostatic pressure in glomerular capillaries", "Osmotic pressure", "Oncotic pressure", "Membrane permeability"], correct: 0, lang: "en" },
    

[Image of the nephron structure and function]


    // --- ОБМІН РЕЧОВИН ТА ТЕРМОРЕГУЛЯЦІЯ ---
    { q: "В умовах високої температури і низької вологості найефективніший шлях тепловіддачі:", options: ["Випаровування поту", "Конвекція", "Радіація", "Теплопроведення"], correct: 0, lang: "ua" },
    { q: "In conditions of high temperature and low humidity, the most effective heat loss mechanism is:", options: ["Evaporation of sweat", "Convection", "Radiation", "Conduction"], correct: 0, lang: "en" },
    { q: "Для визначення основного обміну вимірювання проводять за умов:", options: ["Фізичний та психічний спокій, натщесерце, t=20°C", "Після їжі", "Під час сну", "При t=10°C"], correct: 0, lang: "ua" },
    { q: "Basal metabolic rate is measured under the following conditions:", options: ["Physical/mental rest, fasting, t=20°C", "After a meal", "During sleep", "At t=10°C"], correct: 0, lang: "en" },

    // --- СЕНСОРНІ СИСТЕМИ ---
    { q: "Людина добре бачить предмети на великій відстані і погано на близькій. Це:", options: ["Гіперметропія (далекозорість)", "Міопія (короткозорість)", "Астигматизм", "Дальтонізм"], correct: 0, lang: "ua" },
    { q: "A patient sees objects well at a distance but poorly up close. This is:", options: ["Hypermetropia", "Myopia", "Astigmatism", "Color blindness"], correct: 0, lang: "en" },
    { q: "Де розташовані рецептори слуху (волоскові клітини)?", options: ["Кортіїв орган", "Барабанна перетинка", "Овальне вікно", "Завитка"], correct: 0, lang: "ua" },
    { q: "Where are the hearing receptors (hair cells) located?", options: ["Organ of Corti", "Tympanic membrane", "Oval window", "Cochlea"], correct: 0, lang: "en" },

    // --- ЦНС ТА М'ЯЗИ ---
    { q: "Який іон необхідний для зв'язування актину з міозином при скороченні?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "ua" },
    { q: "Which ion is required for actin-myosin binding during contraction?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "en" },
    { q: "Ураження якого відділу ЦНС викликає порушення координації та атаксію?", options: ["Мозочок", "Гіпоталамус", "Спинний мозок", "Таламус"], correct: 0, lang: "ua" },
    { q: "Damage to which part of the CNS causes impaired coordination and ataxia?", options: ["Cerebellum", "Hypothalamus", "Spinal cord", "Thalamus"], correct: 0, lang: "en" },
    

[Image of the reflex arc components]
                        { q: "У хворого порушено перетравлення білків через дефіцит ентерокінази. Що не активується?", options: ["Трипсиноген", "Пепсиноген", "Амілаза", "Ліпаза"], correct: 0, lang: "ua" },
                        { q: "Protein digestion is impaired due to enterokinase deficiency. What fails to activate?", options: ["Trypsinogen", "Pepsinogen", "Amylase", "Lipase"], correct: 0, lang: "en" },
                        { q: "У сечі виявлено глюкозу при нормі в крові. Де порушення?", options: ["Реабсорбція", "Фільтрація", "Секреція", "Екскреція"], correct: 0, lang: "ua" },
                        { q: "Glucose in urine with normal blood levels. Where is the impairment?", options: ["Reabsorption", "Filtration", "Secretion", "Excretion"], correct: 0, lang: "en" }
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
