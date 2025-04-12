import { geometries } from "@/ui/theme/geometries";
import { StyleSheet, View } from "react-native";

export type BaseHeaderProps = {
	children: React.ReactNode;
	flexDirection: "row" | "column";
};

export function BaseHeader({ children, flexDirection }: BaseHeaderProps) {
	return <View style={[local.container, { flexDirection }]}>{children}</View>;
}

const local = StyleSheet.create({
	container: {
		top: 0,
		height: geometries.heights[15],
		width: geometries.widths[100],
		paddingHorizontal: geometries.spacing.immense,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "purple",
		borderBottomLeftRadius: geometries.rounded.medium,
		borderBottomRightRadius: geometries.rounded.medium,
	},
});
