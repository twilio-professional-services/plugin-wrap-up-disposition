import * as Flex from '@twilio/flex-ui';
import {
  Notifications,
  NotificationBar,
  NotificationType,
} from "@twilio/flex-ui";
import { StringTemplates } from '../utils/constants';

export enum NotificationIds {
  SELECT_OUTCOME = 'SelectOutcome'
}


const registerSelectOutcome = (manager: Flex.Manager) => {
  Notifications.registerNotification({
    id: NotificationIds.SELECT_OUTCOME,
    content: StringTemplates.WrapUpSelectOutcomeNotification, 
    closeButton: true,
    timeout: 3000,
    type: NotificationType.warning
  });
};


export default  (manager: Flex.Manager) => {
  registerSelectOutcome(manager);
};


