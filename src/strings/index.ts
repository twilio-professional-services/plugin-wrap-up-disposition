import * as Flex from "@twilio/flex-ui";
import { Strings } from "@twilio/flex-ui"
import customStrings from './WrapUpFormStrings';

export interface AllStrings<T = string> extends Strings<T> {
  WrapUpReason: T;
  WrapUpTopic: T;
  WrapUpSelectTopic: T;
  WrapUpDisposition: T;
  WrapUpSelectDisposition: T;
  WrapUpFraud: T;
  WrapUpFraudYes: T;
  WrapUpFraudNo: T;
  WrapUpNewCustomer: T;
  WrapUpSelectOutcomeNotification: T;
}


export default (manager: Flex.Manager) => {
  manager.strings = {
    ...customStrings,
    ...manager.strings
  } as AllStrings;
};
