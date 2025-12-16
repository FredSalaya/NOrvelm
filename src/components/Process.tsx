import { motion } from 'framer-motion';
import { ClipboardCheck, FileSearch, FileCheck2 } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            id: 1,
            title: "Evaluación",
            description: "Evaluación de riesgos y solvencia del solicitante.",
            icon: <ClipboardCheck className="w-10 h-10 text-white" />,
        },
        {
            id: 2,
            title: "Estudio",
            description: "Estudio de los términos y condiciones del contrato a garantizar.",
            icon: <FileSearch className="w-10 h-10 text-white" />,
        },
        {
            id: 3,
            title: "Emisión",
            description: "Emisión del documento de fianza por la entidad fiadora.",
            icon: <FileCheck2 className="w-10 h-10 text-white" />,
        }
    ];

    return (
        <section id="proceso" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
                        Proceso de Obtención
                    </h2>
                    <p className="mt-4 text-xl text-blue-200">
                        Simplificamos el camino para asegurar tu proyecto.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mb-6 ring-4 ring-slate-900">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-blue-200 max-w-xs">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
