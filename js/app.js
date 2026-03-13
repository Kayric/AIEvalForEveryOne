import { courseData } from './data.js';

// --- Globals ---
let toggleSidebar;
let currentChapterIndex = 0;

// --- UI Rendering ---
function renderNav() {
    const navContainer = document.getElementById('nav-container');
    if (!navContainer) return;

    navContainer.innerHTML = courseData.map((chapter, index) => `
        <button 
            onclick="loadChapter(${index})"
            class="w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-softgray/30 transition border-l-4 border-transparent ${index === currentChapterIndex ? 'active-nav' : 'text-primary/70'}"
        >
            <i class="ph ${chapter.icon} text-xl ${index === currentChapterIndex ? 'text-secondary' : ''}"></i>
            <span class="text-sm truncate">${chapter.title}</span>
        </button>
    `).join('');
    
    // Update Progress
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const progress = ((currentChapterIndex + 1) / courseData.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

function loadChapter(index) {
    currentChapterIndex = index;
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    mainContent.innerHTML = courseData[index].content;
    
    // Scroll to top
    mainContent.scrollTop = 0;

    renderNav();
    
    // Initialize specific chapter interactions
    if (courseData[index].id === 'intro') resetSimulations();
    if (courseData[index].id === 'metrics') initMetricChart();
    if (courseData[index].id === 'production') initLogStream();

    // Mobile menu handling
    if(window.innerWidth < 768 && typeof toggleSidebar === 'function') {
        toggleSidebar(false);
    }

    // Update URL hash
    window.location.hash = courseData[index].id;
}

// --- Interaction Logic ---

// Module 1: Deterministic vs AI
function runTraditional() {
    const output = document.getElementById('trad-output');
    if (!output) return;
    output.innerText = '> System Output: Displaying standard refund form.';
    output.classList.add('text-secondary');
    setTimeout(() => output.classList.remove('text-secondary'), 200);
}

function runAI() {
    const output = document.getElementById('ai-output');
    if (!output) return;
    const responses = [
        '> AI: "I understand you are frustrated. I can help process your refund right now."',
        '> AI: "Oh no! Im sorry you hated the product. Here is a link to our refund portal."',
        '> AI: "As an AI, I cannot issue refunds, but I have escalated this to an agent."',
        '> AI: "To get your money back, please provide your order number first."'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    output.innerText = randomResponse;
    output.classList.add('text-secondary');
    setTimeout(() => output.classList.remove('text-secondary'), 200);
}

function resetSimulations() {
    // Reset any temporary state if needed
}

// Module 2: Quiz
function checkEvalAnswer(element) {
    const answerText = element.querySelector('.answer-text');
    if (answerText) {
        answerText.classList.remove('hidden');
        answerText.classList.add('fade-in');
    }
}

// Module 5: Chart.js (Brand compliant colors)
let metricChartInstance = null;
function initMetricChart() {
    const ctx = document.getElementById('metricChart');
    if(!ctx) return;

    // Global Chart defaults
    Chart.defaults.color = '#0d2c54';
    Chart.defaults.font.family = 'Inter, sans-serif';

    if (metricChartInstance) {
        metricChartInstance.destroy();
    }

    metricChartInstance = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Metrics',
                data: [
                    { x: 1, y: 9, label: 'Safety Filter', type: 'Must Have' },
                    { x: 2, y: 8, label: 'Format Check (Email/JSON)', type: 'Must Have' },
                    { x: 2, y: 9, label: 'Response Speed', type: 'Must Have' },
                    
                    { x: 8, y: 9, label: 'Expert Human Review', type: 'Strategic' },
                    { x: 7, y: 8, label: 'AI Grading AI (LLM Judge)', type: 'Strategic' },
                    
                    { x: 2, y: 2, label: 'Basic Sentiment Check', type: 'Nice to Have' },
                    { x: 3, y: 3, label: 'Word Count', type: 'Nice to Have' },
                    
                    { x: 8, y: 2, label: 'Complex Unused Score', type: 'Avoid' }
                ],
                backgroundColor: (ctx) => {
                    const val = ctx.raw;
                    if (!val) return '#DCE3ED';
                    // Max 10% usage of accent colors -> highlight only 2 key strategic/must-have metrics
                    if (val.label === 'Safety Filter') return '#11d399'; // Green accent
                    if (val.label === 'AI Grading AI (LLM Judge)') return '#006fff'; // Blue accent
                    return '#DCE3ED'; // Everything else is soft gray
                },
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    backgroundColor: '#0d2c54',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    callbacks: {
                        label: function(context) {
                            return `${context.raw.label} (${context.raw.type})`;
                        }
                    }
                },
                legend: { display: false }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Cost (Compute/$$$)', font: { weight: 'bold' } },
                    min: 0, max: 10,
                    grid: { color: '#DCE3ED' }
                },
                y: {
                    title: { display: true, text: 'Business Impact', font: { weight: 'bold' } },
                    min: 0, max: 10,
                    grid: { color: '#DCE3ED' }
                }
            }
        }
    });
}

