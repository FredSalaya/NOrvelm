import { Mail, Phone, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl mb-4">
                                Hablemos de tu Seguridad
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Contáctanos para recibir asesoría personalizada. Misael Ventura y su equipo están listos para ayudarte.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <Phone />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">Teléfono / WhatsApp</h4>
                                    <p className="mt-1 text-gray-600">993 116 54 96</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <Mail />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                                    <a href="mailto:ventura.misael@hotmail.com" className="mt-1 text-blue-600 hover:text-blue-800 block">
                                        ventura.misael@hotmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <Instagram />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">Síguenos</h4>
                                    <a href="https://instagram.com/norvelm_" target="_blank" rel="noopener noreferrer" className="mt-1 text-blue-600 hover:text-blue-800 block">
                                        @norvelm_
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white" placeholder="tu@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
