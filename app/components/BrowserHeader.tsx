import { View, TextInput, TouchableOpacity } from 'react-native'
import { ArrowRightIcon, ArrowPathIcon } from "react-native-heroicons/outline";
import { useState, useEffect } from 'react'

interface BrowserHeaderProps {
    onGo: (url: string) => void;
    onReload: () => void;
}

const BrowserHeader = ({ onGo, onReload }: BrowserHeaderProps) => {

    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [isUrlChanged, setIsUrlChanged] = useState(false);

    // Track URL changes to toggle between Reload and Go icons
    useEffect(() => {
        setIsUrlChanged(true);
    }, [url]);

    const handlePress = () => {
        if (isUrlChanged) {
            onGo(url); // Trigger 'Go' if the URL has changed
        } else {
            onReload(); // Reload the page
        }
        setIsUrlChanged(false); // Reset to Reload state after Go
    };

    return (
        <View className='flex-row item-cent p-1 bg-gray-300 h-fit'>
            <TextInput
                placeholder='Enter URL'
                className='flex-1 p-2 border-gray-300 rounded-xl'
                value={url}
                onChangeText={setUrl}
                autoCapitalize='none'
            />

            <TouchableOpacity
                onPress={handlePress}
                className='bg-transparent p-2 rounded-xl ml-2'
            >
                {isUrlChanged ? 
                <ArrowRightIcon size={20} color="black"/> 
                :
                <ArrowPathIcon size={20} color="black"/>}

            </TouchableOpacity>

        </View>
    )
}

export default BrowserHeader