      // Fonction pour mettre à jour l'état actif
      function updateActiveNavItem() {
        // Récupérer le chemin de la page courante
        const currentPath = window.location.pathname;
        
        // Récupérer tous les liens de navigation
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Retirer la classe active de tous les liens
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Vérifier si le href du lien correspond à la page courante
            if (link.getAttribute('href') === currentPath || 
                (currentPath === '/' && link.getAttribute('href') === 'index.html') ||
                (currentPath === '/index.html' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    
        // Gestion spéciale pour les ancres (#)
        const hash = window.location.hash;
        if (hash) {
            const anchorLink = document.querySelector(`a[href="${hash}"]`);
            if (anchorLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                anchorLink.classList.add('active');
            }
        }
    }
    
    // Exécuter au chargement de la page
    document.addEventListener('DOMContentLoaded', updateActiveNavItem);
    
    // Exécuter quand l'URL change (pour les ancres)
    window.addEventListener('hashchange', updateActiveNavItem);
    