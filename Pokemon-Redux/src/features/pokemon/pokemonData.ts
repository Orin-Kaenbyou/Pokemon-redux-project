import Pikachu from "../../assets/Pikachu.png"
import Bulbasaur from "../../assets/Bulbasaur.png"
import Charmander from "../../assets/Charmander.png"
import Squirtle from "../../assets/Squirtle.png"
import Gengar from "../../assets/Gengar.png"
import Snorlax from "../../assets/Snorlax.png"
import Clefairy from "../../assets/Clefairy.png";
import Zubat from "../../assets/Zubat.png";
import Umbreon from "../../assets/Umbreon.png";





export const images: Record<number, string> = {
  1: Pikachu, 2: Bulbasaur, 3: Charmander,
  4: Squirtle, 5: Gengar, 6: Snorlax,
  7: Clefairy, 8: Zubat, 9: Umbreon,
}

export const typeColors: Record<string, string> = {
  Electric: "text-yellow-400",
  Grass: "text-green-400",
  Fire: "text-red-400",
  Water: "text-blue-400",
  Ghost: "text-purple-400",
  Normal: "text-gray-300",
  Fairy: "text-pink-500",
  Poison: "text-purple-950",
  Dark: "text-emerald-950"
}

export const pokemonTypes = ["Electric", "Grass", "Fire", "Water", "Ghost", "Normal", "Fairy", "Poison", "Dark"]