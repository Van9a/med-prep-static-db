const medDB = {
    subjects: [
        {
            id: "pharma",
            title: "Фармакологія",
            en: "Pharmacology",
            topics: [
                {
                    id: "ph-1",
                    title: "Вегетативна нервова система",
                    content: `
                        <div class="krok-marker">Маркери КРОК 1 (2001-2026):</div>
                        <h3 class="font-bold text-blue-700 mt-4">1. Холінотропні засоби</h3>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Пілокарпін:</strong> Глаукома, звуження зіниці (міоз), зниження внутрішньоочного тиску.</li>
                            <li><strong>Атропін:</strong> Розширення зіниці (мідріаз), дослідження очного дна, отруєння мухоморами або ФОС. <em>Протипоказаний при глаукомі!</em></li>
                            <li><strong>Прозерин:</strong> Післяопераційна атонія кишечнику або сечового міхура, міастенія.</li>
                            <li><strong>Дитилін:</strong> Міорелаксант для інтубації. Якщо дія затягнулася — генетичний дефіцит холінестерази.</li>
                        </ul>
                        <h3 class="font-bold text-blue-700 mt-4">2. Адренотропні засоби</h3>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Адреналін:</strong> Анафілактичний шок, зупинка серця.</li>
                            <li><strong>Сальбутамол:</strong> Напад бронхіальної астми (вибірковий бета-2 агоніст).</li>
                            <li><strong>Анаприлін (Пропранолол):</strong> Гіпертонія + тахікардія. <em>Протипоказаний при астмі (блокує бета-2)!</em></li>
                        </ul>
                    `,
                    questions: [] // Сюди будемо закидати масиви тестів
                },
                { id: "ph-2", title: "Антибіотики та антисептики", content: "Конспект готується...", questions: [] },
                { id: "ph-3", title: "Серцево-судинні засоби", content: "Конспект готується...", questions: [] },
                { id: "ph-4", title: "Анальгетики та НПЗЗ", content: "Конспект готується...", questions: [] }
            ]
        },
        {
            id: "pathmorph",
            title: "Патоморфологія",
            en: "Pathomorphology",
            topics: [
                { id: "pm-1", title: "Альтерація: Некроз та дистрофії", content: "Конспект готується...", questions: [] },
                { id: "pm-2", title: "Порушення кровообігу (Тромбоз, Емболія)", content: "Конспект готується...", questions: [] },
                { id: "pm-3", title: "Запалення та Імунопатологія", content: "Конспект готується...", questions: [] },
                { id: "pm-4", title: "Пухлини (Онкоморфологія)", content: "Конспект готується...", questions: [] }
            ]
        },
        {
            id: "pathphys",
            title: "Патофізіологія",
            en: "Pathophysiology",
            topics: [
                { id: "pp-1", title: "Типові патологічні процеси (Гарячка, Запалення)", content: "...", questions: [] },
                { id: "pp-2", title: "Алергічні реакції (I-IV типи)", content: "...", questions: [] },
                { id: "pp-3", title: "Патофізіологія крові (Анемії, Лейкози)", content: "...", questions: [] }
            ]
        },
        {
            id: "anatomy",
            title: "Анатомія",
            en: "Anatomy",
            topics: [
                { id: "an-1", title: "Остеологія та Артрологія", content: "...", questions: [] },
                { id: "an-2", title: "Спланхнологія (Внутрішні органи)", content: "...", questions: [] },
                { id: "an-3", title: "Центральна нервова система та Нерви", content: "...", questions: [] }
            ]
        },
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                { id: "ps-1", title: "Фізіологія крові та серця", content: "...", questions: [] },
                { id: "ps-2", title: "Дихання та Обмін речовин", content: "...", questions: [] }
            ]
        },
        {
            id: "histo",
            title: "Гістологія",
            en: "Histology",
            topics: [
                { id: "hs-1", title: "Тканини та Клітини", content: "...", questions: [] },
                { id: "hs-2", title: "Ембріологія людини", content: "...", questions: [] }
            ]
        }
    ]
};
