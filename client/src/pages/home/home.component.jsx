import React, { Component } from "react";

import "./home.style.scss";

export class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container mx-auto font-sans py-24">
                <div className="grid grid-cols-2 items-center">
                    <div className="space-y-12">
                        <h1 className="text-5xl leading-normal font-semibold text-gray-800">If you want to attack <br /> another castle, you need <br /> to create an army</h1>
                        <div className="grid grid-cols-4 gap-4">
                            <input type="number" placeholder="167" className="border border-gray-400 rounded-full px-6 py-3 w-full col-span-2" />
                            <button className="block bg-teal-600 text-white rounded-full cursor-pointer hover:bg-teal-700 duration-200 transition-all">Generate Army</button>
                        </div>
                    </div>
                    <img src="header-img.png" alt="" className="col-md-7" />
                </div>
            </div>
        )
    }
}