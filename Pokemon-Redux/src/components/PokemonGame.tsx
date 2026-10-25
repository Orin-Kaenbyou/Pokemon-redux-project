import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

import { isSlotEquipped, isSlotEmpty } from "../features/team/teamSlice";

import { pokemons } from "../features/pokemon/pokemonData";


function PokemonGame() {
  const dispatch = useAppDispatch();
  const { name, elementName, isSlotTaken } = useAppSelector(
    (state) => state.pokemonTeam
  )

  return (
    <>
    <div className="flex justify-center items-center">

  <div className="border flex flex-col justify-center w-full h-screen max-w-250 max-h-300 bg-gray-800 rounded-lg">

    <div className="flex justify-between">

      <div className="flex ml-4 mr-4 items-center justify-start max-w-300 h-25 gap-5 border border-gray-400 p-2 bg-gray-700 rounded-lg text-white">
        <input className="border border-gray-400 w-100 h-10 rounded-b-lg" type="text" placeholder="Пошук за назвою" />
        <button className="border border-gray-400 w-15 h-8 rounded-lg">Тип: Усі</button>
      </div>

      <div className="border w-full h-screen max-w-75 max-h-50 text-white border-gray-400 bg-gray-700 flex justify-center items-center flex-col">
          <h1>Моя команда</h1>
          <p className="flex justify-center items-center h-screen w-full  border border-gray-400">////</p>
          <p className="flex justify-center items-center h-screen w-full  border border-gray-400">////</p>
          <p className="flex justify-center items-center h-screen w-full  border border-gray-400">////</p>
          <p className="flex justify-center items-center h-screen w-full  border border-gray-400">////</p>
          <p className="flex justify-center items-center h-screen w-full  border border-gray-400">////</p>
          <p className="flex justify-center items-center h-screen w-full  border border-gray-400">////</p>
      </div>

    </div>

        <div className="grid grid-cols-3 gap-3 mt-10">
          {pokemons.map((p) => (
            <div key={p.id}
            className="border rounded-lg border-gray-400 bg-gray-700 flex flex-col items-center h-60 text-white">
              <img className="size-35 object-contain" src={p.img} alt={p.name} />
              <div className="font-bald mt-2" >{p.name}</div>
              <p className="text-gray-400">{p.type}</p>
              <button className="border border-gray-400 bg-gray-800 w-full rounded-lg">Додати</button>
            </div>
          ))}
          
        </div>

    </div>

    </div>
    </>
  )
}

export default PokemonGame;