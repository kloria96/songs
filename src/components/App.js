import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">\
            <dic className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </dic>
        </div>
    );
};

export default App;