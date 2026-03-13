export const production = {
        id: 'production',
        title: '6. Monitoring',
        icon: 'ph-pulse',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 6</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">The Production Reality</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">Real users are messy. Even a 95% success rate at scale still means hundreds of frustrated users daily. How do we spot them?</p>
                </header>

                <div class="grid md:grid-cols-2 gap-12 mb-16">
                    <div class="flex flex-col">
                        <h3 class="font-bold text-2xl mb-4">Finding the Signal</h3>
                        <p class="text-primary/70 mb-8 leading-relaxed">You have 10,000 interactions today. You can't read them all. Filter for "Signals" to isolate the problems.</p>
                        
                        <div class="space-y-4 flex-grow">
                            <label class="flex items-start gap-4 p-4 bg-softgray/20 rounded-xl cursor-pointer hover:bg-softgray/40 transition border border-transparent hover:border-secondary/30">
                                <input type="checkbox" id="filter-escalation" class="w-5 h-5 mt-1 text-secondary rounded focus:ring-secondary accent-secondary" onchange="filterLogs()">
                                <div>
                                    <span class="font-bold block text-lg">Explicit Signals</span>
                                    <p class="text-sm text-primary/60 mt-1">"Talk to a human", Thumbs down ratings</p>
                                </div>
                            </label>
                            <label class="flex items-start gap-4 p-4 bg-softgray/20 rounded-xl cursor-pointer hover:bg-softgray/40 transition border border-transparent hover:border-secondary/30">
                                <input type="checkbox" id="filter-behavior" class="w-5 h-5 mt-1 text-secondary rounded focus:ring-secondary accent-secondary" onchange="filterLogs()">
                                <div>
                                    <span class="font-bold block text-lg">Implicit Signals</span>
                                    <p class="text-sm text-primary/60 mt-1">Rage clicks, copy-pasting, asking same question 3 times</p>
                                </div>
                            </label>
                        </div>
                        <div class="mt-8">
                            <div class="flex justify-between text-sm mb-3">
                                <span class="text-primary/70 font-medium">Logs Visible:</span>
                                <span class="font-bold text-secondary" id="log-count">10,000</span>
                            </div>
                            <div class="w-full bg-softgray rounded-full h-2">
                                <div id="log-bar" class="bg-primary/30 h-2 rounded-full transition-all duration-500" style="width: 100%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-softgray/30 p-6 rounded-2xl font-mono text-sm overflow-hidden flex flex-col h-96 border border-softgray">
                        <div class="text-primary font-bold border-b border-softgray pb-4 mb-4 flex justify-between font-sans">
                            <span class="flex items-center gap-2"><i class="ph ph-chat-circle-dots text-xl text-secondary"></i> Live Chat Stream</span>
                            <span class="animate-pulse text-accent font-bold flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-accent"></div> Live</span>
                        </div>
                        <div id="log-stream" class="space-y-3 overflow-y-auto flex-1 pr-2">
                        </div>
                    </div>
                </div>

                <div class="pt-8 border-t border-softgray">
                    <h3 class="font-bold text-2xl mb-10 text-center">Monitoring Strategy</h3>
                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="text-center flex flex-col items-center">
                            <div class="w-20 h-20 bg-softgray rounded-full flex items-center justify-center mb-6">
                                <i class="ph ph-shield-check text-4xl text-secondary"></i>
                            </div>
                            <h4 class="font-bold text-xl mb-3">Online (Guardrails)</h4>
                            <p class="text-primary/70 leading-relaxed max-w-sm">Real-time circuit breakers. Block PII, hate speech, or dangerous content immediately. Must be fast.</p>
                        </div>
                        <div class="text-center flex flex-col items-center">
                            <div class="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                                <i class="ph ph-arrows-clockwise text-4xl text-secondary"></i>
                            </div>
                            <h4 class="font-bold text-xl mb-3">Offline (Flywheel)</h4>
                            <p class="text-primary/70 leading-relaxed max-w-sm">Batch analysis. Run AI judges overnight on sampled logs to spot trends and fix root causes.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    };
