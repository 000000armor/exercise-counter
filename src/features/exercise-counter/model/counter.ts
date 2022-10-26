import { createEffect, createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

const $step = createStore(10);
const $counter = createStore(0);

persist({ store: $step, key: 'step' });
persist({ store: $counter, key: 'counter' });

const increaseButtonClicked = createEvent();
const decreaseButtonClicked = createEvent();
const stepSelected = createEvent<string>();
const resetButtonClicked = createEvent();

const increaseCounterFx = createEffect<number, number>((step) => step);
const decreaseCounterFx = createEffect<number, number>((step) => step);

sample({
  source: $step,
  target: increaseCounterFx,
  clock: increaseButtonClicked,
});

sample({
  source: { step: $step, counter: $counter },
  target: decreaseCounterFx,
  fn: ({ step }) => step,
  filter: ({ counter, step }) => {
    return counter - step >= 0;
  },
  clock: decreaseButtonClicked,
});

$counter
  .on(increaseCounterFx.doneData, (prev, payload) => prev + payload)
  .on(decreaseCounterFx.doneData, (prev, payload) => prev - payload)
  .reset(resetButtonClicked);

$step.on(stepSelected, (_, payload) => +payload);

export {
  $step,
  $counter,
  increaseButtonClicked,
  decreaseButtonClicked,
  stepSelected,
  resetButtonClicked,
};
