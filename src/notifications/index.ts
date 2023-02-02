import * as Flex from '@twilio/flex-ui';
import {
  Notifications,
  NotificationBar,
  NotificationType,
} from "@twilio/flex-ui";

export enum NotificationIds {
  SELECT_OUTCOME = 'SelectOutcome'
}

const registerSelectOutcome = (manager: Flex.Manager) => {
  //manager.strings["SelectOutcome"] = 'Please complete the Wrap Up notes and select the Outcome';
  Notifications.registerNotification({
    id: NotificationIds.SELECT_OUTCOME,
    content: "Please complete the Wrap Up notes and select the Outcome", 
    closeButton: true,
    timeout: 3000,
    type: NotificationType.warning
  });
};


export default  (manager: Flex.Manager) => {
  registerSelectOutcome(manager);
};


