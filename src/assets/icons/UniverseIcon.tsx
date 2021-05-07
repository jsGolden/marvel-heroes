import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function UniverseIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M19.257 2.483c-.8.39-1.813 1.03-2.946 1.86C13.02 2.482 8.668 2.895 5.778 5.785c-2.897 2.896-3.3 7.246-1.443 10.534-.828 1.131-1.467 2.143-1.855 2.942-.364.748-.778 1.814-.171 2.421.517.518 1.35.31 2.023.032 1.093-.45 2.408-1.351 3.354-2.05 3.25 1.829 7.601 1.468 10.52-1.45 2.896-2.896 3.294-7.243 1.45-10.52.18-.242.351-.48.514-.713.732-1.048 1.251-1.939 1.544-2.648.144-.35.582-1.412-.031-2.025-.608-.607-1.676-.19-2.426.175zm-7.111 1.905c.504.01 1 .069 1.483.174l-1.95 1.951a6.544 6.544 0 00-1.93 4.658A5.38 5.38 0 018.163 15l-1.955 1.955a7.538 7.538 0 01-1.654-3.318l1.57-1.57a11.981 11.981 0 002.25-3.12 10.81 10.81 0 012.028-2.815l1.744-1.744zM8.99 15.828a6.544 6.544 0 001.93-4.657 5.38 5.38 0 011.586-3.83l2.386-2.386a7.681 7.681 0 013.34 2.677c-1.352 1.749-3.092 3.704-4.998 5.61-1.908 1.907-3.862 3.647-5.61 4.999a7.616 7.616 0 01-.589-.458l1.955-1.955zM6.606 6.614a7.554 7.554 0 013.699-2.042l-.732.731a11.981 11.981 0 00-2.248 3.12 10.813 10.813 0 01-2.029 2.815l-.915.915a7.565 7.565 0 012.225-5.54zm.034 12.362c-2.33 1.676-3.223 1.846-3.47 1.852.012-.333.361-1.368 1.858-3.467a8.899 8.899 0 001.616 1.612l-.004.003zm10.738-1.591a7.565 7.565 0 01-5.54 2.225l1.299-1.299a4.987 4.987 0 011.94-1.199 6.168 6.168 0 002.398-1.482l1.944-1.943a7.554 7.554 0 01-2.041 3.698zm2.225-5.54l-2.956 2.956a4.989 4.989 0 01-1.94 1.2c-.9.3-1.729.812-2.399 1.482l-1.954 1.954a7.53 7.53 0 01-1.64-.56c1.686-1.333 3.53-2.988 5.35-4.806 1.817-1.818 3.472-3.663 4.806-5.35.46.966.711 2.025.733 3.124zm-.63-5.201c-.003.002-.005.005-.006.008a8.903 8.903 0 00-1.614-1.617c2.103-1.5 3.14-1.851 3.475-1.865-.007.249-.179 1.144-1.856 3.474z"
      />
      <Path
        d="M14.478 10.342a1.171 1.171 0 10-1.656-1.657 1.171 1.171 0 001.656 1.657z"
      />
    </Svg>
  )
}

export default UniverseIcon
