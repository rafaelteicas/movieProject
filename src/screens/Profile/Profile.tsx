import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer'

const Profile = () => {
    const {user} = useUserReducer();
    console.log(user);
    
    return (
        <Background>
            <Text style={{color: 'white'}}>{user.email}</Text>
        </Background>
    )
}

export default Profile