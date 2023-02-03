import { connect } from "react-redux";

function Favorites({myFavorites}){
    console.log(myFavorites);

    return (
        <div>
            <h1>Favorites</h1>
            {
                myFavorites?.map((fav) => {
                    return (
                        <div>
                            <h2>{fav.name}</h2>
                            <h2>{fav.gender}</h2>
                            <img src={fav.image} alt={fav.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites);