import {automate} from "./automation";

// This index can be used to start the automation and  it called in  the server.ts file
const startAutomation = async () => {
    automate.start();

    console.log("automation has began");
};

export default startAutomation;
