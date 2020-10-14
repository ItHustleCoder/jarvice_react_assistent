import React from 'react';

export default class ArtyomCommandsManager {
    constructor(ArtyomInstance) {
        this._artyom = ArtyomInstance;
    }

    //Exectue the loadCommands
    lodaCommands() {
        let Artyom = this._artyom;

    //Here we load all our command 
        return Artyom.addCommands([
            {
                indexes: ["Hello , Hi"],
                action: () => {
                    Artyom.say("Hello how are you");
                }
            },

            {
                indexes:[/How are you/, /Regular expressions supported/],
                smart: true,
                action: () => {
                    Artyom.say("I'm fine, thanks for asking");
                },

             },
            
             {
                 indexes:["Generate reports of * of this year"],
                 smart: true,
                 action: (i, month) => {
                     let year = new Date().getFullYear();
                     Artyom.say(`Generating reports of ${month} ${year}`);
                     Artyom.say("Ready! What are you expecting? write some code you lazy bear ");
                 }
             },

        


        ]);


    }


}