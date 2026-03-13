export const wrapup = {
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
            };
