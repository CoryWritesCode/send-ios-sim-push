import { exec } from "child_process";

export type Message = {}

const defaultMessage: Message = {
  aps: {
    alert: {
      title: "Test",
      body: "This is a default message from the package source.",
    },
  },
};

export function sendSimulatorPushNotification(bundleId: string, message: Message) {
  exec(
    `echo '${JSON.stringify(
      message ?? defaultMessage
    )}' | xcrun simctl push booted ${bundleId} -`,
    function (error) {
      `echo ERROR: ${JSON.stringify(error)}`;
    }
  );
}

module.exports = sendSimulatorPushNotification