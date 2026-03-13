export const tools = {
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
            };
