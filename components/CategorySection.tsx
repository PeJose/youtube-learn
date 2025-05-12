import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function CategorySection({ category }: { category: string }) {
	const router = useRouter();

	const { data } = useQuery({
		queryKey: ["videos", category],
		queryFn: () => ["fetchVideosByQuery(category)"],
	});

	return (
		<View className='mb-8'>
			<View className='flex-row justify-between items-center mb-2'>
				<Text className='text-xl font-bold'>{category}</Text>
				<Pressable
					onPress={() =>
						router.push({ pathname: "/search", params: { q: category } })
					}
				>
					<Text className='text-sm text-blue-500'>Show more</Text>
				</Pressable>
			</View>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{data?.map((item: any) => (
					<View key={item.id.videoId} className='w-40 mr-4'>
						<Image
							source={{ uri: item.snippet.thumbnails.medium.url }}
							className='h-24 rounded-lg'
						/>
						<Text className='text-xs mt-1'>{item.snippet.title}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
