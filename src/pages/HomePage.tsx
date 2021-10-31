import React from 'react'
import PostContent from '../components/content/PostContent';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loadPosts } from '../redux/home/home.slice';
import useToast from '../components/toast/useToast';
import ScrollLoad from '../components/common/ScrollLoad';

interface Props {

}

const HomePage = (props: Props) => {
    const dispatch = useAppDispatch()
    const {showError} = useToast()

    const state = useAppSelector(state => {
        return state.home
    })
    const posts = state.posts.map(function(item) {
        return <PostContent key={item.id} postView={item} avatarSize="large"></PostContent>
    })
    
    React.useEffect(()=> {
        if(state.error){
            showError(state.error)
        }
    }, [state])

    const handleLoad = () => {        
        dispatch(loadPosts())
    }

    return (        
        <React.Fragment>
            {posts}
            <ScrollLoad stopLoad={state.isAll} loadData={handleLoad}></ScrollLoad>
        </React.Fragment>
    )
}

export default HomePage