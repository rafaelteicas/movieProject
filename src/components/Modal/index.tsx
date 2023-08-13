import { View, Text, Dimensions } from 'react-native'
import React, { createRef, useState } from 'react'
import ActionSheet, { SheetManager, SheetProps, registerSheet } from 'react-native-actions-sheet'
import TicketReserve from '../TicketReserve'


const Modal = (props: SheetProps) => {
  const [data, setData] = useState();
  console.log(props);
  
  return (
    <ActionSheet id={props.sheetId}
    containerStyle={{
      height: Dimensions.get('screen').height * 0.3,
      padding: 20
     }} >
        <View>
            <TicketReserve />
        </View>
    </ActionSheet>
  )
}

registerSheet("mysheet", Modal);

export default Modal;