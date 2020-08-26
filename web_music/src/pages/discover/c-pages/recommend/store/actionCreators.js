import * as actionTypes from './constants';
// 引入自发送请求相关
import {getTopBanners,getHotRecommends} from 'services/recommend'

const changeTopBannerAction=(res)=>({
        // 获取数据存入对应的state中
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
const changeHotRecommendsAction=(res)=>({
    type:actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends:res.result
}
)

//请求数据action，在使用的组件中，通过mapDispatchToProps进行分发
export const getTopBannerAction=()=>{
    return dispatch=>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res))
        })
    }
}



export const getHotRecommendsAction=()=>{
    return dispatch=>{
        getHotRecommends().then(res=>{
            dispatch(changeHotRecommendsAction(res))
        })
    }
}