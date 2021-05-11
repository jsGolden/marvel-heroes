import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function BackIcon(props: SvgProps) {
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
        d="M9.134 17.876a1.25 1.25 0 01-1.768 0l-5-5a1.25 1.25 0 010-1.767l5-5a1.25 1.25 0 011.768 1.767l-2.867 2.866H20.75a1.25 1.25 0 010 2.5H6.267l2.867 2.867a1.25 1.25 0 010 1.767z"
      />
    </Svg>
  )
}

export { BackIcon };
