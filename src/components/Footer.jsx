import React from "react";

function Footer() {
  return (
    <footer className="bg-[#13ae67] text-white py-8 w-full mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de PlantHouse</h3>
            <p className="text-sm">
              Pour les passionné-e-s de plantes. Nous sélectionnons les meilleures plantes
              pour votre intérieur et extérieur.
            </p>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>📧 contact@planthouse.com</li>
              <li>📞 01 23 45 67 89</li>
              <li>📍 123 rue des Plantes, Paris</li>
            </ul>
          </div>

          {/* Section Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200 transition">Conditions générales</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">Guide d'entretien</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} PlantHouse - Tous droits réservés 🌱</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
