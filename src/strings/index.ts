import * as Flex from "@twilio/flex-ui";
import { AllStrings } from '../localization/AllStrings';
import customStrings from '../localization/default';
import spanishStrings from '../localization/es-MX';

//Need to load the correct set of custom language strings based on language

export default (manager: Flex.Manager) => {
  manager.strings = {
    ...customStrings,
    ...manager.strings
  } as AllStrings;
};
