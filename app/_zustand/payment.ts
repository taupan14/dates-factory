import { create } from "zustand";

export type State = {
  payment: PaymentMethod[];
  wishQuantity: number;
};

export type Actions = {
  addToWishlist: (product: PaymentMethod) => void;
  removeFromWishlist: (id: string) => void;
  setPayment: (wishlist: PaymentMethod[]) => void;
};

export const useWishlistStore = create<State & Actions>((set) => ({
  payment: [],
  wishQuantity: 0,
  addToWishlist: (product) => {
    set((state) => {
      const productInWishlist = state.payment.find(
        (item) => product.id === item.id
      );

      if (productInWishlist === undefined) {
        return {
          wishlist: [...state.payment, product],
          wishQuantity: state.payment.length,
        };
      } else {
        return {
          wishlist: [...state.payment],
          wishQuantity: state.payment.length,
        };
      }
    });
  },
  removeFromWishlist: (id) => {
    set((state) => {
      const productInWishlist = state.payment.find((item) => id === item.id);

      if (productInWishlist === undefined) {
        return {
          wishlist: [...state.payment],
          wishQuantity: state.payment.length,
        };
      } else {
        const newWishlist = state.payment.filter((item) => item.id !== id);
        return {
          wishlist: [...newWishlist],
          wishQuantity: state.payment.length,
        };
      }
    });
  },
  setPayment: (wishlist: PaymentMethod[]) => {
    set((state) => {
      return { wishlist: [...wishlist], wishQuantity: wishlist.length };
    });
  },
}));
