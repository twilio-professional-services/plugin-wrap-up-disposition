import { Strings } from "@twilio/flex-ui"

export interface AllStrings<T = string> extends Strings<T> {
  WrapUpReason: T;
  WrapUpTopic: T;
  WrapUpDisposition: T;
  WrapUpFraud: T;
  WrapUpFraudYes: T;
  WrapUpFraudNo: T;
  WrapUpNewCustomer: T;
  WrapUpSelectOutcomeNotification: T;
}
