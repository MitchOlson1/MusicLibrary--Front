import React from "react";



const SongTable = (props) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Album</td>
                        <td>Artist</td>
                        <td>Genre</td>
                        <td>RealeaseDate</td>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song,i) => (
                        <tr key={i}>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.releaseDate}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
           

        );
}

 
export default SongTable;

