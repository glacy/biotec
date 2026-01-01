import React from 'react';

const IconCard = ({ icon, title, children, variant = 'info', className = '' }) => {


    // Helper to get classes based on variant
    const getVariantClasses = (v) => {
        switch (v) {
            case 'info': // Blue Left Border
                return {
                    container: 'bg-primary-50 dark:bg-slate-800 border-l-4 border-primary-700 dark:border-sky-500',
                    icon: 'text-primary-800 dark:text-sky-400',
                    title: 'text-primary-800 dark:text-sky-400'
                };
            case 'warning': // Orange Left Border (Standardizing "Errores frecuentes" to this style?)
                // In Sesion 3 "Errores frecuentes" was border-2. Let's see if we can just make it border-2 via a different variant.
                return {
                    container: 'bg-accent-50 dark:bg-orange-900/20 border-l-4 border-accent-500 dark:border-orange-600',
                    icon: 'text-accent-700 dark:text-orange-700',
                    title: 'text-accent-700 dark:text-orange-700'
                };
            case 'outlined-info': // Blue Border-2
                return {
                    container: 'bg-white dark:bg-slate-800 border-2 border-primary-700 dark:border-sky-700 shadow-sm',
                    icon: 'text-primary-800 dark:text-sky-400',
                    title: 'text-primary-800 dark:text-sky-400'
                };
            case 'outlined-warning': // Orange Border-2 (used in "Jerarquia como narrativa", "Evaluacion", "Recursos", "Entregables")
                return {
                    container: 'bg-accent-50 dark:bg-orange-900/20 border-2 border-accent-700 dark:border-orange-600',
                    icon: 'text-accent-700 dark:text-orange-700',
                    title: 'text-accent-700 dark:text-orange-700'
                };
            case 'outlined-clean': // Just border, white bg (used in Frontmatter base/Beneficios session 4)
                // Check Sesion 4: Frontmatter Base is "rounded-lg border-2 border-[#1284BA]" (no bg specified, implies transparent/white?). "bg-white" was used in Sesion 1 cards.
                // Let's assume 'outlined-info' covers this if we accept white bg.
                return {
                    container: 'bg-transparent border-2 border-primary-700 dark:border-sky-700',
                    icon: 'text-primary-800 dark:text-sky-400',
                    title: 'text-primary-800 dark:text-sky-400'
                };
            case 'clean': // No border, transparent bg
                return {
                    container: 'bg-transparent border-0 p-0',
                    icon: 'text-primary-800 dark:text-sky-400',
                    title: 'text-primary-800 dark:text-sky-400'
                };
            default:
                return {
                    container: 'bg-primary-50 dark:bg-slate-800 border-l-4 border-primary-700 dark:border-sky-500',
                    icon: 'text-primary-800 dark:text-sky-400',
                    title: 'text-primary-800 dark:text-sky-400'
                };
        }
    };

    const selectedStyle = getVariantClasses(variant);

    return (
        <div className={`p-5 rounded-lg ${selectedStyle.container} ${className}`}>
            <div className="flex items-center gap-3 mb-3">
                {icon && <i className={`material-icons text-3xl lg:text-4xl ${selectedStyle.icon}`}>{icon}</i>}
                <h3 className={`title-font text-xl lg:text-2xl font-bold ${selectedStyle.title}`}>
                    {title}
                </h3>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-200">
                {children}
            </div>
        </div>
    );
};

export default IconCard;
