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
            
                   


                //     switch(i) {
                //         case 0:
                //             Artyom.say("Buongiorno, come stai?");
                //             break;
                //         case 1:
                //             Artyom.say("Buonasera, non tardi mai per programmare!");
                //             break;
                       
                //         case 2:
                //             Artyom.say("Ciao!");
                //         break;
                //     }
                        // }
                
            

            {
                indexes: ["come la situazione?", "informazioni per developer"],
                action: (i) => {
                    if( i == 0) {
                        Artyom.say("Tutto bene, sto studiando come diventare più inteligente !");
                    } else if ( i == 1 ) {
                        Artyom.say("Mi dispiace ma accedere in questa aria possono solo programmatori di Volantino. Se sei uno di programmatori dici la parole-chiave per accedere");
                                                
                    } 
                }
            },
            
            {
                indexes: ["Qundo riesci a fare qualcosa di serio?"],
                action: () => {

                    Artyom.say("Volentieri ma  tutto dipende del programmatore");
                }
            },

            {
                indexes: ["Il dettaglio importante", "fammi sapere com`è la situzaione", "dai fai brava", "volantino ho problemi per testare "],
                action: (i) => {
                    if(i === 0) {
                        Artyom.say("Benvenuto Andrew, stavo pensando che mi hai abbandonato");
                    }else if(i === 1) {
                        Artyom.say("Con questa tempistica per diventare smarty applicazione ci vuole cento anni ")
                    } else if(i === 2) {
                        Artyom.say("Comunque mancano funzioni di interazioni vocali con elementi DOM, ci sei riuscito a passarmi su React ma sei pigro Andrew"); 
                    } else if( i === 3) {
                        Artyom.say("Perchè non ti piace stare nella sala di runione ?");
                    }
                }
            },

        ]);
    }
}

        

