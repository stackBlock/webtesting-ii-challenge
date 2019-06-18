import React from 'react';


export default function Display({ strike, ball, foul, hit }) {



    return (
        <div className="display">
            <h2>Display Board</h2>
            <h3>
                Strike
          </h3>
            <h3>{strike}</h3>
            <h3>
                Ball
          </h3>
            <h3>{ball}</h3>
            <h3>Foul
        </h3>
            <h3>{foul}</h3>
            <h3>
                Hit
          </h3>
            <h3>{hit}</h3>
        </div>
    );

}