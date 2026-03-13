export const intro = {
        id: 'intro',
        title: '1. Traditional vs AI',
        icon: 'ph-question',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 1</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">Why Evaluation is Unavoidable</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">To understand why evaluation is suddenly so complex, we must first understand the fundamental shift in how software behaves under the hood.</p>
                </header>

                <div class="grid md:grid-cols-2 gap-12 mb-16">
                    <div class="flex flex-col">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center"><i class="ph ph-cursor-click text-2xl text-secondary"></i></div>
                            <h3 class="font-bold text-2xl">Traditional Software</h3>
                        </div>
                        <p class="mb-6 flex-grow text-primary/80">Predictable (Deterministic). The user clicks a specific button, and the system follows a written rule.</p>
                        <div class="bg-softgray/30 rounded-lg p-6 font-mono text-sm min-h-[6rem] flex flex-col justify-end border border-softgray">
                            <div class="text-primary/60 mb-2">> Action: User clicks "Request Refund"</div>
                            <div id="trad-output" class="font-bold">> ...</div>
                        </div>
                        <button onclick="runTraditional()" class="mt-6 w-full py-3 bg-softgray hover:bg-softgray/70 text-primary font-bold rounded-lg transition-colors">Simulate Click</button>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center"><i class="ph ph-sparkle text-2xl text-secondary"></i></div>
                            <h3 class="font-bold text-2xl">AI Systems</h3>
                        </div>
                        <p class="mb-6 flex-grow text-primary/80">Unpredictable (Probabilistic). The user types whatever they want, and the AI generates a unique response.</p>
                        <div class="bg-softgray/30 rounded-lg p-6 font-mono text-sm min-h-[6rem] flex flex-col justify-end border border-softgray relative">
                            <div class="text-secondary text-xs font-bold absolute top-3 right-4 uppercase">New Paradigm</div>
                            <div class="text-primary/60 mb-2">> User: "I hated this product, give me my money back!"</div>
                            <div id="ai-output" class="font-bold">> ...</div>
                        </div>
                        <button onclick="runAI()" class="mt-6 w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg transition-colors">Generate Response</button>
                    </div>
                </div>

                <div class="bg-softgray/20 p-8 rounded-2xl border-l-4 border-secondary">
                    <h4 class="font-bold text-lg flex items-center gap-2 mb-2"><i class="ph ph-info text-secondary text-2xl"></i> Key Takeaway</h4>
                    <p class="text-primary/80 leading-relaxed">In traditional software, we test logic. In AI, we evaluate behavior. Because we cannot predict every input or guarantee every output, <strong>evaluation isn't just testing—it's risk management.</strong></p>
                </div>
            </div>
        `
    };
