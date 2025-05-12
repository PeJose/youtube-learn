import CategorySection from "@/components/CategorySection";
import { ScrollView } from "react-native";

export default function HomeScreen() {
	const categories = ["React native", "React", "TypeScript", "JavaScript"];

	return (
		<ScrollView className='flex-1 bg-white px-4 pt-10'>
			{categories.map((category) => (
				<CategorySection key={category} category={category} />
			))}
		</ScrollView>
	);
}
