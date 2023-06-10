import { UiStateStructure } from "../../store/ui/types";

export const shownSkeletonStateMock: UiStateStructure = {
  showSkeleton: true,
  showSpinner: false,
};

export const hiddenSkeletonStateMock: UiStateStructure = {
  showSkeleton: false,
  showSpinner: false,
};

export const shownSpinnerStateMock: UiStateStructure = {
  showSkeleton: false,
  showSpinner: true,
};

export const hiddenSpinnerStateMock: UiStateStructure = {
  showSkeleton: false,
  showSpinner: false,
};
