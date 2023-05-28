import AccountContext from "../AccountContext";

const AccountProvider = (props) => {
    return <AccountContext.Provider>
        {props.children}
    </AccountContext.Provider>
}

export default AccountProvider