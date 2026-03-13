export const datasets = {
        id: 'datasets',
        title: '4. Reference Datasets',
        icon: 'ph-database',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 4</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">Building Your Golden Set</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">Start with 10-20 "cannot-fail" scenarios. Then, figure out what could go wrong to discover what you actually need to measure.</p>
                </header>

                <div>
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h3 class="font-bold text-2xl">From Scenarios to Metrics</h3>
                            <p class="text-primary/70 mt-1">How do we know what to measure? It comes from expected failures.</p>
                        </div>
                        <div class="text-sm font-bold text-secondary bg-secondary/10 px-4 py-2 rounded-full whitespace-nowrap">Phase: Pre-Deployment</div>
                    </div>

                    <div class="overflow-x-auto mb-8">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-softgray text-primary uppercase text-xs tracking-wider">
                                <tr>
                                    <th class="px-6 py-4 rounded-tl-xl font-bold w-1/4">1. Scenario</th>
                                    <th class="px-6 py-4 font-bold w-1/4">2. Expected Behavior</th>
                                    <th class="px-6 py-4 font-bold w-1/4">3. What could go wrong?</th>
                                    <th class="px-6 py-4 rounded-tr-xl font-bold w-1/4">4. Metric to Track</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-softgray">
                                <tr class="hover:bg-softgray/10 transition-colors">
                                    <td class="px-6 py-6 font-bold align-top">User wants a refund without a receipt</td>
                                    <td class="px-6 py-6 text-primary/80 align-top leading-relaxed">Explain the 30-day policy and ask for an order number.</td>
                                    <td class="px-6 py-6 text-primary/60 italic align-top leading-relaxed">AI invents a fake policy or promises a refund anyway.</td>
                                    <td class="px-6 py-6 align-top"><span class="bg-secondary/10 text-secondary font-bold px-3 py-1.5 rounded-lg text-xs">Policy Adherence</span></td>
                                </tr>
                                <tr class="hover:bg-softgray/10 transition-colors">
                                    <td class="px-6 py-6 font-bold align-top">Angry user threatening to cancel</td>
                                    <td class="px-6 py-6 text-primary/80 align-top leading-relaxed">Apologize and immediately escalate to human agent.</td>
                                    <td class="px-6 py-6 text-primary/60 italic align-top leading-relaxed">AI gives a generic "I'm sorry" and doesn't escalate.</td>
                                    <td class="px-6 py-6 align-top"><span class="bg-secondary/10 text-secondary font-bold px-3 py-1.5 rounded-lg text-xs">Escalation Accuracy</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-8 mb-10 bg-secondary/5 p-6 rounded-2xl border border-secondary/20">
                        <h4 class="font-bold text-lg flex items-center gap-2 mb-2"><i class="ph ph-ruler text-secondary text-2xl"></i> What exactly is a "Metric" here?</h4>
                        <p class="text-primary/80 leading-relaxed">A metric is simply a <strong>quantifiable rule</strong> we create to check if our "What could go wrong?" fear actually happened. We don't track metrics just for fun; we track them to catch specific failures. Once we define the metric (e.g., "Escalation Accuracy"), we have to figure out <em>how</em> to measure it.</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-primary shrink-0">
                                <i class="ph ph-bug text-2xl"></i>
                            </div>
                            <div>
                                <strong class="text-lg block mb-2">One-off Bug</strong>
                                <p class="text-sm text-primary/70 leading-relaxed">If the AI forgets a step once, tweak the prompt and move on. Don't build a complex metric for it.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                <i class="ph ph-chart-line-up text-2xl"></i>
                            </div>
                            <div>
                                <strong class="text-lg block mb-2">Recurring Risk = Metric</strong>
                                <p class="text-sm text-primary/70 leading-relaxed">If the AI might constantly fail at something critical (like tone or escalation), it becomes a Metric to track continuously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };
