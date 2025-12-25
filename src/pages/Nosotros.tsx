import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, CheckCircle, Shield } from 'lucide-react';

const Nosotros = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const values = [
        {
            icon: <Target className="w-12 h-12 text-white" />,
            title: "Misión",
            description: "Proveer soluciones integrales en fianzas y seguros que brinden seguridad financiera y paz mental a nuestros clientes, facilitando el desarrollo de sus proyectos con agilidad y solidez.",
            color: "bg-blue-600"
        },
        {
            icon: <Eye className="w-12 h-12 text-white" />,
            title: "Visión",
            description: "Ser el referente líder en el sector afianzador y asegurador, reconocidos por nuestra innovación, excelencia en el servicio y el compromiso inquebrantable con el éxito de nuestros socios comerciales.",
            color: "bg-[#008C9E]"
        },
        {
            icon: <Heart className="w-12 h-12 text-white" />,
            title: "Valores",
            description: "Integridad, Honestidad, Compromiso, Responsabilidad y Pasión por el servicio son los pilares que sostienen cada una de nuestras relaciones y operaciones.",
            color: "bg-indigo-600"
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h1
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={fadeIn.transition}
                            className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                        >
                            <span className="block text-blue-600 mb-2">Más que una empresa,</span>
                            tu aliado estratégico
                        </motion.h1>
                        <motion.p
                            initial={{ ...fadeIn.initial, transition: { delay: 0.2 } }}
                            animate={{ ...fadeIn.animate, transition: { delay: 0.2 } }}
                            className="mt-6 text-xl text-gray-500 leading-relaxed"
                        >
                            En Norvelm, combinamos experiencia y pasión para proteger lo que más te importa. Somos un equipo de profesionales dedicados a construir relaciones de largo plazo basadas en la confianza y resultados.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Values Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 ${item.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                <div className="h-full p-8 bg-white border border-gray-100 rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                    <div className={`p-4 ${item.color} rounded-full shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">¿Por qué elegir Norvelm?</h2>
                            <p className="text-lg text-gray-500 mb-8">
                                Nos distinguimos por nuestra capacidad de respuesta y entendimiento profundo de las necesidades de nuestros clientes.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { text: "Atención personalizada 24/7", icon: Users },
                                    { text: "Respuesta ágil y eficiente", icon: CheckCircle },
                                    { text: "Soluciones a medida de tu negocio", icon: Shield }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                                                <feature.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-lg font-medium text-gray-900">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-10 lg:mt-0 relative"
                        >
                            {/* Decorative image placeholder */}
                            <div className="aspect-w-16 aspect-h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl p-1 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white w-full h-full rounded-xl flex items-center justify-center overflow-hidden">
                                    <div className="text-center p-10">
                                        <Shield className="w-32 h-32 text-blue-100 mx-auto mb-4" />
                                        <p className="text-gray-400 font-medium tracking-widest uppercase">Compromiso Total</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-8">¿Listo para trabajar juntos?</h2>
                    <a
                        href="#contacto" // Linking to contact section which will be handled by Navbar/App
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
                    >
                        Contáctanos ahora
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Nosotros;
