import React from "react";
import { registerIcons } from "@fluentui/react/lib/Styling";

const OptionIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M6 9a2 2 0 011.94 1.5h5.56a.5.5 0 01.09 1H7.94a2 2 0 01-3.88 0H2.5a.5.5 0 01-.09-1H4.06A2 2 0 016 9zm4-6a2 2 0 011.94 1.5h1.56a.5.5 0 01.09 1H11.94a2 2 0 01-3.88 0H2.5a.5.5 0 01-.09-1H8.06A2 2 0 0110 3z"></path>
  </svg>
);

const GlobeLocationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M7.31842 6.5C7.48643 5.62692 7.71458 4.84269 7.98747 4.17997C8.28942 3.44666 8.6363 2.88614 8.99591 2.51675C9.35398 2.14894 9.69311 2 10 2C10.3069 2 10.646 2.14894 11.0041 2.51675C11.3637 2.88614 11.7106 3.44666 12.0125 4.17997C12.2854 4.84269 12.5136 5.62692 12.6816 6.5H7.31842ZM7.06279 3.79922C7.30036 3.22224 7.57693 2.70725 7.89053 2.28104C5.65108 2.89163 3.80285 4.45074 2.80423 6.5H6.3012C6.48315 5.49258 6.74205 4.57814 7.06279 3.79922ZM12.9372 3.79922C12.6996 3.22225 12.4231 2.70725 12.1095 2.28105C14.3489 2.89163 16.1972 4.45074 17.1958 6.5H13.6988C13.5169 5.49258 13.2579 4.57814 12.9372 3.79922ZM13.85 7.5H17.6016C17.8601 8.28655 18 9.12694 18 10C18 10.0301 17.9998 10.0601 17.9995 10.0901C17.1852 9.41019 16.1438 9 15 9C14.6497 9 14.309 9.03848 13.9815 9.11138C13.9585 8.5586 13.914 8.01982 13.85 7.5ZM10.2627 13.5C10.2543 13.618 10.25 13.7371 10.25 13.8571C10.25 14.9467 10.6639 15.9925 11.3926 17.0013C11.2659 17.187 11.1358 17.3479 11.0041 17.4832C10.646 17.8511 10.3069 18 10 18C9.69311 18 9.35398 17.8511 8.99591 17.4832C8.6363 17.1139 8.28942 16.5533 7.98747 15.82C7.71458 15.1573 7.48643 14.3731 7.31842 13.5H10.2627ZM10.4386 12.5C10.8216 11.1545 11.7596 10.0412 12.9927 9.45263C12.9745 8.77427 12.9228 8.1202 12.8421 7.5H7.15793C7.0557 8.28549 7 9.1253 7 10C7 10.8747 7.0557 11.7145 7.15793 12.5H10.4386ZM2.80423 13.5C3.80285 15.5493 5.65107 17.1084 7.89053 17.719C7.57693 17.2928 7.30036 16.7778 7.06279 16.2008C6.74205 15.4219 6.48315 14.5074 6.3012 13.5H2.80423ZM6.14996 12.5H2.39838C2.13985 11.7135 2 10.8731 2 10C2 9.12694 2.13985 8.28655 2.39838 7.5H6.14996C6.0521 8.2949 6 9.13416 6 10C6 10.8658 6.0521 11.7051 6.14996 12.5ZM15 10C17.0711 10 18.75 11.7269 18.75 13.8571C18.75 15.4537 17.5668 17.127 15.25 18.9143C15.1019 19.0286 14.8981 19.0286 14.75 18.9143C12.4332 17.127 11.25 15.4537 11.25 13.8571C11.25 11.7269 12.9289 10 15 10ZM15 12.5714C14.3096 12.5714 13.75 13.1471 13.75 13.8571C13.75 14.5672 14.3096 15.1429 15 15.1429C15.6904 15.1429 16.25 14.5672 16.25 13.8571C16.25 13.1471 15.6904 12.5714 15 12.5714Z"></path>
  </svg>
);

const LayerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M10.5045 3.11661C10.1924 2.93379 9.80585 2.93379 9.49372 3.11661L3.48483 6.63608C2.82456 7.02281 2.82557 7.97759 3.48667 8.36292L9.49556 11.8652C9.80676 12.0466 10.1915 12.0466 10.5027 11.8652L16.5116 8.36292C17.1727 7.97759 17.1737 7.02281 16.5134 6.63608L10.5045 3.11661Z" />
    <path d="M3.07073 9.65002L9.50875 13.2724C9.81322 13.4438 10.185 13.4438 10.4895 13.2724L16.9275 9.65003C17.1145 10.0883 16.9757 10.6395 16.5116 10.91L10.5027 14.4123C10.1915 14.5937 9.80676 14.5937 9.49556 14.4123L3.48667 10.91C3.02254 10.6395 2.88376 10.0883 3.07073 9.65002Z" />
    <path d="M3.07073 12.103L9.50875 15.7254C9.81322 15.8967 10.185 15.8967 10.4895 15.7254L16.9275 12.103C17.1145 12.5413 16.9757 13.0924 16.5116 13.363L10.5027 16.8653C10.1915 17.0467 9.80676 17.0467 9.49556 16.8653L3.48667 13.363C3.02254 13.0924 2.88376 12.5412 3.07073 12.103Z" />
  </svg>
);

const FluentFilterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12.25 13.5C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H7.75C7.33579 15 7 14.6642 7 14.25C7 13.8358 7.33579 13.5 7.75 13.5H12.25ZM14.25 9.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25H14.25ZM16.25 5C16.6642 5 17 5.33579 17 5.75C17 6.16421 16.6642 6.5 16.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H16.25Z" />
  </svg>
);

export const registerCustomIcons = () => {
  registerIcons({
    icons: {
      Options: OptionIcon,
      GlobeLocation: GlobeLocationIcon,
      Layer: LayerIcon,
      FluentFilter: FluentFilterIcon,
    },
  });
};