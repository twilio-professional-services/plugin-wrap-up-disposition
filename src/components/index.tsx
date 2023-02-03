import * as Flex from "@twilio/flex-ui";
import { Tab, TaskHelper } from "@twilio/flex-ui";
import TaskWrapUpForm from "./TaskWrapUpForm/TaskWrapUpForm";

interface IStrings { [index:string] : string };

export default (manager: Flex.Manager) => {
  //Only the modified manager object has all the new strings
  const str: IStrings = { ...manager.strings }
  addWrapUpFormTab(str);
}

const addWrapUpFormTab = (strings: IStrings ) => {
  const options: Flex.ContentFragmentProps = { sortOrder: 3 };
  // Add the "Wrap Up" tab
  Flex.TaskCanvasTabs.Content.add(
    <Tab 
      key="wrap-up"
      uniqueName="wrap-up"
      label="Wrap Up" > 
        <TaskWrapUpForm key="wrap-up-form" strings={strings} />
    </Tab>, 
    options);

    
}
