import React, { Component } from 'react';
import Artyom from 'artyom.js';
import ArtyomCommandsManager from './ArtyomCommands';
import './App.css';

const Jarvis = new Artyom();

export default class App extends Component {
    constructor(props, context) {
        super();
        
        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);
        this.speakText = this.speakText.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);


        //Prepare simple state 
        this.state = {
            artyomActive: false,
            textareaValue: "",
            artyomIsReading: false
        };

        //Load some commands to Artyom using command manager 

        let CommandsManager = new ArtyomCommandsManager(Jarvis);
        CommandsManager.lodaCommands();

    }

    startAssistant() {
        let _this = this;

        console.log("Artyom succesfully started!");
        
        Jarvis.initialize ({
            lang: "en-GB",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true
        }).then(() => {
            //Display Load commands in console
            console.log(Jarvis.getAvailableCommands());
            Jarvis.say("Hello there, how are you ?");

            _this.setState({
                artyomActive: true
            });
        
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen !", err);
        });
    
    }

    stopAssistant() {
        let _this = this;

        Jarvis.fatality().then(() => {
            console.log('Jarvis has been succesfully stoped');
            _this.setState({
                artyomActive: false,
            });
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen !", err);
            _this.setState({
                artyomActive: false
            });
        });
    }

    speakText() {
        let _this = this;

        _this.setState({
            artyomIsReading: true
        });

        //Speak text with Artyom
        Jarvis.say(_this.state.textareaValue, {
            onEnd() {
                _this.setState({
                    artyomIsReading: false
                });
            }
        });
    }


    handleTextareaChange(event) {
        this.setState({
            textareaValue: event.target.value
        });
    }

    render() {
        return (
            <div className="header"> 
                <div className="header-title">
                    <h1>Wellcome to Jarvis Assistent</h1>
                    <p>In this very basic assistant, you can say hello and ask for some reports e.g `Generate report of April of this year`</p>
                </div>
                {/* Voice action with button */}
                <div className="btn-container">
                <input type="button"
                       value="Start Jarvice"
                       disabled={this.state.artyomActive}
                        onClick={this.startAssistant}
                        className="btn-response"
                />

                  
                <input type="button"
                       value="Stop Jarvice"
                       disabled={this.state.artyomActive}
                       onClick={this.stopAssistant}
                       className="btn-response"

                />

                </div>

             

                {/* Speech synthessis Area */}
            <div className="textarea-container">
                <p>I can read some text for you if you want :</p>
                <textarea className="area-position" rows="5" onChange={this.handleTextareaChange} value={this.state.textareaValue}/>
                 {/* Read text inside this textarea with Jarviser */}
                 <input type="button"
                       value="Read Text"
                       disabled={this.state.artyomIsReading}
                       onClick={this.speakText}
                        className="btn-read-text"
                />
                       
            </div>

            </div>
        )
    }

}