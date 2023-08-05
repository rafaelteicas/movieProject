import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from '../../hooks'
import { UserType } from '../../../types/userType';
import { setUserAction } from '.';

export const useUserReducer = () => {
    const dispatch = useDispatch();

    const {user} = useAppSelector((state) => state.userReducer);

    const setUser = (currentUser: UserType) => {
        dispatch(setUserAction(currentUser))
    }

    return {
        user,
        setUser
    }
}