import { createContext } from "react"

function foo() {}

export const AuthContext = createContext({
    token: null,
    login: foo,
    logout: foo,
    isAuthenticated: false
})