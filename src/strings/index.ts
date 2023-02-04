import * as Flex from "@twilio/flex-ui";
import { AllStrings } from '../localization/AllStrings';
import customStrings from '../localization/default';
import spanishStrings from '../localization/es-MX';
import { Languages } from '../utils/constants';

//Need to load the correct set of custom language strings based on language

export default (manager: Flex.Manager, language: string) => {
  if (language == Languages.ES) {
    manager.strings = {
      ...spanishStrings,
      ...manager.strings
    } as AllStrings;

  } else {
    manager.strings = {
      ...customStrings,
      ...manager.strings
    } as AllStrings;
  }
};
