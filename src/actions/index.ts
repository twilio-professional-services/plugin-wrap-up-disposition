import * as Flex from '@twilio/flex-ui';
import { Actions, Notifications } from "@twilio/flex-ui";
import { PLUGIN_NAME } from '../utils/constants';
import { NotificationIds } from '../notifications';

export default (manager: Flex.Manager) => {
  
    Actions.addListener("beforeCompleteTask", async (payload, cancelActionInvocation) => {
      //payload = reservation
      console.log(PLUGIN_NAME, "beforeCompleteTask: ", payload);
      if (!payload.task.attributes?.conversations?.outcome) {
        Actions.invokeAction("SetComponentState", { name: "AgentTaskCanvasTabs", state: { selectedTabName: "wrap-up" } });
        Notifications.showNotification(NotificationIds.SELECT_OUTCOME);
        cancelActionInvocation();
      }

    });

}
