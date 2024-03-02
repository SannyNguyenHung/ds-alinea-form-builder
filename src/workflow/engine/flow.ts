// import { BranchedStep } from 'sequential-workflow-model';
// import { createForkActivity, interrupt, branchName } from 'sequential-workflow-machine';
// import { FlowStep } from './model';

// interface MyGlobalState {
// }

// interface MyActivityState {
// }

// const flowActivity = createForkActivity<FlowStep>('flowStep', {
//   init: () => {
//     return {}; // Initial activity state
//   },
//   handler: async (step: FlowStep, globalState: MyGlobalState, activityState: MyActivityState) => {

//     if (globalState.temperature < 0) {
//       return interrupt();
//     }
//     if (globalState.temperature > 10) {
//       return branchName('true');
//     }
//     return branchName('false');
//   }
// });
