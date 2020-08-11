import React, { memo } from 'react'

import {NavLink} from 'react-router-dom'
import {HeaderWrapper} from './style.js'

export default memo(function JKAppFooter() {
  return (
    <HeaderWrapper>
    <div>JKAppFooter</div>
    <NavLink to="/">发现音乐</NavLink>
    <NavLink to="/mine">我的</NavLink>
    <NavLink to="/friend">我的好友</NavLink>
    </HeaderWrapper>
  )
})
