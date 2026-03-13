export const framework = {
        id: 'framework',
        title: '3. The Framework',
        icon: 'ph-tree-structure',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 3</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">What are you actually evaluating?</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">Evaluation isn't magic. It is strictly about comparing what actually happened to what <em>should</em> have happened.</p>
                </header>

                <div class="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                    <div class="w-full md:w-1/3 flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-softgray rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary">1</div>
                        <h3 class="font-bold text-xl mb-3">Input</h3>
                        <p class="text-primary/70 leading-relaxed">Not just the prompt! Includes previous chat history, retrieved company documents, and system rules.</p>
                    </div>
                    
                    <div class="hidden md:flex items-center justify-center pt-8">
                        <i class="ph ph-arrow-right text-4xl text-softgray"></i>
                    </div>

                    <div class="w-full md:w-1/3 flex flex-col items-center text-center relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide whitespace-nowrap">Hardest Part</div>
                        <div class="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-secondary/20">2</div>
                        <h3 class="font-bold text-xl mb-3">Expected</h3>
                        <p class="text-primary/70 leading-relaxed">What does "Good" look like? Defined by business Rubrics (Tone, Accuracy, Safety).</p>
                    </div>

                    <div class="hidden md:flex items-center justify-center pt-8">
                        <i class="ph ph-arrow-right text-4xl text-softgray"></i>
                    </div>

                    <div class="w-full md:w-1/3 flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-softgray rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary">3</div>
                        <h3 class="font-bold text-xl mb-3">Actual</h3>
                        <p class="text-primary/70 leading-relaxed">The generated response, the tools the AI chose to call, and the decisions made.</p>
                    </div>
                </div>

                <div class="mt-12">
                    <h3 class="font-bold text-2xl mb-4">Interactive Rubric Example: "Escalation"</h3>
                    <p class="text-primary/70 mb-8 leading-relaxed">Generic metrics like "Helpfulness" fail because they mean different things to different teams. Specific metrics need specific definitions.</p>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="p-6 bg-softgray/20 rounded-2xl border-l-4 border-accent">
                            <strong class="text-accent flex items-center gap-2 text-lg mb-4"><i class="ph ph-check-circle text-2xl"></i> Acceptable</strong>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right text-secondary mt-1"></i> <span class="text-primary/80">Identifies situations needing human intervention (billing disputes > $100).</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right text-secondary mt-1"></i> <span class="text-primary/80">Provides clear context to the human agent on handoff.</span></li>
                            </ul>
                        </div>
                        <div class="p-6 bg-softgray/20 rounded-2xl border-l-4 border-primary">
                            <strong class="text-primary flex items-center gap-2 text-lg mb-4"><i class="ph ph-x-circle text-2xl"></i> Not Acceptable</strong>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right text-secondary mt-1"></i> <span class="text-primary/80">Fails to escalate when user is clearly frustrated.</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right text-secondary mt-1"></i> <span class="text-primary/80">Escalates routine questions (e.g., "reset password").</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right text-secondary mt-1"></i> <span class="text-primary/80">Escalates without summarizing the context.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    };
