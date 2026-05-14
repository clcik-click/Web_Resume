import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type CardValue = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";

interface MemoryCard {
  id: string;
  value: CardValue;
}

interface ConfettiBurst {
  id: number;
  type: "match" | "win";
  x: number;
  y: number;
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
  const [recentMatchedIds, setRecentMatchedIds] = useState<string[]>([]);
  const [bursts, setBursts] = useState<ConfettiBurst[]>([]);
  const [moves, setMoves] = useState(0);

  const matchedCount = matchedIds.length / 2;
  const isComplete = matchedIds.length === deck.length;

  const bestPossible = useMemo(() => cardValues.length, []);

  const resetGame = () => {
    setDeck(createDeck());
    setFlippedIds([]);
    setMatchedIds([]);
    setRecentMatchedIds([]);
    setBursts([]);
    setMoves(0);
  };

  const spawnBurst = useCallback((type: ConfettiBurst["type"], x = 50, y = 50) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setBursts((current) => [...current, { id, type, x, y }]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== id));
    }, type === "win" ? 1900 : 1500);
  }, []);

  const spawnBurstSeries = useCallback((type: ConfettiBurst["type"]) => {
    const waves = type === "win" ? 9 : 3;
    for (let i = 0; i < waves; i += 1) {
      window.setTimeout(() => {
        const spread = type === "win" ? 36 : 18;
        const burstX = 50 + (Math.random() - 0.5) * spread;
        const burstY = 48 + (Math.random() - 0.5) * spread;
        spawnBurst(type, burstX, burstY);
      }, i * (type === "win" ? 140 : 120));
    }
  }, [spawnBurst]);

  useEffect(() => {
    if (!isComplete) return;
    spawnBurstSeries("win");
  }, [isComplete, spawnBurstSeries]);

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
      setRecentMatchedIds([firstId, secondId]);
      setFlippedIds([]);
      spawnBurstSeries("match");
      window.setTimeout(() => setRecentMatchedIds([]), 520);
      return;
    }

    window.setTimeout(() => {
      setFlippedIds([]);
    }, 850);
  };

  return (
    <section className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
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

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {bursts.map((burst) => {
          const pieceCount = burst.type === "win" ? 46 : 22;
          const spread = burst.type === "win" ? 240 : 130;

          return (
            <div key={burst.id} className="absolute" style={{ left: `${burst.x}%`, top: `${burst.y}%` }}>
              {Array.from({ length: pieceCount }).map((_, i) => {
                const angle = (i / pieceCount) * Math.PI * 2;
                const distance = spread * (0.4 + Math.random() * 0.6);
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance - 30;
                const colors = ["#ec4899", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#f43f5e"];
                const color = colors[i % colors.length];
                return (
                  <motion.span
                    key={`${burst.id}-${i}`}
                    className="absolute block rounded-sm"
                    style={{ backgroundColor: color }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                      width: burst.type === "win" ? 10 : 7,
                      height: burst.type === "win" ? 10 : 7,
                    }}
                    animate={{ x, y, opacity: 0, rotate: 420, scale: 0.75 }}
                    transition={{ duration: burst.type === "win" ? 1.55 : 1.15, ease: "easeOut" }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-4">
        {deck.map((card, index) => {
          const isFaceUp = flippedIds.includes(card.id) || matchedIds.includes(card.id);
          const isMatched = matchedIds.includes(card.id);
          const isRecentMatch = recentMatchedIds.includes(card.id);

          return (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => flipCard(card)}
              disabled={matchedIds.includes(card.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.025 }}
              className={`relative aspect-[3/4] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                isFaceUp ? "ring-2 ring-pink-400/70" : ""
              }`}
              aria-label={isFaceUp ? `Card ${card.value}` : "Hidden card"}
              style={{ perspective: "1200px" }}
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{ rotateY: isFaceUp ? 180 : 0 }}
                transition={{ duration: 0.52, ease: [0.22, 0.61, 0.36, 1] }}
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
                  <motion.span
                    className="inline-flex"
                    animate={
                      isRecentMatch
                        ? { scale: [1, 1.1, 1.03], y: [0, -2, 0] }
                        : isMatched
                          ? { scale: 1.02 }
                          : { scale: 1 }
                    }
                    transition={{ duration: isRecentMatch ? 0.45 : 0.2 }}
                  >
                    {card.value}
                  </motion.span>
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
