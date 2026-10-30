import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToTeam, removeFromTeam } from "../features/team/teamSlice";

import { setQuery, setType, ALL_TYPES } from "../features/filter/filterSlice";
import { selectFilteredPokemons } from "../features/pokemon/selector";

import { images, typeColors, pokemonTypes } from "../features/pokemon/pokemonData";
import { useGetPokemonsQuery } from "../features/pokemon/pokemonApi";

import { useState } from "react";


function PokemonGame() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.filter.query);
  const type = useAppSelector((state) => state.filter.type);
  const memberIds = useAppSelector((state) => state.pokemonTeam.memberIds);
  const filteredPokemons = useAppSelector(selectFilteredPokemons);
  const teamError = useAppSelector((state) => state.pokemonTeam.error);

  const { data: pokemons = [], isLoading, error } = useGetPokemonsQuery();

  const team = memberIds.flatMap((id) => pokemons.find((p) => p.id === id) ?? []);


  const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);


  return (
    <>
    <div className="flex justify-center items-center">

  <div className="border flex flex-col justify-center w-full min-h-screen max-w-250 bg-gray-800 rounded-lg">

    <div className="flex justify-between">

      <div className="flex ml-4 mr-4 items-center justify-start max-w-300 h-25 gap-5 border border-gray-400 p-2 bg-gray-700 rounded-lg text-white">
        <input value={query} onChange={(e) => dispatch(setQuery(e.target.value))}
         className="border border-gray-400 w-100 h-10 rounded-b-lg" type="text" placeholder="Пошук за назвою" />
        <button onClick={() => setIsTypeMenuOpen((open) => !open)}
         className="border border-gray-400 w-15 h-8 rounded-lg">Тип: {type} </button>

         {isTypeMenuOpen && (
          <ul className="border rounded-lg">
            {[ALL_TYPES, ...pokemonTypes].map((t) => (
              <li className={`w-full text-left px-3 py-1 hover:bg-gray-700
              ${typeColors[t] ?? "text-gray-300"
              } ${t === type ? "font-bold" : ""}`} key={t}>
                <button onClick={() => {
                  dispatch(setType(t));
                  setIsTypeMenuOpen(false);
                }} className={`w-full text-left px-3 py-1 hover:bg-gray-700 ${typeColors[t] ?? "text-gray-300"} ${t === type ? "font-bold" : ""}`}>{t}</button>
              </li>
            ))}
          </ul>
         )}
      </div>

      <div className="border w-full h-screen max-w-75 max-h-50 text-white border-gray-400 bg-gray-700 flex justify-center items-center flex-col">
          <h1>Моя команда</h1>
          {Array.from({ length: 6}, (_, i) => {
            const member = team[i];
            return (
              <div key={i} className="flex justify-between items-center px-2 w-full h-8 border border-gray-400">
                {member ? (
                  <>
                  <span>{member.name}</span>
                  <button onClick={() => dispatch(removeFromTeam(member.id))}>x</button>
                  </>
          ): (
            <span className="w-full text-center text-gray-400">////</span>
          )}
           </div>
            );
          })}
          
      </div>
          
    </div>
        {teamError && <p className="text-red-400 text-center mt-4">{teamError}</p>}
        {isLoading && <p className="text-white">Завантаження...</p>}
        {error && <p className="text-red-400">Не вдалося завантажити покемонів. Чи запущений бекенд?</p>}
        <div className="grid grid-cols-3 gap-3 mt-10">
          {filteredPokemons.length === 0 && (
            <p className="col-span-3 text-center text-gray-400">Нічого не знайдено</p>
          )}
          
          {filteredPokemons.map((p) => {
            const inTeam = memberIds.includes(p.id);

            return (
              <div key={p.id}
              className="border rounded-lg border-gray-400 bg-gray-700 flex flex-col items-center h-60 text-white">
              <img className="size-35 object-contain" src={images[p.id]} alt={p.name} />
              <div className="font-bold mt-2" >{p.name}</div>
              <p className="text-gray-400">{p.type}</p>
              <button onClick={() => dispatch(addToTeam(p.id))}
               className="border border-gray-400 bg-gray-800 w-full rounded-lg">{inTeam ? "У команді" : "Додати"}
               </button>
            </div>
            );
          })}
        </div>

      </div>
    </div>
    </>
  )
}

export default PokemonGame;