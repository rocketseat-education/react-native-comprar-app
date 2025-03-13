import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  status: FilterStatus
  isActive: boolean
}

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]} 
      activeOpacity={0.8}
      {...rest} 
      >
      <Text style={styles.title}>
        { status === FilterStatus.DONE ? "Comprados" : "Pendentes" }
      </Text>
    </TouchableOpacity>
  )
}