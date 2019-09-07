import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import Topproduct from './Topproduct';

export default class Homeview extends PureComponent {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category />
                <Topproduct />

            </ScrollView>
        );
    }
}
