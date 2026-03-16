const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "General Physiology (Excitable Tissues)",
                    content: `
                        <div class="krok-marker">Key Concepts:</div>
                        <ul class="list-disc pl-5">
                            <li><strong>Resting Potential:</strong> K+ efflux from the cell.</li>
                            <li><strong>Depolarization:</strong> Rapid Na+ influx into the cell.</li>
                            <li><strong>Repolarization:</strong> K+ efflux (restoration of charge).</li>
                            <li><strong>Stimulation Threshold:</strong> Higher threshold means lower excitability.</li>
                        </ul>
                    `,
                    questions: [
                        { q: "Which ionic process is responsible for the depolarization phase of the action potential?", options: ["Na+ influx", "K+ efflux", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" },
                        { q: "How will the cell excitability change if the stimulation threshold is increased?", options: ["Decrease", "Increase", "Not change", "Disappear"], correct: 0, lang: "en" },
                        { q: "Blocking the Na+/K+ pump will lead to:", options: ["Loss of resting potential", "Increase of RP", "Hyperpolarization", "No effect"], correct: 0, lang: "en" },
                        { q: "Neurotransmitter in the neuromuscular junction is:", options: ["Acetylcholine", "Epinephrine", "Dopamine", "Serotonin"], correct: 0, lang: "en" },
                        { q: "Which ion is required for muscle contraction (actin-myosin binding)?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "en" },
                        { q: "Repolarization phase is caused by:", options: ["K+ efflux", "Na+ influx", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" },
                        { q: "Muscle tension changes without a length change. This contraction is:", options: ["Isometric", "Isotonic", "Tetanus", "Auxotonic"], correct: 0, lang: "en" },
                        { q: "Which law describes one-way conduction in a synapse?", options: ["Law of one-way conduction", "Bowditch law", "Starling law", "Bell-Magendie law"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-2",
                    title: "Blood Physiology",
                    content: `<div class="krok-marker">Blood:</div><p>Normal Color Index: 0.85 - 1.05. Group I(0): No antigens A or B.</p>`,
                    questions: [
                        { q: "A patient's color index is 0.7. Which type of anemia is most likely?", options: ["Iron-deficiency", "B12-deficiency", "Hemolytic", "Aplastic"], correct: 0, lang: "en" },
                        { q: "Blood group with no agglutinins (antibodies) in plasma is:", options: ["IV(AB)", "I(0)", "II(A)", "III(B)"], correct: 0, lang: "en" },
                        { q: "Which vitamin deficiency impairs blood clotting?", options: ["K", "C", "A", "E"], correct: 0, lang: "en" },
                        { q: "ESR of 40 mm/h indicates:", options: ["Inflammation", "Normal state", "Anemia", "Hypoxia"], correct: 0, lang: "en" },
                        { q: "Required for erythropoiesis:", options: ["B12 and Iron", "Vitamin C", "Magnesium", "Insulin"], correct: 0, lang: "en" },
                        { q: "What creates the oncotic pressure of plasma?", options: ["Proteins (albumins)", "NaCl", "Glucose", "Erythrocytes"], correct: 0, lang: "en" },
                        { q: "Osmotic resistance of erythrocytes is decreased in:", options: ["Spherocytosis", "Normal state", "Anemia", "Hypertension"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-3",
                    title: "CVS & Respiration",
                    content: `<div class="krok-marker">CVS:</div><p>P-wave: atria. QRS: ventricles. Surfactant prevents lung collapse.</p>`,
                    questions: [
                        { q: "P wave is absent on the ECG. Where is the pacemaker located?", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Purkinje fibers"], correct: 0, lang: "en" },
                        { q: "What prevents alveoli from collapsing during expiration?", options: ["Surfactant", "Nitrogen", "Mucus", "Cartilage"], correct: 0, lang: "en" },
                        { q: "How does the vagus nerve affect the heart rate?", options: ["Decreases HR", "Increases HR", "Increases force", "No effect"], correct: 0, lang: "en" },
                        { q: "BP is 160/100. Pulse pressure is:", options: ["60", "160", "100", "260"], correct: 0, lang: "en" },
                        { q: "Vital capacity (VC) is a sum of:", options: ["TV+IRV+ERV", "TV+RV", "IRV+RV", "TV+IRV"], correct: 0, lang: "en" },
                        { q: "T wave on ECG reflects:", options: ["Ventricular repolarization", "Depolarization", "Atrial excitation", "Contraction"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-4",
                    title: "Digestion & Excretion",
                    content: `<div class="krok-marker">Enterokinase activates trypsin. BP < 70 = no filtration.</div>`,
                    questions: [
                        { q: "What activates trypsinogen in the duodenum?", options: ["Enterokinase", "Pepsin", "Bile", "HCl"], correct: 0, lang: "en" },
                        { q: "Bile is required for:", options: ["Fat emulsification", "Protein breakdown", "Glucose absorption", "HCl secretion"], correct: 0, lang: "en" },
                        { q: "Where does the main glucose reabsorption occur in the kidney?", options: ["Proximal tubules", "Loop of Henle", "Distal tubules", "Glomerulus"], correct: 0, lang: "en" },
                        { q: "At what blood pressure does renal filtration stop?", options: ["< 70 mmHg", "120 mmHg", "90 mmHg", "150 mmHg"], correct: 0, lang: "en" },
                        { q: "Hormone that increases water reabsorption in kidneys:", options: ["Vasopressin (ADH)", "Aldosterone", "Insulin", "Oxytocin"], correct: 0, lang: "en" },
                        { q: "At 38°C, the most effective heat loss mechanism is:", options: ["Evaporation", "Convection", "Radiation", "Conduction"], correct: 0, lang: "en" },
                        { q: "Vitamin A deficiency causes:", options: ["Night blindness", "Rickets", "Scurvy", "Pellagra"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-5",
                    title: "Endocrine & CNS",
                    content: `<div class="krok-marker">Insulin lowers glucose. Sanguine: balanced, mobile.</div>`,
                    questions: [
                        { q: "Patient has weight loss, exophthalmos, and HR 120. Which hormone is in excess?", options: ["Thyroxine", "Insulin", "Cortisol", "Glucagon"], correct: 0, lang: "en" },
                        { q: "Which temperament type is strong, balanced, and mobile?", options: ["Sanguine", "Choleric", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" },
                        { q: "Which hormone decreases blood glucose levels?", options: ["Insulin", "Glucagon", "Epinephrine", "Cortisol"], correct: 0, lang: "en" },
                        { q: "The second signal system is related to:", options: ["Speech (word)", "Light", "Sound", "Pain"], correct: 0, lang: "en" },
                        { q: "Excess of GH (Growth Hormone) in adults causes:", options: ["Acromegaly", "Gigantism", "Dwarfism", "Myxedema"], correct: 0, lang: "en" }
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
                    title: "Autonomic NS",
                    content: "M-cholinoblockers: Atropine.",
                    questions: [
                        { q: "Drug used for pupil dilation during eye fundus examination:", options: ["Atropine", "Pilocarpine", "Neostigmine", "Phenylephrine"], correct: 0, lang: "en" }
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
