// @vendors
import { Helmet } from 'react-helmet'

// @components
import FormPost from "components/form-post";

export default function CreatePost() {
    return (
        <>
            <Helmet>
                <title>Crear post - REACT JAVA</title>
            </Helmet>
            <FormPost />
        </>
    )
}