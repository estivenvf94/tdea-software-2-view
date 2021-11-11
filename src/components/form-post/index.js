export default function FormPost() {
    function handleSubmit(e) {
        console.log({ e })
        e.preventDefault();
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form-title'>Crear Post</h2>
            <div className='form-item'>
                <label>
                    &gt; Asunto
                </label>
                <input type="text" name="name" />
            </div>
            <div className='form-item'>
                <label>
                    &gt; Mensaje
                </label>
                <input type="text" name="lastname" />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    )
}