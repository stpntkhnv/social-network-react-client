import React, {useEffect} from "react";

const Main_page = () =>{
    useEffect(() => {
        let line = document.querySelector('.line');
        let sriders = document.querySelectorAll('.slide');
        let sliderWidth = document.querySelector('.slider');

        console.log(sliderWidth);
    }, []);
    return(
        <div className="main-content">
            <div className="slider">
                <div className="line">
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
            </div>
            <div className="content">
                <div className="text-content">
                    <div className="main-inst">
                        <a href="#">@yevgeniyfoto</a>
                    </div>
                    <div className="main-text">
                        <h1>lorem ipsun dolor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main_page