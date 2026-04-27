import { Home } from "lucide-react";
import { motion } from "framer-motion";

function NotFound() {
    return (
        <div className="flex min-h-screen justify-center items-center text-center flex-col gap-2 dark:bg-slate-950">
            <h1 className="dark:text-slate-50 text-slate-950 text-7xl italic font-bold">Error 404</h1>
            <p className="dark:text-slate-400">Deze pagina bestaat niet.</p>
            <motion.a
                href="/"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center gap-2 border dark:border-slate-50 dark:text-slate-950 dark:bg-slate-50 px-4 py-2 rounded-sm"
            >
                Home pagina <Home />
            </motion.a>
        </div>
    );
}

export default NotFound;
