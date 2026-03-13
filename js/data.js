const courseData = [
    {
        id: 'cover',
        title: 'Welcome',
        icon: 'ph-presentation-chart',
        content: `
            <div class="max-w-5xl mx-auto p-6 md:p-10 fade-in flex flex-col items-center justify-center min-h-[85vh]">
                <div class="w-full relative overflow-hidden text-center py-20">
                    
                    <div class="relative z-10">
                        <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-softgray mb-8">
                            <i class="ph ph-sparkle text-5xl text-secondary"></i>
                        </div>
                        
                        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-primary">
                            AI Evals for Everyone
                        </h1>
                        
                        <p class="text-xl md:text-3xl text-primary/70 mb-8 font-light">
                            Building & Testing Reliable AI Products
                        </p>
                        
                        <div class="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
                        
                        <p class="text-lg md:text-xl text-primary/60 mb-12 max-w-2xl mx-auto">
                            Brought to you by Kirk & Gemini
                        </p>
                        
                        <button onclick="loadChapter(1)" class="bg-secondary hover:bg-primary text-white font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 mx-auto text-lg">
                            Start Presentation <i class="ph ph-arrow-right font-bold"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'definition',
        title: 'Introduction',
        icon: 'ph-book-open',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Introduction</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">Why Should We Care About AI Evals?</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">Let's talk about why AI Evaluation matters for your specific role on the team.</p>
                </header>

                <div class="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
                            <i class="ph ph-briefcase text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">Project Manager</h4>
                            <p class="text-sm text-primary/80 mt-2 leading-relaxed">You define the business value. Without evals, you can't define what a "successful" AI feature actually looks like for the user.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
                            <i class="ph ph-shield-check text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">Quality Assurance</h4>
                            <p class="text-sm text-primary/80 mt-2 leading-relaxed">AI breaks traditional pass/fail testing. Your skills in finding edge cases are critical to building the grading rubrics.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
                            <i class="ph ph-code text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">Engineering</h4>
                            <p class="text-sm text-primary/80 mt-2 leading-relaxed">Passing a unit test doesn't mean the AI works. You must implement automated metrics that measure real system behavior.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
                            <i class="ph ph-paint-brush text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">Designers</h4>
                            <p class="text-sm text-primary/80 mt-2 leading-relaxed">Understanding AI failures helps you design better fallbacks, safety warnings, and user feedback mechanisms.</p>
                        </div>
                    </div>
                </div>

                <div class="pt-8">
                    <h3 class="text-2xl font-bold mb-6">So, What Exactly Are "Evals"?</h3>
                    
                    <div class="bg-softgray/30 p-8 rounded-2xl mb-12 relative">
                        <i class="ph ph-quotes text-5xl text-softgray absolute top-4 left-4"></i>
                        <div class="relative z-10 pl-6">
                            <h3 class="text-secondary font-bold text-sm mb-3 uppercase tracking-wider">Formal Definition</h3>
                            <p class="text-2xl font-light leading-snug">
                                "AI Evaluation is the systematic process of measuring and monitoring the <span class="font-bold text-secondary">quality</span>, <span class="font-bold text-secondary">safety</span>, and <span class="font-bold text-secondary">utility</span> of an AI system against business requirements and user expectations."
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <h4 class="font-bold text-lg mb-6 flex items-center gap-2">
                                <i class="ph ph-check-circle text-accent text-2xl"></i> What Evals ARE
                            </h4>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right mt-1 text-secondary"></i> <span>Defining what "good" looks like for your specific product.</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right mt-1 text-secondary"></i> <span>A continuous lifecycle that extends into production.</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right mt-1 text-secondary"></i> <span>A team sport.</span></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-lg mb-6 flex items-center gap-2">
                                <i class="ph ph-x-circle text-primary text-2xl"></i> What Evals ARE NOT
                            </h4>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right mt-1 text-secondary"></i> <span>Just academic benchmarks (like passing a bar exam).</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right mt-1 text-secondary"></i> <span>A one-time testing phase before you click "deploy".</span></li>
                                <li class="flex items-start gap-3"><i class="ph ph-arrow-right mt-1 text-secondary"></i> <span>Solely the responsibility of the engineering team.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
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
    },
    {
        id: 'model-vs-product',
        title: '2. Model vs Product',
        icon: 'ph-scales',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 2</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">The Big Confusion</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">Are you measuring how smart the AI is in general, or how well it solves your user's specific problem? We must separate Model Evals from Product Evals.</p>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-12 h-12 rounded-full bg-softgray flex items-center justify-center">
                                <i class="ph ph-brain text-2xl text-primary"></i>
                            </div>
                            <h3 class="text-2xl font-bold">Model Evaluation</h3>
                        </div>
                        <ul class="space-y-6">
                            <li class="flex items-start gap-4">
                                <i class="ph ph-arrow-right text-secondary text-xl mt-0.5"></i>
                                <div>
                                    <strong class="block text-lg mb-1">Goal</strong>
                                    <span class="text-primary/80">Measure raw intelligence (can it do math? can it code?).</span>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <i class="ph ph-arrow-right text-secondary text-xl mt-0.5"></i>
                                <div>
                                    <strong class="block text-lg mb-1">Who does it?</strong>
                                    <span class="text-primary/80">Research labs (OpenAI, Google) & Model creators.</span>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <i class="ph ph-arrow-right text-secondary text-xl mt-0.5"></i>
                                <div>
                                    <strong class="block text-lg mb-1">Tools</strong>
                                    <span class="text-primary/80">Standardized AI tests (e.g., MMLU for academic knowledge, HumanEval for coding).</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <i class="ph ph-package text-2xl text-secondary"></i>
                            </div>
                            <h3 class="text-2xl font-bold">Product Evaluation</h3>
                        </div>
                        <ul class="space-y-6">
                            <li class="flex items-start gap-4">
                                <i class="ph ph-arrow-right text-secondary text-xl mt-0.5"></i>
                                <div>
                                    <strong class="block text-lg mb-1">Goal</strong>
                                    <span class="text-primary/80">Does it behave safely and accurately for <em>our specific users</em>?</span>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <i class="ph ph-arrow-right text-secondary text-xl mt-0.5"></i>
                                <div>
                                    <strong class="block text-lg mb-1">Who does it?</strong>
                                    <span class="text-primary/80">You! (Product teams, Engineers, QA).</span>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <i class="ph ph-arrow-right text-secondary text-xl mt-0.5"></i>
                                <div>
                                    <strong class="block text-lg mb-1">Tools</strong>
                                    <span class="text-primary/80">Our own custom datasets, business rules, and risk analysis.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-xl mb-6">Quick Check: Which type of eval do you need?</h4>
                    <div class="space-y-4">
                        <div onclick="checkEvalAnswer(this)" class="p-6 bg-softgray/20 rounded-xl cursor-pointer hover:bg-softgray/40 transition group relative border border-transparent">
                            <div class="flex justify-between items-center">
                                <span class="font-medium text-lg">"I need to pick the smartest base AI model for general coding tasks."</span>
                                <i class="ph ph-arrow-right text-softgray group-hover:text-secondary text-2xl"></i>
                            </div>
                            <div class="hidden mt-4 text-primary/80 answer-text border-t border-softgray pt-4">
                                <span class="font-bold text-secondary">Model Eval:</span> Use standard benchmarks to filter base models.
                            </div>
                        </div>
                        <div onclick="checkEvalAnswer(this)" class="p-6 bg-softgray/20 rounded-xl cursor-pointer hover:bg-softgray/40 transition group relative border border-transparent">
                            <div class="flex justify-between items-center">
                                <span class="font-medium text-lg">"I need to know if our chatbot is rude to angry customers."</span>
                                <i class="ph ph-arrow-right text-softgray group-hover:text-secondary text-2xl"></i>
                            </div>
                            <div class="hidden mt-4 text-primary/80 answer-text border-t border-softgray pt-4">
                                <span class="font-bold text-secondary">Product Eval:</span> This requires testing against your specific brand guidelines.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
     {
        id: 'process',
        title: '7. Complete Process',
        icon: 'ph-steps',
        content: `
            <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                <header class="mb-12 border-b border-softgray pb-6">
                    <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 7</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">The Continuous Lifecycle</h2>
                    <p class="text-lg text-primary/70 mt-4 leading-relaxed">Evaluation is not a one-time event. It is an ongoing, continuous loop.</p>
                </header>

                <div class="relative w-full max-w-2xl mx-auto h-[650px] hidden md:block mt-16 mb-8">
                    <div class="absolute inset-20 border-[3px] border-dashed border-softgray rounded-full"></div>
                    
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary/10">
                        <i class="ph ph-arrows-clockwise text-[14rem]"></i>
                    </div>
                    
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300">
                        <div class="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                        <h3 class="font-bold text-lg mb-2">Test Before Launch</h3>
                        <p class="text-sm text-primary/70">Pick 10 to 20 critical scenarios. Test the AI against these first.</p>
                    </div>

                    <div class="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300">
                        <div class="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                        <h3 class="font-bold text-lg mb-2">Automate Grading</h3>
                        <p class="text-sm text-primary/70">Set up strict code checks and AI reviewers for subjectivity.</p>
                    </div>

                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300">
                        <div class="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                        <h3 class="font-bold text-lg mb-2">Add Safety Nets</h3>
                        <p class="text-sm text-primary/70">Launch with live guardrails. Block harm instantly.</p>
                    </div>

                    <div class="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300">
                        <div class="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                        <h3 class="font-bold text-lg mb-2">Learn from Users</h3>
                        <p class="text-sm text-primary/70">Watch for frustration. Find out what broke, add it to Step 1.</p>
                    </div>
                </div>

                <div class="md:hidden mt-8 space-y-4">
                    <div class="bg-white p-6 rounded-2xl border border-softgray shadow-sm relative">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">1</div>
                            <h3 class="font-bold text-xl">Test Before Launch</h3>
                        </div>
                        <p class="text-primary/70 ml-14">Product and QA teams pick 10 to 20 critical "cannot fail" scenarios. Test the AI against these before letting real users touch it.</p>
                    </div>
                    
                    <div class="flex justify-center text-softgray"><i class="ph ph-arrow-down text-3xl"></i></div>
                    
                    <div class="bg-white p-6 rounded-2xl border border-softgray shadow-sm relative">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">2</div>
                            <h3 class="font-bold text-xl">Automate the Grading</h3>
                        </div>
                        <p class="text-primary/70 ml-14">Set up automatic checks. Use strict rules for objective things (like response speed) and use AI reviewers for subjective things (like empathy).</p>
                    </div>

                    <div class="flex justify-center text-softgray"><i class="ph ph-arrow-down text-3xl"></i></div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-softgray shadow-sm relative shadow-secondary/10">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">3</div>
                            <h3 class="font-bold text-xl">Add Live Safety Nets</h3>
                        </div>
                        <p class="text-primary/70 ml-14">Launch the AI to users, but keep "guardrails" on. Instantly block harmful content or escalate to a human if the AI gets confused.</p>
                    </div>

                    <div class="flex justify-center text-softgray"><i class="ph ph-arrow-down text-3xl"></i></div>

                    <div class="bg-white p-6 rounded-2xl border border-softgray shadow-sm relative">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">4</div>
                            <h3 class="font-bold text-xl">Learn from Users</h3>
                        </div>
                        <p class="text-primary/70 ml-14">Watch for signs of trouble (like a user repeating the same question). Find out what broke, add it to your Step 1 test scenarios, and repeat the cycle!</p>
                    </div>
                    
                    <div class="flex justify-center text-secondary mt-8 pb-4">
                        <div class="flex flex-col items-center bg-secondary/10 p-4 rounded-xl px-8">
                            <i class="ph ph-arrows-clockwise text-4xl mb-2"></i>
                            <span class="text-sm font-bold tracking-widest uppercase">Cycle Repeats</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
                id: 'tools',
                title: '8. Tools of the Trade',
                icon: 'ph-toolbox',
                content: `
                    <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                        <header class="mb-12 border-b border-softgray pb-6">
                            <span class="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 8</span>
                            <h2 class="text-3xl md:text-4xl font-bold mt-2">Tools of the Trade</h2>
                            <p class="text-lg text-primary/70 mt-4 leading-relaxed">The ecosystem is evolving rapidly. While tools are helpful, remember the golden rule below before adopting one.</p>
                        </header>

                        <!-- The Golden Rule Warning -->
                        <div class="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 mb-12 flex items-start gap-4">
                            <i class="ph ph-warning-circle text-3xl text-secondary mt-1"></i>
                            <div>
                                <h4 class="font-bold text-lg mb-1 text-primary">Process Over Tools</h4>
                                <p class="text-primary/80 leading-relaxed">Do not buy an expensive evaluation tool until you have manually defined your top 10-20 failure scenarios. A tool cannot tell you what business risk looks like; it can only automate the checks you define.</p>
                            </div>
                        </div>

                        <!-- Tool Categories Grid -->
                        <div class="grid md:grid-cols-2 gap-8">
                            
                            <!-- Code-First/Open Source -->
                            <div class="bg-softgray/20 p-8 rounded-3xl border border-softgray flex flex-col">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                        <i class="ph ph-code-block text-2xl"></i>
                                    </div>
                                    <h3 class="font-bold text-xl">Code-First Frameworks</h3>
                                </div>
                                <p class="text-primary/70 mb-6 flex-grow leading-relaxed">Open-source libraries designed for developers and QA engineers to write automated tests directly in their code repositories.</p>
                                <ul class="space-y-3 mt-auto">
                                    <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">DeepEval:</strong> Unit-testing for LLMs.</li>
                                    <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">Ragas:</strong> Great for testing RAG systems.</li>
                                </ul>
                            </div>

                            <!-- Prompt Management & Evals -->
                            <div class="bg-softgray/20 p-8 rounded-3xl border border-softgray flex flex-col">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                        <i class="ph ph-text-box text-2xl"></i>
                                    </div>
                                    <h3 class="font-bold text-xl">Prompt Testing UIs</h3>
                                </div>
                                <p class="text-primary/70 mb-6 flex-grow leading-relaxed">Tools designed for PMs and QA to easily run side-by-side comparisons of different prompts or models without writing code.</p>
                                <ul class="space-y-3 mt-auto">
                                    <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">Promptfoo:</strong> Fast, open-source grid testing.</li>
                                </ul>
                            </div>

                            <!-- Observability & Tracing -->
                            <div class="bg-softgray/20 p-8 rounded-3xl border border-softgray flex flex-col md:col-span-2">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                        <i class="ph ph-magnifying-glass text-2xl"></i>
                                    </div>
                                    <h3 class="font-bold text-xl">Observability & Tracing</h3>
                                </div>
                                <p class="text-primary/70 mb-6 leading-relaxed">Platforms that track a prompt's entire journey in production so you can debug exactly where an AI chain failed.</p>
                                <div class="grid md:grid-cols-2 gap-4 mt-auto">
                                    <ul class="space-y-3">
                                        <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">LangSmith:</strong> By the creators of LangChain.</li>
                                        <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">Arize Phoenix:</strong> Excellent open-source tracing.</li>
                                    </ul>
                                    <ul class="space-y-3">
                                        <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">Humanloop:</strong> Enterprise-grade platform.</li>
                                        <li class="flex items-center gap-3"><i class="ph ph-arrow-right text-secondary"></i> <strong class="text-primary">TruEra (Snowflake):</strong> Deep analytics.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                `
            },
            {
                id: 'wrapup',
                title: '9. Wrap Up & Next Steps',
                icon: 'ph-flag-checkered',
                content: `
                    <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                        <header class="mb-12 border-b border-softgray pb-6">
                            <span class="text-secondary text-xs font-bold uppercase tracking-widest">Wrap Up</span>
                            <h2 class="text-3xl md:text-4xl font-bold mt-2">Summary & Action Plan</h2>
                            <p class="text-lg text-primary/70 mt-4 leading-relaxed">AI changes how we build, but our end goal remains the same: delivering reliable, valuable products to our users.</p>
                        </header>

                        <!-- 3 Big Takeaways (Open Layout) -->
                        <div class="grid md:grid-cols-3 gap-10 mb-16">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-20 h-20 rounded-full bg-softgray flex items-center justify-center mb-6">
                                    <i class="ph ph-users text-4xl text-secondary"></i>
                                </div>
                                <h4 class="font-bold text-xl mb-3">It's a Team Sport</h4>
                                <p class="text-primary/70 leading-relaxed">Building reliable AI requires diverse perspectives. We must combine our technical knowledge, business goals, and quality standards.</p>
                            </div>
                            <div class="flex flex-col items-center text-center">
                                <div class="w-20 h-20 rounded-full bg-softgray flex items-center justify-center mb-6">
                                    <i class="ph ph-target text-4xl text-secondary"></i>
                                </div>
                                <h4 class="font-bold text-xl mb-3">Start Small</h4>
                                <p class="text-primary/70 leading-relaxed">Don't wait for a perfect testing suite. Start with 10-20 "cannot fail" scenarios right now to establish a baseline.</p>
                            </div>
                            <div class="flex flex-col items-center text-center">
                                <div class="w-20 h-20 rounded-full bg-softgray flex items-center justify-center mb-6">
                                    <i class="ph ph-arrows-clockwise text-4xl text-secondary"></i>
                                </div>
                                <h4 class="font-bold text-xl mb-3">Continuous Loop</h4>
                                <p class="text-primary/70 leading-relaxed">AI degrades and users change. Evaluation is an ongoing lifecycle of discovery, not just a pre-launch testing gate.</p>
                            </div>
                        </div>

                        <!-- Action Plan (Open Layout) -->
                        <div class="pt-8 border-t border-softgray relative">
                            <i class="ph ph-rocket-launch text-9xl text-softgray absolute top-8 right-0 opacity-30 pointer-events-none"></i>
                            
                            <h3 class="text-3xl font-bold mb-10 flex items-center gap-3">
                                <i class="ph ph-check-square-offset text-secondary"></i> How Our Team Can Start Today
                            </h3>
                            
                            <div class="space-y-8 relative z-10 max-w-2xl">
                                <div class="flex items-start gap-6">
                                    <div class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0">PM</div>
                                    <div class="pt-1">
                                        <strong class="block text-xl mb-1">Product Managers & POs</strong>
                                        <p class="text-primary/70 leading-relaxed">Draft the top 10 most critical user scenarios the AI <em>must</em> get right.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-6">
                                    <div class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0">QA</div>
                                    <div class="pt-1">
                                        <strong class="block text-xl mb-1">Quality Assurance</strong>
                                        <p class="text-primary/70 leading-relaxed">Review those 10 scenarios and find the edge cases (What if the user gets angry? What if data is missing?).</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-6">
                                    <div class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0">DEV</div>
                                    <div class="pt-1">
                                        <strong class="block text-xl mb-1">Engineering</strong>
                                        <p class="text-primary/70 leading-relaxed">Set up logging so we can easily review outputs, and automate running these 10 examples against the AI.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-6">
                                    <div class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0">UX</div>
                                    <div class="pt-1">
                                        <strong class="block text-xl mb-1">UX / UI Designers</strong>
                                        <p class="text-primary/70 leading-relaxed">Review the top failure scenarios to design better fallbacks, safety warnings, and user feedback mechanisms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'resources',
                title: '10. Resources & Credits',
                icon: 'ph-books',
                content: `
                    <div class="max-w-4xl mx-auto p-6 md:p-10 fade-in">
                        <header class="mb-12 border-b border-softgray pb-6">
                            <span class="text-secondary text-xs font-bold uppercase tracking-widest">Resources</span>
                            <h2 class="text-3xl md:text-4xl font-bold mt-2">Credits & Further Reading</h2>
                            <p class="text-lg text-primary/70 mt-4 leading-relaxed">This presentation is built upon the foundational knowledge from an open-source guide created for the AI community.</p>
                        </header>

                        <!-- GitHub Reference Card -->
                        <div class="bg-softgray/20 p-8 md:p-12 rounded-3xl border border-softgray flex flex-col items-center text-center">
                            <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-8">
                                <i class="ph ph-github-logo text-4xl"></i>
                            </div>
                            
                            <h3 class="text-2xl font-bold mb-4">"AI Evals for Everyone"</h3>
                            
                            <p class="text-primary/80 mb-8 max-w-2xl leading-relaxed text-lg">
                                The concepts, frameworks, and foundational content presented today are derived from the excellent open-source course created by <strong>Aishwarya Naresh Reganti</strong> and <strong>Kiriti Badam</strong>. 
                                <br><br>
                                It is highly recommended that team members looking to dive deeper into building reference datasets, monitoring strategies, and metric formulation review the original material.
                            </p>
                            
                            <a href="https://github.com/aishwaryanr/awesome-generative-ai-guide/blob/main/free_courses/ai_evals_for_everyone/README.md" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-3 shadow-lg shadow-secondary/20 hover:-translate-y-1">
                                View Full Course on GitHub <i class="ph ph-arrow-square-out font-bold text-xl"></i>
                            </a>
                        </div>
                    </div>
                `
            }
        ];