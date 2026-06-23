/* eslint-disable @typescript-eslint/no-explicit-any */
export default function getScrollAnimationX() {
  return {
    offscreen: {
      x: -150,
      opacity: 0,
    },
    onscreen: ({ duration = 2, delay }: any = {}) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
        delay: delay,
      },
    }),
  };
}
