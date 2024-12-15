import { View, TouchableOpacity, Text } from "react-native";
import { BookmarkIcon, Squares2X2Icon, ShareIcon, ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";

interface BottomNavBarProps {
    onGoBack: () => void;
    onGoForward: () => void;
    onBookmark: () => void;
    onTabs: () => void;
    onShare: () => void;
    canGoBack: boolean;
    canGoForward: boolean;
}

const BottomNavBar = ({
    onGoBack,
    onGoForward,
    onBookmark,
    onTabs,
    onShare,
    canGoBack,
    canGoForward,
}: BottomNavBarProps) => {

    return (
        <View className="flex-row justify-around items-center py-2 bg-grey-200">

            <TouchableOpacity onPress={onGoBack} disabled={!canGoBack}>
                <ArrowLeftIcon size={20} color={canGoBack ? "black" : "grey"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onGoForward} disabled={!canGoForward}>
                <ArrowRightIcon size={20} color={canGoForward ? "black" : "grey"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onBookmark}>
                <BookmarkIcon size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onTabs}>
                <Squares2X2Icon size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onShare}>
                <ShareIcon size={20} color="black" />
            </TouchableOpacity>
        
        </View>
    )
}

export default BottomNavBar