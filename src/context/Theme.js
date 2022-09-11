import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  addSavedVideos: () => {},
  changeTheme: () => {},
})

export default AppTheme
