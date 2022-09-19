import React, { createContext, FC, useContext } from "react";

interface AppProviderProps {
    children: React.ReactNode
}

interface ContextInterface {
    user: UserInterface,
    setuser(add: UserInterface): void
}

export interface UserInterface {
    tipoDocumento: string,
    numDocumento: string,
    celular: string,
    placa: string,
}

const initalState = {
    tipoDocumento: "",
    numDocumento: "",
    celular: "",
    placa: "",
}

const initialContextValue = {
    user: initalState,
    setuser: () => { }
}



const AppUserContext = createContext<ContextInterface>(initialContextValue);

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    const [user, setuser] = React.useState<UserInterface>(initalState)

    const value = {
        user, setuser
    }
    return (
        <AppUserContext.Provider value={value}>
            {children}
        </AppUserContext.Provider>
    )
}

const useAppUserState = (): ContextInterface => {
    const context = useContext(AppUserContext)
    if (!context) {
        return { setuser: () => { }, user: initalState }
    }
    return context
}

export { AppProvider, useAppUserState }
