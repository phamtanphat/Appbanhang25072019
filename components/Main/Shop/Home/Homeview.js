import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import Topproduct from './Topproduct';

export default class Homeview extends PureComponent {
    render() {
        const categoryTypes = this.props.navigation.state.params.categoryTypes;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigation={this.props.navigation} categoryTypes={categoryTypes} />
                <Topproduct navigation={this.props.navigation} />

            </ScrollView>
        );
    }
}
