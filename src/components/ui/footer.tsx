
const Footer = () => {
    return (
      <footer className="flex justify-between bottom-0 bg-card-foreground px-20 py-5">
        <div>
            <div className="flex">
                <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-primary mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M96 0V47L48 94H0V47L48 0H96Z"></path></svg>
                <h1 className="text-primary-foreground">Écurie Antonnière</h1>
            </div>
            <h2 className="text-muted">Écurie Antonnière - Vente de chevaux d'exception</h2>
        </div>

        <div className="flex">
            <div className="mr-16">
                <h2 className="text-xl text-primary-foreground">Navigation</h2>
                <ul className="text-base text-secondary">
                    <li><a href="/" className="hover:text-primary">Accueil</a></li>
                    <li><a href="/catalogue" className="hover:text-primary">Catalogue</a></li>
                    <li><a href="/a-propos" className="hover:text-primary">A propos</a></li>
                    <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl text-primary-foreground mb-2">Réseaux sociaux</h2>
                <ul className="text-secondary text-base">
                    <div className="flex mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook mr-2 text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        <a href="https://facebook.com" className="hover:text-primary">Facebook</a>{/* changer pour le lien de la page facebook ecurie antonniere */}
                    </div>
                    <div className="flex mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram mr-2 text-primary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <a href="https://instagram.com" className="hover:text-primary">Instagram</a>
                    </div>
                    <div className="flex mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube mr-2 text-primary"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        <a href="https://youtube.com" className="hover:text-primary">YouTube</a>
                    </div>
                </ul>
            </div>
        </div>
        
      </footer>
    );
  };
  
  export default Footer;
  