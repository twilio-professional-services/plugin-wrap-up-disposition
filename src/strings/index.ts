import * as Flex from "@twilio/flex-ui";
import { AllStrings } from '../localization/AllStrings';
import customStrings from '../localization/default';

export default (manager: Flex.Manager) => {
  manager.strings = {
    ...customStrings,
    ...manager.strings
  } as AllStrings;
};
