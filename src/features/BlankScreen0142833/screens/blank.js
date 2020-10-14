import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/cb-login-logo_cwOV1HV.png"
        }}
        style={styles.Image_3}
      />
      <View style={styles.View_7}>
        <View style={styles.View_8}>
          <Button
            title="Press me!"
            color="#3366FF"
            style={styles.Button_11}
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View style={styles.View_9}>
          <Text style={styles.Text_17}>
            This is some text that in ve canvas turns into a row, expected is a
            column
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
