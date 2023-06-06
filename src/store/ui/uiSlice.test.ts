import {
  hiddenLoadingStateMock,
  shownLoadingStateMock,
} from "../../mocks/ui/uiMocks";
import { UiStateStructure } from "./types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an current state and a showLoading action", () => {
    test("Then it should return a new state with isLoading set to true", () => {
      const currentUiState: UiStateStructure = hiddenLoadingStateMock;

      const expectedUiState: UiStateStructure = shownLoadingStateMock;

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an current state and a hideLoading action", () => {
    test("Then it should return a new state with isLoading set to false", () => {
      const currentUiState: UiStateStructure = shownLoadingStateMock;

      const expectedUiState: UiStateStructure = hiddenLoadingStateMock;

      const newState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
