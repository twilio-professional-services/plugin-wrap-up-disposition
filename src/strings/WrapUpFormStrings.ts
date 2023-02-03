

// Export the template names as an enum for better maintainability when accessing them elsewhere
export enum StringTemplates {
  WrapUpReason = "WrapUpReason",
  WrapUpTopic = "WrapUpTopic",
  WrapUpSelectTopic = "WrapUpSelectTopic",
  WrapUpDisposition = "WrapUpDisposition",
  WrapUpSelectDisposition = "WrapUpSelectDisposition",
  WrapUpFraud = "WrapUpFraud",
  WrapUpFraudYes = "WrapUpFraudYes",
  WrapUpFraudNo = "WrapUpFraudNo",
  WrapUpNewCustomer = "WrapUpNewCustomer",
  WrapUpSelectOutcomeNotification = "WrapUpSelectOutcomeNotification"
}


export default {
    [StringTemplates.WrapUpReason]: "Reason",
    [StringTemplates.WrapUpTopic]: "Topic",
    [StringTemplates.WrapUpSelectTopic]: "SELECT TOPIC",
    [StringTemplates.WrapUpDisposition]: "Disposition",
    [StringTemplates.WrapUpSelectDisposition]: "SELECT DISPOSITION",
    [StringTemplates.WrapUpFraud]: "Fraud Alert",
    [StringTemplates.WrapUpNewCustomer]: "New Customer",
    [StringTemplates.WrapUpFraudYes]: "Yes",
    [StringTemplates.WrapUpFraudNo]: "No",
    [StringTemplates.WrapUpSelectOutcomeNotification]:
      "Please complete the Wrap Up notes and select the Outcome"
};
//////


interface IOutcome {
  value: string,
  labels: { [language: string]: string }
}

export const outcomes: Array<IOutcome> = [
  {
    value: "New Order",
    labels: { "en-US": "New Order" }
  },
  {
    value: "Order Updated",
    labels: { "en-US": "Order Updated" }
  },
  {
    value: "Provided Product details",
    labels: { "en-US": "Provided Product details" }
  },
  {
    value: "Canceled Service",
    labels: { "en-US": "Canceled Service" }
  },
  {
    value: "Changed Service",
    labels: { "en-US": "Changed Service" }
  },
  { 
    value: "Renewed Membership", 
    labels: { "en-US": "Renewed Membership" } 
  },
  { 
    value: "Refund Processed", 
    labels: { "en-US": "Refund Processed" } 
  },
  { 
    value: "Warranty Extended", 
    labels: { "en-US": "Warranty Extended" } 
  }
]


interface ITopic {
  value: string,
  labels: { [language: string]: string }
}

export const topics: Array<ITopic> = [
  {
    value: "Inquiry",
    labels: { "en-US": "Inquiry" }
  },
  {
    value: "Purchase",
    labels: { "en-US": "Purchase" }
  },
  {
    value: "Return",
    labels: { "en-US": "Return" }
  },
  {
    value: "Warranty",
    labels: { "en-US": "Warranty" }
  },
  {
    value: "Membership",
    labels: { "en-US": "Membership" }
  }

]


// Add Spanish, Portugues and German