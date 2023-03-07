import people from "../data/recipients.json";
import client from "../config/whatsapp.config";
import api from "../config/chatgpt.config";
import handleMessage from "../controllers/message.controller";
// import { ChatResponse } from "chatgpt";

const sendGreetingText = async () => {
    try {
        for (const person of people) {
            const phone = person.phone + "@c.us";

            // Ask ChatGPT for a greeting based on the recipient's relationship
            let prompt: string;
            // sending messages to my mom
            if (person.relationship === "mother") {
                prompt =
                    "Give me  a sweet good morning text to send my mom. It should be 10 words or less.";
            }

            // sending messages  my Emily
            if (person.relationship === "Emily") {
                prompt =
                    "Give a sweet good morning text to send my girlfriend. It should be 10 words or less.";
            }
            // sending messages to my mentor
            else if (person.relationship === "Mentor_mathilda") {
                prompt =
                    "Give a sweet good morning text to send my dad. It should be 10 words or less.";
            }
            // Get the response from ChatGPT
            const response: any = await new Promise((resolve, reject) => {
                handleMessage(prompt, (err: any, res: any) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(res);
                    }
                });
            });
            // replace all quotation marks with nothing
            //   const message = response.response.replace(/"/g, "");

            // Send the greeting to the recipient
            client.sendMessage(phone, response);
        }
    } catch (err) {
        console.log(err);
    }
};

export default sendGreetingText;
