import * as Flex from "@twilio/flex-ui";
import { Tab, TaskHelper, templates, Template } from "@twilio/flex-ui";
import TaskWrapUpForm from "./TaskWrapUpForm/TaskWrapUpForm";

export default (manager: Flex.Manager, language: string) => {
  addWrapUpFormTab(language);
}

const addWrapUpFormTab = (language: string) => {
  const options: Flex.ContentFragmentProps = { sortOrder: 3 };
  // Add the "Wrap Up" tab
  // label from template does not render ?
  // label={<Template source={templates.WrapUpLabel} />} >
  Flex.TaskCanvasTabs.Content.add(
    <Tab 
      key="wrap-up"
      uniqueName="wrap-up"
      label="Wrap Up" > 
        <TaskWrapUpForm key="wrap-up-form" language={language} />
    </Tab>, 
    options);

    
}
