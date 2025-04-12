import { ButtonTint } from "@/ui/components/buttons/ButtonTint";
import { BaseHeader } from "@/ui/components/headers/baseHeader";
import { geometries } from "@/ui/theme/geometries";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

function initNFC() {
	NfcManager.start().catch((err) => console.warn(err));
}

export default function Index() {
	const [tagInfo, setTagInfo] = useState<string>("Aproxime uma tag NFC...");

	useEffect(() => {
		initNFC();
	}, []);

	const lerTag = async () => {
		try {
			setTagInfo("Aguardando leitura...");
			await NfcManager.requestTechnology(NfcTech.Ndef);

			const tag = await NfcManager.getTag();
			const tagData = JSON.stringify(tag, null, 2);

			setTagInfo(tagData);
			console.log(tagData);
		} catch (ex) {
			console.warn("Erro ao ler tag:", ex);
			setTagInfo("Falha na leitura. Tente novamente.");
		} finally {
			NfcManager.cancelTechnologyRequest();
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<BaseHeader flexDirection="row">
				<Text>Teste</Text>
			</BaseHeader>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ButtonTint
					title="Teste"
					width={geometries.widths[50]}
					onPress={lerTag}
				/>
				<Text style={styles.text}>{tagInfo}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 14,
		color: "#333",
	},
});
