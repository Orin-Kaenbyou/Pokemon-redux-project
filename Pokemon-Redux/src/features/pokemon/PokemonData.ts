import Pikachu from "../../assets/Pikachu.png"
import Bulbasaur from "../../assets/Bulbasaur.png"
import Charmander from "../../assets/Charmander.png"
import Squirtle from "../../assets/Squirtle.png"
import Gengar from "../../assets/Gengar.png"
import Snorlax from "../../assets/Snorlax.png"

export interface Pokemon {
    id: number;
    name: string
    type:string;
    img:string;
}

export const pokemons: Pokemon[] =

[
{id:1, name:"Pikachu", type: "Electric", img: Pikachu},
{id:2, name:"Bulbasaur", type: "Grass", img: Bulbasaur},
{id:3, name:"Charmander", type: "Fire", img: Charmander},
{id:4, name:"Squirtle", type: "Water", img: Squirtle},
{id:5, name:"Gengar", type: "Ghost", img: Gengar},
{id:6, name:"Snorlax", type: "Normal", img: Snorlax},
]

export const typeColors: Record<string, string> = {
    Electric: "text-yellow-400",
    Grass: "text-green-400",
    Fire: "text-red-400",
    Water: "text-blue-400",
    Ghost: "text-purple-400",
    Normal: "text-gray-300",
}

export const pokemonTypes = [...new Set(pokemons.map((p) => p.type))]