
const Footer = () => {
    return (
      <footer className="flex justify-around bottom-0">
        <div>
            <div className="flex">
                <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M96 0V47L48 94H0V47L48 0H96Z"></path></svg>
                <h1>Écurie Antonnière</h1>
            </div>
            <h2>Écurie Antonnière - Vente de chevaux d'exception</h2>
        </div>
        <div>
            <h2>Navigation</h2>
            <ul>
                <li>Accueil</li>
                <li>Catalogue</li>
                <li>A propos</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h2>Socials</h2>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
            </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  