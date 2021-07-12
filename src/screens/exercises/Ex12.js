import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import getPost from '../../repository/repository';
import getRealm from '../../services/healm';

const Post = () => {
    const [loading, setLoading] = useState([]);
    const [postList, setPostList] = useState(false);

    const carregaPost = async () => {
        setLoading(true)
        const posts = await getPost()
        setPostList(posts)
        setLoading(false)
    }

    const savePost = async post => {
        const realm = await getRealm();
        try{
            realm.write(() => {
                realm.create('Post', {
                    id: post.id,
                    userId: post.userId,
                    title: post.title,
                    body: post.body
                }, 'modified')
            });
        } catch (e) {
            console.log(e);
        }
    }

    const deleteRealm = async () => {
        const realm = await getRealm();
        realm.write(() => {
            const realmPost = realm.objects('Post');
            realm.delete(realmPost);
        })
        
    }

    const getPostRealm = async () => {
        const realm = await getRealm();
        const realmPosts = await realm.objects('Post');
        const filter = realmPosts.filtered('id = 1');
        console.log(realmPosts);
    }

    const renderFooter = () => {
        if(!loading) return null
        return <ActivityIndicator size='large' color='#20c0df'/>
    }

    useEffect(() => {
        carregaPost();
        getPostRealm();
        //deleteRealm();
    }, [])

    return (
        <FlatList
            style={styles.container}
            data={postList}
            keyExtractor={item => item.id}
            ListFooterComponent={renderFooter}
            renderItem={({item}) => (
                <View
                    style={{
                        backgroundColor: 'lightgreen',
                        margin: 5,
                        padding: 20,
                        borderRadius: 12,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, textAlign: 'center', width: '80%'}}>
                        {item.title.toUpperCase()}
                    </Text>
            <TouchableOpacity onPress={() => savePost(item)}>
                <Icon name="save" size={32} />
            </TouchableOpacity>
        </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
});
export default Post