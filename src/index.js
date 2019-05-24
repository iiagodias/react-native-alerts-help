import React, {Component} from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Alerts extends Component {

  render() {
    return (
        <Modal visible={this.props.visible} onRequestClose={this.props.onClose} transparent>
            <View style={styles.contain}>
                <View style={styles.boxBody}>
                    <View style={styles.title}>
                        <Icon name={this.props.icon} size={18} color={this.props.color} />
                        <Text style={styles.textTitle}>{this.props.title}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.textDescription}>{this.props.text}</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.onPress} style={[styles.bntClose, {backgroundColor: this.props.color}]} activeOpacity={0.7}>
                        <Text style={styles.textBnt}>{this.props.textButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
  }
}

