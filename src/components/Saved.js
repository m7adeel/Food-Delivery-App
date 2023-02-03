import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { SView,SText } from '../Provider/ComponentProvider';

const Saved = () => {
    return (
        <SView className='flex flex-row justify-center align-middle m-1'>
        <SView className='container h-28 bg-gray-300 rounded-lg p-2 flex-row' style={{width:'96%'}}>
            <Image source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'}} style={{width:'30%',height:'100%',borderRadius:4,marginRight:20}}/>
            <SText>Dynamite</SText>
        </SView>
        </SView>
    );
}

const styles = StyleSheet.create({})

export default Saved;
