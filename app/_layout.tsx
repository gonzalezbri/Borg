import { Stack } from "expo-router";
import 'react-native-reanimated';

const RootLayout = () => {
    return(
        <Stack screenOptions={{
            headerTitle: ' ', 
            headerStyle: { backgroundColor: '#A3CEF1' }, 
            }}>
            <Stack.Screen name="index" options={{
                headerTitle:'Home',
                headerShown:false,
            }}/>
            <Stack.Screen name="quiz/index" options={{
                headerTitle:'   ',
                headerStyle:{
                    backgroundColor:'#F0ede9'
                }
            }}/>
            <Stack.Screen name="quiz/at/index" options={{
                headerTitle:'      ',
                headerStyle:{
                    backgroundColor:'#FDBF60'
                }
            }}/>
            <Stack.Screen name="quiz/dt/index" options={{
                headerTitle:'      ',
                headerStyle:{
                    backgroundColor:'#FDBF60'
                }
            }}/>
            <Stack.Screen name="quiz/mdt/index" options={{
                headerTitle:'      ',
                headerStyle:{
                    backgroundColor:'#FDBF60'
                }
            }}/>
            <Stack.Screen name="quiz/mhq/index" options={{
                headerTitle:'      ',
                headerStyle:{
                    backgroundColor:'#FDBF60'
                }
            }}/>
            <Stack.Screen name="quiz/set/index" options={{
                headerTitle:'      ',
                headerStyle:{
                    backgroundColor:'#FDBF60'
                }
            }}/>
        </Stack>
    )
}

export default RootLayout;