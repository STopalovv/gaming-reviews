import { createContext, useEffect, useState } from "react";
import netflifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    useEffect(() => {
        netflifyIdentity.on('login', (user) => {
            setUser(user)
            netflifyIdentity.close()
            console.log('Login event occured!');
        })

        netflifyIdentity.on('logout', () => {
            setUser(null)
            console.log('Logout event');
        })

        netflifyIdentity.on('init', (user) => {
            setUser(user)
            setAuthReady(true)
            console.log('Init event');
        })

        netflifyIdentity.init()

        return () => {
            netflifyIdentity.off('login')
            netflifyIdentity.off('logout')
        }
    }, [])

    const login = () => {
        netflifyIdentity.open()
    }

    const logout = () =>
        netflifyIdentity.logout()

    const context = { user, login, logout, authReady }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext