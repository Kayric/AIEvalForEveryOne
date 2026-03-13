export const modelVsProduct = {
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
    };
