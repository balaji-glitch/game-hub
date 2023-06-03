import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import Gamecard from "./components/Gamecard";
import SkeletonCard from "./components/SkeletonCard";
import GamecardContainer from "./components/GamecardContainer";

const Gamegrid = () => {
  const { game, error, isloading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={"10px"}
      >
        {isloading &&
          skeletons.map((skeletons) => (
            <GamecardContainer>
              <SkeletonCard key={skeletons} />
            </GamecardContainer>
          ))}
        {game.map((data) => (
          <GamecardContainer>
            <Gamecard key={data.id} game={data} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
