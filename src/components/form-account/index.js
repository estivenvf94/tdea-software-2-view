export default function FormAccount() {
    function handleSubmit(e) {
        console.log({ e })
        e.preventDefault();
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form-title'>Crear Cuenta</h2>
            <div className='form-item'>
                <label>
                    &gt; Nombre
                </label>
                <input type="text" name="name" />
            </div>
            <div className='form-item'>
                <label>
                    &gt; Apellidos
                </label>
                <input type="text" name="lastname" />
            </div>
            <div className='form-item'>
                <label>
                    &gt; Contraseña
                </label>
                <input type="password" name="password" />
            </div>
            <input type="submit" value="Crear" />
        </form>
    )
}