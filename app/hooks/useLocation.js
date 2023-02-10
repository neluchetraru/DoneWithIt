import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

const useLocation = () => {
    const [location, setLocation] = useState()

    const getLocation = async() => {
        try {
            const { granted: grantedForeground} = await Location.requestForegroundPermissionsAsync()
            if (!grantedForeground) return
            const { granted: grantedBackground } = await Location.requestBackgroundPermissionsAsync()
            if (!grantedBackground) return
            const { coords: { latitude, longitude} } = await Location.getCurrentPositionAsync()
            setLocation({ latitude, longitude })
        } catch(error){
            console.log(error)
        }        
    }

    useEffect(() => {
        getLocation()
    },[])

    return location
}

export default useLocation