import { createEffect, createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

interface ScoresType {
  [key: string]: { counter: number; goal: string };
}

const currentDate = new Date().toLocaleString().split(',')[0];

const $step = createStore(10);
const $counter = createStore(0);
const $goal = createStore('50');

const $scores = createStore<ScoresType>({});

persist({ store: $step, key: 'step' });
persist({ store: $counter, key: 'counter' });
persist({ store: $scores, key: 'scores' });

const increaseButtonClicked = createEvent();
const decreaseButtonClicked = createEvent();
const stepSelected = createEvent<string>();
const resetButtonClicked = createEvent();
const goalChanged = createEvent<string>();
const counterPageMounted = createEvent();
const goalFieldBlurred = createEvent();

const increaseCounterFx = createEffect<number, number>((step) => step);
const decreaseCounterFx = createEffect<number, number>((step) => step);

const updateScoresField = createEffect<
  { goal: string; counter: number },
  { goal: string; counter: number }
>((payload) => payload);

sample({
  source: { goal: $goal, counter: $counter },
  target: updateScoresField,
  clock: [
    counterPageMounted,
    increaseCounterFx.doneData,
    decreaseCounterFx.doneData,
    goalChanged,
  ],
});

sample({
  source: $step,
  target: increaseCounterFx,
  clock: increaseButtonClicked,
});

sample({
  source: { step: $step, counter: $counter },
  target: decreaseCounterFx,
  fn: ({ step }) => step,
  filter: ({ counter, step }) => counter - step >= 0,
  clock: decreaseButtonClicked,
});

$counter
  .on(increaseCounterFx.doneData, (prev, payload) => prev + payload)
  .on(decreaseCounterFx.doneData, (prev, payload) => prev - payload)
  .reset(resetButtonClicked);

$step.on(stepSelected, (_, payload) => +payload);

$goal.on(goalChanged, (_, payload) => payload).reset(goalFieldBlurred);

$scores.on(updateScoresField.doneData, (store, payload) => ({
  ...store,
  [currentDate]: payload,
}));

export {
  $step,
  $counter,
  $goal,
  increaseButtonClicked,
  decreaseButtonClicked,
  stepSelected,
  resetButtonClicked,
  goalChanged,
  counterPageMounted,
  goalFieldBlurred,
};
