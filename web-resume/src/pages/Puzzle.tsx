import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import MemoryGame from "../components/game/MemoryGame";

function Puzzle () {
    return(
        <PageLayout className="max-w-3xl">
            <section className="mb-10 pb-2">
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400"
                >
                    Puzzle
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
                    className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
                >
                    Memory Game
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
                    className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg"
                >
                    Flip cards in pairs, remember their positions, and clear the board by matching every number.
                </motion.p>
            </section>

            <MemoryGame />
        </PageLayout>
    );
};

export default Puzzle;
