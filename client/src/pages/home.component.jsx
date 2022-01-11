import React, { Component } from "react";
import axios from "axios";
import FormInput from "../components/form-input/form-input.component";
import CustomButton from "../components/custom-button/custom-button.component";
import DisplayArmy from "../components/display-army/display-army.component";

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            totalArmy: 0,
            result: null,
            disable: false,
            error: null
        }
    }

    handleChange = event => {
        this.setState({ totalArmy: event.target.value });
    }

    handleSubmit = async event => {
        try {
            this.setState({ disable: true });
            this.setState({ error: null });
            event.preventDefault(0);
            const result = await axios.get(`http://localhost:4000/api/armies/${this.state.totalArmy}`);
            this.setState({ result: result.data });
            this.setState({ disable: false });
        } catch (error) {
            console.log(error.response.data.message);
            this.setState({ error: error.response.data.message });
            this.setState({ disable: false });
        }

    }
    render() {
        return (
            <div className="container mx-auto font-sans py-24">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <h1 className="text-5xl leading-normal font-semibold text-gray-800 tracking-tight mb-12">If you want to attack <br /> another castle, you need <br /> to create an army</h1>
                        <form onSubmit={this.handleSubmit} className="grid grid-cols-4 gap-4">
                            <FormInput 
                            type="number" 
                            placeholder="Total army" 
                            required 
                            handleChange={this.handleChange} 
                            hasError={this.state.error} />

                            <CustomButton type="submit" disabled={this.state.disable} value="Make Army" />
                        </form>
                        {this.state.error ?
                            <div class="text-red-700 px-4 pb-3 rounded relative text-xs mt-1" role="alert">
                                <strong class="font-bold">Opps!</strong>
                                <span class="block sm:inline">{this.state.error}.</span>
                        
                            </div>
                            : ''}
                    </div>
                    <img src="images/header-img.png" alt="" className="col-md-7 drop-shadow-2xl" />
                </div>
                <DisplayArmy {...this.state.result} />
            </div>
        )
    }
}