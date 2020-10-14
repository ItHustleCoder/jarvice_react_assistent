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
                indexes: ["Buongiorno", "Buonasera","Ciao"],
                action: (i) => {
                    // if(i == 0) {
                    //     Artyom.say("Buongiorno, come stai ?");
                    // } else if(i == 1) {
                    //     Artyom.say('Buonasera');
                    // } else if(i == 2) {
                    //     Artyom.say('Buon Pomeriggio');
                    // } else if(i == 3){
                    //     Artyom.say("Caio, come stai?");
                    // }
                    switch(i) {
                        case 0:
                            Artyom.say("Buongiorno, come stai?");
                            break;
                        case 1:
                            Artyom.say("Buonasera, non tardi mai per programmare!");
                            break;
                       
                        case 2:
                            Artyom.say("Ciao!");
                        break;
                    }
                }
                
            },

            {
                indexes: ["come la situazione?", "informazioni per developer"],
                action: (i) => {
                    if( i == 0) {
                        Artyom.say("Tutto bene, sto studiando come diventera più inteligente !");
                    } else if ( i == 0 ) {
                        Artyom.say("Per accedere in questa aria dovresti sapere password ");
                                                
                    }
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

        

