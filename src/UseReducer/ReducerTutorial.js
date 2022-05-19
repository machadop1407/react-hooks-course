import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const stats_calculator = (hero_stats, action) => {
  switch (action.type) {
    case "INIT_HERO":
      return {
        hp: Math.floor(Math.random() * 100),
        stamina: Math.floor(Math.random() * 10),
        strength: Math.floor(Math.random() * 10),
        agility: Math.floor(Math.random() * 10),
        intelligence: Math.floor(Math.random() * 10) 
      };
      break;
    case "APPLY_DAMAGE":
      return {
        hp: hero_stats.hp - Math.floor(Math.random() * 5),
        stamina: hero_stats.stamina - Math.floor(Math.random() * 3),
        strength: hero_stats.strength,
        agility: hero_stats.agility,
        intelligence: hero_stats.intelligence
      };
      break;
    default:
      return hero_stats;
  }

};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  const [hero_stats, setHeroStats] = useReducer(stats_calculator, {hp:0, stamina:0, strength:0, agility:0, intelligence:0});

  return (
    <div className="card">
      <div className="card-body">
        <h5 class="card-title">Reducer Component</h5>
        <h1>{state.count}</h1>
        <button className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Click Here
        </button>
        {state.showText && <p>This is a text</p>}
        <ul class="list-group">
          <li class="list-group-item">hp {hero_stats.hp}</li>
          <li class="list-group-item">stamina {hero_stats.stamina}</li>
          <li class="list-group-item">strength {hero_stats.strength}</li>
          <li class="list-group-item">agility {hero_stats.agility}</li>
          <li class="list-group-item">intelligence {hero_stats.intelligence}</li>
        </ul>
        <button className="btn btn-success" onClick={() => {setHeroStats({type:"INIT_HERO"})}}>Init Hero</button>
        <button className="btn btn-danger" onClick={() => {setHeroStats({type:"APPLY_DAMAGE"})}}>Apply Damage</button>
      </div>
      
    </div>
  );
};

export default ReducerTutorial;
