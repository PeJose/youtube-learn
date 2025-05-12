import { useRouter } from "expo-router";
import { Image, Linking, Pressable, Text, View } from "react-native";

export default function LoginScreen() {
	const router = useRouter();

	return (
		<View className='flex-1 bg-[#8A94A8] items-center justify-center px-6'>
			<Image
				source={require("../assets/images/logo.png")}
				className='w-72 h-30 mb-20'
				resizeMode='contain'
			/>

			<Image
				source={require("../assets/images/app-icon.png")}
				className='w-32 h-32 mb-20'
				resizeMode='contain'
			/>

			<Text className='text-lg text-white font-medium text-center mb-8'>
				Welcome to the best{"\n"}YouTube-based learning{"\n"}application.
			</Text>

			<Pressable
				onPress={() => router.push("/home")}
				className='bg-[#2C2F41] px-6 py-4 rounded-2xl w-full items-center mb-6'
			>
				<Text className='text-white text-base font-semibold'>
					Log in as guest
				</Text>
			</Pressable>

			<Text className='text-xs text-white text-center'>
				By continuing you agree with{" "}
				<Text
					className='underline'
					onPress={() => Linking.openURL("https://example.com/terms")}
				>
					Terms and Conditions
				</Text>{" "}
				and{" "}
				<Text
					className='underline'
					onPress={() => Linking.openURL("https://example.com/privacy")}
				>
					Privacy Policy
				</Text>
			</Text>
		</View>
	);
}
