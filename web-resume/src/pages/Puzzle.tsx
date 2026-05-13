import PageHeader from "../components/layout/PageHeader";
import PageLayout from "../components/layout/PageLayout";
import MemoryGame from "../components/game/MemoryGame";

function Puzzle () {
    return(
        <PageLayout className="max-w-3xl">
            <PageHeader
                title="Memory Game"
                description="Flip cards in pairs, remember their positions, and clear the board by matching every number."
                eyebrow="Puzzle"
            />

            <MemoryGame />
        </PageLayout>
    );
};

export default Puzzle;
