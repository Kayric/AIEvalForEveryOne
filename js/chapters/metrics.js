export const metrics = {
        id: 'metrics',
        title: '5. How to Measure',
        icon: 'ph-chart-bar',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 5</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">How Do We Measure Quality?</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">You can't pay humans to read 10,000 interactions a day. We have to balance human accuracy with automated speed.</p>
                </header>

                <h3 class="font-bold text-2xl mb-8">The 3 Ways to Grade AI</h3>
                <div class="grid md:grid-cols-3 gap-8 mb-16">
                    <div class="flex flex-col bg-softgray/20 p-6 rounded-2xl border border-transparent hover:border-softgray transition-colors">
                        <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-primary mb-4">
                            <i class="ph ph-user text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">1. Human Review</h4>
                        <p class="text-primary/70 mb-4 leading-relaxed">Real people reading logs. It's the most accurate, but it's slow and expensive.</p>
                        <div class="text-sm font-bold text-secondary mt-auto">Best for: Before launch & critical failures.</div>
                    </div>
                    
                    <div class="flex flex-col bg-softgray/20 p-6 rounded-2xl border border-transparent hover:border-softgray transition-colors">
                        <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-primary mb-4">
                            <i class="ph ph-code text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">2. Simple Rules</h4>
                        <p class="text-primary/70 mb-4 leading-relaxed">Basic code checks. Did the AI respond in under 2 seconds? Did it swear? Very fast and cheap.</p>
                        <div class="text-sm font-bold text-secondary mt-auto">Best for: Formatting and basic safety.</div>
                    </div>

                    <div class="flex flex-col bg-secondary/10 p-6 rounded-2xl border border-secondary/20 shadow-sm relative">
                        <div class="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">The Sweet Spot</div>
                        <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary mb-4 shadow-sm">
                            <i class="ph ph-robot text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">3. AI Grading AI</h4>
                        <p class="text-primary/70 mb-4 leading-relaxed">Using a second AI to ask: "Was this response polite?" It scales subjectivity across thousands of chats.</p>
                        <div class="text-sm font-bold text-secondary mt-auto">Best for: Measuring empathy and tone at scale.</div>
                    </div>
                </div>

                <div class="pt-8 border-t border-softgray">
                    <h3 class="font-bold text-2xl mb-2">Finding the Right Balance</h3>
                    <p class="text-primary/70 mb-8">Hover over the chart. We only use expensive methods (like AI Grading) for high-impact business needs.</p>
                    
                    <div class="chart-container">
                        <canvas id="metricChart"></canvas>
                    </div>
                </div>
            </div>
        `
    };
