import produce from 'immer';
import create from 'zustand';

type uiStore = {
  menu: {
    opened: boolean;
    toggleMenu: () => void;
    setMenuOpened: (opened: boolean) => void;
  };
};

export const useUiStore = create<uiStore>((set) => ({
  menu: {
    opened: false,
    toggleMenu: () =>
      set(
        produce<uiStore>((state) => {
          state.menu.opened = !state.menu.opened;
        })
      ),
    setMenuOpened: (opened: boolean) =>
      set(
        produce<uiStore>((state) => {
          state.menu.opened = opened;
        })
      )
  }
}));
