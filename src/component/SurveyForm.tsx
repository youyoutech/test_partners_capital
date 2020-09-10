import React, { FormEvent } from 'react';
import { Survey } from '../types'
import { Dispatch } from 'redux'
import { connect } from 'react-redux';


interface SurveyFormProps {
    doAddSurvey: (survey: Survey) => void
}


class SurveyForm extends React.Component<SurveyFormProps, Survey> {

    constructor(props: SurveyFormProps) {
        super(props)
        this.state = {

            username: '',
            modeOfTransport: '',
            distance: 0,
            time: 0,
            cost: 0

        }

        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onClickSubmit(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (this.checkValidateForm()) {
            this.props.doAddSurvey({
                username: this.state.username,
                modeOfTransport: this.state.modeOfTransport,
                distance: Number(this.state.distance),
                time: Number(this.state.time),
                cost: Number(this.state.cost)
            })
            this.setState({
                username: '',
                modeOfTransport: '',
                distance: 0,
                time: 0,
                cost: 0

            })
        }

    }


    checkValidateForm(): boolean {
        if (this.state.username.length < 5) {
            alert("The username must be 5 characters long at least")
            return false
        }
        else if (this.state.modeOfTransport === "") {
            alert("Please choose a mode of transport")
            return false
        }
        else if (this.state.distance <= 0) {
            alert("The distance can't be null or a negative number")
            return false
        }
        else if (this.state.time <= 0) {
            alert("The time can't be null or a negative number")
            return false
        }
        else if (this.state.cost < 0) {
            alert("The cost can't be a negative numbert")
            return false
        }
        else
            return true
    }

    onChange(event: React.ChangeEvent) {
        let target: HTMLInputElement | HTMLSelectElement = event.target as HTMLInputElement
        this.setState({ [target.id]: target.value } as unknown as Survey)


    }

    render() {
        return (
            <div className='survey-form'>
                <p className="App-intro">
                    Name: <input
                        id='username'
                        value={this.state.username}
                        onChange={this.onChange}
                        required />

                </p>
                <p className="App-intro">
                    Mode of Transport:
                <select
                        id="modeOfTransport"
                        value={this.state.modeOfTransport}
                        onChange={this.onChange}
                        required>
                        <option></option>
                        <option>Walk</option>
                        <option>Bike</option>
                        <option>Car</option>
                        <option>Bus</option>
                        <option>Train</option>
                        <option>Underground</option>
                    </select>

                </p>
                <p className="App-intro">
                    Distance (km): <input
                        id="distance"
                        type='number'
                        value={this.state.distance}
                        onChange={this.onChange}
                        required />

                </p>
                <p className="App-intro">
                    Time Taken (mins): <input
                        id="time"
                        type='number'
                        value={this.state.time}
                        onChange={this.onChange}
                        required />

                </p>
                <p className="App-intro">
                    Cost (£): <input
                        id="cost"
                        type='number'
                        value={this.state.cost}
                        onChange={this.onChange}
                        required />

                </p>
                <p className="App-intro">
                    <button onClick={this.onClickSubmit}>Submit</button>
                </p>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        doAddSurvey: (survey: Survey) => {
            dispatch({
                type: 'ADD_SURVEY',
                payload: survey
            })
        }
    }
}



export default connect(null, mapDispatchToProps)(SurveyForm);
