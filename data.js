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
                    <li><strong>Реполяризація (Repolarization):</strong> Вихід K+.</li>
                    <li><strong>Поріг подразнення (Threshold):</strong> Мінімальна сила для збудження.</li>
                </ul>
            `,
            questions: [
                { q: "Який іонний процес відповідає за фазу деполяризації потенціалу дії?", options: ["Вхід Na+", "Вихід K+", "Вхід Ca2+", "Вихід Na+"], correct: 0, lang: "ua" },
                { q: "Which ionic process is responsible for the depolarization phase of the action potential?", options: ["Na+ influx", "K+ efflux", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" },
                { q: "Як зміниться збудливість клітини при підвищенні порогу подразнення?", options: ["Зменшиться", "Збільшиться", "Не зміниться", "Зникне"], correct: 0, lang: "ua" },
                { q: "How will the cell excitability change if the stimulation threshold is increased?", options: ["Decrease", "Increase", "Not change", "Disappear"], correct: 0, lang: "en" }
            ]
        },
        {
            id: "ps-2",
            title: "Фізіологія крові",
            content: `
                <div class="krok-marker">Аналіз КРОК:</div>
                <p><strong>Колірний показник (Color Index):</strong> Норма 0.85-1.05. < 0.85 — залізодефіцит.</p>
                <p><strong>Групи крові:</strong> I(0) — немає аглютиногенів. IV(AB) — немає аглютинінів.</p>
            `,
            questions: [
                { q: "У пацієнта КП = 0,7. Який тип анемії найбільш імовірний?", options: ["Залізодефіцитна", "B12-дефіцитна", "Гемолітична", "Апластична"], correct: 0, lang: "ua" },
                { q: "A patient's color index is 0.7. Which type of anemia is most likely?", options: ["Iron-deficiency", "B12-deficiency", "Hemolytic", "Aplastic"], correct: 0, lang: "en" },
                { q: "Який вітамін необхідний для нормального зсідання крові (синтез протромбіну)?", options: ["K", "C", "D", "B12"], correct: 0, lang: "ua" },
                { q: "Which vitamin is essential for normal blood clotting (prothrombin synthesis)?", options: ["K", "C", "D", "B12"], correct: 0, lang: "en" }
            ]
        },
        {
            id: "ps-3",
            title: "Серцево-судинна система",
            content: `
                <div class="krok-marker">ЕКГ та Регуляція:</div>
                <ul class="list-disc pl-5">
                    <li><strong>Зубець P:</strong> Збудження передсердь.</li>
                    <li><strong>Комплекс QRS:</strong> Збудження шлуночків.</li>
                    <li><strong>Vagus:</strong> Зменшує ЧСС (Брадикардія).</li>
                    <li><strong>Симпатика:</strong> Збільшує ЧСС (Тахікардія).</li>
                </ul>
            `,
            questions: [
                { q: "На ЕКГ відсутній зубець P перед кожним комплексом QRS. Де водій ритму?", options: ["Атріовентрикулярний вузол", "Синоатріальний вузол", "Пучок Гіса", "Ніжки Гіса"], correct: 0, lang: "ua" },
                { q: "P wave is absent on the ECG. Where is the pacemaker located?", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Purkinje fibers"], correct: 0, lang: "en" },
                { q: "Подразнення блукаючого нерва призвело,
        {
            id: "pharma",
            title: "Фармакологія",
            en: "Pharmacology",
            topics: [
                {
                    id: "ph-1",
                    title: "Вегетативна НС та Антибіотики",
                    content: `<div class="krok-marker">Атропін - сухість, мідріаз. Тетрациклін - зуби. Гентаміцин - слух.</div>`,
                    questions: [
                        { q: "Препарат для лікування глаукоми, що звужує зіницю:", options: ["Пілокарпін", "Атропін", "Адреналін", "Мезатон"], correct: 0, lang: "ua" },
                        { q: "A drug for glaucoma treatment that constricts the pupil:", options: ["Pilocarpine", "Atropine", "Epinephrine", "Phenylephrine"], correct: 0, lang: "en" },
                        { q: "Антибіотик, що викликає 'жовті зуби' у дітей:", options: ["Тетрациклін", "Пеніцилін", "Ністатин", "Азитроміцин"], correct: 0, lang: "ua" },
                        { q: "An antibiotic that causes 'yellow teeth' in children:", options: ["Tetracycline", "Penicillin", "Nystatin", "Azithromycin"], correct: 0, lang: "en" },
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
                    content: `<div class="krok-marker">Мускатна печінка - хронічне венозне повнокрів'я.</div>`,
                    questions: [
                        { q: "Печінка щільна, на розрізі вигляд мускатного горіха. Це:", options: ["Хронічне венозне повнокрів'я", "Амілоїдоз", "Жирова дистрофія", "Цироз"], correct: 0, lang: "ua" },
                        { q: "Liver is dense, looks like a nutmeg on the section. This is:", options: ["Chronic venous congestion", "Amyloidosis", "Fatty dystrophy", "Cirrhosis"], correct: 0, lang: "en" }
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
                    content: `<div class="krok-marker">Стадія 1 - підйом t, Стадія 2 - плато, Стадія 3 - падіння.</div>`,
                    questions: [
                        { q: "При якій стадії гарячки теплопродукція дорівнює тепловіддачі?", options: ["Стадія стояння температури", "Стадія підйому", "Стадія зниження", "Кризис"], correct: 0, lang: "ua" },
                        { q: "At which stage of fever does heat production equal heat loss?", options: ["Fastigium (plateau)", "Incrementi", "Decrementi", "Crisis"], correct: 0, lang: "en" }
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
                    title: "Остеологія та Неврологія",
                    content: `<div class="krok-marker">N. facialis - міміка. N. trigeminus - чутливість обличчя.</div>`,
                    questions: [
                        { q: "Хворий не може закрити око на одній стороні, кут рота опущений. Який нерв уражено?", options: ["Лицевий", "Трійчастий", "Блукаючий", "Під'язиковий"], correct: 0, lang: "ua" },
                        { q: "A patient cannot close one eye, the corner of the mouth is drooping. Which nerve is damaged?", options: ["Facial", "Trigeminal", "Vagus", "Hypoglossal"], correct: 0, lang: "en" }
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
                    title: "Тканини та Клітини",
                    content: `<div class="krok-marker">Епітелій: багатошаровий плоский зроговілий - шкіра.</div>`,
                    questions: [
                        { q: "Яка тканина вистилає слизову оболонку стравоходу?", options: ["Багатошаровий плоский незроговілий", "Одношаровий призматичний", "Перехідний", "Війчастий"], correct: 0, lang: "ua" },
                        { q: "What tissue lines the esophageal mucosa?", options: ["Non-keratinized stratified squamous", "Simple columnar", "Transitional", "Ciliated"], correct: 0, lang: "en" }
                    ]
                }
            ]
        }
    ]
};
