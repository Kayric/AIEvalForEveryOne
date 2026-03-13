export const process = {
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
    };
