import { geometries } from "@/ui/theme/geometries";
import {
	type DimensionValue,
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

type ButtonGreenProps = TouchableOpacityProps & {
	title: string;
	width?: DimensionValue;
};

export function ButtonTint({ title, width, ...props }: ButtonGreenProps) {
	return (
		<TouchableOpacity {...props} style={[local.button, { width }]}>
			<Text style={{ color: "white", padding: 10 }}>{title}</Text>
		</TouchableOpacity>
	);
}
const local = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "purple",
		borderRadius: geometries.rounded.compact,
	},
});
