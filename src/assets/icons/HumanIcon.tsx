import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function HumanIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M12.937 2c-4.136 0-7.5 3.364-7.5 7.5v1.102L3.63 14.22a.627.627 0 00.559.905h1.25v3.01c0 .367.16.714.44.951.282.238.647.341 1.012.28l2.297-.38v2.389a.624.624 0 00.727.616l7.5-1.25a.624.624 0 00.523-.616v-3.851c0-.87.428-1.568.787-2.002A7.499 7.499 0 0020.437 9.5c0-4.136-3.363-7.5-7.5-7.5z"
      />
    </Svg>
  )
}

export { HumanIcon };
