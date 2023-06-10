import {
  hiddenSkeletonStateMock,
  hiddenSpinnerStateMock,
  shownSkeletonStateMock,
  shownSpinnerStateMock,
} from "../../mocks/ui/uiMocks";
import { UiStateStructure } from "./types";
import {
  hideSkeltonActionCreator,
  hideSpinnerActionCreator,
  showSkeletonActionCreator,
  showSpinnerActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an current state and a showSkeleton action", () => {
    test("Then it should return a new state with showSkeleton set to true", () => {
      const currentUiState: UiStateStructure = hiddenSkeletonStateMock;

      const expectedUiState: UiStateStructure = shownSkeletonStateMock;

      const newState = uiReducer(currentUiState, showSkeletonActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an current state and a hideSkeleton action", () => {
    test("Then it should return a new state with showSkeleton set to false", () => {
      const currentUiState: UiStateStructure = shownSkeletonStateMock;

      const expectedUiState: UiStateStructure = hiddenSkeletonStateMock;

      const newState = uiReducer(currentUiState, hideSkeltonActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an current state and a showSpinner action", () => {
    test("Then it should return a new state with showSpinner set to true", () => {
      const currentUiState: UiStateStructure = hiddenSpinnerStateMock;

      const expectedUiState: UiStateStructure = shownSpinnerStateMock;

      const newState = uiReducer(currentUiState, showSpinnerActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an current state and a hideSpinner action", () => {
    test("Then it should return a new state with showSpinner set to false", () => {
      const currentUiState: UiStateStructure = shownSpinnerStateMock;

      const expectedUiState: UiStateStructure = hiddenSpinnerStateMock;

      const newState = uiReducer(currentUiState, hideSpinnerActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
