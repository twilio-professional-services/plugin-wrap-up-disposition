import * as Flex from "@twilio/flex-ui";
import { Tab, TaskHelper } from "@twilio/flex-ui";
import TaskWrapUpForm from "./TaskWrapUpForm/TaskWrapUpForm";


export default (manager: Flex.Manager) => {
  addWrapUpFormTab();
}

const addWrapUpFormTab = () => {
  const options: Flex.ContentFragmentProps = { sortOrder: 3 };
  // Add the "Wrap Up" tab
  Flex.TaskCanvasTabs.Content.add(
    <Tab 
      key="wrap-up"
      uniqueName="wrap-up"
      label="Wrap Up" > 
        <TaskWrapUpForm key="wrap-up-form" />
    </Tab>, 
    options);

    
}
