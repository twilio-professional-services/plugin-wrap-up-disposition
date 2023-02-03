
import React, { useEffect, useState } from 'react';
import { ITask, Actions, withTaskContext, withTheme, Icon, TaskHelper, Manager } from '@twilio/flex-ui';
import { Theme } from '@twilio-paste/core/theme';
import { Button, Input, Flex, Box, Label, Heading, Table, THead, TBody, Th, Tr, Td, Select, Option, Checkbox, RadioGroup, Radio } from "@twilio-paste/core";
import { PLUGIN_NAME } from '../../utils/constants';
import { StringTemplates, outcomes, topics } from  '../../strings/WrapUpFormStrings';


const language = "en-US";

interface ComponentProps {
  task: ITask,
  strings: { [index:string] : string }
}

const TaskWrapUpForm = ({ task, strings }: ComponentProps) => {
  const [changed, setChanged] = useState(false);
  const [reason, setReason] = useState('');
  const [topic, setTopic] = useState('');
  const [outcome, setOutcome] = useState('');
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [fraudAlert, setFraudAlert] = useState('');

  //console.log(PLUGIN_NAME, 'strings:', strings);

  //Init state from task attributes on initial mount ONLY
  useEffect(() => {
    console.log(PLUGIN_NAME, 'useEffect to update state from task:', task);
    if (task) {
      setReason(task.attributes?.conversations?.content || '');
      setTopic(task.attributes?.conversations?.initiative || '');
      setOutcome(task.attributes?.conversations?.outcome || '');
      setIsNewCustomer(task.attributes?.conversations?.conversation_attribute_6 || false);
    }
    //No return cleanup function
  }, [task])



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
    setChanged(true);
    setOutcome(value);
  }

  //Capture topic (type of request)
  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setChanged(true);
    setTopic(value);
  }

  //Checkbox change
  const onNewCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChanged(true);
    setIsNewCustomer(event.target.checked);
  }

  const saveForm = async () => {
    let convData = {
      initiative: topic,
      outcome,
      content: reason,
      conversation_attribute_6: isNewCustomer
    };
    let newTaskAttr = { conversations: convData };
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
                <Label htmlFor="reason">{strings[StringTemplates.WrapUpReason]}</Label>
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
                <Label htmlFor="topic">{strings[StringTemplates.WrapUpTopic]}</Label>
              </Th>
              <Td>
                <Select
                  value={topic}
                  onChange={handleTopicChange}
                  id="topic"
                >
                  <Option value="none" disabled>{strings[StringTemplates.WrapUpSelectTopic]}</Option>
                  {topics.map((topic) => (
                    <Option key={topic.value} value={topic.value}> {topic.labels[language]} </Option>
                  ))}
                </Select>
              </Td>
            </Tr>
            <Tr key='outcome'>
              <Th scope="row">
                <Label htmlFor="outcome" required>{strings[StringTemplates.WrapUpDisposition]}</Label>
              </Th>
              <Td>
                <Select
                  value={outcome}
                  onChange={handleOutcomeChange}
                  id="outcome"
                >
                  <Option value="none" disabled>{strings[StringTemplates.WrapUpSelectDisposition]}</Option>
                  {outcomes.map((option) => (
                    <Option key={option.value} value={option.value}> {option.labels[language]} </Option>
                  ))}
                </Select>
              </Td>
            </Tr>
            

            <Tr key='newCustomer'>
              <Th scope="row">
                <Label htmlFor="newCustomer">{strings[StringTemplates.WrapUpNewCustomer]}</Label>
              </Th>
              <Td>
                <Checkbox
                  id="newCustomer"
                  value="customerStatus"
                  name="customerStatus"
                  checked={isNewCustomer}
                  onChange={onNewCustomerChange}
                >
                 Check for New
                </Checkbox>

              </Td>
            </Tr>

            <Tr key='fraudAlert'>
              <Th scope="row">
                <Label htmlFor="fraud">{strings[StringTemplates.WrapUpFraud]}</Label>
              </Th>
              <Td>
                <RadioGroup
                  name="fraud"
                  id="fraud"
                  value={fraudAlert}
                  legend="Select Potential Fraud Status"
                  onChange={newValue => {
                    setFraudAlert(newValue);
                  }}
                  orientation="horizontal"
                >
                  <Radio id="fraud-yes" value="yes" name="fraud-yes"> {strings[StringTemplates.WrapUpFraudYes]} </Radio>
                  <Radio id="fraud-no" value="no" name="fraud-no"> {strings[StringTemplates.WrapUpFraudNo]} </Radio>
                </RadioGroup>
              </Td>
            </Tr>


            <Tr key='button'>
              <Td />
              <Td>
                <Button variant="primary" size="small"
                  id="saveButton"
                  onClick={saveForm}
                  disabled={!changed}
                >
                  Save
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
