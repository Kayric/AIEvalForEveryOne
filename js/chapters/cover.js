export const cover = {
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
    };
