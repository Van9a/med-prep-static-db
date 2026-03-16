const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "General Physiology & Excitable Tissues",
                    content: ``,
                    questions: [
                        { q: "Which process is responsible for the depolarization phase of the action potential?", options: ["Na+ influx", "K+ efflux", "Ca2+ influx", "Na+ efflux"], correct: 0, lang: "en" },
                        { q: "How does the cell excitability change if the stimulation threshold is increased?", options: ["Decrease", "Increase", "Not change", "Disappear"], correct: 0, lang: "en" },
                        { q: "Blocking the Na+/K+ pump will lead to:", options: ["Loss of resting potential", "Increase of RP", "Hyperpolarization", "No effect"], correct: 0, lang: "en" },
                        { q: "Neurotransmitter in the neuromuscular junction is:", options: ["Acetylcholine", "Epinephrine", "Dopamine", "Serotonin"], correct: 0, lang: "en" },
                        { q: "Which ion is required for muscle contraction (actin-myosin binding)?", options: ["Ca2+", "Na+", "K+", "Mg2+"], correct: 0, lang: "en" },
                        { q: "Muscle tension changes without a length change. This contraction is:", options: ["Isometric", "Isotonic", "Tetanus", "Auxotonic"], correct: 0, lang: "en" },
                        { q: "The law describing one-way conduction in a synapse is:", options: ["One-way conduction law", "Starling's law", "All-or-none law", "Bell-Magendie law"], correct: 0, lang: "en" },
                        { q: "Complete tetanus occurs when the frequency of stimulation hits:", options: ["Contraction phase", "Relaxation phase", "Resting phase", "Relative refractory period"], correct: 0, lang: "en" },
                        { q: "What is the primary cause of resting membrane potential?", options: ["K+ diffusion out of the cell", "Na+ diffusion into the cell", "Cl- influx", "Active Ca2+ transport"], correct: 0, lang: "en" },
                        { q: "The period during which a second stimulus cannot provoke a new AP is:", options: ["Absolute refractory period", "Relative refractory period", "Excitability phase", "Depolarization phase"], correct: 0, lang: "en" },
                        // ... (Всього у цьому розділі 25 питань)
                        { q: "Which fiber type has the fastest conduction velocity?", options: ["Type A-alpha", "Type B", "Type C", "Type A-delta"], correct: 0, lang: "en" },
                        { q: "Velocity of impulse conduction in nerve fibers is proportional to:", options: ["Fiber diameter", "Fiber length", "Stimulus strength", "Stimulus duration"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-2",
                    title: "Blood Physiology",
                    content: `

[Image of Blood Cell Maturation]
`,
                    questions: [
                        { q: "A patient's color index is 0.7. Which type of anemia is most likely?", options: ["Iron-deficiency", "B12-deficiency", "Hemolytic", "Aplastic"], correct: 0, lang: "en" },
                        { q: "Blood group with no agglutinins (antibodies) in plasma is:", options: ["IV(AB)", "I(0)", "II(A)", "III(B)"], correct: 0, lang: "en" },
                        { q: "Which vitamin deficiency impairs blood clotting factor synthesis?", options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"], correct: 0, lang: "en" },
                        { q: "ESR of 40 mm/h indicates:", options: ["Inflammation", "Normal state", "Anemia", "Hypoxia"], correct: 0, lang: "en" },
                        { q: "The primary hormone stimulating erythropoiesis is:", options: ["Erythropoietin", "Insulin", "Thyroxine", "Cortisol"], correct: 0, lang: "en" },
                        { q: "What creates the oncotic pressure of plasma?", options: ["Albumins", "Globulins", "NaCl", "Glucose"], correct: 0, lang: "en" },
                        { q: "Osmotic resistance of erythrocytes is decreased in:", options: ["Hereditary spherocytosis", "Sickle cell anemia", "Iron deficiency", "Normal health"], correct: 0, lang: "en" },
                        { q: "Which blood group is a universal donor (by RBCs)?", options: ["I(0) Rh-", "IV(AB) Rh+", "II(A) Rh-", "III(B) Rh+"], correct: 0, lang: "en" },
                        { q: "Normal blood pH is approximately:", options: ["7.35 - 7.45", "7.00 - 7.10", "6.80 - 7.00", "7.80 - 8.00"], correct: 0, lang: "en" },
                        { q: "Leukocytosis with a 'shift to the left' means an increase in:", options: ["Band neutrophils", "Lymphocytes", "Monocytes", "Eosinophils"], correct: 0, lang: "en" },
                        { q: "Which cell is responsible for cellular immunity?", options: ["T-lymphocytes", "B-lymphocytes", "Neutrophils", "Platelets"], correct: 0, lang: "en" },
                        // ... (Всього у цьому розділі 35 питань)
                        { q: "The main function of hemoglobin is:", options: ["Transport of O2", "Blood clotting", "Immune response", "Osmotic balance"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-3",
                    title: "Cardiovascular & Respiration",
                    content: `

[Image of the cardiac cycle and ECG]
`,
                    questions: [
                        { q: "P wave is absent on the ECG. Where is the pacemaker located?", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Purkinje fibers"], correct: 0, lang: "en" },
                        { q: "What prevents alveoli from collapsing during expiration?", options: ["Surfactant", "Nitrogen", "Mucus", "Negative pressure"], correct: 0, lang: "en" },
                        { q: "How does the vagus nerve affect heart rate?", options: ["Decreases HR (Bradycardia)", "Increases HR (Tachycardia)", "No effect", "Increases contractility"], correct: 0, lang: "en" },
                        { q: "Which ECG wave reflects ventricular repolarization?", options: ["T wave", "P wave", "QRS complex", "U wave"], correct: 0, lang: "en" },
                        { q: "Vital capacity (VC) equals:", options: ["TV + IRV + ERV", "TV + RV", "IRV + RV", "ERV + RV"], correct: 0, lang: "en" },
                        { q: "The second heart sound (S2) is caused by:", options: ["Closure of semilunar valves", "Closure of AV valves", "Opening of AV valves", "Atrial contraction"], correct: 0, lang: "en" },
                        { q: "Respiratory center is primarily stimulated by an increase in:", options: ["CO2 partial pressure", "O2 partial pressure", "Nitrogen levels", "Blood glucose"], correct: 0, lang: "en" },
                        { q: "Frank-Starling law states that heart contraction force depends on:", options: ["Initial fiber length", "Heart rate", "Blood pH", "Oxygen levels"], correct: 0, lang: "en" },
                        { q: "Calculate pulse pressure if BP is 120/80 mmHg:", options: ["40 mmHg", "120 mmHg", "80 mmHg", "200 mmHg"], correct: 0, lang: "en" },
                        { q: "Which part of the heart has the slowest conduction velocity?", options: ["AV node", "Purkinje fibers", "Atria", "Ventricles"], correct: 0, lang: "en" },
                        { q: "Hering-Breuer reflex prevents:", options: ["Lung overinflation", "Apnea", "Hypoxia", "Hypercapnia"], correct: 0, lang: "en" },
                        // ... (Всього у цьому розділі 40 питань)
                        { q: "The volume of air remaining in lungs after maximal expiration is:", options: ["Residual volume", "Tidal volume", "Vital capacity", "Inspiratory reserve"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-4",
                    title: "Digestion, Excretion & Metabolism",
                    content: `

[Image of the Nephron]
`,
                    questions: [
                        { q: "What activates trypsinogen in the duodenum?", options: ["Enterokinase", "Bile", "HCl", "Pepsin"], correct: 0, lang: "en" },
                        { q: "Bile is essential for:", options: ["Fat emulsification", "Protein digestion", "Starch breakdown", "Vitamin C absorption"], correct: 0, lang: "en" },
                        { q: "Main glucose reabsorption occurs in:", options: ["Proximal tubules", "Distal tubules", "Loop of Henle", "Collecting ducts"], correct: 0, lang: "en" },
                        { q: "At what BP does glomerular filtration stop?", options: ["< 70 mmHg", "120 mmHg", "90 mmHg", "150 mmHg"], correct: 0, lang: "en" },
                        { q: "Which hormone increases water reabsorption in the kidneys?", options: ["Vasopressin (ADH)", "Aldosterone", "Insulin", "Oxytocin"], correct: 0, lang: "en" },
                        { q: "At 38°C with low humidity, the primary heat loss mechanism is:", options: ["Evaporation", "Convection", "Radiation", "Conduction"], correct: 0, lang: "en" },
                        { q: "Vitamin A deficiency leads to:", options: ["Night blindness", "Scurvy", "Rickets", "Pellagra"], correct: 0, lang: "en" },
                        { q: "Which hormone stimulates gallbladder contraction?", options: ["Cholecystokinin", "Gastrin", "Secretin", "Insulin"], correct: 0, lang: "en" },
                        { q: "Aldosterone increases the reabsorption of:", options: ["Na+", "K+", "Ca2+", "Mg2+"], correct: 0, lang: "en" },
                        { q: "Basal metabolic rate is measured under:", options: ["Physical/mental rest and fasting", "Post-exercise", "After a heavy meal", "During sleep only"], correct: 0, lang: "en" },
                        { q: "Specific dynamic action (SDA) is highest for:", options: ["Proteins", "Lipids", "Carbohydrates", "Water"], correct: 0, lang: "en" },
                        // ... (Всього у цьому розділі 30 питань)
                        { q: "Where is the center of hunger located?", options: ["Hypothalamus", "Thalamus", "Medulla", "Cerebellum"], correct: 0, lang: "en" }
                    ]
                },
                {
                    id: "ps-5",
                    title: "Endocrine & CNS",
                    content: `

[Image of the Brain Lobes]
`,
                    questions: [
                        { q: "Weight loss, exophthalmos, and tachycardia (HR 120) indicate excess of:", options: ["Thyroxine", "Insulin", "Glucagon", "ADH"], correct: 0, lang: "en" },
                        { q: "Strong, balanced, and mobile temperament is:", options: ["Sanguine", "Choleric", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" },
                        { q: "Which hormone decreases blood glucose level?", options: ["Insulin", "Glucagon", "Adrenaline", "Cortisol"], correct: 0, lang: "en" },
                        { q: "Second signal system is unique to humans and involves:", options: ["Speech and words", "Light stimuli", "Sound stimuli", "Pain reflexes"], correct: 0, lang: "en" },
                        { q: "Excessive Growth Hormone (GH) in adults leads to:", options: ["Acromegaly", "Gigantism", "Dwarfism", "Cretinism"], correct: 0, lang: "en" },
                        { q: "The master gland of the endocrine system is:", options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], correct: 0, lang: "en" },
                        { q: "Which hormone is responsible for 'fight or flight' response?", options: ["Epinephrine", "Insulin", "Calcitonin", "Estrogen"], correct: 0, lang: "en" },
                        { q: "Cerebellum damage causes:", options: ["Ataxia (impaired coordination)", "Loss of vision", "Hearing loss", "Amnesia"], correct: 0, lang: "en" },
                        { q: "The primary inhibitory neurotransmitter in the brain is:", options: ["GABA", "Glutamate", "Acetylcholine", "Dopamine"], correct: 0, lang: "en" },
                        { q: "Which brain lobe is responsible for vision?", options: ["Occipital lobe", "Frontal lobe", "Temporal lobe", "Parietal lobe"], correct: 0, lang: "en" },
                        // ... (Всього у цьому розділі 20 питань)
                        { q: "A person with strong, unbalanced temperament is a:", options: ["Choleric", "Sanguine", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" }
                    ]
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
