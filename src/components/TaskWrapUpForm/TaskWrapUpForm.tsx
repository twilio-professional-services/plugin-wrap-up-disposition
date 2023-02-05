
import React, { useEffect, useState } from 'react';
import {
  ITask,
  Actions,
  withTaskContext,
  withTheme,
  templates,
  Template,
  useFlexSelector
} from '@twilio/flex-ui';
import { Theme } from '@twilio-paste/core/theme';
import { Button, Input, Flex, Label, Table, TBody, Th, Tr, Td, Select, Option, Checkbox } from "@twilio-paste/core";
import { PLUGIN_NAME, Languages } from '../../utils/constants';
import { outcomes, topics } from '../../strings/WrapUpCustomValues';
import { AppState } from 'states';

interface ComponentProps {
  task: ITask
}

const TaskWrapUpForm = ({ task }: ComponentProps) => {
  const [changed, setChanged] = useState(false);
  const [reason, setReason] = useState('');
  const [topic, setTopic] = useState('');
  const [outcome, setOutcome] = useState('');
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [fraudAlert, setFraudAlert] = useState(false);

  // Get current language from worker attributes in Flex AppState
  const language = useFlexSelector((state: AppState) => {
    let workerLanguage = state?.flex?.worker?.attributes?.language || Languages.EN;
    console.log(PLUGIN_NAME, 'language: ', workerLanguage);
    //Todo: Trigger reload all strings
    return (workerLanguage);
  });

  //console.log(PLUGIN_NAME, 'strings:', strings);

  //Init state from task attributes on initial mount ONLY
  useEffect(() => {
    console.log(PLUGIN_NAME, 'useEffect to update state from task:', task);
    if (task) {
      setReason(task.attributes?.conversations?.content || '');
      setTopic(task.attributes?.conversations?.initiative || '');
      setOutcome(task.attributes?.conversations?.outcome || '');
      setIsNewCustomer(task.attributes?.conversations?.conversation_attribute_6 || false);
      setFraudAlert(task.attributes?.conversations?.conversation_attribute_7 || false);
    }
    //No return cleanup function
  }, [task, language])



  //Text field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //Text Field id needs to match State property
    const id = e.target.id;
    setChanged(true);
    switch (id) {
      case 'reason':
        setReason(value);
        break;
    }
  }

  // Save Disposition in the Outcome attribute
  const handleOutcomeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    //console.log(PLUGIN_NAME, 'outcome change:', value );
    setChanged(true);
    setOutcome(value);
  }

  //Capture topic (type of request)
  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    //console.log(PLUGIN_NAME, 'topic change:', value );
    setChanged(true);
    setTopic(value);
  }

  //Checkbox change
  const onNewCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChanged(true);
    setIsNewCustomer(event.target.checked);
  }

  //Checkbox change
  const onFraudChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChanged(true);
    setFraudAlert(event.target.checked);
  }


  const saveForm = async () => {
    let convData = {
      initiative: topic,
      outcome,
      content: reason,
      conversation_attribute_6: isNewCustomer,
      conversation_attribute_7: fraudAlert
    };
    let newTaskAttr = { conversations: convData };
    console.log(PLUGIN_NAME, 'Save Task Attr:', newTaskAttr);
    await Actions.invokeAction("SetTaskAttributes", { sid: task.sid, attributes: newTaskAttr, mergeExisting: true });
    setChanged(false);
  }


  return (
    <Theme.Provider theme="flex">
      <Flex margin='space30' vertical>
        <Table variant="borderless">
          <TBody>
            <Tr key='reason'>
              <Th scope="row">
                <Label htmlFor="reason">
                  <Template source={templates.WrapUpReason} />
                </Label>
              </Th>
              <Td>
                <Input
                  id="reason"
                  type="text"
                  value={reason}
                  onChange={handleChange}
                />
              </Td>
            </Tr>
            <Tr key='topic'>
              <Th scope="row">
                <Label htmlFor="topic">
                  <Template source={templates.WrapUpTopic} />
                </Label>
              </Th>
              <Td>
                <Select
                  value={topic}
                  onChange={handleTopicChange}
                  id="topic"
                >
                  {topics.map((topic) => {
                    if (topic.disabled) {
                      return (<Option disabled key={topic.value} value={topic.value}> {topic.labels[language]} </Option>)
                    } else {
                      return (<Option key={topic.value} value={topic.value}> {topic.labels[language]} </Option>)
                    }
                  })}
                </Select>
              </Td>
            </Tr>
            <Tr key='outcome'>
              <Th scope="row">
                <Label htmlFor="outcome" required>
                  <Template source={templates.WrapUpDisposition} />
                </Label>
              </Th>
              <Td>
                <Select
                  value={outcome}
                  onChange={handleOutcomeChange}
                  id="outcome"
                >
                  {outcomes.map((option) => {
                    if (option.disabled) {
                      return (<Option disabled key={option.value} value={option.value}> {option.labels[language]} </Option>)
                    } else {
                      return (<Option key={option.value} value={option.value}> {option.labels[language]} </Option>)
                    }
                  })}
                </Select>
              </Td>
            </Tr>

            <Tr key='newCustomer'>
              <Td />
              <Td>
                <Checkbox
                  id="newCustomer"
                  value="customerStatus"
                  name="customerStatus"
                  checked={isNewCustomer}
                  onChange={onNewCustomerChange}
                >
                  <Template source={templates.WrapUpNewCustomer} />
                </Checkbox>

              </Td>
            </Tr>

            <Tr key='fraudAlert'>
              <Td />
              <Td>
                <Checkbox
                  id="fraud"
                  value="fraud"
                  name="customerStatus"
                  checked={fraudAlert}
                  onChange={onFraudChange}
                >
                  <Template source={templates.WrapUpFraud} />
                </Checkbox>

              </Td>
            </Tr>

            <Tr key='button'>
              <Td>
                [Lang: {language}]
              </Td>
              <Td>
                <Button variant="primary" size="small"
                  id="saveButton"
                  onClick={saveForm}
                  disabled={!changed}
                >
                  <Template source={templates.Save} />
                </Button>
              </Td>
            </Tr>
          </TBody>
        </Table>
      </Flex>
    </Theme.Provider >
  );
}

export default withTaskContext(withTheme(TaskWrapUpForm));
