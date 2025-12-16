


const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            src="/logos/SVG/Recurso 4logo_norvelm_isologo.svg"
                            alt="Norvelm Logo"
                            className="h-12 w-auto brightness-0 invert"
                        />
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Norvelm. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
