const Navbar=({username,scores})=>{

    return(
        <div className="nav">
            <div>
                <h1>The Exploding Kitten Game</h1>
            </div>
            <div>
                <p>
                    Player:{username}
                </p>
                <p>
                    Scores :{scores}
                </p>
            </div>
        </div>
    )

}
 export default Navbar;