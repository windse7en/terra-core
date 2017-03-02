/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
/* eslint-enable import/no-extraneous-dependencies */

import AbnormalIcon from '../src/icon/static/abnormal.svg';
import AlertIcon from '../src/icon/static/alert.svg';
import AvailableIcon from '../src/icon/static/available.svg';
import CompleteIcon from '../src/icon/static/complete.svg';
import CriticalIcon from '../src/icon/static/critical.svg';
import DeviceAlertIcon from '../src/icon/static/deviceAlert.svg';
import DeviceCheckIcon from '../src/icon/static/deviceCheck.svg';
import DiamondIcon from '../src/icon/static/diamond.svg';
import DoNotDisturbIcon from '../src/icon/static/doNotDisturb.svg';
import DueSoonIcon from '../src/icon/static/dueSoon.svg';
import ErrorIcon from '../src/icon/static/error.svg';
import HelpIcon from '../src/icon/static/help.svg';
import HelpinverseIcon from '../src/icon/static/help_inverse.svg';
import HighIcon from '../src/icon/static/high.svg';
import HighPriorityIcon from '../src/icon/static/highPriority.svg';
import InformationIcon from '../src/icon/static/information.svg';
import InformationinverseIcon from '../src/icon/static/information_inverse.svg';
import LowIcon from '../src/icon/static/low.svg';
import MaxIcon from '../src/icon/static/max.svg';
import MinIcon from '../src/icon/static/min.svg';
import OverDueIcon from '../src/icon/static/overDue.svg';
import PharmacyRejectIcon from '../src/icon/static/pharmacyReject.svg';
import ScheduledIcon from '../src/icon/static/scheduled.svg';
import SuccessIcon from '../src/icon/static/success.svg';
import SuccessinverseIcon from '../src/icon/static/success_inverse.svg';
import WarningIcon from '../src/icon/static/warning.svg';

storiesOf('Static Color Icons', module)
  .add('AbnormalIcon', () => <AbnormalIcon />)
  .add('AlertIcon', () => <AlertIcon />)
  .add('AvailableIcon', () => <AvailableIcon />)
  .add('CompleteIcon', () => <CompleteIcon />)
  .add('CriticalIcon', () => <CriticalIcon />)
  .add('DeviceAlertIcon', () => <DeviceAlertIcon />)
  .add('DeviceCheckIcon', () => <DeviceCheckIcon />)
  .add('DiamondIcon', () => <DiamondIcon />)
  .add('DoNotDisturbIcon', () => <DoNotDisturbIcon />)
  .add('DueSoonIcon', () => <DueSoonIcon />)
  .add('ErrorIcon', () => <ErrorIcon />)
  .add('HelpIcon', () => <HelpIcon />)
  .add('HelpinverseIcon', () => <HelpinverseIcon />)
  .add('HighIcon', () => <HighIcon />)
  .add('HighPriorityIcon', () => <HighPriorityIcon />)
  .add('InformationIcon', () => <InformationIcon />)
  .add('InformationinverseIcon', () => <InformationinverseIcon />)
  .add('LowIcon', () => <LowIcon />)
  .add('MaxIcon', () => <MaxIcon />)
  .add('MinIcon', () => <MinIcon />)
  .add('OverDueIcon', () => <OverDueIcon />)
  .add('PharmacyRejectIcon', () => <PharmacyRejectIcon />)
  .add('ScheduledIcon', () => <ScheduledIcon />)
  .add('SuccessIcon', () => <SuccessIcon />)
  .add('SuccessinverseIcon', () => <SuccessinverseIcon />)
  .add('WarningIcon', () => <WarningIcon />)
;
storiesOf('All Static Color Icons', module)
.add('All Static', () => <div><AbnormalIcon /><AlertIcon /><AvailableIcon /><CompleteIcon /><CriticalIcon /><DeviceAlertIcon /><DeviceCheckIcon /><DiamondIcon /><DoNotDisturbIcon /><DueSoonIcon /><ErrorIcon /><HelpIcon /><HelpinverseIcon /><HighIcon /><HighPriorityIcon /><InformationIcon /><InformationinverseIcon /><LowIcon /><MaxIcon /><MinIcon /><OverDueIcon /><PharmacyRejectIcon /><ScheduledIcon /><SuccessIcon /><SuccessinverseIcon /><WarningIcon /></div>);
