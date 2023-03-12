export const PLUGIN_NAME = 'WrapUpForm';

export enum StringTemplates {
  WrapUpReason = "WrapUpReason",
  WrapUpTopic = "WrapUpTopic",
  WrapUpDisposition = "WrapUpDisposition",
  WrapUpFraud = "WrapUpFraud",
  WrapUpNewCustomer = "WrapUpNewCustomer",
  WrapUpSelectOutcomeNotification = "WrapUpSelectOutcomeNotification"
}

export enum Languages {
  EN = "en-US",
  ES = "es-MX"
}

export enum CustomerStatus {
  NEW = "New Customer",
  EXISTING = "Existing Customer"
}

export enum FraudStatus {
  NO = "No Fraud",
  MAYBE = "Possible Fraud",
}