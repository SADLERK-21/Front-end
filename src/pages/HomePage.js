function HomePage(){
    return(
        <div className={"HomeMain"}>
            <div className={"LeftText"}>
                <p className={"TopHomeText"}>DIGITAL NOISE</p>
                <p className={"BottomHomeText"}>Psuti eSports</p>
            </div>

            <div className={"RightContext"}>
                <div className={"HomeButtons"}>
                    <div className={"HomeButtonsIN"}>
                        <p className={"HomeButtonsText"}>NEWS</p>
                    </div>
                </div>

                <div className={"HomeButtons"}>
                    <div className={"HomeButtonsIN"}>
                        <p className={"HomeButtonsText"}>STREAMS</p>
                    </div>
                </div>

                <div className={"HomeButtons"}>
                    <div className={"HomeButtonsIN"}>
                        <p className={"HomeButtonsText"}>FORM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;