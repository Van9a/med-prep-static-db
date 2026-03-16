const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Збудливі тканини та Кров",
                    content: `
                        <div class="krok-marker">Маркери: КП (0.85-1.05), Na+ вхід (деполяризація), K+ вихід (ПС).</div>
                        <p><strong>Формула КП:</strong> (3 * Hb) / (Er * 10). Гіпохромія < 0.85.</p>
                    `,
                    questions: [
                        { q: "У пацієнта колірний показник 0,6. Яка це анемія?", options: ["Гіпохромна", "Гіперхромна", "Нормохромна", "Залізорефрактерна"], correct: 0, lang: "ua" },
                        { q: "A patient's color index is 0.6. What type of anemia is it?", options: ["Hypochromic", "Hyperchromic", "Normochromic", "Hemolytic"], correct: 0, lang: "en" },
                        { q: "Який іон відповідає за фазу деполяризації потенціалу дії?", options: ["Натрій", "Калій", "Кальцій", "Магній"], correct: 0, lang: "ua" },
                        { q: "Which ion is responsible for the depolarization phase?", options: ["Sodium", "Potassium", "Calcium", "Magnesium"], correct: 0, lang: "en" },
                        { q: "Гемоліз еритроцитів почався при 0,5% NaCl. Це свідчить про:", options: ["Зниження резистентності", "Норму", "Підвищення резистентності", "Гіпертонію"], correct: 0, lang: "ua" },
                        { q: "Hemolysis of erythrocytes started at 0.5% NaCl. This indicates:", options: ["Decreased resistance", "Normal state", "Increased resistance", "Hypertension"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-2",
                    title: "Серцево-судинна система та Дихання",
                    content: `<div class="krok-marker">P - передсердя, QRS - шлуночки. Вагус - гальмує.</div>`,
                    questions: [
                        { q: "На ЕКГ відсутній зубець P. Де водій ритму?", options: ["АВ-вузол", "СА-вузол", "Пучок Гіса", "Передсердя"], correct: 0, lang: "ua" },
                        { q: "P wave is absent on the ECG. Where is the pacemaker?", options: ["AV node", "SA node", "His bundle", "Atria"], correct: 0, lang: "en" },
                        { q: "Чому альвеоли не спадаються при видиху?", options: ["Сурфактант", "Тиск", "Слизова", "Хрящ"], correct: 0, lang: "ua" },
                        { q: "Why do alveoli not collapse during expiration?", options: ["Surfactant", "Pressure", "Mucosa", "Cartilage"], correct: 0, lang: "en" }
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
