import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { WorkerAttributes } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import ConfigureFlexStrings from './strings'
import CustomizeFlexComponents from './components';
import CustomActions from './actions';
import RegisterNotifications from "./notifications";
import { PLUGIN_NAME, Languages } from './utils/constants';

export default class WrapUpDispositionPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const defaultLanguage = Languages.EN;
    const workerAttributes = manager.workerClient?.attributes as WorkerAttributes;
    const language: string = workerAttributes?.language || defaultLanguage;

    ConfigureFlexStrings(manager, language);
    CustomizeFlexComponents(manager, language);
    CustomActions(manager);
    RegisterNotifications(manager);

  }
}
