import React from 'react';

export default class ArtyomCommandsManager {
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }

    //Exectue the loadCommands
    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["Hello", "Hi"],
                action: (i) => {
                    if(i == 0) {
                        Artyom.say("Hello, how are you?");
                    } else if(i == 1) {
                        Artyom.say('Hi, whats up');
                    }
                }
            },

            {
                indexes: ["How are you?"],
                smart: true,
                action: () => {
                    Artyom.say("I'm fine, thanks for asking !");
                }
            },
            
            {
                indexes: ["Generate reports of * of this year"],
                smart: true,
                action: (i, month) => {
                    let year = new Date().getFullYear();
                    
                    Artyom.say(`Generating reports of ${month} ${year} `);

                    Artyom.say("Ready ! What were you expecting? write some code you lazy bear !");
                }
            },
        ]);
    }
}

        

