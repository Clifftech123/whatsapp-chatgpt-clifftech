import CronTime from "cron-time-generator";
import cron from "node-cron";
import sendGreetingText from "./message";
const morningTime = CronTime.everyDayAt(6, 0);
const automate = cron.schedule(morningTime, () => {
    sendGreetingText();
});

export {automate};
