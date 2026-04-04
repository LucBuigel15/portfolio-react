import { Home } from "lucide-react";
import { motion } from "framer-motion";

function NotFound() {
    return (
        <div className="flex min-h-screen justify-center items-center text-center flex-col gap-2 dark:bg-zinc-950">
            <h1 className="dark:text-zinc-50 text-zinc-950 text-7xl italic font-bold">Error 404</h1>
            <p className="dark:text-zinc-400">Deze pagina bestaat niet.</p>
            <motion.a
                href="/"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center gap-2 border dark:border-zinc-50 dark:text-zinc-950 dark:bg-zinc-50 px-4 py-2 rounded-sm"
            >
                Home pagina <Home />
            </motion.a>
        </div>
    );
}

export default NotFound;
