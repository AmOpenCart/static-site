document.addEventListener('DOMContentLoaded', function() {
    // Add noindex meta tag for deals section
    const dealsSection = document.querySelector('.deals-grid');
    if (dealsSection) {
        const noindexMeta = document.createElement('meta');
        noindexMeta.name = 'robots';
        noindexMeta.content = 'noindex';
        dealsSection.prepend(noindexMeta);
        
        // Add noindex attribute to all deal cards
        const dealCards = document.querySelectorAll('.deal-card');
        dealCards.forEach(card => {
            card.setAttribute('data-noindex', 'true');
        });
    }
});
