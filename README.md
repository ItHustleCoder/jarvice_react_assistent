1.  Install Artyom.js
    Artyom.js is an useful wrapper of the speechSynthesis and webkitSpeechRecognition APIs. Besides, it also lets you to add voice commands to your website easily so you can build your own Google Now, Siri or Cortana with predefined voice commands.

    To install this library, switch to the directory of your project with the terminal and install it via NPM executing the following command:

    npm install artyom.js

2.  Create a voice commands loader class
    When working with Artyom.js, the voice commands are very easy to implement. A command is a literal object with at least 2 properties namely indexes and action, where indexes is a simple array with strings that will trigger the command (action) if the spoken text by the user matches any of them.

    Start by creating a new file namely ArtyomCommands.js, here you will add all the commands that you want to add to Artyom. The structure that we'll use to inject the commands within an instance of Artyom will be the following: ArtyomCommands.js

    The helper class ArtyomCommandsManager expects an instance of Artyom as argument in the constructor. The execution of the loadCommands method of the class, will inject the there declared commands in the given instance of Artyom. Note that this is just a scalable approach, as you can add the commands dinamically to artyom wherever you want.

    3.  Creating your basic assistant
        Now that we have some commands to add in Artyom, we can now proceed to initialize it. Using the advantages of the State in React, we are going to create 3 simple properties that we'll handle the status of buttons and actions in our very simple React application. 2 Boolean flags that will notice when artyom is already recognizing commands and spoking and a text variable that stores the text of a textarea where some text can be typed and spoken by Artyom.

        With the context of the following class, Artyom needs to be exposed to the entire class, therefore we have declared a constant named Jarvis that stores an instance of Artyom. Our markup is very simple too, there are 2 simple buttons that starts and stop the command recognition. The actions of this buttons are binded to the startAssistant and stopAssistand methods of the class that will execute some code to start Artyom. As the methods require the this context to update the state, you need to bind it in the constructor method of your main class, where you will inject the commands too with the previous created class. Having made that, the rest of the code is pretty straight forward and easy to read as long as you know React:

            App.js
