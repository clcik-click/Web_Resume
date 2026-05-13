import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type CardValue = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";

interface MemoryCard {
  id: string;
  value: CardValue;
}

const cardValues: CardValue[] = ["01", "02", "03", "04", "05", "06", "07", "08"];

const shuffle = (cards: MemoryCard[]) =>
  [...cards].sort(() => Math.random() - 0.5);

const createDeck = () =>
  shuffle(
    cardValues.flatMap((value) => [
      { id: `${value}-a`, value },
      { id: `${value}-b`, value },
    ])
  );

export default function MemoryGame() {
  const [deck, setDeck] = useState<MemoryCard[]>(() => createDeck());
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const matchedCount = matchedIds.length / 2;
  const isComplete = matchedIds.length === deck.length;

  const bestPossible = useMemo(() => cardValues.length, []);

  const resetGame = () => {
    setDeck(createDeck());
    setFlippedIds([]);
    setMatchedIds([]);
    setMoves(0);
  };

  const flipCard = (card: MemoryCard) => {
    if (
      flippedIds.length === 2 ||
      flippedIds.includes(card.id) ||
      matchedIds.includes(card.id)
    ) {
      return;
    }

    const nextFlippedIds = [...flippedIds, card.id];
    setFlippedIds(nextFlippedIds);

    if (nextFlippedIds.length !== 2) return;

    setMoves((current) => current + 1);

    const [firstId, secondId] = nextFlippedIds;
    const firstCard = deck.find((item) => item.id === firstId);
    const secondCard = deck.find((item) => item.id === secondId);

    if (firstCard?.value === secondCard?.value) {
      setMatchedIds((current) => [...current, firstId, secondId]);
      setFlippedIds([]);
      return;
    }

    window.setTimeout(() => {
      setFlippedIds([]);
    }, 850);
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Memory Match</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Flip two cards at a time and match all pairs with the fewest moves.
          </p>
        </div>

        <button
          type="button"
          onClick={resetGame}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-sm sm:grid-cols-4">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
          <p className="font-semibold text-slate-500 dark:text-slate-400">Moves</p>
          <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">{moves}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
          <p className="font-semibold text-slate-500 dark:text-slate-400">Pairs</p>
          <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
            {matchedCount}/{cardValues.length}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950 sm:col-span-2">
          <p className="font-semibold text-slate-500 dark:text-slate-400">Goal</p>
          <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">{bestPossible} moves</p>
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
        >
          Nice work. You cleared the board in {moves} moves.
        </motion.div>
      )}

      <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-4">
        {deck.map((card, index) => {
          const isFaceUp = flippedIds.includes(card.id) || matchedIds.includes(card.id);

          return (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => flipCard(card)}
              disabled={matchedIds.includes(card.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.025 }}
              className="relative aspect-[3/4] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label={isFaceUp ? `Card ${card.value}` : "Hidden card"}
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{ rotateY: isFaceUp ? 180 : 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-lg border border-slate-300 bg-slate-900 text-lg font-bold text-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  ?
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center rounded-lg border border-pink-200 bg-pink-50 text-2xl font-bold text-pink-700 shadow-sm dark:border-pink-900/70 dark:bg-pink-950 dark:text-pink-300"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {card.value}
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
