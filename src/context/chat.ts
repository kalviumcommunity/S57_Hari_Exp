import { set } from "zod";
import { create } from "zustand";

type State = {
  userMessage: string[];
};

type Action = {
  userMessageAction: (content: string) => void;
};

export const useChat = create<State & Action>((set) => ({
  userMessage: [],
  userMessageAction: (content) =>
    set((state) => ({
      userMessage: [...state.userMessage, content],
    })),
}));

type AIState = {
  response: string;
};
type AiAction = {
  sender: (content: string) => void;
};
export const aiEditors = create<AIState & AiAction>((set) => ({
  response: "",
  sender: (content) => set({ response: content }),
}));
