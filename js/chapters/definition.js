export const definition = {
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
    };
