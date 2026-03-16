const medDB = {
    subjects: [
        {
            id: "physio",
            title: "Фізіологія",
            en: "Physiology",
            topics: [
                {
                    id: "ps-1",
                    title: "Nerve & Muscle Clinical Physiology",
                    content: `<div class="krok-marker">Markers:</div><ul class="list-disc pl-5"><li><strong>Cholinesterase block:</strong> Prolonged $Na^+$ influx.</li><li><strong>Tetany:</strong> Low $Ca^{2+}$.</li><li><strong>Botulism:</strong> ACh release block.</li></ul>`,
                    questions: [
                        { q: "A 45-year-old male with myasthenia gravis is treated with a drug that inhibits acetylcholinesterase. Which ionic process in the postsynaptic membrane will be prolonged as a result?", options: ["$Na^+$ influx", "$K^+$ efflux", "$Ca^{2+}$ influx", "$Cl^-$ influx"], correct: 0, lang: "en" },
                        { q: "A 32-year-old patient exhibits muscle spasms (tetany) after accidental surgical removal of the parathyroid glands. The decrease in which ion's concentration in the blood causes this increased excitability?", options: ["$Ca^{2+}$", "$Na^+$", "$K^+$", "$Mg^{2+}$"], correct: 0, lang: "en" },
                        { q: "During an experiment, a researcher increases the extracellular $K^+$ concentration around a neuron. What change in the resting membrane potential will be observed?", options: ["Depolarization", "Hyperpolarization", "No change", "Action potential generation"], correct: 0, lang: "en" },
                        { q: "A 28-year-old patient poisoned with botulinum toxin developed respiratory failure due to flaccid paralysis of the diaphragm. What is the mechanism of the toxin's action at the synapse?", options: ["Inhibition of Acetylcholine release", "Blocking N-cholinergic receptors", "Inactivation of $Ca^{2+}$ channels", "Inhibition of Cholinesterase"], correct: 0, lang: "en" },
                        { q: "An anesthesiologist administers a curare-like drug to induce muscle relaxation during surgery. This drug acts by competing with acetylcholine for which specific structure?", options: ["N-cholinergic receptors", "M-cholinergic receptors", "Acetylcholinesterase", "$Na^+$ channels"], correct: 0, lang: "en" },
                        { q: "A patient with nerve damage shows a conduction velocity of only 1 m/s in the affected area. The doctor explains that the nerve fiber has lost its myelin. Which type of conduction is now occurring?", options: ["Continuous", "Saltatory", "Retrograde", "Inhibitory"], correct: 0, lang: "en" },
                        { q: "During an experiment, a skeletal muscle is stimulated with a frequency that causes each subsequent stimulus to hit the contraction phase of the previous one. What type of contraction occurs?", options: ["Smooth tetanus", "Serrated tetanus", "Single contraction", "Muscle tone"], correct: 0, lang: "en" },
                        { q: "A researcher blocks the voltage-gated $Na^+$ channels in a nerve fiber using tetrodotoxin. Which phase of the action potential will be completely inhibited?", options: ["Depolarization", "Repolarization", "Resting potential", "Hyperpolarization"], correct: 0, lang: "en" },
                        { q: "A patient presents with extreme muscle fatigue. Lab tests show a deficiency of Troponin C. Which specific step of muscle contraction is primarily impaired?", options: ["Actin binding site exposure", "ACh release", "ATP hydrolysis", "Myosin filament sliding"], correct: 0, lang: "en" },
                        { q: "A person accidentally touches a hot object. The reflex arc includes a segment of the spinal cord where an inhibitory neurotransmitter prevents excessive movement. Which neurotransmitter is it?", options: ["Glycine", "Glutamate", "Acetylcholine", "Noradrenaline"], correct: 0, lang: "en" },
                        // (Усього 30 кейсів для ps-1 — продовжуй у такому стилі)
                    ]
                },
                {
                    id: "ps-2",
                    title: "Clinical Hematology",
                    content: `<div class="krok-marker">Case Analysis:</div><p>Use CI to distinguish Iron deficiency (low CI) from $B_{12}$ deficiency (high CI).</p>`,
                    questions: [
                        { q: "A 25-year-old pregnant woman complains of dizziness. Her blood test shows Hb 85 g/L, RBC $2.8 \\times 10^{12}/L$, and Color Index 0.7. What is the most likely diagnosis?", options: ["Iron-deficiency anemia", "Vitamin $B_{12}$ deficiency", "Hemolytic anemia", "Aplastic anemia"], correct: 0, lang: "en" },
                        { q: "A 40-year-old patient 2 years after a total gastrectomy presents with megaloblastic anemia. The lack of which substance, normally secreted by the stomach, is responsible?", options: ["Intrinsic factor (Castle's)", "Pepsinogen", "Hydrochloric acid", "Gastrin"], correct: 0, lang: "en" },
                        { q: "A victim of a car crash with massive blood loss needs an urgent transfusion. His blood group is II(A) Rh-. If the identical group is unavailable, what should be used?", options: ["I(0) Rh-", "II(A) Rh+", "III(B) Rh-", "IV(AB) Rh-"], correct: 0, lang: "en" },
                        { q: "A patient with chronic glomerulonephritis presents with a low RBC count. The deficiency of which hormone, produced by the kidneys, is causing this anemia?", options: ["Erythropoietin", "Renin", "Vasopressin", "Aldosterone"], correct: 0, lang: "en" },
                        { q: "A newborn develops severe jaundice on the second day of life. The mother is Rh- and the child is Rh+. What is the primary cause of this condition?", options: ["Rhesus-incompatibility hemolysis", "AB0-incompatibility", "Biliary atresia", "Physiological jaundice"], correct: 0, lang: "en" },
                        { q: "A blood test of a patient with an acute inflammatory process shows an ESR of 50 mm/h. An increase in which plasma protein is most likely responsible for this?", options: ["Fibrinogen", "Albumins", "Hemoglobin", "Transferrin"], correct: 0, lang: "en" },
                        { q: "A patient on long-term antibiotic therapy developed bleeding from the gums. This is most likely caused by a deficiency of which vitamin produced by intestinal flora?", options: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"], correct: 0, lang: "en" },
                        { q: "An athlete living at 4000m altitude shows an RBC count of $6.2 \\times 10^{12}/L$. What is the primary stimulus for this adaptation?", options: ["Hypoxia stimulating erythropoietin", "Increased UV radiation", "Cold air", "Low humidity"], correct: 0, lang: "en" },
                        { q: "A patient with liver cirrhosis has developed generalized edema. A decrease in which plasma component's oncotic pressure is the cause?", options: ["Albumins", "Globulins", "NaCl", "Glucose"], correct: 0, lang: "en" },
                        { q: "A patient with persistent vomiting shows a blood pH of 7.50 and high bicarbonate levels. How is this state defined?", options: ["Metabolic alkalosis", "Metabolic acidosis", "Respiratory acidosis", "Respiratory alkalosis"], correct: 0, lang: "en" },
                        // (Усього 30 кейсів для ps-2)
                    ]
                },
                {
                    id: "ps-3",
                    title: "Clinical Cardiovascular & Respiration",
                    content: `<div class="krok-marker">ECG/Lung focus:</div><p>PQ > 0.2s = AV Block. Surfactant = prevents collapse.</p>`,
                    questions: [
                        { q: "A 65-year-old man's ECG shows a P-Q interval of 0.32 seconds (Normal < 0.2s). Where is the conduction delay located?", options: ["Atrioventricular node", "Sinoatrial node", "Purkinje fibers", "Left bundle branch"], correct: 0, lang: "en" },
                        { q: "A newborn born prematurely at 29 weeks gestation has severe respiratory distress. X-ray shows diffuse atelectasis. Deficiency of which substance is the cause?", options: ["Surfactant", "Mucus", "Blood plasma", "Fibrin"], correct: 0, lang: "en" },
                        { q: "A patient with a history of hypertension has a blood pressure of 180/100 mmHg. Calculate the pulse pressure for this patient:", options: ["80 mmHg", "180", "100", "280"], correct: 0, lang: "en" },
                        { q: "During a physical examination of a resting athlete, the doctor records a heart rate of 48 bpm. Which nerve's high tone is responsible for this bradycardia?", options: ["Vagus nerve", "Sympathetic nerve", "Phrenic nerve", "Glossopharyngeal"], correct: 0, lang: "en" },
                        { q: "A patient with a stab wound to the chest developed a collapsed lung (pneumothorax). The intrapleural pressure in this patient is now:", options: ["Equal to atmospheric pressure", "More negative than normal", "Zero", "Positive"], correct: 0, lang: "en" },
                        { q: "A 50-year-old man's ECG shows no P waves, but normal QRS complexes following a slow rhythm of 42 bpm. Where is the ectopic pacemaker located?", options: ["Atrioventricular node", "Sinoatrial node", "Bundle of His", "Atrial pathways"], correct: 0, lang: "en" },
                        { q: "A mountain climber at an altitude of 5500m starts to hyperventilate. What is the primary stimulus for the respiratory center in this case?", options: ["Low arterial $pO_2$", "High arterial $pCO_2$", "High blood pH", "Cold stress"], correct: 0, lang: "en" },
                        { q: "During diastole, a doctor hears a heart murmur. Which valve most likely fails to close completely?", options: ["Semilunar valves", "Mitral valve", "Tricuspid valve", "Bicuspid valve"], correct: 0, lang: "en" },
                        { q: "An elderly patient with atherosclerosis has decreased aortic elasticity. This leads to an increase in which blood pressure parameter?", options: ["Systolic and Pulse pressure", "Diastolic pressure only", "Mean pressure only", "No changes"], correct: 0, lang: "en" },
                        { q: "A patient is holding their breath. Which blood change will eventually force the respiratory center to trigger an inspiration?", options: ["Increased $pCO_2$ (Hypercapnia)", "Decreased $pO_2$", "Decreased pH", "Nitrogen accumulation"], correct: 0, lang: "en" },
                        // (Усього 30 кейсів для ps-3)
                    ]
                },
                {
                    id: "ps-4",
                    title: "Clinical GI & Renal Physiology",
                    content: `<div class="krok-marker">GI/Renal Focus:</div><p>Steatorrhea = Lipase/Bile issues. GFR stops if BP < 70.</p>`,
                    questions: [
                        { q: "A patient with chronic pancreatitis presents with greasy, bulky stools (steatorrhea). The deficiency of which enzyme is responsible for fat malabsorption?", options: ["Pancreatic Lipase", "Amylase", "Trypsin", "Pepsin"], correct: 0, lang: "en" },
                        { q: "After a meal rich in fatty meat, a patient feels sharp pain in the right hypochondrium. Which hormone stimulated the gallbladder to contract?", options: ["Cholecystokinin (CCK)", "Gastrin", "Secretin", "Insulin"], correct: 0, lang: "en" },
                        { q: "A patient with uncontrolled diabetes has a blood glucose of 15 mmol/L. Glucose appears in the urine (glycosuria). What renal mechanism is exceeded?", options: ["Proximal tubule reabsorption threshold", "Glomerular filtration", "Distal secretion", "Loop of Henle concentration"], correct: 0, lang: "en" },
                        { q: "A patient with severe blood loss has a BP of 60/40 mmHg and shows complete cessation of urine output (anuria). What is the cause?", options: ["Drop in glomerular filtration pressure", "Increased ADH levels", "Increased reabsorption", "Kidney stones"], correct: 0, lang: "en" },
                        { q: "A patient with stomach cancer had a total gastrectomy. He developed anemia and impaired protein digestion. Loss of which cells caused HCl and Intrinsic Factor deficiency?", options: ["Parietal cells", "Chief cells", "G-cells", "Mucous cells"], correct: 0, lang: "en" },
                        { q: "A patient with high blood pressure is found to have a renin-secreting tumor. Which cells in the kidney are overproducing this enzyme?", options: ["Juxtaglomerular cells", "Podocytes", "Mesangial cells", "Loop of Henle cells"], correct: 0, lang: "en" },
                        { q: "A patient presents with massive edema. Lab tests show protein in the urine (3.3 g/L). Damage to which structure is most likely?", options: ["Glomerular filtration barrier", "Proximal tubule", "Collecting duct", "Renal pelvis"], correct: 0, lang: "en" },
                        { q: "During an experiment, a dog's duodenum was acidified with HCl. This caused the secretion of a hormone that stimulates bicarbonate-rich pancreatic juice. Which hormone?", options: ["Secretin", "CCK", "Gastrin", "GIP"], correct: 0, lang: "en" },
                        { q: "A person accidentally consumed a large amount of salt. Which hormone will be released to increase water reabsorption in the collecting ducts?", options: ["Vasopressin (ADH)", "Aldosterone", "Insulin", "ANP"], correct: 0, lang: "en" },
                        { q: "A patient has pale stools and yellow skin. A gallbladder stone blocks the common bile duct. Which step of digestion is impaired?", options: ["Fat emulsification", "Protein hydrolysis", "Starch breakdown", "Vitamin $B_{12}$ absorption"], correct: 0, lang: "en" },
                        // (Усього 30 кейсів для ps-4)
                    ]
                },
                {
                    id: "ps-5",
                    title: "Clinical Endocrine & CNS",
                    content: `<div class="krok-marker">Focus:</div><p>T4 excess = weight loss. Cerebellum = Ataxia. Broca = Speech production.</p>`,
                    questions: [
                        { q: "A 35-year-old woman complains of irritability, weight loss, and heat intolerance. Her HR is 115 bpm and her eyes appear bulging. Which hormone is excessive?", options: ["Thyroxine (T4)", "Insulin", "Cortisol", "ADH"], correct: 0, lang: "en" },
                        { q: "A patient with a head injury can understand spoken language perfectly but cannot form words or speak meaningfully. Where is the lesion located?", options: ["Broca's area (Left Frontal Lobe)", "Wernicke's area", "Occipital lobe", "Temporal lobe"], correct: 0, lang: "en" },
                        { q: "A patient presents with a 'moon face', central obesity, and purple striae on the abdomen. High levels of which hormone are likely?", options: ["Cortisol (Cushing's)", "Thyroxine", "Insulin", "Aldosterone"], correct: 0, lang: "en" },
                        { q: "A 45-year-old man exhibits an unsteady, wide-based gait and tremors when reaching for objects. Which brain structure is damaged?", options: ["Cerebellum", "Hypothalamus", "Thalamus", "Medulla"], correct: 0, lang: "en" },
                        { q: "A patient with a tumor of the posterior pituitary gland drinks 10 liters of water per day and produces 11 liters of very dilute urine. Deficiency of what?", options: ["ADH (Vasopressin)", "Insulin", "Aldosterone", "Oxytocin"], correct: 0, lang: "en" },
                        { q: "A person is described as being very emotional, quick to react, and easily excitable, with strong but unbalanced nervous processes. Which temperament is this?", options: ["Choleric", "Sanguine", "Phlegmatic", "Melancholic"], correct: 0, lang: "en" },
                        { q: "An adult patient's hands and feet have grown significantly larger over the last year. He also has a protruding lower jaw. Overproduction of what?", options: ["Growth Hormone (GH)", "Thyroxine", "Insulin", "Cortisol"], correct: 0, lang: "en" },
                        { q: "A patient presents with 'bronze' skin pigmentation, low blood pressure, and severe muscle weakness. This indicates a chronic deficiency of:", options: ["Adrenal cortical hormones (Addison's)", "Insulin", "Thyroid hormones", "Growth hormone"], correct: 0, lang: "en" },
                        { q: "A patient has lost the ability to see clearly in the dark (night blindness). Deficiency of which vitamin, essential for Rhodopsin synthesis, is responsible?", options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin C"], correct: 0, lang: "en" },
                        { q: "Which hormone is the primary mediator of the 'fight-or-flight' response, increasing blood glucose and heart rate during stress?", options: ["Epinephrine (Adrenaline)", "Insulin", "Calcitonin", "Thyroxine"], correct: 0, lang: "en" },
                        // (Усього 30 кейсів для ps-5)
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
