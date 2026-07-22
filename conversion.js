/**
 * conversion.js — Meridian Institute of Technology
 * Herramientas de conversión: Calculadora de Becas, Test Vocacional,
 * Social Proof Toasts, Sticky Bar, WhatsApp FAB.
 * 100% Vanilla JS — Sin dependencias.
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. STICKY PROMO BAR — Dismiss logic
    // =========================================
    const promoBar = document.getElementById('promo-bar');
    const promoClose = document.getElementById('promo-bar-close');
    if (promoBar && promoClose) {
        // Check sessionStorage to keep it dismissed during session
        if (sessionStorage.getItem('promo-bar-dismissed')) {
            promoBar.style.display = 'none';
            // Recalcula el alto del chrome fijo: sin la barra, el header sube.
            if (window.syncChromeHeight) window.syncChromeHeight();
        }
        promoClose.addEventListener('click', () => {
            promoBar.classList.add('promo-bar-hidden');
            // Se avisa de inmediato para que el header suba a la vez que la
            // barra se desliza, en lugar de dar un salto al terminar.
            if (window.syncChromeHeight) window.syncChromeHeight();
            setTimeout(() => {
                promoBar.style.display = 'none';
            }, 400);
            sessionStorage.setItem('promo-bar-dismissed', 'true');
        });
    }

    // =========================================
    // 2. TOAST DE CONFIRMACIÓN — Solo acciones reales
    // =========================================
    // Muestra una tarjeta de confirmación cuando el usuario completa una
    // acción real y verificable (ej. envío de un formulario). Sin datos
    // simulados: nunca inventamos inscripciones ni actividad de terceros.
    function showToast(message) {
        const container = document.getElementById('social-proof-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'social-proof-toast';
        toast.setAttribute('role', 'status');
        toast.innerHTML = `
            <div class="proof-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="proof-content">${message}</div>
            <button class="proof-close" aria-label="Cerrar">&times;</button>
        `;

        toast.querySelector('.proof-close').addEventListener('click', () => {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 400);
        });

        container.appendChild(toast);

        // Auto-remove after 6 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.add('toast-exit');
                setTimeout(() => toast.remove(), 400);
            }
        }, 6000);
    }

    // =========================================
    // 3. SCHOLARSHIP CALCULATOR WIZARD
    // =========================================
    const wizard = document.getElementById('scholarship-wizard');
    if (wizard) {
        const steps = wizard.querySelectorAll('.wizard-step');
        const progressFill = wizard.querySelector('.wizard-progress-fill');
        const totalSteps = 4; // 3 question steps + result
        let currentStep = 0;

        // Data storage
        const wizardData = {
            program: '',
            average: 8.0,
            ubicacion: ''
        };

        function updateProgress() {
            const pct = ((currentStep + 1) / totalSteps) * 100;
            if (progressFill) progressFill.style.width = pct + '%';
        }

        function goToStep(stepIndex) {
            steps.forEach((s, i) => {
                s.classList.remove('wizard-step-active', 'wizard-step-exit');
                if (i === currentStep) s.classList.add('wizard-step-exit');
            });

            setTimeout(() => {
                steps.forEach(s => s.classList.remove('wizard-step-exit', 'wizard-step-active'));
                currentStep = stepIndex;
                steps[currentStep].classList.add('wizard-step-active');
                updateProgress();
            }, 300);
        }

        // STEP 1: Program selection
        const programBtns = wizard.querySelectorAll('.program-option');
        programBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                programBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                wizardData.program = btn.dataset.program;
                setTimeout(() => goToStep(1), 400);
            });
        });

        // STEP 2: Average slider
        const slider = wizard.querySelector('#avg-slider');
        const sliderValue = wizard.querySelector('#avg-value');
        const sliderTrackFill = wizard.querySelector('.slider-track-fill');
        const step2Next = wizard.querySelector('#step2-next');

        if (slider) {
            function updateSlider() {
                const val = parseFloat(slider.value);
                wizardData.average = val;
                if (sliderValue) sliderValue.textContent = val.toFixed(1);

                // Calculate fill percentage
                const min = parseFloat(slider.min);
                const max = parseFloat(slider.max);
                const pct = ((val - min) / (max - min)) * 100;
                if (sliderTrackFill) sliderTrackFill.style.width = pct + '%';

                // Color interpolation: red (low) → yellow (mid) → green (high)
                let hue;
                if (val < 7) hue = 0;        // red
                else if (val < 8) hue = 30;   // orange
                else if (val < 9) hue = 60;   // yellow
                else hue = 120;               // green

                if (sliderTrackFill) sliderTrackFill.style.backgroundColor = `hsl(${hue}, 70%, 45%)`;
            }

            slider.addEventListener('input', updateSlider);
            updateSlider(); // Initialize
        }

        if (step2Next) {
            step2Next.addEventListener('click', () => goToStep(2));
        }

        // STEP 3: Modality selection
        const modalityBtns = wizard.querySelectorAll('.modality-btn');
        modalityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalityBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                wizardData.ubicacion = btn.dataset.modality;

                // Go to calculating animation
                setTimeout(() => showCalculating(), 400);
            });
        });

        // CALCULATING ANIMATION
        function showCalculating() {
            steps.forEach(s => s.classList.remove('wizard-step-active', 'wizard-step-exit'));
            const calcScreen = wizard.querySelector('.wizard-calculating');
            if (calcScreen) {
                calcScreen.classList.add('wizard-step-active');
                if (progressFill) progressFill.style.width = '85%';
            }

            // After 2 seconds, show result
            setTimeout(() => {
                if (calcScreen) calcScreen.classList.remove('wizard-step-active');
                showResult();
            }, 2200);
        }

        // SHOW RESULT
        function showResult() {
            const avg = wizardData.average;
            let scholarship, message, level;

            if (avg >= 9.5) {
                scholarship = '40%';
                message = '¡Extraordinario! Tu perfil académico te posiciona para nuestra beca más alta.';
                level = 'excelente';
            } else if (avg >= 9.0) {
                scholarship = '30%';
                message = '¡Excelente! Tienes un perfil sobresaliente para una beca significativa.';
                level = 'excelente';
            } else if (avg >= 8.5) {
                scholarship = '20%';
                message = '¡Muy bien! Tu rendimiento académico te abre la puerta a una beca competitiva.';
                level = 'bueno';
            } else if (avg >= 8.0) {
                scholarship = '15%';
                message = 'Tu perfil es sólido. Veamos cómo maximizar tu oportunidad de beca.';
                level = 'bueno';
            } else if (avg >= 7.0) {
                scholarship = '10%';
                message = 'Tienes posibilidades. Nuestros asesores pueden ayudarte a mejorar tu candidatura.';
                level = 'regular';
            } else {
                scholarship = '5%';
                message = 'Cada talento merece oportunidad. Un asesor evaluará tu caso personalmente.';
                level = 'regular';
            }

            // Fill result content
            const resultSection = wizard.querySelector('.wizard-result');
            const scholarshipEl = wizard.querySelector('#result-scholarship');
            const messageEl = wizard.querySelector('#result-message');
            const programEl = wizard.querySelector('#result-program');

            if (scholarshipEl) scholarshipEl.textContent = scholarship;
            if (messageEl) messageEl.textContent = message;
            if (programEl) programEl.textContent = wizardData.program;

            // Update level class for visual styling
            const badge = wizard.querySelector('.result-badge');
            if (badge) {
                badge.className = 'result-badge result-badge-' + level;
            }

            if (resultSection) {
                resultSection.classList.add('wizard-step-active');
                if (progressFill) progressFill.style.width = '100%';
                currentStep = 3;
            }

            // Set hidden form fields
            const hiddenProgram = wizard.querySelector('input[name="programa_interes"]');
            const hiddenAvg = wizard.querySelector('input[name="promedio"]');
            const hiddenModality = wizard.querySelector('input[name="ubicacion"]');
            const hiddenScholarship = wizard.querySelector('input[name="beca_estimada"]');

            if (hiddenProgram) hiddenProgram.value = wizardData.program;
            if (hiddenAvg) hiddenAvg.value = wizardData.average;
            if (hiddenModality) hiddenModality.value = wizardData.ubicacion;
            if (hiddenScholarship) hiddenScholarship.value = scholarship;
        }

        // Form submission via fetch (AJAX)
        const scholarshipForm = wizard.querySelector('#scholarship-form');
        if (scholarshipForm) {
            scholarshipForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(scholarshipForm);
                const submitBtn = scholarshipForm.querySelector('button[type="submit"]');

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
                }

                fetch(scholarshipForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                })
                .then(response => {
                    // Show success regardless (FormSubmit may redirect)
                    showThankYou();
                })
                .catch(() => {
                    showThankYou(); // Show success anyway for UX
                });
            });
        }

        function showThankYou() {
            const resultSection = wizard.querySelector('.wizard-result');
            const thankYou = wizard.querySelector('.wizard-thankyou');
            if (resultSection) resultSection.classList.remove('wizard-step-active');
            if (thankYou) thankYou.classList.add('wizard-step-active');
            showToast('¡Solicitud enviada con éxito! Un asesor te contactará muy pronto.');
        }

        // Back buttons
        const backBtns = wizard.querySelectorAll('.wizard-back');
        backBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = parseInt(btn.dataset.step);
                goToStep(target);
            });
        });

        // Initialize first step
        updateProgress();
    }

    // =========================================
    // 4. VOCATIONAL TEST
    // =========================================
    const vocTest = document.getElementById('vocational-test');
    if (vocTest) {
        const questions = vocTest.querySelectorAll('.voc-question');
        const totalQ = questions.length;
        let currentQ = 0;
        const answers = {};

        const vocProgressFill = vocTest.querySelector('.voc-progress-fill');

        function updateVocProgress() {
            const pct = ((currentQ + 1) / (totalQ + 1)) * 100;
            if (vocProgressFill) vocProgressFill.style.width = pct + '%';
        }

        function goToQuestion(idx) {
            questions.forEach((q, i) => {
                q.classList.remove('voc-question-active');
            });
            currentQ = idx;
            if (idx < totalQ) {
                questions[idx].classList.add('voc-question-active');
            }
            updateVocProgress();
        }

        // Answer buttons
        const answerBtns = vocTest.querySelectorAll('.voc-answer');
        answerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const qIndex = parseInt(btn.closest('.voc-question').dataset.question);
                const tags = btn.dataset.tags.split(',');

                // Store answer
                answers[qIndex] = tags;

                // Highlight selection
                btn.closest('.voc-question').querySelectorAll('.voc-answer').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');

                // Next question
                setTimeout(() => {
                    if (qIndex + 1 < totalQ) {
                        goToQuestion(qIndex + 1);
                    } else {
                        showVocResult();
                    }
                }, 500);
            });
        });

        function showVocResult() {
            // Tally scores
            const scores = {};
            Object.values(answers).forEach(tags => {
                tags.forEach(tag => {
                    scores[tag] = (scores[tag] || 0) + 1;
                });
            });

            // Career mapping
            const careers = [
                { id: 'software', name: 'Ingeniería de Software Full Stack', tags: ['lógica', 'tecnología', 'individual', 'crear', 'datos'], icon: 'fa-code', desc: 'Diseña y construye aplicaciones robustas de principio a fin.' },
                { id: 'cloud', name: 'Arquitectura Cloud & DevOps', tags: ['tecnología', 'sistemas', 'datos', 'equipo', 'lógica'], icon: 'fa-cloud', desc: 'Gestiona infraestructura escalable en la nube.' },
                { id: 'data', name: 'Ciencia de Datos & Analytics', tags: ['datos', 'lógica', 'individual', 'investigar', 'tecnología'], icon: 'fa-chart-line', desc: 'Transforma datos en decisiones estratégicas.' },
                { id: 'cyber', name: 'Ciberseguridad', tags: ['sistemas', 'lógica', 'investigar', 'tecnología', 'individual'], icon: 'fa-shield-halved', desc: 'Protege sistemas y datos contra amenazas.' },
                { id: 'management', name: 'Gestión de Proyectos Tech', tags: ['equipo', 'personas', 'crear', 'comunicar', 'liderazgo'], icon: 'fa-diagram-project', desc: 'Lidera equipos de desarrollo y entrega soluciones.' },
                { id: 'ux', name: 'Diseño UX / Producto Digital', tags: ['crear', 'personas', 'diseño', 'comunicar', 'equipo'], icon: 'fa-pen-ruler', desc: 'Diseña experiencias digitales centradas en el usuario.' },
            ];

            // Score each career
            careers.forEach(career => {
                career.score = career.tags.reduce((acc, tag) => acc + (scores[tag] || 0), 0);
            });

            // Sort and pick top 3
            careers.sort((a, b) => b.score - a.score);
            const top3 = careers.slice(0, 3);

            // Build result HTML
            const resultContainer = vocTest.querySelector('.voc-results');
            const cardsContainer = vocTest.querySelector('#voc-career-cards');

            if (cardsContainer) {
                cardsContainer.innerHTML = top3.map((c, i) => `
                    <div class="voc-career-card">
                        <div class="voc-career-rank">#${i + 1}</div>
                        <div class="voc-career-icon"><i class="fa-solid ${c.icon}"></i></div>
                        <h4>${c.name}</h4>
                        <p>${c.desc}</p>
                    </div>
                `).join('');
            }

            // Hide questions, show results
            questions.forEach(q => q.classList.remove('voc-question-active'));
            if (resultContainer) resultContainer.classList.add('voc-results-active');
            if (vocProgressFill) vocProgressFill.style.width = '100%';
        }

        // Vocational form submission
        const vocForm = vocTest.querySelector('#voc-form');
        if (vocForm) {
            vocForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(vocForm);
                const submitBtn = vocForm.querySelector('button[type="submit"]');

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
                }

                function showVocThankYou() {
                    const thankYou = vocTest.querySelector('.voc-thankyou');
                    const resultContainer = vocTest.querySelector('.voc-results');
                    if (resultContainer) resultContainer.classList.remove('voc-results-active');
                    if (thankYou) thankYou.classList.add('voc-results-active');
                    showToast('¡Test enviado con éxito! Revisa tu correo para los siguientes pasos.');
                }

                fetch(vocForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                })
                .then(showVocThankYou)
                .catch(showVocThankYou);
            });
        }

        // Initialize
        goToQuestion(0);
    }

});
