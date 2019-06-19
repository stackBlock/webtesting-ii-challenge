import React from 'react';


export default function Dashboard({ strikeBall, foulBall, ballBall, hitBall }) {



    return (
        <div className="dashboard">

            <button onClick={strikeBall}>Strike</button>
            <button onClick={foulBall}>Foul</button>
            <button onClick={ballBall}>Ball</button>
            <button onClick={hitBall}>Hit</button>

        </div>
    );


}