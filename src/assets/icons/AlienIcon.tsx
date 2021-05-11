import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function AlienIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c-4.825 0-8.75 3.925-8.75 8.75C3.25 15.28 6.924 22 12 22c5.076 0 8.75-6.72 8.75-11.25C20.75 5.925 16.824 2 12 2zm6.244 6.786a.623.623 0 00-.706-.53 5.05 5.05 0 00-4.282 5.707.626.626 0 00.707.53 5.01 5.01 0 003.322-1.967 5.01 5.01 0 00.959-3.74zm-12.488 0a.63.63 0 01.708-.53 5.01 5.01 0 013.321 1.966 5.014 5.014 0 01.959 3.74.626.626 0 01-.707.532 5.015 5.015 0 01-3.322-1.968 5.012 5.012 0 01-.959-3.74z"
      />
    </Svg>
  )
}

export { AlienIcon };
