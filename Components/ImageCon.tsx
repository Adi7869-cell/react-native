import React from 'react';
import  {Image, View, StyleSheet} from "react-native"
function ImageCon() {
    return (
        <>

        <View style={{ backgroundColor: "red" }}>
                  <Image style={styles.first}
                    source={require('../Assests/nature_combo.png')}
                    resizeMode="stretch"
                    capInsets={{ top: 1, left: 4, bottom: 500, right: 600 }}
                  />
                </View>
            <Image style={styles.tinyLogo}
                      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                      onLoad={() => console.log("image start loaded")}
                      blurRadius={2}
                      onLoadEnd={() => console.log("imaged end load")}
                      onError={() => console.log("imaged fail to load")}
                      // tintColor="pink"
                      onProgress={(event) => {
                        console.log(event)
                        const progress = event.nativeEvent.loaded / event.nativeEvent.total;
                        console.log(`Loading: ${progress * 100}%`);
                      }}
                    />
        </>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        height: 100,
        marginBottom: 30,
        width: 100,
        borderRadius: 40,
        resizeMode: 'cover',
      },
      first: {
        height: 90,
        width: 90,
      },
})

export default ImageCon;