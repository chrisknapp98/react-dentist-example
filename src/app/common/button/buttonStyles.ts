export const BUTTON_INTERACTION_CLASS =
  "transition-colors duration-200 ease-out";

export const PRIMARY_BUTTON_CLASS =
  `inline-flex items-center justify-center gap-3 rounded-full border border-practiceRed bg-practiceRed px-6 py-4 text-base font-medium leading-tight text-white ${BUTTON_INTERACTION_CLASS} [@media(hover:hover)]:hover:bg-transparent [@media(hover:hover)]:hover:text-practiceRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed sm:px-8 sm:text-lg`;

export const WHITE_BUTTON_CLASS =
  `inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-6 py-4 text-base font-medium leading-tight text-practiceRed ${BUTTON_INTERACTION_CLASS} [@media(hover:hover)]:hover:bg-transparent [@media(hover:hover)]:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8 sm:text-lg`;
