import React, { Component } from "react";
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            totalArmy: 0
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault(0);
        console.log(this.state.totalArmy, 'Total Armay');
    }
    render() {
        return (
            <div className="container mx-auto font-sans py-24">
                <div className="grid grid-cols-2 items-center">
                    <div className="space-y-12">
                        <h1 className="text-5xl leading-normal font-semibold text-gray-800">If you want to attack <br /> another castle, you need <br /> to create an army</h1>
                        <form onSubmit={this.handleSubmit} className="grid grid-cols-4 gap-4">
                            <FormInput type="number" required handleChange={this.handleChange} />
                            <CustomButton type="submit"> Make Army </CustomButton>
                        </form>
                    </div>
                    <img src="header-img.png" alt="" className="col-md-7 drop-shadow-2xl" />
                </div>
            </div>
        )
    }
}