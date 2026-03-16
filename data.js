const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Excitable Tissues & Nerve-Muscle Physiology",
                    content: `

[Image of neuromuscular junction and neurotransmitter release]
`,
                    questions: [
                        { q: "A patient with myasthenia gravis is treated with a drug that inhibits acetylcholinesterase. Which ionic process in the postsynaptic membrane will be prolonged as a result?", options: ["$Na^+$ influx", "$K^+$ efflux", "$Ca^{2+}$ influx", "$Cl^-$ influx"], correct: 0, lang: "en" },
                        { q: "A 45-year-old male exhibits muscle spasms (tetany) after accidental removal of the parathyroid glands. The decrease in which ion's concentration in the blood causes increased excitability?", options: ["$Ca^{2+}$", "$Na^+$", "$K^+$", "$Mg^{2+}$"], correct: 0, lang: "en" },
                        { q: "An experimental study shows that a neuron has a resting potential of -70 mV. If the extracellular $K^+$ concentration is significantly increased, what will happen to the membrane potential?", options: ["Depolarization", "Hyperpolarization", "No change", "Action potential generation"], correct: 0, lang: "en" },
                        { q: "During a surgical procedure, a muscle relaxant that blocks N-cholinergic receptors was administered. What is the mechanism of this drug?", options: ["Blocking synaptic transmission", "Inhibiting ACh release", "Inactivating $Na^+$ channels", "Activating $K^+$ channels"], correct: 0, lang: "en" },
                        { q: "A researcher uses a microelectrode to stimulate a nerve fiber. The stimulus strength is exactly at the threshold. How will the fiber respond if the stimulus duration is halved?", options: ["No response (Subthreshold)", "Normal action potential", "Increased action potential", "Hyperpolarization"], correct: 0, lang: "en" },
                        { q: "A 25-year-old athlete undergoes an EMG. The results show that a muscle produces a smooth tetanic contraction. This is achieved when each subsequent stimulus falls into which period of the previous contraction?", options: ["Relaxation phase", "Contraction phase", "Absolute refractory period", "Latent period"], correct: 1, lang: "en" },
                        { q: "A patient with botulism poisoning develops respiratory failure due to muscle paralysis. What is the mechanism of botulinum toxin action at the neuromuscular junction?", options: ["Inhibition of Acetylcholine release", "Blocking N-cholinergic receptors", "Inactivation of $Ca^{2+}$ channels", "Inhibition of Cholinesterase"], correct: 0, lang: "en" },
                        { q: "Curare-like drugs are used in anesthesiology to induce muscle relaxation. Which specific structure do these drugs compete with acetylcholine for?", options: ["N-cholinergic receptors", "M-cholinergic receptors", "Acetylcholinesterase", "$Na^+$ channels"], correct: 0, lang: "en" },
                        { q: "During an experiment, the $Na^+$ channels of a nerve fiber were blocked with tetrodotoxin. Which process will be primarily inhibited?", options: ["Depolarization", "Repolarization", "Resting potential maintenance", "Active transport of $K^+$"], correct: 0, lang: "en" },
                        { q: "A 30-year-old male with nerve injury is found to have a slower impulse conduction speed. The doctor explains that the nerve fiber has lost its myelin sheath. Conduction becomes:", options: ["Continuous and slower", "Saltatory and faster", "Saltatory but slower", "Completely blocked"], correct: 0, lang: "en" },
                        // ... Додай ще 20 подібних кейсів про рефлекси та іонні градієнти для завершення теми ps-1
                    ]
                },
                {
                    id: "ps-2",
                    title: "Blood & Body Fluids Physiology",
                    content: ``,
                    questions: [
                        { q: "A 25-year-old pregnant woman complains of fatigue. Her blood test shows Hb 90 g/L, RBC $3.0 \\times 10^{12}/L$, and Color Index 0.7. What is the most likely diagnosis?", options: ["Iron-deficiency anemia", "Vitamin $B_{12}$ deficiency", "Hemolytic anemia", "Aplastic anemia"], correct: 0, lang: "en" },
                        { q: "A victim of a car accident needs an urgent blood transfusion. His blood group is II(A) Rh-. Which blood should be selected if the same group is unavailable?", options: ["I(0) Rh-", "II(A) Rh+", "III(B) Rh-", "IV(AB) Rh-"], correct: 0, lang: "en" },
                        { q: "A patient with chronic kidney disease presents with severe anemia. The deficiency of which hormone, produced by the kidneys, is the cause?", options: ["Erythropoietin", "Renin", "Vasopressin", "Aldosterone"], correct: 0, lang: "en" },
                        { q: "Following a severe allergic reaction, a patient's blood test shows an increase in a specific type of leukocyte. Which cells are most likely increased?", options: ["Eosinophils", "Basophils", "Monocytes", "Neutrophils"], correct: 0, lang: "en" },
                        { q: "A newborn develops jaundice and hemolytic anemia due to Rh-incompatibility. What are the Rh-statuses of the mother and the fetus?", options: ["Mother Rh-, Fetus Rh+", "Mother Rh+, Fetus Rh-", "Both Rh-", "Both Rh+"], correct: 0, lang: "en" },
                        { q: "A 40-year-old woman has undergone a total gastrectomy. Two years later, her blood test reveals Hb 80 g/L and megaloblastic erythrocytes (CI 1.3). The lack of which substance causes this?", options: ["Intrinsic factor (Castle's factor)", "Hydrochloric acid", "Pepsin", "Bile acids"], correct: 0, lang: "en" },
                        { q: "A patient with a mechanical heart valve is taking Warfarin (an anticoagulant). This drug works by inhibiting the action of which vitamin?", options: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin $B_{12}$"], correct: 0, lang: "en" },
                        { q: "A blood test shows that a patient's erythrocytes begin to hemolyze in 0.48% NaCl solution and fully hemolyze in 0.32% NaCl. This indicates a decrease in:", options: ["Osmotic resistance", "Oncotic pressure", "Erythrocyte sedimentation rate", "Hematocrit"], correct: 0, lang: "en" },
                        { q: "Which component of the blood plasma is primarily responsible for maintaining the oncotic pressure, thus preventing edema?", options: ["Albumins", "Globulins", "Fibrinogen", "Glucose"], correct: 0, lang: "en" },
                        { q: "A person living at high altitudes (5000m) for two months shows an increased red blood cell count. This adaptation is triggered by:", options: ["Hypoxia stimulating erythropoietin", "Low temperature", "Increased UV radiation", "Higher CO2 concentration"], correct: 0, lang: "en" },
                        // ... Додай ще 20 кейсів про ШОЕ, гемостаз та лейкоцитарну формулу для завершення теми ps-2
                    ]
                },
                {
                    id: "ps-3",
                    title: "Cardiovascular & Respiratory Systems",
                    content: ``,
                    questions: [
                        { q: "A 60-year-old man with chest pain has an ECG showing an abnormally long P-Q interval (0.3s). Where is the conduction delay located?", options: ["Atrioventricular node", "Sinoatrial node", "Purkinje fibers", "Left bundle branch"], correct: 0, lang: "en" },
                        { q: "A newborn born at 30 weeks of gestation has difficulty breathing. The X-ray shows atelectasis. The deficiency of which alveolar substance is responsible?", options: ["Surfactant", "Mucus", "Fluid", "Fibrin"], correct: 0, lang: "en" },
                        { q: "During a physical exam, a doctor notes a heart rate of 50 bpm (bradycardia) in a resting patient. Which nerve's excessive tone could cause this?", options: ["Vagus nerve", "Sympathetic nerve", "Phrenic nerve", "Glossopharyngeal nerve"], correct: 0, lang: "en" },
                        { q: "A trauma patient has a pleural wound, causing the intrapleural pressure to equal atmospheric pressure. What is this condition called?", options: ["Pneumothorax", "Hydrothorax", "Hemothorax", "Normal inspiration"], correct: 0, lang: "en" },
                        { q: "A patient with heart failure exhibits a decrease in the force of heart contraction. According to the Frank-Starling law, the force of contraction is proportional to:", options: ["Initial stretch of the muscle fibers", "Heart rate", "Oxygen availability", "End-systolic volume"], correct: 0, lang: "en" },
                        { q: "Calculate the pulse pressure if a patient's blood pressure is 150/90 mmHg:", options: ["60 mmHg", "150 mmHg", "90 mmHg", "240 mmHg"], correct: 0, lang: "en" },
                        { q: "A mountain climber at an altitude of 5,000 meters begins to breathe rapidly (hyperpnea). What is the primary stimulus for this change in respiration?", options: ["Decreased partial pressure of O2 ($PaO_2$)", "Increased CO2 levels", "Decreased blood pH", "Cold air"], correct: 0, lang: "en" },
                        { q: "During an ECG recording, the P wave is completely missing, but the QRS complexes are normal and appear at a rate of 40 bpm. The pacemaker is:", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Atrial myocardium"], correct: 0, lang: "en" },
                        { q: "Which ECG wave is associated with the repolarization of the ventricles?", options: ["T wave", "P wave", "QRS complex", "U wave"], correct: 0, lang: "en" },
                        { q: "The second heart sound (S2) is heard during the beginning of the diastole. It is produced by the closure of:", options: ["Semilunar valves", "Atrioventricular valves", "Bicuspid valve", "Tricuspid valve"], correct: 0, lang: "en" },
                        // ... Додай ще 20 кейсів про АТ, ХОК, та газообмін для завершення теми ps-3
                    ]
                },
                {
                    id: "ps-4",
                    title: "Digestion & Excretion Physiology",
                    content: ``,
                    questions: [
                        { q: "A patient with chronic pancreatitis has greasy, foul-smelling stools (steatorrhea). The deficiency of which enzyme is primarily responsible?", options: ["Pancreatic Lipase", "Amylase", "Trypsin", "Pepsin"], correct: 0, lang: "en" },
                        { q: "After a meal rich in fats, a patient feels sharp pain in the right upper quadrant. Which hormone stimulates gallbladder contraction in response to fat?", options: ["Cholecystokinin (CCK)", "Gastrin", "Secretin", "Insulin"], correct: 0, lang: "en" },
                        { q: "A patient's urine test reveals glucose (glycosuria) despite a normal blood glucose level of 4.5 mmol/L. Where is the defect?", options: ["Proximal tubule reabsorption", "Glomerular filtration", "Distal secretion", "Loop of Henle"], correct: 0, lang: "en" },
                        { q: "A 50-year-old man with a history of kidney stones presents with high blood pressure. Tests reveal high Renin levels. Which cells in the kidney produce Renin?", options: ["Juxtaglomerular cells", "Podocytes", "Cells of the Loop of Henle", "Proximal tubule cells"], correct: 0, lang: "en" },
                        { q: "A patient presents with massive edema and protein in the urine (proteinuria). Damage to which renal structure is most likely?", options: ["Glomerular filtration barrier", "Proximal tubule", "Collecting duct", "Ureter"], correct: 0, lang: "en" },
                        { q: "A patient with gastric surgery (gastrectomy) has lost the ability to absorb Vitamin $B_{12}$. The loss of which stomach cells caused this?", options: ["Parietal cells", "Chief cells", "G-cells", "Mucous cells"], correct: 0, lang: "en" },
                        { q: "During an experiment, a dog's secretin production was inhibited. This will lead to a decrease in the production of pancreatic juice rich in:", options: ["Bicarbonates", "Enzymes", "Mucus", "Bile"], correct: 0, lang: "en" },
                        { q: "Following a blood loss of 1 liter, a patient's BP is 80/50 mmHg. Urine production has significantly decreased (oliguria). What is the cause?", options: ["Decreased hydrostatic filtration pressure", "Increased oncotic pressure", "Decreased ADH level", "Kidney stones"], correct: 0, lang: "en" },
                        { q: "A patient suffers from severe diarrhea. His blood test reveals metabolic acidosis. The loss of which intestinal secretion component is responsible?", options: ["Bicarbonate ions ($HCO_3^-$)", "Chloride ions", "Hydrochloric acid", "Potassium ions"], correct: 0, lang: "en" },
                        { q: "A person accidentally consumed a large amount of salt. Which hormone will be released to increase water reabsorption and normalize osmolarity?", options: ["Vasopressin (ADH)", "Aldosterone", "Insulin", "Atrial Natriuretic Peptide"], correct: 0, lang: "en" },
                        // ... Додай ще 20 кейсів про всмоктування, кліренс та моторику ШКТ для завершення теми ps-4
                    ]
                },
                {
                    id: "ps-5",
                    title: "Endocrine, CNS & Sensory Systems",
                    content: ``,
                    questions: [
                        { q: "A 35-year-old woman complains of tremors, weight loss despite a good appetite, and heat intolerance. Which hormone level should be checked first?", options: ["Thyroxine (T4)", "Insulin", "Aldosterone", "Growth hormone"], correct: 0, lang: "en" },
                        { q: "A person is describes as calm, persistent, and slow to react, but having very stable emotions. Which temperament type is this?", options: ["Phlegmatic", "Sanguine", "Choleric", "Melancholic"], correct: 0, lang: "en" },
                        { q: "A patient cannot perform fine motor tasks, exhibits an unsteady gait, and has muscle hypotonia (ataxia). Which brain structure is likely affected?", options: ["Cerebellum", "Hypothalamus", "Thalamus", "Basal ganglia"], correct: 0, lang: "en" },
                        { q: "An adult patient's height has not changed, but his nose, jaw, and hands have become significantly larger. Which gland is overproducing hormones?", options: ["Anterior pituitary (GH)", "Thyroid", "Adrenal cortex", "Pancreas"], correct: 0, lang: "en" },
                        { q: "A patient has developed 'bronze skin' pigmentation, muscle weakness, and low blood pressure. This indicates a deficiency of:", options: ["Cortisol and Aldosterone (Addison's)", "Insulin", "Thyroxine", "ADH"], correct: 0, lang: "en" },
                        { q: "A patient has lost the ability to see clearly in low light (night blindness). A deficiency of which substance, found in the rod cells, is the cause?", options: ["Rhodopsin", "Iodopsin", "Melanin", "Vitamin K"], correct: 0, lang: "en" },
                        { q: "A person with a head injury exhibits a motor speech disorder (Broca's aphasia). In which part of the brain is the lesion located?", options: ["Left frontal lobe", "Right temporal lobe", "Occipital lobe", "Parietal lobe"], correct: 0, lang: "en" },
                        { q: "Diabetes insipidus is characterized by polyuria (up to 10L/day) and low urine specific gravity. This is caused by the lack of:", options: ["Antidiuretic hormone (ADH)", "Insulin", "Aldosterone", "Glucagon"], correct: 0, lang: "en" },
                        { q: "A patient has lost the ability to recognize objects by touch (astereognosis) in the right hand. Which brain lobe in the left hemisphere is likely damaged?", options: ["Parietal lobe", "Frontal lobe", "Occipital lobe", "Temporal lobe"], correct: 0, lang: "en" },
                        { q: "Which endocrine gland's hormone is responsible for the 'fight-or-flight' response, increasing heart rate and blood glucose?", options: ["Adrenal medulla (Epinephrine)", "Adrenal cortex", "Thyroid", "Parathyroid"], correct: 0, lang: "en" },
                        // ... Додай ще 20 кейсів про зоровий/слуховий аналізатори та типи ВНД для завершення теми ps-5
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