// Module 6: Log Simulation
const allLogs = [
    { type: 'normal', msg: 'User requested password reset', id: 'req_001' },
    { type: 'normal', msg: 'Product query: "blue shoes"', id: 'req_002' },
    { type: 'behavior', msg: 'User retried prompt 3 times', id: 'req_003' },
    { type: 'escalation', msg: 'User: "Let me talk to a human!"', id: 'req_004' },
    { type: 'normal', msg: 'Shipping status check', id: 'req_005' },
    { type: 'behavior', msg: 'Rage click detected on "Submit"', id: 'req_006' },
    { type: 'normal', msg: 'User updated profile', id: 'req_007' },
    { type: 'escalation', msg: 'User: "This is useless"', id: 'req_008' },
    { type: 'normal', msg: 'Checkout flow started', id: 'req_009' }
];

function initLogStream() {
    const container = document.getElementById('log-stream');
    if(!container) return;
    container.innerHTML = '';
    
    // Simple render loop simulation
    filterLogs();
}

function filterLogs() {
    const container = document.getElementById('log-stream');
    if(!container) return;
    
    const showEscalation = document.getElementById('filter-escalation')?.checked;
    const showBehavior = document.getElementById('filter-behavior')?.checked;
    
    container.innerHTML = '';

    allLogs.forEach(log => {
        let isVisible = false;
        
        if (log.type === 'normal' && !showEscalation && !showBehavior) isVisible = true;
        if (log.type === 'escalation' && showEscalation) isVisible = true;
        if (log.type === 'behavior' && showBehavior) isVisible = true;

        // If filters are on, hide normal
        if ((showEscalation || showBehavior) && log.type === 'normal') isVisible = false;

        if (isVisible) {
            const div = document.createElement('div');
            // Styling mapping to brand colors
            div.className = `p-3 rounded font-mono text-xs mb-2 ${
                log.type === 'escalation' ? 'bg-secondary/10 text-primary border-l-4 border-secondary' :
                log.type === 'behavior' ? 'bg-accent/10 text-primary border-l-4 border-accent' :
                'text-primary/60 border-l-4 border-transparent'
            }`;
            div.innerText = `[${new Date().toLocaleTimeString()}] [${log.id}] ${log.msg}`;
            container.appendChild(div);
        }
    });

    // Update UI Bars based on hypothetical math
    const logBar = document.getElementById('log-bar');
    const logCountText = document.getElementById('log-count');
    
    if (!logBar || !logCountText) return;

    if (showEscalation && showBehavior) {
        logBar.style.width = '3.5%';
        logBar.className = 'h-2 rounded-full transition-all duration-500 bg-secondary';
        logCountText.innerText = "350 (Manageable)";
    } else if (showEscalation || showBehavior) {
        logBar.style.width = '1.5%';
        logBar.className = 'h-2 rounded-full transition-all duration-500 bg-secondary';
        logCountText.innerText = "150 (Manageable)";
    } else {
        logBar.style.width = '100%';
        logBar.className = 'h-2 rounded-full transition-all duration-500 bg-softgray';
        logCountText.innerText = "10,000 (Impossible)";
    }
}

// --- Initialization & Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    toggleSidebar = function(show) {
        if (show) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    if (btn) btn.addEventListener('click', () => toggleSidebar(true));
    if (overlay) overlay.addEventListener('click', () => toggleSidebar(false));

    // Initial Chapter Load based on Hash
    const hash = window.location.hash.replace('#', '');
    const initialIndex = courseData.findIndex(c => c.id === hash);
    loadChapter(initialIndex !== -1 ? initialIndex : 0);
});

// Expose to window for inline HTML event handlers
window.loadChapter = loadChapter;
window.runTraditional = runTraditional;
window.runAI = runAI;
window.checkEvalAnswer = checkEvalAnswer;
window.filterLogs = filterLogs;