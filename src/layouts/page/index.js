// @styles
import './styles.scss'

export default function Page({ children }) {
    return(
        <div className='container'>
            {children}
        </div>
    )
}