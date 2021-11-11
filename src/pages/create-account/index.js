// @vendors
import { Helmet } from 'react-helmet'

// @Ccomponents
import FormAccount from "components/form-account";

export default function CreateAccount() {
    return (
        <>
            <Helmet>
                <title>Crear cuenta - REACT JAVA</title>
            </Helmet>
            <FormAccount />
        </>
    )
}